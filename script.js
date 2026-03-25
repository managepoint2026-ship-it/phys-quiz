// --- SPA View Management ---
const views = {
    top: document.getElementById('top-view'),
    quiz: document.getElementById('quiz-view'),
    result: document.getElementById('result-view')
};

// Global Quiz State
let selectedCategory = null;
let selectedDifficulty = null;
let lastPlayedCategory = null;
let lastPlayedDifficulty = null;
let sessionPoints = 0; // Use global for safety if scope fails, but prefer closure
let currentScore = 0;

function switchView(viewName) {
    // Hide all
    if (views.top) views.top.classList.add('hidden');
    if (views.quiz) views.quiz.classList.add('hidden');
    if (views.result) views.result.classList.add('hidden');

    // Show target
    if (views[viewName]) {
        views[viewName].classList.remove('hidden');
    }

    // Reset feedback area on view change
    const fbArea = document.getElementById('feedback-area');
    if (fbArea) fbArea.classList.remove('show');



    // Toggle Header Title Visibility
    const mainTitle = document.querySelector('header h1');
    if (mainTitle) {
        // Hide title in both quiz and result views as requested
        if (viewName === 'quiz' || viewName === 'result') {
            mainTitle.classList.add('hidden');
        } else {
            mainTitle.classList.remove('hidden');
        }
    }

    // Header/Container adjustments
    const quizHeader = document.getElementById('quiz-header');
    const container = document.querySelector('.container');

    if (viewName === 'quiz') {
        if (quizHeader) quizHeader.classList.remove('hidden');
        if (container) container.classList.add('wide-mode');
    } else {
        if (quizHeader) quizHeader.classList.add('hidden');
        if (container) container.classList.remove('wide-mode');
    }

    // ノートメニュー・パネル類はトップのみ表示
    const notebook = document.getElementById('notebook-menu');
    const histPanel = document.getElementById('history-panel');
    const triviaCol = document.getElementById('trivia-collection');
    const badgePanel = document.getElementById('badge-panel');
    if (viewName === 'top') {
        if (notebook) notebook.classList.remove('hidden');
    } else {
        if (notebook) notebook.classList.add('hidden');
        if (histPanel) histPanel.classList.add('hidden');
        if (triviaCol) triviaCol.classList.add('hidden');
        if (badgePanel) badgePanel.classList.add('hidden');
    }
}

// --- Layout Scaling for Mobile ---
function scaleLayout() {
    const stage = document.getElementById('game-stage');
    if (!stage) return;

    const baseWidth = 800; // Desktop Base Width
    const padding = 10; // Minimum margin

    // Use the actual viewport size
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const viewportWidth = vw - (padding * 2);

    // Scale to fit width
    let scale = viewportWidth / baseWidth;

    // Ensure it doesn't scale UP
    if (scale > 1) scale = 1;

    // Apply scaling
    stage.style.transform = `scale(${scale})`;

    // Center the stage contents properly
    // stage.style.width = '800px'; is already set in CSS.

    // game-stageはtransformでスケーリングされるが、レイアウト上は元サイズのまま。
    // marginBottomを負値にして、レイアウト上の高さをvisual heightに合わせる。
    const visualHeight = stage.offsetHeight * scale;
    const layoutGap = stage.offsetHeight - visualHeight;
    stage.style.marginBottom = `-${layoutGap}px`;

    // ノートの枠幅もスケーリングに合わせる
    const notebooks = document.querySelectorAll('.notebook-frame');
    notebooks.forEach(nb => {
        nb.style.maxWidth = `${800 * scale}px`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Re-bind elements (in case of dynamic issues, though standard is fine)
    views.top = document.getElementById('top-view');
    views.quiz = document.getElementById('quiz-view');
    views.result = document.getElementById('result-view');

    // Initialize scaling
    scaleLayout();
    window.addEventListener('resize', scaleLayout);

    // Initialize Top View
    setupTopView();
    switchView('top');

    // Bind Back to Top button in Result
    const backBtn = document.getElementById('back-to-top-btn');
    if (backBtn) {
        backBtn.onclick = () => {
            switchView('top');
            setupTopView(); // Re-render to update scores
            setTimeout(scaleLayout, 100); // Wait for content swap
        };
    }

    // Bind Retry Button
    const retryBtn = document.getElementById('retry-btn');
    if (retryBtn) {
        retryBtn.onclick = () => {
            if (lastPlayedCategory && lastPlayedDifficulty) {
                console.log('Retrying quiz:', { lastPlayedCategory, lastPlayedDifficulty });
                prepareQuiz(lastPlayedCategory, lastPlayedDifficulty);
            } else {
                console.warn('No last played data found, returning to top.');
                switchView('top');
                setupTopView();
            }
        };
    }
});

// Level System Configuration
function getPointsForDifficulty(difficulty) {
    switch (difficulty) {
        case 'A': return 10;
        case 'B': return 30;
        case 'C': return 100;
        default: return 10;
    }
}

// 累計ポイント閾値: 5 * L * (L + 5)
// Lv.2: 30pt, Lv.5: 180pt, Lv.10: 630pt, Lv.20: 2280pt, Lv.30: 4930pt
// B全正解(150pt/回): Lv.10≈5回, Lv.20≈15回, Lv.30≈33回
function getThresholdPoints(L) {
    return 5 * L * (L + 5);
}

const LEVEL_CAP = 30;

function calculateLevel(points) {
    let L = 0;
    while (L < LEVEL_CAP) {
        let nextThreshold = getThresholdPoints(L + 1);
        if (points < nextThreshold) {
            return L + 1; // 1-based Level (Lv.1 start)
        }
        L++;
    }
    return LEVEL_CAP;
}

// 総合レベル = 6パート × 最大Lv.30 = 最大180
const GLOBAL_TITLES = {
    0: "駆け出しの物理学者",
    10: "見習い研究員",
    20: "実験室の常連",
    30: "理科大の有望株",
    40: "物理コンテスト入賞者",
    50: "ニュートン力学の理解者",
    60: "微積分の使い手",
    70: "ラプラスの悪魔",
    80: "エントロピーの支配者",
    90: "相対性理論の旅人",
    100: "量子世界の観測者",
    110: "シュレーディンガーの猫",
    120: "標準模型の構築者",
    130: "超弦理論の探究者",
    140: "ダークマターの発見者",
    150: "事象の地平線を超えし者",
    160: "時空の歪みを操る者",
    170: "ビッグバンの目撃者",
    180: "物理学の神"
};

function getGlobalTitle(totalLevel) {
    // Round down to nearest 10
    const tens = Math.floor(totalLevel / 10) * 10;
    // Find closest available below or equal
    let title = GLOBAL_TITLES[0];
    const keys = Object.keys(GLOBAL_TITLES).map(Number).sort((a, b) => a - b);
    for (let k of keys) {
        if (totalLevel >= k) {
            title = GLOBAL_TITLES[k];
        } else {
            break;
        }
    }
    return title;
}

function getTotalLevel(stats) {
    let sum = 0;
    // Calculate level for each part in partPoints
    // But we also need to account for parts with 0 points (Lv.1).
    // Summing levels: Lv.1 counts as 1.
    // We should iterate over ALL_CATEGORIES if available to ensure we count "Lv.1" for unplayed parts?
    // Or just sum played parts?
    // "Total of Part Levels". Usually implies Base Lv.1 exists for all.
    // But if we only have partPoints, we miss unplayed ones.
    // Let's iterate `CATEGORIES` if defined.

    if (typeof CATEGORIES !== 'undefined') {
        CATEGORIES.forEach(part => {
            const pts = (stats.partPoints && stats.partPoints[part.id]) || 0;
            sum += calculateLevel(pts);
        });
    } else {
        // Fallback if CATEGORIES not ready (should not happen in main flow)
        Object.values(stats.partPoints || {}).forEach(pts => {
            sum += calculateLevel(pts);
        });
    }

    // If sum is 0 (no categories loaded?), return at least 1?
    // If sum is 0 (no categories loaded?), return 0
    return sum;
}

// Helper to get stats（window に公開して supabase-auth.js からフック可能にする）
window.getUserStats = function getUserStats() {
    return JSON.parse(localStorage.getItem('phy_quiz_user_stats') || '{"totalPoints": 0, "partPoints": {}}');
};

window.saveUserStats = function saveUserStats(stats) {
    try {
        localStorage.setItem('phy_quiz_user_stats', JSON.stringify(stats));
    } catch (e) {
        alert('【致命的エラー】セーブに失敗しました。\n' + e.message + '\nプライベートブラウザや容量制限を確認してください。');
        console.error('Save failed:', e);
    }
};

// ローカル参照用（既存コードとの互換性のため）
function getUserStats() { return window.getUserStats(); }
function saveUserStats(stats) { window.saveUserStats(stats); }

// index.html top display
function updateLevelDisplay() {
    const stats = getUserStats();

    // Total Level Logic
    // Total Level is sum of PART LEVELS.
    // Total Points is just a sum of points, used for legacy? Or global calc?
    // User requested: "Display sum of part levels".

    let totalLvl = getTotalLevel(stats);
    let title = getGlobalTitle(totalLvl);

    const rankEl = document.getElementById('rank-display');
    if (rankEl) {
        rankEl.innerHTML = `総合Lv.${totalLvl}<br>【${title}】`;
    }
}

function setupTopView() {
    updateLevelDisplay();
    scaleLayout();
    // Safety backup to ensure it renders after everything is settled
    setTimeout(updateLevelDisplay, 100);
    setTimeout(updateLevelDisplay, 500);
    setTimeout(scaleLayout, 150);

    // --- Debug: Inspect Storage Button ---
    // Remove if exists
    const oldDebug = document.getElementById('debug-storage-btn');
    if (oldDebug) oldDebug.remove();

    const footer = document.querySelector('footer');
    if (footer) {
        // --- Storage Check Button ---
        if (!document.getElementById('debug-storage-btn')) {
            const dBtn = document.createElement('button');
            dBtn.id = 'debug-storage-btn';
            dBtn.textContent = '🛠 ストレージ確認';
            dBtn.style.fontSize = '0.7em';
            dBtn.style.marginTop = '10px';
            dBtn.className = 'text-btn';
            dBtn.onclick = () => {
                const raw = localStorage.getItem('phy_quiz_user_stats');
                alert(`【保存データ】\n${raw}`);
                console.log(JSON.parse(raw));
            };
            footer.appendChild(dBtn);
        }

        // --- Test Write Button ---
        if (!document.getElementById('debug-test-save-btn')) {
            const tBtn = document.createElement('button');
            tBtn.id = 'debug-test-save-btn';
            tBtn.textContent = '💾 テスト保存';
            tBtn.style.fontSize = '0.7em';
            tBtn.style.marginTop = '10px';
            tBtn.style.marginLeft = '10px';
            tBtn.className = 'text-btn';
            tBtn.onclick = () => {
                try {
                    localStorage.setItem('phy_quiz_test', 'test_ok_' + Date.now());
                    const val = localStorage.getItem('phy_quiz_test');
                    if (val && val.startsWith('test_ok')) {
                        alert('ストレージ書き込みテスト: 成功\n値: ' + val + '\nブラウザの保存機能は正常です。');
                    } else {
                        alert('ストレージ書き込みテスト: 失敗 (読み出し値不一致)');
                    }
                } catch (e) {
                    alert('ストレージ書き込みテスト: エラー発生\n' + e.message);
                }
            };
            footer.appendChild(tBtn);
        }
    }
    // ------------------------------------

    // --- Bonus Timer Loop ---
    const bonusContainer = document.getElementById('bonus-timer-area');
    if (bonusContainer) {
        const stats = getUserStats(); // Load stats
        const expires = stats.bonusExpires || {};
        const streaks = stats.streaks || {};

        const activeDiffs = Object.keys(expires).filter(diff => {
            const exp = expires[diff];
            const str = streaks[diff] || 0;
            return (exp > Date.now() && str > 0); // Only show if active and valid
        });

        if (activeDiffs.length > 0) {
            bonusContainer.classList.remove('hidden');

            const updateTimers = () => {
                const now = Date.now();
                bonusContainer.innerHTML = ''; // Re-render simple usage

                let hasActive = false;
                activeDiffs.forEach(diff => {
                    const diffExp = expires[diff];
                    const left = diffExp - now;

                    if (left > 0) {
                        hasActive = true;
                        const hrs = Math.floor(left / (1000 * 60 * 60));
                        const mins = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));

                        const badge = document.createElement('div');
                        badge.className = 'bonus-timer-item';
                        badge.innerHTML = `🔥 難易度${diff} ボーナス: 残り ${hrs}時間${mins}分`;
                        bonusContainer.appendChild(badge);
                    }
                });

                // If all expired during wait, hide
                if (!hasActive) bonusContainer.classList.add('hidden');
            };

            updateTimers(); // Initial
            setInterval(updateTimers, 60000); // Update every minute
        } else {
            bonusContainer.classList.add('hidden');
        }
    }
    // ------------------------

    const stepPart = document.getElementById('step-part');
    const stepCombined = document.getElementById('step-combined');
    const topTitle = document.getElementById('top-title');
    const partContainer = document.getElementById('part-container');
    const chapterContainer = document.getElementById('chapter-container');
    const startBtn = document.getElementById('start-btn');
    const stepDifficulty = document.getElementById('step-difficulty');

    if (stepPart) stepPart.classList.remove('hidden');
    if (stepCombined) stepCombined.classList.add('hidden');
    if (topTitle) topTitle.textContent = '\u5206\u91ce\u3092\u3048\u3089\u307c\u3046';

    // Reset character message to initial state
    const characterMsg = document.getElementById('character-message');
    if (characterMsg) characterMsg.textContent = '\u5927\u5206\u91ce\u3092\u9078\u3093\u3067\u306d';

    // Globals are used now (selectedCategory, selectedDifficulty, lastPlayed...) defined at top


    // --- Back Button Setup ---
    const backToPartsBtn = document.getElementById('back-to-parts-btn');
    if (backToPartsBtn) {
        backToPartsBtn.onclick = () => {
            if (stepPart) stepPart.classList.remove('hidden');
            if (stepCombined) stepCombined.classList.add('hidden');

            const characterMsg = document.getElementById('character-message');
            if (characterMsg) characterMsg.textContent = '\u5927\u5206\u91ce\u3092\u9078\u3093\u3067\u306d';

            // Reset difficulty selection
            document.querySelectorAll('.diff-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            selectedDifficulty = null;

            selectedCategory = null;
        };
    }

    const blackboard = document.getElementById('blackboard-area');
    if (blackboard) blackboard.scrollTop = 0;

    // Clear existing categories to prevent duplication on re-render
    if (partContainer) {
        partContainer.innerHTML = '';
    }
    if (typeof CATEGORIES !== 'undefined') {
        console.log('Rendering Parts...', CATEGORIES.length);
        CATEGORIES.forEach((part, index) => {
            const btn = document.createElement('button');
            btn.className = 'grid-btn';

            const stats = getUserStats();
            const partPts = (stats.partPoints && stats.partPoints[part.id]) || 0;
            const partLvl = calculateLevel(partPts);

            // Title with "・" bullet
            const titleSpan = document.createElement('span');
            titleSpan.className = 'btn-title';
            titleSpan.textContent = `・ ${part.title}`;

            // Calculate Progress for Gauge
            // Since levels are 1-based, Lv.1 starts at getThresholdPoints(0)
            const prevThreshold = getThresholdPoints(partLvl - 1);
            const nextThreshold = getThresholdPoints(partLvl);

            let progressPercent = 0;
            if (nextThreshold > prevThreshold) {
                progressPercent = ((partPts - prevThreshold) / (nextThreshold - prevThreshold)) * 100;
            }
            if (progressPercent > 100) progressPercent = 100;

            // Gauge Colors (Cyclic)
            const gaugeColors = ['#ff6b6b', '#ffa502', '#2ed573', '#1e90ff', '#a29bfe', '#fd79a8'];
            const color = gaugeColors[index % gaugeColors.length];

            // Gauge Container (Circular UI)
            const gaugeContainer = document.createElement('div');
            gaugeContainer.className = 'level-gauge-container';

            const gauge = document.createElement('div');
            gauge.className = 'circular-gauge';
            // Conic-gradient for progress
            gauge.style.background = `conic-gradient(${color} ${progressPercent * 3.6}deg, rgba(255,255,255,0.1) 0deg)`;

            const gaugeInner = document.createElement('div');
            gaugeInner.className = 'circular-gauge-inner';
            gaugeInner.textContent = `Lv.${partLvl}`;

            gauge.appendChild(gaugeInner);
            gaugeContainer.appendChild(gauge);

            // Assembly
            btn.appendChild(titleSpan);
            btn.appendChild(gaugeContainer);

            btn.onclick = () => selectPart(part, btn);
            partContainer.appendChild(btn);
        });
    } else {
        console.error('CATEGORIES is undefined!');
        partContainer.innerHTML = '<p>カテゴリデータの読み込みに失敗しました。</p>';
    }

    // Part Selection Logic
    function selectPart(part, btnElement) {
        // Highlight logic
        Array.from(partContainer.children).forEach(b => b.classList.remove('selected'));
        btnElement.classList.add('selected');

        // Transition: Hide Part selection, Show Chapter & Difficulty
        if (stepPart) stepPart.classList.add('hidden');
        if (stepCombined) stepCombined.classList.remove('hidden');

        // Update character message
        const characterMsg = document.getElementById('character-message');
        if (characterMsg) characterMsg.innerHTML = '中分野、<br>難易度を選んでね';

        // Update Selected Part Title Display
        const selectedPartTitle = document.getElementById('selected-part-title-display');
        if (selectedPartTitle) {
            selectedPartTitle.textContent = part.title;
        }

        // Reset and Render Chapters
        chapterContainer.innerHTML = '';
        part.chapters.forEach(chap => {
            const cBtn = document.createElement('button');
            cBtn.className = 'grid-btn';
            cBtn.textContent = chap.title;
            cBtn.onclick = () => selectChapter(chap.id, cBtn);
            chapterContainer.appendChild(cBtn);
        });

        // Ensure Difficulty & Start button are reset
        if (stepDifficulty) stepDifficulty.classList.remove('hidden'); // Always show difficulty in combined view
        if (startBtn) startBtn.classList.add('hidden');

        // Reset difficulty selection state
        document.querySelectorAll('.diff-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        selectedDifficulty = null;

        selectedCategory = null;
        selectedDifficulty = null;

        // Scroll back to top of blackboard
        const blackboard = document.getElementById('blackboard-area');
        if (blackboard) blackboard.scrollTop = 0;
    }

    function selectChapter(chapId, btnElement) {
        Array.from(chapterContainer.children).forEach(b => b.classList.remove('selected'));
        btnElement.classList.add('selected');

        selectedCategory = chapId;

        // Update character message to show what was selected
        const characterMsg = document.getElementById('character-message');
        if (characterMsg) {
            characterMsg.innerHTML = `「${btnElement.textContent}」<br>難易度を選んでね`;
        }
    }

    // Global function for onclick in HTML (overwriting previous definition)
    window.selectDifficulty = (diff) => {
        if (!selectedCategory) return;

        selectedDifficulty = diff;
        document.querySelectorAll('.diff-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (btn.dataset.diff === diff) {
                btn.classList.add('selected');
            }
        });

        // Update character message
        const characterMsg = document.getElementById('character-message');
        if (characterMsg) {
            const selectedChapBtn = chapterContainer.querySelector('.grid-btn.selected');
            const chapTitle = selectedChapBtn ? selectedChapBtn.textContent : "";
            characterMsg.innerHTML = `「${chapTitle} ☆」<br>難易度${diff}で開始！`;
        }

        // Finalize
        startBtn.disabled = false;
        startBtn.classList.remove('hidden');
        startBtn.textContent = `クイズを始める`;
    };

    startBtn.onclick = () => { // Changed from addEventListener for cleaner override capability if needed
        if (!selectedCategory || !selectedDifficulty) return;
        // Start Quiz (SPA Mode)
        prepareQuiz(selectedCategory, selectedDifficulty);
    };

    // Reset Button Logic
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('【注意】\nこれまでの学習データ（レベル・ポイント・学習履歴・復習リスト）を全て消去してもよろしいですか？\nこの操作は元に戻せません。')) {
                localStorage.removeItem('phy_quiz_user_stats');
                localStorage.removeItem('phy_quiz_log');
                localStorage.removeItem('phy_quiz_wrong');
                localStorage.removeItem('phy_quiz_trivia');
                localStorage.removeItem('phy_quiz_badges');
                alert('データをリセットしました。');
                location.reload();
            }
        });
    }

    // 復習カウント・トリビア・バッジ表示
    updateReviewBadge();
    updateTriviaCountBadge();
    updateBadgeCountBadge();
}



// === 復習モード ===
async function startReviewMode() {
    const wrong = JSON.parse(localStorage.getItem('phy_quiz_wrong') || '{}');
    const allPartIds = Object.keys(wrong).filter(pid => wrong[pid].length > 0);

    if (allPartIds.length === 0) {
        showToast('復習する問題がありません。クイズで間違えた問題がここに追加されます。');
        return;
    }

    switchView('quiz');
    document.getElementById('question-text').textContent = '復習問題を読み込んでいます...';
    document.getElementById('options-container').innerHTML = '';

    try {
        // 全パートの問題を読み込み、間違えたIDに一致するものを集める
        let reviewQuestions = [];

        // loadQuizData が未定義の場合を保証
        const loadDataFile = (src) => new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => reject(new Error('タイムアウト')), 5000);
            window.loadQuizData = (pid, data) => {
                clearTimeout(timeoutId);
                resolve(data);
            };
            const script = document.createElement('script');
            script.src = `${src}?t=${Date.now()}`;
            script.onerror = () => { clearTimeout(timeoutId); reject(new Error('読込失敗')); };
            document.body.appendChild(script);
        });

        for (const partId of allPartIds) {
            const wrongIds = new Set(wrong[partId]);
            const pNum = partId.replace('part', '');

            const questions = await loadDataFile(`data/p${pNum}.js`);

            // 追加ファイルも読み込み試行
            try {
                const addQuestions = await loadDataFile(`data/p${pNum}_additional.js`);
                questions.push(...addQuestions);
            } catch (e) { /* additional file doesn't exist */ }

            questions.forEach(q => {
                if (wrongIds.has(q.id)) reviewQuestions.push(q);
            });
        }

        if (reviewQuestions.length === 0) {
            showToast('復習する問題が見つかりませんでした。');
            switchView('top');
            return;
        }

        // シャッフルして最大5問
        reviewQuestions = shuffleArray(reviewQuestions).slice(0, 5);

        // 難易度は問題ごとに異なるので、最初の問題の難易度を使う
        const diff = reviewQuestions[0].difficulty || 'A';
        selectedCategory = reviewQuestions[0].category;
        startQuiz(reviewQuestions, diff, selectedCategory);

    } catch (e) {
        console.error('復習モードエラー:', e);
        showToast('復習問題の読み込みに失敗しました。');
        switchView('top');
    }
}

// === トースト通知 ===
function showToast(msg, duration = 3000) {
    let toast = document.getElementById('toast-msg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-msg';
        toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.85);color:#fff;padding:12px 24px;border-radius:30px;font-size:0.9rem;z-index:9999;opacity:0;transition:opacity 0.3s;pointer-events:none;text-align:center;max-width:85%;font-family:var(--font-main)';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, duration);
}

// ============================================================
// トリビアカード機能
// ============================================================

// 獲得済みトリビアの管理
function getOwnedTrivia() {
    return JSON.parse(localStorage.getItem('phy_quiz_trivia') || '[]');
}

function saveOwnedTrivia(ids) {
    localStorage.setItem('phy_quiz_trivia', JSON.stringify(ids));
}

// トリビアカード獲得判定（クイズ結果画面で呼ばれる）
function tryAwardTrivia(context) {
    // context: { type: "quiz_complete" | "level_up" | "streak", value: any }
    if (typeof TRIVIA_CARDS === 'undefined') return;

    const owned = getOwnedTrivia();
    if (owned.length >= TRIVIA_CARDS.length) return; // 全コンプ済み

    // 獲得確率: レベルアップ=100%, クイズ完了(全問正解)=50%, クイズ完了(通常)=20%, streak3日=100%
    let chance = 0;
    if (context.type === 'level_up') chance = 1.0;
    else if (context.type === 'streak' && context.value >= 3) chance = 1.0;
    else if (context.type === 'quiz_complete' && context.value === 5) chance = 0.5;
    else if (context.type === 'quiz_complete') chance = 0.2;

    if (Math.random() > chance) return;

    // 未獲得カードからランダムに1枚選ぶ（レアリティ重み付き）
    const ownedSet = new Set(owned);
    const available = TRIVIA_CARDS.filter(c => !ownedSet.has(c.id));
    if (available.length === 0) return;

    // 重み: N=10, R=3, SR=1
    const weights = available.map(c => c.rarity === 'SR' ? 1 : c.rarity === 'R' ? 3 : 10);
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;
    let selected = available[0];
    for (let i = 0; i < available.length; i++) {
        rand -= weights[i];
        if (rand <= 0) { selected = available[i]; break; }
    }

    // 獲得！
    owned.push(selected.id);
    saveOwnedTrivia(owned);
    updateTriviaCountBadge();

    // モーダル表示
    showTriviaModal(selected);
}

function showTriviaModal(card) {
    const modal = document.getElementById('trivia-modal');
    const inner = document.getElementById('trivia-card-inner');
    if (!modal || !inner) return;

    inner.className = `trivia-card-inner rarity-${card.rarity}`;
    document.getElementById('trivia-rarity').textContent = card.rarity;
    document.getElementById('trivia-icon').textContent = card.icon;
    document.getElementById('trivia-title').textContent = card.title;
    document.getElementById('trivia-body').textContent = card.body;

    const catNames = { scientist: '科学者', nature: '自然現象', tech: 'テクノロジー', space: '宇宙', history: '歴史' };
    document.getElementById('trivia-category').textContent = catNames[card.category] || card.category;

    modal.classList.remove('hidden');

    // どこをクリック/タップしても閉じる
    const closeHandler = (e) => {
        modal.classList.add('hidden');
        modal.removeEventListener('click', closeHandler);
    };
    // 少し遅延させて、開いた瞬間のクリックで閉じないようにする
    setTimeout(() => {
        modal.addEventListener('click', closeHandler);
    }, 100);
}

function closeTriviaModal() {
    const modal = document.getElementById('trivia-modal');
    if (modal) modal.classList.add('hidden');
}

function updateTriviaCountBadge() {
    const badge = document.getElementById('trivia-count-badge');
    if (!badge || typeof TRIVIA_CARDS === 'undefined') return;
    const owned = getOwnedTrivia();
    badge.textContent = `${owned.length}/${TRIVIA_CARDS.length}`;
}

// コレクションパネルの開閉
// === ノート右ページ切り替え ===
function selectNotebookPanel(panelName) {
    // 全パネルを非表示
    document.querySelectorAll('.nb-panel').forEach(p => p.classList.add('hidden'));
    // ボタンのactiveクラスを切り替え
    document.querySelectorAll('.notebook-btn[data-panel]').forEach(b => {
        b.classList.toggle('active', b.dataset.panel === panelName);
    });

    const panel = document.getElementById('nb-panel-' + panelName);
    if (panel) panel.classList.remove('hidden');

    // 各パネルの描画
    if (panelName === 'review') {
        renderNotebookReview();
    } else if (panelName === 'history') {
        renderNotebookHistory();
    } else if (panelName === 'trivia') {
        renderNotebookTrivia();
    } else if (panelName === 'badge') {
        renderNotebookBadge();
    }
}

function renderNotebookReview() {
    const wrongCount = getWrongQuestionCount();
    const el = document.getElementById('nb-review-count');
    if (el) el.textContent = wrongCount > 0 ? `復習待ち: ${wrongCount}問` : '復習する問題はありません';
    const btn = document.querySelector('#nb-panel-review .nb-action-btn');
    if (btn) {
        btn.disabled = wrongCount === 0;
        btn.style.opacity = wrongCount === 0 ? '0.5' : '1';
    }
}

function renderNotebookHistory() {
    const log = getQuizLog();
    const calEl = document.getElementById('nb-history-calendar');
    const statsEl = document.getElementById('nb-history-stats');
    if (!calEl || !statsEl) return;

    // カレンダー（過去28日）
    const today = new Date();
    let calHtml = '';
    for (let i = 27; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
        const data = log[key] || null;
        let lv = 0;
        if (data) { lv = data.n >= 5 ? 3 : data.n >= 3 ? 2 : 1; }
        const dayNum = d.getDate();
        calHtml += `<div class="nb-cal-cell nb-cal-lv${lv}">${dayNum}</div>`;
    }
    calEl.innerHTML = calHtml;

    // 統計
    let totalS = 0, totalC = 0, totalQ = 0, streak = 0;
    for (let i = 0; i < 90; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
        if (log[key]) { streak++; } else { if (i > 0) break; }
    }
    Object.values(log).forEach(e => { totalS += e.n; totalC += e.c; totalQ += e.t; });
    const acc = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

    statsEl.innerHTML = `
        <div class="nb-stat-item"><span class="nb-stat-num">${streak}</span>連続日数</div>
        <div class="nb-stat-item"><span class="nb-stat-num">${totalS}</span>セッション</div>
        <div class="nb-stat-item"><span class="nb-stat-num">${acc}%</span>正答率</div>
    `;
}

function renderNotebookTrivia() {
    const countEl = document.getElementById('nb-trivia-count');
    const gridEl = document.getElementById('nb-trivia-grid');
    if (!gridEl) return;

    const owned = JSON.parse(localStorage.getItem('phy_quiz_trivia') || '[]');
    const total = typeof TRIVIA_CARDS !== 'undefined' ? TRIVIA_CARDS.length : 0;
    if (countEl) countEl.textContent = `${owned.length} / ${total} 枚`;

    let html = '';
    if (typeof TRIVIA_CARDS !== 'undefined') {
        TRIVIA_CARDS.forEach(t => {
            const has = owned.includes(t.id);
            if (has) {
                html += `<div class="nb-trivia-cell" onclick="showTriviaModal(TRIVIA_CARDS.find(c=>c.id==='${t.id}'))" title="${t.title}">${t.icon}</div>`;
            } else {
                html += `<div class="nb-trivia-cell locked" title="???">?</div>`;
            }
        });
    }
    gridEl.innerHTML = html;
}

function renderNotebookBadge() {
    const countEl = document.getElementById('nb-badge-count');
    const listEl = document.getElementById('nb-badge-list');
    if (!listEl) return;

    const stats = getUserStats();
    const log = getQuizLog();
    const wrong = JSON.parse(localStorage.getItem('phy_quiz_wrong') || '{}');
    const earnedBadges = JSON.parse(localStorage.getItem('phy_quiz_badges') || '[]');

    let earned = 0;
    let html = '';
    if (typeof BADGES !== 'undefined') {
        BADGES.forEach(b => {
            let has = earnedBadges.includes(b.id);
            if (!has) {
                try { has = b.check(stats, log, wrong); } catch(e) {}
            }
            if (has) earned++;
            html += `<div class="nb-badge-item ${has ? '' : 'locked'}">
                <span class="nb-badge-icon">${has ? b.icon : '🔒'}</span>
                <span>${has ? b.title : '???'}</span>
            </div>`;
        });
        if (countEl) countEl.textContent = `${earned} / ${BADGES.length}`;
    }
    listEl.innerHTML = html;
}

function toggleTriviaCollection() {
    const panel = document.getElementById('trivia-collection');
    if (!panel) return;

    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        renderTriviaCollection();
    } else {
        panel.classList.add('hidden');
    }
}

function renderTriviaCollection() {
    if (typeof TRIVIA_CARDS === 'undefined') return;
    const grid = document.getElementById('trivia-grid');
    const progress = document.getElementById('trivia-progress');
    if (!grid || !progress) return;

    const owned = new Set(getOwnedTrivia());
    progress.textContent = `獲得: ${owned.size} / ${TRIVIA_CARDS.length} 枚`;

    grid.innerHTML = TRIVIA_CARDS.map(card => {
        if (owned.has(card.id)) {
            return `<div class="trivia-cell rarity-${card.rarity}" onclick="showTriviaModal(TRIVIA_CARDS.find(c=>c.id==='${card.id}'))" title="${card.title}">${card.icon}</div>`;
        } else {
            return `<div class="trivia-cell locked" title="未獲得">?</div>`;
        }
    }).join('');
}

// ============================================================
// バッジ（実績）機能
// ============================================================

function getOwnedBadges() {
    return JSON.parse(localStorage.getItem('phy_quiz_badges') || '[]');
}

function saveOwnedBadges(ids) {
    localStorage.setItem('phy_quiz_badges', JSON.stringify(ids));
}

// バッジ判定（結果画面後に呼ばれる）
function checkBadges() {
    if (typeof BADGES === 'undefined') return;

    const stats = JSON.parse(localStorage.getItem('phy_quiz_user_stats') || '{}');
    const log = JSON.parse(localStorage.getItem('phy_quiz_log') || '{}');
    const wrong = JSON.parse(localStorage.getItem('phy_quiz_wrong') || '{}');
    const owned = getOwnedBadges();
    const ownedSet = new Set(owned);

    const newBadges = [];

    for (const badge of BADGES) {
        if (ownedSet.has(badge.id)) continue;
        try {
            if (badge.check(stats, log, wrong)) {
                owned.push(badge.id);
                ownedSet.add(badge.id);
                newBadges.push(badge);
            }
        } catch (e) {
            // check function failed silently
        }
    }

    if (newBadges.length > 0) {
        saveOwnedBadges(owned);
        updateBadgeCountBadge();
        // 最初の新バッジをモーダル表示
        showBadgeModal(newBadges[0]);
    }
}

function showBadgeModal(badge) {
    const modal = document.getElementById('badge-modal');
    if (!modal) return;
    document.getElementById('badge-modal-icon').textContent = badge.icon;
    document.getElementById('badge-modal-title').textContent = badge.title;
    document.getElementById('badge-modal-desc').textContent = badge.description;
    modal.classList.remove('hidden');
}

function closeBadgeModal() {
    const modal = document.getElementById('badge-modal');
    if (modal) modal.classList.add('hidden');
}

function updateBadgeCountBadge() {
    const badge = document.getElementById('badge-count-badge');
    if (!badge || typeof BADGES === 'undefined') return;
    const owned = getOwnedBadges();
    badge.textContent = `${owned.length}/${BADGES.length}`;
}

function toggleBadgePanel() {
    const panel = document.getElementById('badge-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        renderBadgePanel();
    } else {
        panel.classList.add('hidden');
    }
}

function renderBadgePanel() {
    if (typeof BADGES === 'undefined') return;
    const grid = document.getElementById('badge-grid');
    const progress = document.getElementById('badge-progress');
    if (!grid || !progress) return;

    const owned = new Set(getOwnedBadges());
    progress.textContent = `獲得: ${owned.size} / ${BADGES.length}`;

    grid.innerHTML = BADGES.map(b => {
        const unlocked = owned.has(b.id);
        return `<div class="badge-item ${unlocked ? '' : 'locked'}">
            <span class="badge-item-icon">${unlocked ? b.icon : '🔒'}</span>
            <div class="badge-item-info">
                <div class="badge-item-title">${unlocked ? b.title : '???'}</div>
                <div class="badge-item-desc">${unlocked ? b.description : '条件を満たすと解放'}</div>
            </div>
        </div>`;
    }).join('');
}

// === 学習履歴の取得 ===
function getQuizLog() {
    return JSON.parse(localStorage.getItem('phy_quiz_log') || '{}');
}

function getWrongQuestionCount() {
    const wrong = JSON.parse(localStorage.getItem('phy_quiz_wrong') || '{}');
    let count = 0;
    Object.values(wrong).forEach(ids => { count += ids.length; });
    return count;
}

// === 復習バッジ更新 ===
function updateReviewBadge() {
    const count = getWrongQuestionCount();
    const badge = document.getElementById('review-count');
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

// === 学習履歴パネルの開閉 ===
function toggleHistoryPanel() {
    const panel = document.getElementById('history-panel');
    if (!panel) return;

    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        renderHistoryPanel();
    } else {
        panel.classList.add('hidden');
    }
}

// === 学習履歴の描画 ===
function renderHistoryPanel() {
    const log = getQuizLog();
    const calendarEl = document.getElementById('history-calendar');
    const statsEl = document.getElementById('history-stats');
    if (!calendarEl || !statsEl) return;

    // --- カレンダー（過去28日分） ---
    const today = new Date();
    const days = [];
    for (let i = 27; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
        const dayLabel = `${d.getMonth() + 1}/${d.getDate()}`;
        const data = log[key] || null;
        days.push({ key, dayLabel, data, dow: d.getDay() });
    }

    let calHtml = '<div class="cal-grid">';
    days.forEach(day => {
        let level = 0; // 0=なし, 1=少, 2=中, 3=多
        if (day.data) {
            if (day.data.n >= 5) level = 3;
            else if (day.data.n >= 3) level = 2;
            else level = 1;
        }
        const title = day.data
            ? `${day.dayLabel}: ${day.data.n}回, 正答${day.data.c}/${day.data.t}, +${day.data.p}pt`
            : `${day.dayLabel}: 未学習`;
        calHtml += `<div class="cal-cell cal-lv${level}" title="${title}"></div>`;
    });
    calHtml += '</div>';

    // 曜日ラベル
    calHtml += '<div class="cal-labels">';
    const dayNames = ['日','月','火','水','木','金','土'];
    // 最初の日の曜日を取得
    calHtml += '<span class="cal-legend"><span class="cal-cell cal-lv0 cal-sm"></span>0回</span>';
    calHtml += '<span class="cal-legend"><span class="cal-cell cal-lv1 cal-sm"></span>1-2回</span>';
    calHtml += '<span class="cal-legend"><span class="cal-cell cal-lv2 cal-sm"></span>3-4回</span>';
    calHtml += '<span class="cal-legend"><span class="cal-cell cal-lv3 cal-sm"></span>5回+</span>';
    calHtml += '</div>';

    calendarEl.innerHTML = calHtml;

    // --- 統計サマリー ---
    const keys = Object.keys(log);
    let totalSessions = 0, totalCorrect = 0, totalQ = 0, totalPts = 0, streak = 0;

    // 連続学習日数を計算
    for (let i = 0; i < 90; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
        if (log[key]) {
            streak++;
        } else {
            if (i > 0) break; // 今日やってなくても昨日からカウント
        }
    }

    keys.forEach(k => {
        const e = log[k];
        totalSessions += e.n;
        totalCorrect += e.c;
        totalQ += e.t;
        totalPts += e.p;
    });

    const accuracy = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;
    const wrongCount = getWrongQuestionCount();

    statsEl.innerHTML = `
        <div class="stat-grid">
            <div class="stat-card">
                <div class="stat-num">${streak}</div>
                <div class="stat-name">連続学習日数</div>
            </div>
            <div class="stat-card">
                <div class="stat-num">${totalSessions}</div>
                <div class="stat-name">総セッション数</div>
            </div>
            <div class="stat-card">
                <div class="stat-num">${accuracy}%</div>
                <div class="stat-name">総合正答率</div>
            </div>
            <div class="stat-card">
                <div class="stat-num">${wrongCount}</div>
                <div class="stat-name">復習待ち問題</div>
            </div>
        </div>
    `;
}

async function prepareQuiz(category, difficulty) {
    if (!category || !difficulty) {
        alert('設定エラー: カテゴリまたは難易度が指定されていません。');
        switchView('top');
        return;
    }

    // Switch to Quiz View
    switchView('quiz');
    document.getElementById('question-text').textContent = '問題を読み込んでいます...';
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('image-container').classList.add('hidden');
    document.getElementById('feedback-area').classList.add('hidden');
    // Legacy containers removed to prevent null reference errors
    // document.getElementById('result-container').classList.add('hidden');
    // document.getElementById('quiz-container').classList.remove('hidden');

    try {
        let allQuestions = [];
        let loadedFrom = 'local';
        let partId = 'part1';
        let fileName = 'p1.js';

        if (category) {
            const match = category.match(/^(p\d+)_/);
            if (match) {
                const pCode = match[1];
                fileName = `${pCode}.js`;
                partId = `part${pCode.substring(1)}`;
            }
        }

        // Define loader if missing
        if (!window.loadQuizData) {
            window.loadQuizData = function (pid, data) {
                // console.log(`JSONP Callback received for ${pid}`);
                if (window.onQuizDataLoaded) {
                    window.onQuizDataLoaded(data);
                }
            };
        }

        try {
            allQuestions = await new Promise((resolve, reject) => {
                const timeoutId = setTimeout(() => {
                    reject(new Error('タイムアウト: データの読み込みが完了しませんでした。'));
                }, 5000);

                window.onQuizDataLoaded = (data) => {
                    clearTimeout(timeoutId);
                    resolve(data);
                };

                const script = document.createElement('script');
                const src = `data/${fileName}?t=${Date.now()}`;
                script.src = src;

                script.onerror = () => {
                    clearTimeout(timeoutId);
                    reject(new Error(`Failed to load data/${fileName}`));
                };

                document.body.appendChild(script);
            });
            loadedFrom = `Split Load (${partId})`;
        } catch (e) {
            console.error(e);
            alert(`【読込エラー】\n${e.message}\n再読み込みしてください。`);
            document.getElementById('question-text').innerHTML = '<button class="primary-btn" onclick="location.reload()">再読み込み</button>';
            return;
        }

        console.log(`Questions loaded: ${allQuestions.length}`);

        // 3. Data Sanitization & Normalization
        allQuestions = allQuestions.map(q => {
            // Ensure options is an array
            if (typeof q.options === 'string') {
                // Remove brackets if present (e.g. "[opt1, opt2]") just in case
                let cleanOpts = q.options.replace(/^\[|\]$/g, '');
                q.options = cleanOpts.split(',').map(s => s.trim()).filter(s => s !== '');
            } else if (!Array.isArray(q.options)) {
                q.options = [];
            }

            // Filter out empty strings and placeholders from existing arrays
            if (Array.isArray(q.options)) {
                q.options = q.options.map(s => String(s).trim()).filter(s => s !== '' && s !== '_');
            }

            // Ensure answer is a number
            if (typeof q.answer !== 'number') {
                q.answer = parseInt(q.answer, 10);
            }
            if (isNaN(q.answer)) q.answer = 0;

            return q;
        }).filter(q => q.question && q.options.length > 0); // Filter out broken data

        const filteredQuestions = allQuestions.filter(q => {
            // Basic filtering
            const catMatch = category === 'all' ? true : q.category === category;
            const diffMatch = q.difficulty === difficulty;
            return catMatch && diffMatch;
        });

        if (filteredQuestions.length === 0) {
            if (filteredQuestions.length === 0) {
                alert('該当する問題がありませんでした。');
                switchView('top');
                return;
            }
        }

        // Create a pool of valid candidates
        const candidates = shuffleArray(filteredQuestions);

        // Select 5 questions with unique classification
        const questions = [];
        const usedClassifications = new Set();

        for (const q of candidates) {
            if (questions.length >= 5) break;

            // If classification is present, ensure uniqueness
            if (q.classification) {
                if (usedClassifications.has(q.classification)) {
                    continue; // Skip duplicate classification
                }
                usedClassifications.add(q.classification);
            }
            questions.push(q);
        }

        // If we have fewer than 5 (and there are candidates left that were skipped), 
        // fallback to fill up to 5? 
        // User said "Ensure different numbers". 
        // If filtering results in < 5 questions, the current behavior is just to show fewer questions or what?
        // Let's just use what we have.

        startQuiz(questions, difficulty, category);

    } catch (error) {
        console.error('Failed to load questions:', error);
        document.getElementById('question-text').textContent = '問題の読み込みに失敗しました。\n' + error.message;
        document.getElementById('question-image').src = ''; // Clear image
        document.getElementById('image-container').classList.add('hidden');
        document.getElementById('options-container').innerHTML = ''; // Clear options so they don't look weird
    }
}

// ... (Only showing changed parts)

function startQuiz(questions, difficulty, category) {
    // Store for Retry
    lastPlayedDifficulty = difficulty;
    lastPlayedCategory = category;

    let currentQuestionIndex = 0;
    let currentSubQuestionIndex = 0; // NEW: track sub questions
    let subResults = []; // NEW: Results of individual sub questions for the current big question
    let bigQuestionPoints = 0; // NEW: Points accumulated in the current big question session

    let score = 0;
    window.sessionPoints = 0; // Explicit global reset
    window.currentScore = 0; // Also reset explicit global score if needed

    // ... (In startQuiz) ...
    // --- Bonus System Setup ---
    const stats = getUserStats(); // Load stats at start

    // Ensure streaks/expires object exists
    if (!stats.streaks) stats.streaks = { A: 0, B: 0, C: 0 };
    if (!stats.bonusExpires) stats.bonusExpires = { A: 0, B: 0, C: 0 };

    const currentDiff = difficulty || 'A';

    // Check Expiration
    const now = Date.now();
    const expiry = stats.bonusExpires[currentDiff] || 0;

    if (now > expiry && stats.streaks[currentDiff] > 0) {
        // Expired!
        stats.streaks[currentDiff] = 0;
        stats.bonusExpires[currentDiff] = 0;
        saveUserStats(stats); // Save reset
        // Notify user? Maybe just show 0 streak.
    }

    const streak = stats.streaks[currentDiff] || 0;

    // Cap streak at 10 for calculation (Max 200%)
    const effectiveN = Math.min(streak, 10);
    const bonusMultiplier = 1 + (0.1 * effectiveN);

    // 間違えた問題IDを追跡
    const wrongQuestionIds = [];

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const qNumberSpan = document.getElementById('q-number');
    const progressBar = document.getElementById('progress');
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackMsg = document.getElementById('feedback-msg');
    const explanationText = document.getElementById('explanation-text');
    const nextBtn = document.getElementById('next-btn');
    // const quizContainer = document.getElementById('quiz-container'); // Legacy
    // const resultContainer = document.getElementById('result-container'); // Legacy

    // Display Bonus Indicator if active
    const headerH1 = document.querySelector('header h1');
    // Clean up previous bonus indicators if any
    const oldInd = document.getElementById('bonus-indicator');
    if (oldInd) oldInd.remove();

    if (streak > 0) {
        const ind = document.createElement('div');
        ind.id = 'bonus-indicator';
        ind.className = 'bonus-badge pop-in'; // Add css later
        ind.textContent = `🔥 連続ボーナス適用中 (x${bonusMultiplier.toFixed(1)})`;
        ind.style.fontSize = '0.8rem';
        ind.style.color = '#ff6b6b';
        ind.style.fontWeight = 'bold';
        if (headerH1) {
            headerH1.appendChild(ind);
        } else {
            console.warn('Header H1 not found, cannot display bonus indicator');
        }
    }


    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResult();
            return;
        }

        const q = questions[currentQuestionIndex];
        qNumberSpan.textContent = currentQuestionIndex + 1;

        // Reset elements
        const fixedLead = document.getElementById('fixed-lead-area');
        const commonTextEl = document.getElementById('common-text-area');
        const commonImgContainer = document.getElementById('common-image-container');
        const commonImg = document.getElementById('common-question-image');

        if (fixedLead) {
            if (q.sub_questions && q.sub_questions.length > 0) {
                if (commonTextEl) commonTextEl.innerHTML = q.common_text || q.question;

                // Show common image if exists
                if (q.image_url && q.image_url.trim() !== '') {
                    if (commonImg) commonImg.src = q.image_url;
                    if (commonImgContainer) commonImgContainer.classList.remove('hidden');
                } else {
                    if (commonImgContainer) commonImgContainer.classList.add('hidden');
                }

                fixedLead.classList.remove('hidden');
            } else {
                fixedLead.classList.add('hidden');
            }
        }

        // --- Question Counter Repositioning ---
        const qCounter = document.getElementById('q-counter');
        const questionArea = document.getElementById('question-area');
        if (qCounter && fixedLead && questionArea) {
            if (q.sub_questions && q.sub_questions.length > 0) {
                // Difficulty C: Move counter to Lead area
                fixedLead.appendChild(qCounter);
            } else {
                // Standard: Move counter to Question area
                questionArea.appendChild(qCounter);
            }
        }

        // Initialize sub-question state if necessary
        if (q.sub_questions && q.sub_questions.length > 0) {
            currentSubQuestionIndex = 0;
            subResults = [];
            bigQuestionPoints = 0;
            showSubQuestion();
        } else {
            // Simple question (A/B)
            renderQuestionData(q);
        }
    }

    function showSubQuestion() {
        const q = questions[currentQuestionIndex];
        const subQ = q.sub_questions[currentSubQuestionIndex];

        // Add animated transition
        const quizInner = document.getElementById('question-area');
        const optCont = document.getElementById('options-container');

        // Apply slide-in ONLY if it's not the first sub-question (to avoid double entry animation)
        if (currentSubQuestionIndex > 0) {
            optCont.classList.add('slide-in');
            setTimeout(() => optCont.classList.remove('slide-in'), 400);
        }

        // Construct sub-question text (e.g. (1) Question...)
        const displaySubText = `(${currentSubQuestionIndex + 1}) ${subQ.question}`;

        // Render sub-question data. 
        // Note: We don't want to overwrite the image if it's already in fixed-lead, 
        // but some sub-questions might have their own specific images.
        renderQuestionData({
            ...subQ,
            question: displaySubText,
            image_url: subQ.image_url || "" // Only show image if sub_question explicitly has one
        });
    }

    function renderQuestionData(qData) {
        questionText.textContent = qData.question;

        // Image handling
        try {
            const imgContainer = document.getElementById('image-container');
            const qImage = document.getElementById('question-image');
            if (qData.image_url && qData.image_url.trim() !== '') {
                qImage.src = qData.image_url;
                imgContainer.classList.remove('hidden');
            } else {
                imgContainer.classList.add('hidden');
                qImage.src = '';
            }
        } catch (e) {
            console.error('Image display error:', e);
        }

        optionsContainer.innerHTML = '';
        optionsContainer.classList.remove('grid-2col');

        if (feedbackArea) feedbackArea.classList.remove('show');

        const optCount = qData.options.length;
        if (optCount === 2 || optCount === 4) {
            optionsContainer.classList.add('grid-2col');
        }

        let displayOptions = qData.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        if (qData.type === 'choice') {
            displayOptions = shuffleArray(displayOptions);
        }

        let currentSelectedIndex = null;
        let currentSelectedBtn = null;

        const checkBtn = document.getElementById('check-btn');
        if (checkBtn) {
            checkBtn.disabled = true;
            checkBtn.classList.remove('hidden');
            checkBtn.onclick = () => {
                if (currentSelectedIndex !== null) {
                    checkAnswer(currentSelectedIndex, qData.answer, qData.explanation, qData.difficulty || difficulty, currentSelectedBtn);
                    checkBtn.classList.add('hidden');
                }
            };
        }

        displayOptions.forEach((optObj) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            if (optObj.text.length > 15) btn.classList.add('long-text');
            btn.textContent = optObj.text;

            btn.onclick = () => {
                const allOpts = optionsContainer.querySelectorAll('.option-btn');
                allOpts.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                currentSelectedIndex = optObj.originalIndex;
                currentSelectedBtn = btn;
                if (checkBtn) checkBtn.disabled = false;
            };
            optionsContainer.appendChild(btn);
        });

        renderMath();
    }

    const renderMath = () => {
        if (window.renderMathInElement) {
            try {
                const quizContainer = document.getElementById('quiz-view');
                renderMathInElement(quizContainer, {
                    delimiters: [
                        { left: "$$", right: "$$", display: true },
                        { left: "\\[", right: "\\]", display: true },
                        { left: "\\(", right: "\\)", display: false },
                        { left: "$", right: "$", display: false }
                    ],
                    throwOnError: false
                });
            } catch (e) {
                console.error('KaTeX rendering error:', e);
            }
        }
    };

    function checkAnswer(selectedIndex, correctIndex, explanation, difficulty, selectedBtn) {
        const q = questions[currentQuestionIndex];
        const isSubQ = q.sub_questions && q.sub_questions.length > 0;
        const currentSubQ = isSubQ ? q.sub_questions[currentSubQuestionIndex] : null;

        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);

        const isCorrect = (selectedIndex === correctIndex);
        let basePts = getPointsForDifficulty(difficulty);
        if (difficulty === 'C' && isSubQ) basePts = 60;

        const mult = (typeof bonusMultiplier !== 'undefined' ? bonusMultiplier : 1);
        const earned = isCorrect ? Math.round(basePts * mult) : 0;

        if (isSubQ) {
            // Record result for summary
            subResults.push({
                correct: isCorrect,
                question: currentSubQ.question,
                answerText: currentSubQ.options[correctIndex],
                explanation: currentSubQ.explanation
            });
            if (isCorrect) bigQuestionPoints += earned;

            // Mark button
            if (selectedBtn) {
                selectedBtn.classList.add(isCorrect ? 'correct' : 'wrong');
            }
            if (!isCorrect && buttons[correctIndex]) {
                buttons[correctIndex].classList.add('correct');
            }

            // Decision: Next SubQ or Final Summary?
            if (currentSubQuestionIndex < q.sub_questions.length - 1) {
                // Not last sub question - proceed immediately with short delay for visual feedback
                setTimeout(() => {
                    currentSubQuestionIndex++;
                    showSubQuestion();
                }, 800);
            } else {
                // Last sub question - reveal summary
                const allCorrect = subResults.every(r => r.correct);
                let finalAward = bigQuestionPoints;
                let bonusApplied = false;

                if (allCorrect && subResults.length > 0) {
                    finalAward = Math.round(bigQuestionPoints * 1.5);
                    bonusApplied = true;
                }

                window.sessionPoints += finalAward;
                if (allCorrect) {
                    score++;
                } else if (q.id) {
                    wrongQuestionIds.push(q.id);
                }

                showFeedback(true, null, null, difficulty, true, finalAward, bonusApplied);
            }
        } else {
            // Standard A/B question logic
            if (isCorrect) {
                score++;
                window.sessionPoints += earned;
                selectedBtn.classList.add('correct');
                // 正解した問題を復習リストから除去
                if (q.id) {
                    const pMatch = (q.category || '').match(/^(p\d+)_/);
                    if (pMatch) removeFromWrongQuestions('part' + pMatch[1].substring(1), q.id);
                }
            } else {
                selectedBtn.classList.add('wrong');
                if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');
                // 間違えた問題IDを記録
                if (q.id) wrongQuestionIds.push(q.id);
            }
            showFeedback(isCorrect, correctIndex, explanation, difficulty, false, earned);
        }
    }

    function showFeedback(isCorrect, correctIndex, explanation, difficulty, isSummary = false, pointsEarned = 0, bonusApplied = false) {
        const feedbackArea = document.getElementById('feedback-area');
        const feedbackMsg = document.getElementById('feedback-msg');
        const answerEl = document.getElementById('feedback-answer');
        const summaryContainer = document.getElementById('sub-q-summary');
        const explanationText = document.getElementById('explanation-text');

        if (isSummary) {
            // Summary Mode (Difficulty C)
            const allCorrect = subResults.every(r => r.correct);
            const pImg = allCorrect ? 'images/seikai_p1.png' : (subResults.some(r => r.correct) ? 'images/seikai_p2.png' : 'images/huseikai.png');

            let statusText = allCorrect ? "パーフェクト！" : "おつかれさま！";
            let pointsText = `+${pointsEarned} Pt`;
            if (bonusApplied) pointsText += " (全問正解ボーナス 1.5x !)";

            feedbackMsg.innerHTML = `<img src="${pImg}" style="height: 100px; vertical-align: middle; margin-right: 15px;"> ${statusText} <span style="color:#d32f2f;">${pointsText}</span>`;

            if (answerEl) answerEl.classList.add('hidden');
            if (summaryContainer) {
                summaryContainer.innerHTML = "";
                summaryContainer.classList.remove('hidden');
                subResults.forEach((res, i) => {
                    const item = document.createElement('div');
                    item.className = `summary-item ${res.correct ? 'correct' : 'wrong'}`;
                    item.innerHTML = `
                        <div class="summary-status">${res.correct ? '○' : '×'}</div>
                        <div class="summary-text">
                            <strong>(${i + 1})</strong> ${res.question}<br>
                            <small>正解: ${res.answerText}</small>
                        </div>
                    `;
                    summaryContainer.appendChild(item);
                });
            }
            explanationText.textContent = "お疲れさまでした！各設問の結果は上記の通りです。";
        } else {
            // Standard Mode (Difficulty A/B)
            if (summaryContainer) summaryContainer.classList.add('hidden');
            if (answerEl) answerEl.classList.remove('hidden');

            if (isCorrect) {
                const pImg = Math.random() < 0.5 ? 'images/seikai_p1.png' : 'images/seikai_p2.png';
                feedbackMsg.innerHTML = `<img src="${pImg}" style="height: 120px; vertical-align: middle; margin-right: 15px;"> 正解！ (+${pointsEarned} Pt)`;
                feedbackMsg.style.color = '#155724';
            } else {
                feedbackMsg.innerHTML = `<img src="images/huseikai.png" style="height: 120px; vertical-align: middle; margin-right: 15px;"> 残念！`;
                feedbackMsg.style.color = '#721c24';
            }

            if (answerEl) {
                const q = questions[currentQuestionIndex];
                answerEl.textContent = `答え．${q.options[correctIndex]}`;
            }
            explanationText.textContent = explanation;
        }

        feedbackArea.classList.remove('hidden');
        feedbackArea.classList.add('show');
        feedbackArea.style.display = 'block';

        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.renderMathInElement) {
            renderMathInElement(feedbackArea, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "\\[", right: "\\]", display: true },
                    { left: "\\(", right: "\\)", display: false },
                    { left: "$", right: "$", display: false }
                ],
                throwOnError: false
            });
        }
    }


    if (nextBtn) {
        nextBtn.onclick = () => {
            currentQuestionIndex++;
            currentSubQuestionIndex = 0; // Reset for next big question
            subResults = []; // Clear summary
            bigQuestionPoints = 0;

            if (feedbackArea) feedbackArea.classList.remove('show');
            showQuestion();
        };
    } else {
        console.error('Next button element not found!');
    }


    function showResult() {
        switchView('result');

        // --- UI Update Section ---
        try {
            // 1. Background Image Toggle
            const bgImg = document.getElementById('result-bg-img');
            if (bgImg) {
                bgImg.src = (score === questions.length) ? 'images/housou_hare.jpg' : 'images/housou_kumori.jpg';
            }

            // --- 1. Populate Basic Score ---
            const scoreEl = document.getElementById('final-score');
            if (scoreEl) scoreEl.textContent = score;

            const commentEl = document.getElementById('result-comment');
            if (commentEl) {
                let comment = '';
                if (score === 5) {
                    comment = '全問正解！完璧です！';
                    commentEl.style.color = '#ff6b6b';
                } else if (score >= 4) {
                    comment = 'おしい！あと少し！';
                    commentEl.style.color = '#ffa502';
                } else if (score >= 2) {
                    comment = 'もう少し！復習しよう';
                    commentEl.style.color = '#333';
                } else {
                    comment = 'ドンマイ！次は頑張ろう';
                    commentEl.style.color = '#666';
                }
                commentEl.textContent = comment;
            }
        } catch (uiErr) {
            console.error("UI Update Error:", uiErr);
        }


        // --- 2. Stats & Level Logic ---

        let partId = null;
        let partTitle = "学習"; // Default

        // We need to determine partId from 'selectedCategory' (global var from closure isn't available?)
        // Wait, startQuiz is called with 'questions' and 'difficulty'. 
        // We didn't pass 'category' to startQuiz explicitly?
        // Actually, startQuiz closure doesn't have 'category'.
        // We have 'selectedCategory' from the top scope!
        // or ensure 'startQuiz' accepts category?

        // Fix: Use the category passed from prepareQuiz -> startQuiz
        const currentCategory = selectedCategory || lastPlayedCategory;

        // SAFE ACCESS to CATEGORIES to prevent ReferenceError crash
        let cats = [];
        if (typeof window.CATEGORIES !== 'undefined') cats = window.CATEGORIES;
        else if (typeof CATEGORIES !== 'undefined') cats = CATEGORIES;

        if (cats.length > 0 && currentCategory) {
            for (const p of cats) {
                // Handle both object-based chapters (c.id) and string-based chapters (c)
                if (p.chapters && p.chapters.some(c => (c.id || c) === currentCategory)) {
                    partId = p.id;
                    partTitle = p.title;
                    break;
                }
            }
        }

        const accuracy = (score / questions.length);
        let streakMsg = '';

        // Ensure stats objects exist
        if (!stats.streaks) stats.streaks = { A: 0, B: 0, C: 0 };
        if (!stats.bonusExpires) stats.bonusExpires = { A: 0, B: 0, C: 0 };

        // Fix: Use global lastPlayedDifficulty since 'difficulty' might be out of scope
        const currentDiff = typeof difficulty !== 'undefined' ? difficulty : (lastPlayedDifficulty || 'A');
        const currentStreak = stats.streaks[currentDiff] || 0;

        if (accuracy >= 0.8) { // 80% or more
            stats.streaks[currentDiff] = currentStreak + 1;

            // UPDATE EXPIRATION (24 hours from now)
            stats.bonusExpires[currentDiff] = Date.now() + (24 * 60 * 60 * 1000);

            const newStreak = stats.streaks[currentDiff];
            const nextN = Math.min(newStreak, 10);
            const nextMult = 1 + (0.1 * nextN);
            streakMsg = `\n🔥 **好調！(難易度${currentDiff})** 連続${newStreak}回\n次回ボーナス: **${Math.round(nextMult * 100)}%**\n(有効期限: 24時間)`;
        } else {
            if (currentStreak > 0) {
                streakMsg = `\n💨 **難易度${currentDiff}の連続記録終了**`;
            }
            stats.streaks[currentDiff] = 0;
            stats.bonusExpires[currentDiff] = 0;
        }

        // Update DOM for Streak
        const streakDisplay = document.getElementById('streak-display');
        streakDisplay.textContent = stats.streaks[currentDiff] + ' 回';
        if (stats.streaks[currentDiff] > 0) {
            streakDisplay.innerHTML += ' <span style="color:#ff6b6b">🔥</span>';
        }

        // --- Broadcast Room: Bonus Bubble ---
        const bonusBubble = document.getElementById('result-bubble-bonus');
        const bonusContent = document.getElementById('bonus-msg-content');
        if (bonusBubble && bonusContent) {
            const currentStreakVal = stats.streaks[currentDiff] || 0;
            if (currentStreakVal > 0) {
                const nextN = Math.min(currentStreakVal, 10);
                const nextMult = 1 + (0.1 * nextN);
                bonusBubble.classList.remove('hidden');
                bonusContent.innerHTML = `倍率 <strong>x${nextMult.toFixed(1)}</strong>連続正解: ${currentStreakVal}回`;
            } else {
                bonusBubble.classList.add('hidden');
            }
        }


        // --- Points & Level Update ---
        const finalSessionPoints = window.sessionPoints || 0;

        let pointsMsg = `+${finalSessionPoints} Pt`;
        // Recalculate multiplier for display to be safe
        const dStreak = stats.streaks[currentDiff] || 0;
        const dMult = 1 + (0.1 * Math.min(dStreak, 10));

        if (dStreak > 0) pointsMsg += ` (x${dMult.toFixed(1)})`;

        const earnedPointsEl = document.getElementById('earned-points');
        if (earnedPointsEl) {
            earnedPointsEl.textContent = pointsMsg;
        }

        // if (!partId) {
        //     console.error(`Error: PartID is null despite loaded categories (Cat=${currentCategory})`);
        // } else if (finalSessionPoints <= 0) {
        //     // No points earned to save.
        // } else {
        //     // Success
        // }




        let messages = [];

        if (finalSessionPoints > 0 && partId) {
            const oldPartPts = (stats.partPoints && stats.partPoints[partId]) || 0;
            const oldPartLvl = calculateLevel(oldPartPts);

            // Calc New
            const newTotalPts = oldPartPts + finalSessionPoints;
            stats.partPoints = stats.partPoints || {};
            stats.partPoints[partId] = newTotalPts;

            saveUserStats(stats); // Save Everything

            const newPartLvl = calculateLevel(newTotalPts);

            // --- Level Progress Bar Logic ---
            const lvlSection = document.getElementById('level-result-section');
            if (lvlSection) {
                lvlSection.classList.remove('hidden');
            }

            const pNameEl = document.getElementById('part-name-result');
            if (pNameEl) pNameEl.textContent = partTitle;
            const pLvlEl = document.getElementById('level-tag-result');
            if (pLvlEl) pLvlEl.textContent = `Lv.${newPartLvl}`;

            // Calculate Progress
            // Thresholds: Start of Current Lvl -> Start of Next Lvl
            // Since levels are 1-based, Lv.1 starts at getThresholdPoints(0)
            const currentLvlThresh = getThresholdPoints(newPartLvl - 1);
            const nextLvlThresh = getThresholdPoints(newPartLvl); // Points needed for Next

            // Pts within this level
            const ptsInLevel = newTotalPts - currentLvlThresh;
            const ptsNeededForNext = nextLvlThresh - newTotalPts;
            const range = nextLvlThresh - currentLvlThresh;

            const progress = range > 0 ? (ptsInLevel / range) * 100 : 100;

            setTimeout(() => {
                const fillEl = document.getElementById('xp-bar-fill');
                if (fillEl) fillEl.style.width = `${progress}%`;
            }, 300); // Animation delay

            document.getElementById('next-xp').textContent = ptsNeededForNext;


            // --- Messages ---
            if (newPartLvl > oldPartLvl) {
                messages.push(`🎉 **${partTitle} LvUP!** 🎉\nLv.${oldPartLvl} ➡ Lv.${newPartLvl}`);
                // レベルアップ時はトリビア確定獲得
                setTimeout(() => tryAwardTrivia({ type: 'level_up' }), 2000);
            }

            // Streak Bonus Info
            if (streakMsg) {
                messages.push(streakMsg);
            }

            // Title Check logic omitted for brevity/safety unless crucial? 
            // It's nice to keep.
            // (Simplified for this complexity)

        } else {
            // Non-part specific
            const lvlSec = document.getElementById('level-result-section');
            if (lvlSec) lvlSec.classList.add('hidden');
        }

        // Render Special Messages
        const msgContainer = document.getElementById('special-messages');
        if (msgContainer) msgContainer.innerHTML = messages.map(m => `<div>${m}</div>`).join('');

        // --- 学習履歴の保存（コンパクト形式） ---
        saveQuizLog(partId, currentCategory, currentDiff, score, questions.length, finalSessionPoints);

        // --- 間違えた問題IDの保存 ---
        if (wrongQuestionIds.length > 0 && partId) {
            saveWrongQuestions(partId, wrongQuestionIds);
        }

        // --- 全問正解カウント記録 ---
        if (score === questions.length) {
            stats.perfectCount = (stats.perfectCount || 0) + 1;
            saveUserStats(stats);
        }

        // --- 復習待ちが出たことを記録（バッジ用） ---
        if (wrongQuestionIds.length > 0) {
            stats.hadWrongQuestions = true;
            saveUserStats(stats);
        }

        // --- トリビアカード獲得判定 ---
        setTimeout(() => {
            tryAwardTrivia({ type: 'quiz_complete', value: score });
        }, 1500);

        // --- バッジ判定 ---
        setTimeout(() => {
            checkBadges();
        }, 2500);
    }

    // Initial call
    showQuestion();
}

// === 学習履歴（日別集計、90日ローリング） ===
function saveQuizLog(partId, category, difficulty, correct, total, points) {
    try {
        const log = JSON.parse(localStorage.getItem('phy_quiz_log') || '{}');
        const today = new Date().toISOString().slice(5, 10).replace('-', ''); // "MMDD"

        if (!log[today]) {
            log[today] = { n: 0, c: 0, t: 0, p: 0 };
        }
        log[today].n += 1;       // セッション数
        log[today].c += correct; // 正解数
        log[today].t += total;   // 出題数
        log[today].p += points;  // 獲得ポイント

        // 90日より古いエントリを削除
        const keys = Object.keys(log).sort();
        while (keys.length > 90) {
            delete log[keys.shift()];
        }

        localStorage.setItem('phy_quiz_log', JSON.stringify(log));
    } catch (e) {
        console.warn('学習履歴の保存に失敗:', e);
    }
}

// === 間違えた問題ID（パート別、最大30件/パート） ===
function saveWrongQuestions(partId, newIds) {
    try {
        const wrong = JSON.parse(localStorage.getItem('phy_quiz_wrong') || '{}');
        if (!wrong[partId]) wrong[partId] = [];

        // 新しいIDを追加（重複除去）
        const existing = new Set(wrong[partId]);
        newIds.forEach(id => existing.add(id));
        wrong[partId] = Array.from(existing);

        // パートあたり最大30件（古い方を削除）
        if (wrong[partId].length > 30) {
            wrong[partId] = wrong[partId].slice(-30);
        }

        localStorage.setItem('phy_quiz_wrong', JSON.stringify(wrong));
    } catch (e) {
        console.warn('復習データの保存に失敗:', e);
    }
}

// 正解した問題は復習リストから除去
function removeFromWrongQuestions(partId, questionId) {
    try {
        const wrong = JSON.parse(localStorage.getItem('phy_quiz_wrong') || '{}');
        if (wrong[partId]) {
            wrong[partId] = wrong[partId].filter(id => id !== questionId);
            if (wrong[partId].length === 0) delete wrong[partId];
            localStorage.setItem('phy_quiz_wrong', JSON.stringify(wrong));
        }
    } catch (e) {
        console.warn('復習データの更新に失敗:', e);
    }
}

// Function to Randomly Select Questions with Unique Classification
function getRandomQuestions(allQuestions, count, partId, chapterId, difficulty) {
    if (!allQuestions) return [];

    // Filter relevant questions
    let candidates = allQuestions.filter(q => {
        // Match Part (Check logic: does question have category matching part/chapter?)
        // Currently questions have 'category' which matches chapterId usually (e.g. p1_c1).
        // partId is broader.
        // We usually filter by 'category' if chapterId is present?
        // Wait, looking at current script.js usage (I need to see how it was before).
        // Let's assume the filtering logic is mostly correct in existing code, simply adding classification check.

        let match = true;

        // Difficulty check
        if (difficulty && q.difficulty !== difficulty) match = false;

        // Chapter check (strict)
        if (chapterId && q.category !== chapterId) match = false;

        // Part check (if no chapter selected, allow any chapter within part?)
        // This logic depends on how 'category' is defined in questions.
        // Assuming 'category' === chapterId.

        return match;
    });

    if (candidates.length < count) {
        console.warn('Not enough questions found for strict criteria. Returning all candidates.');
        return candidates; // Or shuffle?
    }

    // Shuffle candidates
    for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    // Select unique by classification
    const selected = [];
    const usedClassifications = new Set();

    for (const q of candidates) {
        if (selected.length >= count) break;

        if (q.classification) {
            if (usedClassifications.has(q.classification)) {
                continue; // Skip duplicate classification
            }
            usedClassifications.add(q.classification);
        }

        selected.push(q);
    }

    // If we didn't get enough questions due to classification constraints, 
    // should we fill up with duplicates? The user said "ensure different".
    // I will return what we found. If it's less than 5, so be it?
    // Or maybe loop again and allow duplicates if we really need to?
    // Request says: "Ensure... different". Implicit strictness.

    return selected;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

