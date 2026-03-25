/**
 * バッジ（実績）定義
 *
 * check: function(stats, log, wrong) => boolean
 *   stats: phy_quiz_user_stats から取得したオブジェクト
 *   log:   phy_quiz_log から取得したオブジェクト
 *   wrong: phy_quiz_wrong から取得したオブジェクト
 */
const BADGES = [
    // === 初心者系 ===
    {
        id: "b001",
        icon: "🔰",
        title: "はじめの一歩",
        description: "初めてクイズに挑戦した",
        check: (stats) => {
            if (!stats.partPoints) return false;
            return Object.values(stats.partPoints).some(p => p > 0);
        }
    },
    {
        id: "b002",
        icon: "🎯",
        title: "全問正解！",
        description: "1セッションで全問正解を達成",
        check: (stats) => (stats.perfectCount || 0) >= 1
    },
    {
        id: "b003",
        icon: "📖",
        title: "全分野チャレンジ",
        description: "6つの分野すべてに挑戦した",
        check: (stats) => {
            if (!stats.partPoints) return false;
            const parts = ['part0', 'part1', 'part2', 'part3', 'part4', 'part5'];
            return parts.every(p => (stats.partPoints[p] || 0) > 0);
        }
    },

    // === 継続系 ===
    {
        id: "b004",
        icon: "🔥",
        title: "3日連続学習",
        description: "3日間連続で学習した",
        check: (stats, log) => calcStreak(log) >= 3
    },
    {
        id: "b005",
        icon: "🔥",
        title: "7日連続学習",
        description: "7日間連続で学習した",
        check: (stats, log) => calcStreak(log) >= 7
    },
    {
        id: "b006",
        icon: "🔥",
        title: "14日連続学習",
        description: "14日間連続で学習した",
        check: (stats, log) => calcStreak(log) >= 14
    },
    {
        id: "b007",
        icon: "🔥",
        title: "30日連続学習",
        description: "30日間連続で学習した",
        check: (stats, log) => calcStreak(log) >= 30
    },

    // === レベル系 ===
    {
        id: "b008",
        icon: "⭐",
        title: "Lv.5 到達",
        description: "いずれかの分野でLv.5に到達",
        check: (stats) => maxPartLevel(stats) >= 5
    },
    {
        id: "b009",
        icon: "⭐",
        title: "Lv.10 到達",
        description: "いずれかの分野でLv.10に到達",
        check: (stats) => maxPartLevel(stats) >= 10
    },
    {
        id: "b010",
        icon: "🌟",
        title: "Lv.20 到達",
        description: "いずれかの分野でLv.20に到達",
        check: (stats) => maxPartLevel(stats) >= 20
    },
    {
        id: "b011",
        icon: "👑",
        title: "Lv.30 マスター",
        description: "いずれかの分野でLv.30（最大）に到達",
        check: (stats) => maxPartLevel(stats) >= 30
    },

    // === 問題数系 ===
    {
        id: "b012",
        icon: "📝",
        title: "10セッション達成",
        description: "累計10セッションをクリア",
        check: (stats, log) => totalSessions(log) >= 10
    },
    {
        id: "b013",
        icon: "📝",
        title: "50セッション達成",
        description: "累計50セッションをクリア",
        check: (stats, log) => totalSessions(log) >= 50
    },
    {
        id: "b014",
        icon: "📝",
        title: "100セッション達成",
        description: "累計100セッションをクリア",
        check: (stats, log) => totalSessions(log) >= 100
    },

    // === 復習系 ===
    {
        id: "b015",
        icon: "♻️",
        title: "復習マスター",
        description: "復習モードで全問正解した",
        check: (stats) => (stats.reviewPerfectCount || 0) >= 1
    },
    {
        id: "b016",
        icon: "✨",
        title: "復習リストクリア",
        description: "復習待ちの問題を0にした",
        check: (stats, log, wrong) => {
            // 一度でも問題をやったことがある & 現在wrong=0
            const hasPlayed = stats.partPoints && Object.values(stats.partPoints).some(p => p > 0);
            if (!hasPlayed) return false;
            let count = 0;
            Object.values(wrong).forEach(ids => count += ids.length);
            return count === 0 && (stats.hadWrongQuestions || false);
        }
    },

    // === ストリーク系 ===
    {
        id: "b017",
        icon: "🎯",
        title: "5連続正解ボーナス",
        description: "同じ難易度で5連続80%以上を達成",
        check: (stats) => {
            if (!stats.streaks) return false;
            return Object.values(stats.streaks).some(s => s >= 5);
        }
    },

    // === コレクション系 ===
    {
        id: "b018",
        icon: "📚",
        title: "トリビアコレクター",
        description: "トリビアカードを10枚集めた",
        check: () => {
            const owned = JSON.parse(localStorage.getItem('phy_quiz_trivia') || '[]');
            return owned.length >= 10;
        }
    },
    {
        id: "b019",
        icon: "📚",
        title: "トリビアマスター",
        description: "トリビアカードをすべて集めた",
        check: () => {
            const owned = JSON.parse(localStorage.getItem('phy_quiz_trivia') || '[]');
            return typeof TRIVIA_CARDS !== 'undefined' && owned.length >= TRIVIA_CARDS.length;
        }
    },

    // === 特別 ===
    {
        id: "b020",
        icon: "🏆",
        title: "総合Lv.100",
        description: "総合レベル100を達成した",
        check: (stats) => {
            if (!stats.partPoints) return false;
            let total = 0;
            Object.values(stats.partPoints).forEach(pts => {
                total += (typeof calculateLevel === 'function') ? calculateLevel(pts) : 0;
            });
            return total >= 100;
        }
    }
];

// === バッジ用ヘルパー関数 ===
function calcStreak(log) {
    const today = new Date();
    let streak = 0;
    for (let i = 0; i < 90; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
        if (log[key]) {
            streak++;
        } else {
            if (i > 0) break;
        }
    }
    return streak;
}

function maxPartLevel(stats) {
    if (!stats.partPoints || typeof calculateLevel !== 'function') return 0;
    let max = 0;
    Object.values(stats.partPoints).forEach(pts => {
        const lv = calculateLevel(pts);
        if (lv > max) max = lv;
    });
    return max;
}

function totalSessions(log) {
    let total = 0;
    Object.values(log).forEach(entry => { total += entry.n; });
    return total;
}
