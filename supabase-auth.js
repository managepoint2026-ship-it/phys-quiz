// ============================================================
// supabase-auth.js — Supabase 認証 & データ同期
// ============================================================
// IIFE で囲み、グローバル変数の衝突を防ぐ
// ============================================================
(function() {
    'use strict';

    // --- Supabase 初期化 ---
    var SUPABASE_URL = 'https://jbhjccpsxnvoehpetxux.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiaGpjY3BzeG52b2VocGV0eHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NDUwOTQsImV4cCI6MjA4OTAyMTA5NH0.eL_Gyl3hWQMUpulu1wckcxXJ97kDPy2gxDqQZ2jUF_g';

    // SDK 読み込み確認
    if (!window.supabase || !window.supabase.createClient) {
        console.error('Supabase SDK が読み込まれていません！');
        alert('エラー: Supabase SDK の読み込みに失敗しました。インターネット接続を確認してください。');
        return;
    }

    var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase client 初期化完了');

    // 現在のログインユーザー（null = 未ログイン）
    var currentUser = null;

    // --- Google ログイン（window に公開） ---
    window.signInWithGoogle = async function() {
        var btn = document.getElementById('google-login-btn');
        if (btn) {
            btn.disabled = true;
            btn.textContent = 'ログイン中...';
        }

        try {
            console.log('signInWithGoogle 呼び出し開始');
            console.log('redirectTo:', window.location.origin + window.location.pathname);

            var result = await sb.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin + window.location.pathname
                }
            });

            console.log('OAuth result - data:', result.data);
            console.log('OAuth result - error:', result.error);

            if (result.error) {
                console.error('ログインエラー:', result.error.message);
                alert('ログインに失敗しました: ' + result.error.message);
                resetLoginBtn(btn);
            }
            // OAuth はリダイレクトするため、成功時はページ遷移する
        } catch (e) {
            console.error('ログイン例外:', e);
            alert('ログインに失敗しました');
            resetLoginBtn(btn);
        }
    };

    function resetLoginBtn(btn) {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" class="google-icon">Googleアカウントでログイン';
        }
    }

    // --- ログアウト（window に公開） ---
    window.signOutUser = async function() {
        try {
            console.log('ログアウト処理開始');
            await sb.auth.signOut();
            currentUser = null;
            console.log('ログアウト完了 → ページリロード');
            window.location.reload();
        } catch (e) {
            console.error('ログアウトエラー:', e);
            // エラーが出ても強制的にリロード
            window.location.reload();
        }
    };

    // --- 画面切替 ---
    function showLoginView() {
        var loginView = document.getElementById('login-view');
        var appContainer = document.getElementById('app-container');
        if (loginView) loginView.classList.remove('hidden');
        if (appContainer) appContainer.classList.add('hidden');
    }

    function showAppView() {
        var loginView = document.getElementById('login-view');
        var appContainer = document.getElementById('app-container');
        if (loginView) loginView.classList.add('hidden');
        if (appContainer) appContainer.classList.remove('hidden');
    }

    // --- ユーザー名表示更新 ---
    function updateUserDisplay(user) {
        var nameEl = document.getElementById('user-name-display');
        if (nameEl && user) {
            var name = (user.user_metadata && user.user_metadata.full_name) || user.email || 'ユーザー';
            nameEl.textContent = name;
        }
    }

    // --- Supabase からデータをダウンロード → localStorage に反映 ---
    async function downloadStatsFromSupabase(userId) {
        try {
            var result = await sb
                .from('user_stats')
                .select('stats')
                .eq('user_id', userId)
                .single();

            if (result.error) {
                if (result.error.code === 'PGRST116') {
                    console.log('初回ログイン: サーバーにデータなし');
                    var localStats = JSON.parse(localStorage.getItem('phy_quiz_user_stats') || 'null');
                    if (localStats && localStats.totalPoints > 0) {
                        console.log('ローカルデータをサーバーにアップロード');
                        await uploadStatsToSupabase(userId, localStats);
                    }
                    return;
                }
                console.error('データ取得エラー:', result.error);
                return;
            }

            if (result.data && result.data.stats) {
                var serverStats = result.data.stats;
                var localStats = JSON.parse(localStorage.getItem('phy_quiz_user_stats') || '{"totalPoints": 0, "partPoints": {}}');

                var serverPartSum = Object.values(serverStats.partPoints || {}).reduce(function(a, b) { return a + b; }, 0);
                var localPartSum = Object.values(localStats.partPoints || {}).reduce(function(a, b) { return a + b; }, 0);

                if (serverPartSum >= localPartSum) {
                    localStorage.setItem('phy_quiz_user_stats', JSON.stringify(serverStats));
                    console.log('サーバーデータを反映しました');
                } else {
                    console.log('ローカルデータの方が新しい → サーバーにアップロード');
                    await uploadStatsToSupabase(userId, localStats);
                }
            }
        } catch (e) {
            console.error('データ同期エラー:', e);
        }
    }

    // --- localStorage のデータを Supabase にアップロード ---
    async function uploadStatsToSupabase(userId, stats) {
        try {
            var result = await sb
                .from('user_stats')
                .upsert({
                    user_id: userId,
                    stats: stats,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: 'user_id'
                });

            if (result.error) {
                console.error('データアップロードエラー:', result.error);
            } else {
                console.log('サーバーにデータを保存しました');
            }
        } catch (e) {
            console.error('アップロード例外:', e);
        }
    }

    // ============================================================
    // 学習データ同期（user_learning_data テーブル: 1ユーザー1行）
    //   wrong:    間違えた問題（間隔反復データ）
    //   quiz_log: 日別学習ログ（直近120日）
    //   trivia:   トリビアカード所持ID
    //   badges:   バッジ所持ID
    // テーブル作成 SQL は docs/setup_phase1.sql を参照
    // ============================================================

    var LOG_KEEP_DAYS = 120;

    function readLocal(key, fallback) {
        try {
            return JSON.parse(localStorage.getItem(key) || fallback);
        } catch (e) {
            return JSON.parse(fallback);
        }
    }

    // 旧形式（ID配列）の復習データを新形式（間隔反復オブジェクト）へ変換
    function migrateWrong(wrong) {
        var result = {};
        var d = new Date();
        var today = d.getFullYear() + '-' +
            String(d.getMonth() + 1).padStart(2, '0') + '-' +
            String(d.getDate()).padStart(2, '0');
        Object.keys(wrong || {}).forEach(function(partId) {
            var v = wrong[partId];
            if (Array.isArray(v)) {
                result[partId] = {};
                v.forEach(function(id) {
                    result[partId][String(id)] = { next: today, streak: 0, last: null };
                });
            } else if (v && typeof v === 'object') {
                result[partId] = v;
            }
        });
        return result;
    }

    // 古いログを 120 日分に間引く
    function pruneLog(log) {
        var keys = Object.keys(log || {}).sort();
        while (keys.length > LOG_KEEP_DAYS) {
            delete log[keys.shift()];
        }
        return log || {};
    }

    // サーバーとローカルのマージ（消える方向ではなく残る方向に倒す）
    function mergeLearningData(server, local) {
        // 復習データ: 問題ごとに「更新日が新しい方」を採用（同日なら streak が大きい方）
        var sw = migrateWrong(server.wrong || {});
        var lw = migrateWrong(local.wrong || {});
        var wrong = {};
        var parts = {};
        Object.keys(sw).forEach(function(p) { parts[p] = true; });
        Object.keys(lw).forEach(function(p) { parts[p] = true; });
        Object.keys(parts).forEach(function(p) {
            wrong[p] = {};
            var ids = {};
            Object.keys(sw[p] || {}).forEach(function(id) { ids[id] = true; });
            Object.keys(lw[p] || {}).forEach(function(id) { ids[id] = true; });
            Object.keys(ids).forEach(function(id) {
                var a = (sw[p] || {})[id];
                var b = (lw[p] || {})[id];
                if (a && b) {
                    var la = String(a.last || '');
                    var lb = String(b.last || '');
                    if (la === lb) {
                        wrong[p][id] = (a.streak || 0) >= (b.streak || 0) ? a : b;
                    } else {
                        wrong[p][id] = la > lb ? a : b;
                    }
                } else {
                    wrong[p][id] = a || b;
                }
            });
        });

        // 学習ログ: 日付キーごとに各値の大きい方（二重計上を避けつつ消さない）
        var slog = server.quiz_log || {};
        var llog = local.quiz_log || {};
        var log = {};
        var dayKeys = {};
        Object.keys(slog).forEach(function(k) { dayKeys[k] = true; });
        Object.keys(llog).forEach(function(k) { dayKeys[k] = true; });
        Object.keys(dayKeys).forEach(function(k) {
            var a = slog[k] || {};
            var b = llog[k] || {};
            log[k] = {
                n: Math.max(a.n || 0, b.n || 0),
                c: Math.max(a.c || 0, b.c || 0),
                t: Math.max(a.t || 0, b.t || 0),
                p: Math.max(a.p || 0, b.p || 0)
            };
        });

        // トリビア・バッジ: 和集合（獲得したものは消えない）
        function union(a, b) {
            var set = {};
            (a || []).forEach(function(x) { set[x] = true; });
            (b || []).forEach(function(x) { set[x] = true; });
            return Object.keys(set);
        }

        return {
            wrong: wrong,
            quiz_log: pruneLog(log),
            trivia: union(server.trivia, local.trivia),
            badges: union(server.badges, local.badges)
        };
    }

    function collectLocalLearningData() {
        return {
            wrong: migrateWrong(readLocal('phy_quiz_wrong', '{}')),
            quiz_log: pruneLog(readLocal('phy_quiz_log', '{}')),
            trivia: readLocal('phy_quiz_trivia', '[]'),
            badges: readLocal('phy_quiz_badges', '[]')
        };
    }

    function writeLearningDataToLocal(data) {
        localStorage.setItem('phy_quiz_wrong', JSON.stringify(data.wrong || {}));
        localStorage.setItem('phy_quiz_log', JSON.stringify(data.quiz_log || {}));
        localStorage.setItem('phy_quiz_trivia', JSON.stringify(data.trivia || []));
        localStorage.setItem('phy_quiz_badges', JSON.stringify(data.badges || []));
    }

    async function uploadLearningDataToSupabase(userId, data) {
        var result = await sb
            .from('user_learning_data')
            .upsert({
                user_id: userId,
                wrong: data.wrong,
                quiz_log: data.quiz_log,
                trivia: data.trivia,
                badges: data.badges,
                updated_at: new Date().toISOString()
            }, { onConflict: 'user_id' });
        if (result.error) {
            console.warn('学習データのアップロード失敗:', result.error.message);
            return false;
        }
        return true;
    }

    // ログイン時: サーバーからダウンロード → マージ → ローカル反映 → マージ結果を書き戻し
    async function downloadLearningData(userId) {
        try {
            var result = await sb
                .from('user_learning_data')
                .select('wrong, quiz_log, trivia, badges')
                .eq('user_id', userId)
                .single();

            var local = collectLocalLearningData();

            if (result.error) {
                if (result.error.code === 'PGRST116') {
                    // サーバーに行がない（初回）→ ローカルデータを移行
                    console.log('学習データ初回同期: ローカルデータをアップロード');
                    await uploadLearningDataToSupabase(userId, local);
                } else {
                    // テーブル未作成等。アプリはローカルのみで動作継続
                    console.warn('学習データ取得失敗（ローカルのみで動作）:', result.error.message);
                }
                return;
            }

            var merged = mergeLearningData(result.data || {}, local);
            writeLearningDataToLocal(merged);
            await uploadLearningDataToSupabase(userId, merged);
            console.log('学習データ同期完了');

            // トップ画面の表示を最新化
            if (typeof updateReviewBadge === 'function') updateReviewBadge();
            if (typeof updateStreakBanner === 'function') updateStreakBanner();
            if (typeof updateTriviaCountBadge === 'function') updateTriviaCountBadge();
            if (typeof updateBadgeCountBadge === 'function') updateBadgeCountBadge();
        } catch (e) {
            console.warn('学習データ同期エラー（ローカルのみで動作）:', e);
        }
    }

    // クイズ終了時に script.js から呼ばれる（未ログイン時は何もしない）
    window.uploadLearningData = function() {
        if (!currentUser) return;
        uploadLearningDataToSupabase(currentUser.id, collectLocalLearningData())
            .catch(function(e) { console.warn('学習データ同期失敗:', e); });
    };

    // リセットボタン用: サーバー上のデータを削除（成功で true）
    window.resetServerData = async function() {
        if (!currentUser) return true; // 未ログインならサーバー削除は不要
        try {
            var r1 = await sb.from('user_stats').delete().eq('user_id', currentUser.id);
            var r2 = await sb.from('user_learning_data').delete().eq('user_id', currentUser.id);
            if (r1.error) {
                console.error('user_stats 削除失敗:', r1.error.message);
                return false;
            }
            // user_learning_data はテーブル未作成（42P01）なら無視してよい
            if (r2.error && r2.error.code !== '42P01') {
                console.error('user_learning_data 削除失敗:', r2.error.message);
                return false;
            }
            return true;
        } catch (e) {
            console.error('サーバーデータ削除エラー:', e);
            return false;
        }
    };

    // --- saveUserStats のフック ---
    function hookSaveUserStats() {
        var originalSave = window.saveUserStats;
        if (!originalSave) return;

        window.saveUserStats = function(stats) {
            originalSave(stats);
            if (currentUser) {
                uploadStatsToSupabase(currentUser.id, stats).catch(function(e) {
                    console.warn('バックグラウンド同期失敗:', e);
                });
            }
        };
    }

    // --- 認証状態の監視 & 初期化 ---
    async function initAuth() {
        var sessionResult = await sb.auth.getSession();
        var session = sessionResult.data && sessionResult.data.session;

        if (session && session.user) {
            currentUser = session.user;
            updateUserDisplay(currentUser);
            await downloadStatsFromSupabase(currentUser.id);
            await downloadLearningData(currentUser.id);
            showAppView();
        } else {
            showLoginView();
        }

        // 認証状態の変化を監視
        sb.auth.onAuthStateChange(async function(event, session) {
            console.log('Auth event:', event);

            if (event === 'SIGNED_IN' && session && session.user) {
                currentUser = session.user;
                updateUserDisplay(currentUser);
                await downloadStatsFromSupabase(currentUser.id);
                await downloadLearningData(currentUser.id);
                showAppView();

                if (typeof setupTopView === 'function') {
                    setupTopView();
                }
                if (typeof scaleLayout === 'function') {
                    setTimeout(scaleLayout, 100);
                }
            } else if (event === 'SIGNED_OUT') {
                currentUser = null;
                showLoginView();
            }
        });
    }

    // ページ読み込み時に認証を初期化
    document.addEventListener('DOMContentLoaded', function() {
        initAuth();

        // script.js のロード完了後にフックを設定
        setTimeout(function() {
            if (typeof window.saveUserStats === 'function') {
                hookSaveUserStats();
                console.log('saveUserStats フック設定完了');
            }
        }, 200);
    });

})();
