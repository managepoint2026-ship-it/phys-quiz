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
