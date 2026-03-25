window.loadQuizData("part0", [
    // ============================================================
    // 第0編 物理のための数学（50問）
    // セクション: 三角比と三角関数 / ベクトル / その他の数学の知識
    // ============================================================

    // --- 三角比と三角関数 ---

    // A: 教科書の確認レベル
    {
        "id": 1,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\sin 30°$ の値はどれか。",
        "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{2}}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$1$"
        ],
        "answer": 0,
        "explanation": "30°-60°-90° の直角三角形より、$\\sin 30° = \\dfrac{1}{2}$ です。",
        "image_url": ""
    },
    {
        "id": 2,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\cos 60°$ の値はどれか。",
        "options": [
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{2}}{2}$",
            "$0$"
        ],
        "answer": 1,
        "explanation": "$\\cos 60° = \\dfrac{1}{2}$ です。$\\cos 60° = \\sin 30°$ であることも覚えておきましょう。",
        "image_url": ""
    },
    {
        "id": 3,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\tan 45°$ の値はどれか。",
        "options": [
            "$0$",
            "$1$",
            "$\\sqrt{2}$",
            "$\\dfrac{1}{\\sqrt{2}}$"
        ],
        "answer": 1,
        "explanation": "45°-45°-90° の直角三角形では $\\sin 45° = \\cos 45°$ なので、$\\tan 45° = \\dfrac{\\sin 45°}{\\cos 45°} = 1$ です。",
        "image_url": ""
    },

    // B: 公式をそのまま使って解けるレベル
    {
        "id": 4,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "斜面の角度が $30°$、斜面の長さが $10\\text{ m}$ のとき、斜面の高さはいくらか。",
        "options": [
            "$5.0\\text{ m}$",
            "$5\\sqrt{3}\\text{ m}$",
            "$10\\text{ m}$",
            "$\\dfrac{10}{\\sqrt{3}}\\text{ m}$"
        ],
        "answer": 0,
        "explanation": "高さ $= 10 \\times \\sin 30° = 10 \\times \\dfrac{1}{2} = 5.0\\text{ m}$ です。",
        "image_url": ""
    },
    {
        "id": 5,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "直角三角形の斜辺が $20\\text{ cm}$、斜辺と底辺の間の角度が $60°$ のとき、底辺の長さはいくらか。",
        "options": [
            "$10\\text{ cm}$",
            "$10\\sqrt{3}\\text{ cm}$",
            "$20\\text{ cm}$",
            "$\\dfrac{20}{\\sqrt{3}}\\text{ cm}$"
        ],
        "answer": 0,
        "explanation": "底辺 $= 20 \\times \\cos 60° = 20 \\times \\dfrac{1}{2} = 10\\text{ cm}$ です。",
        "image_url": ""
    },

    // C: 三角関数の公式を使った問題
    {
        "id": 6,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\sin^2 \\theta + \\cos^2 \\theta$ の値はいくらか。",
        "options": [
            "$0$",
            "$1$",
            "$2$",
            "$\\theta$ による"
        ],
        "answer": 1,
        "explanation": "三角関数の基本公式 $\\sin^2 \\theta + \\cos^2 \\theta = 1$ は $\\theta$ の値によらず常に成り立ちます。",
        "image_url": ""
    },
    {
        "id": 7,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\sin 30° \\cos 60° + \\cos 30° \\sin 60°$ の値はいくらか。",
        "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$1$",
            "$\\sqrt{3}$"
        ],
        "answer": 2,
        "explanation": "加法定理 $\\sin(A+B) = \\sin A \\cos B + \\cos A \\sin B$ より、$\\sin(30°+60°) = \\sin 90° = 1$ です。または、$\\dfrac{1}{2} \\times \\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2} \\times \\dfrac{\\sqrt{3}}{2} = \\dfrac{1}{4} + \\dfrac{3}{4} = 1$ と直接計算してもよいです。",
        "image_url": ""
    },

    // --- ベクトル ---

    // A: 教科書の確認レベル
    {
        "id": 8,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "ベクトル",
        "question": "ベクトルについての記述として正しいものはどれか。",
        "options": [
            "大きさと向きを持つ量である",
            "大きさのみを持つ量である",
            "向きのみを持つ量である",
            "単位を持たない量である"
        ],
        "answer": 0,
        "explanation": "ベクトルは大きさと向きを持つ量です。一方、大きさのみを持つ量はスカラーといいます。物理では力・速度・加速度などがベクトルです。",
        "image_url": ""
    },
    {
        "id": 9,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "ベクトル",
        "question": "ベクトル $\\vec{a}$ と $-\\vec{a}$ は、大きさが等しく向きが反対のベクトルである。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "$-\\vec{a}$ は $\\vec{a}$ と大きさが等しく、向きが反対（逆向き）のベクトルです。これを逆ベクトルといいます。",
        "image_url": ""
    },

    // B: 公式をそのまま使って解けるレベル
    {
        "id": 10,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (3, 4)$ のとき、$|\\vec{a}|$（ベクトルの大きさ）はいくらか。",
        "options": [
            "$5$",
            "$7$",
            "$1$",
            "$12$"
        ],
        "answer": 0,
        "explanation": "ベクトルの大きさは $|\\vec{a}| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$ です。",
        "image_url": ""
    },
    {
        "id": 11,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (2, 5)$、$\\vec{b} = (3, -1)$ のとき、$\\vec{a} + \\vec{b}$ はどれか。",
        "options": [
            "$(5, 4)$",
            "$(1, 6)$",
            "$(-1, 6)$",
            "$(6, 4)$"
        ],
        "answer": 0,
        "explanation": "ベクトルの足し算は成分ごとに行います。$\\vec{a} + \\vec{b} = (2+3,\\ 5+(-1)) = (5, 4)$ です。",
        "image_url": ""
    },

    // C: ひと手間加えないと解けないレベル
    {
        "id": 12,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (1, 2)$、$\\vec{b} = (3, -1)$ のとき、$|\\vec{a} - \\vec{b}|$ はいくらか。",
        "options": [
            "$\\sqrt{13}$",
            "$\\sqrt{5}$",
            "$5$",
            "$\\sqrt{10}$"
        ],
        "answer": 0,
        "explanation": "$\\vec{a} - \\vec{b} = (1-3,\\ 2-(-1)) = (-2, 3)$ です。大きさは $|\\vec{a} - \\vec{b}| = \\sqrt{(-2)^2 + 3^2} = \\sqrt{4+9} = \\sqrt{13}$ です。",
        "image_url": ""
    },
    {
        "id": 13,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (4, 0)$、$\\vec{b} = (0, 3)$ のとき、$2\\vec{a} - \\vec{b}$ の大きさはいくらか。",
        "options": [
            "$\\sqrt{73}$",
            "$5$",
            "$\\sqrt{55}$",
            "$\\sqrt{61}$"
        ],
        "answer": 0,
        "explanation": "$2\\vec{a} - \\vec{b} = (8, 0) - (0, 3) = (8, -3)$ です。大きさは $\\sqrt{8^2 + (-3)^2} = \\sqrt{64+9} = \\sqrt{73}$ です。",
        "image_url": ""
    },

    // --- その他の数学の知識 ---

    // A: 教科書の確認レベル（指数・有効数字）
    {
        "id": 14,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$3.0 \\times 10^3$ は何を表すか。",
        "options": [
            "$30$",
            "$300$",
            "$3000$",
            "$30000$"
        ],
        "answer": 2,
        "explanation": "$3.0 \\times 10^3 = 3.0 \\times 1000 = 3000$ です。$10^n$ は $1$ の後に $n$ 個の $0$ がつく数です。",
        "image_url": ""
    },
    {
        "id": 15,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$0.0025$ を有効数字2桁で表すとどれか。",
        "options": [
            "$2.5 \\times 10^{-3}$",
            "$25 \\times 10^{-4}$",
            "$0.25 \\times 10^{-2}$",
            "$2.5 \\times 10^{3}$"
        ],
        "answer": 0,
        "explanation": "$0.0025 = 2.5 \\times 10^{-3}$ です。有効数字2桁で表記するには、整数部を1桁にして $\\times 10^n$ の形にします。",
        "image_url": ""
    },

    // B: 通分・連立方程式
    {
        "id": 16,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$\\dfrac{1}{3} + \\dfrac{1}{6}$ を計算するとどれか。",
        "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{2}{9}$",
            "$\\dfrac{1}{9}$",
            "$\\dfrac{1}{18}$"
        ],
        "answer": 0,
        "explanation": "通分して $\\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$ です。",
        "image_url": ""
    },
    {
        "id": 17,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "次の連立方程式を解け。$2x + y = 7$、$x - y = 2$。$x$ の値はいくらか。",
        "options": [
            "$1$",
            "$2$",
            "$3$",
            "$4$"
        ],
        "answer": 2,
        "explanation": "2式を加えると $3x = 9$ より $x = 3$ です。$y = 7 - 2 \\times 3 = 1$ で確認できます。",
        "image_url": ""
    },

    // C: 文字式での通分・連立方程式
    {
        "id": 18,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$\\dfrac{1}{R}=\\dfrac{1}{R_1}+\\dfrac{1}{R_2}$ を $R$ について解くとどれか。",
        "options": [
            "$R = R_1 + R_2$",
            "$R = \\dfrac{R_1 R_2}{R_1 + R_2}$",
            "$R = \\dfrac{R_1 + R_2}{R_1 R_2}$",
            "$R = \\dfrac{1}{R_1 + R_2}$"
        ],
        "answer": 1,
        "explanation": "右辺を通分すると $\\dfrac{1}{R} = \\dfrac{R_1 + R_2}{R_1 R_2}$ です。逆数をとると $R = \\dfrac{R_1 R_2}{R_1 + R_2}$ となります。これは並列接続の合成抵抗の公式です。",
        "image_url": ""
    },
    {
        "id": 19,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$mv_1 + Mv_2 = (m+M)V$ と $\\dfrac{1}{2}mv_1^2 = \\dfrac{1}{2}(m+M)V^2$ が成り立つとき、$V$ を $m$、$M$、$v_1$ で表すとどれか。ただし $v_2 = 0$ とする。",
        "options": [
            "$V = \\dfrac{m}{m+M}v_1$",
            "$V = \\dfrac{M}{m+M}v_1$",
            "$V = \\dfrac{m+M}{m}v_1$",
            "$V = v_1$"
        ],
        "answer": 0,
        "explanation": "$v_2 = 0$ を代入すると $mv_1 = (m+M)V$ より $V = \\dfrac{m}{m+M}v_1$ です。これは完全非弾性衝突の速度の式です。",
        "image_url": ""
    },
    {
        "id": 20,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$10^3 \\times 10^{-5}$ を計算するとどれか。",
        "options": [
            "$10^{-15}$",
            "$10^{-2}$",
            "$10^{2}$",
            "$10^{8}$"
        ],
        "answer": 1,
        "explanation": "指数法則 $10^a \\times 10^b = 10^{a+b}$ より、$10^{3+(-5)} = 10^{-2}$ です。",
        "image_url": ""
    },

    // ============================================================
    // 追加30問（ID 21〜50）
    // ============================================================

    // --- 三角比と三角関数（追加） ---

    // A-1
    {
        "id": 21,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\sin 90°$ の値はどれか。",
        "options": [
            "$0$",
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$1$"
        ],
        "answer": 3,
        "explanation": "$\\sin 90° = 1$ です。単位円上で角度 $90°$ の点は $(0, 1)$ なので、$y$ 座標が $\\sin$ の値です。",
        "image_url": ""
    },
    // A-2
    {
        "id": 22,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "三角比と三角関数",
        "question": "$\\cos 90° = 0$ である。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "単位円上で角度 $90°$ の点は $(0, 1)$ なので、$x$ 座標である $\\cos 90° = 0$ です。",
        "image_url": ""
    },
    // A-3
    {
        "id": 23,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\sin 45°$ の値はどれか。",
        "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{2}}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$1$"
        ],
        "answer": 1,
        "explanation": "45°-45°-90° の直角三角形より、$\\sin 45° = \\dfrac{\\sqrt{2}}{2} = \\dfrac{1}{\\sqrt{2}}$ です。",
        "image_url": ""
    },
    // A-4
    {
        "id": 24,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "三角比と三角関数",
        "question": "$\\tan 60° = \\sqrt{3}$ である。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "$\\tan 60° = \\dfrac{\\sin 60°}{\\cos 60°} = \\dfrac{\\frac{\\sqrt{3}}{2}}{\\frac{1}{2}} = \\sqrt{3}$ です。",
        "image_url": ""
    },
    // A-5
    {
        "id": 25,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "三角比と三角関数",
        "question": "$\\sin 0° = 1$ である。",
        "options": ["〇", "✕"],
        "answer": 1,
        "explanation": "$\\sin 0° = 0$ です。$\\sin 0° = 1$ は誤りです。$\\sin 90° = 1$ と混同しないようにしましょう。",
        "image_url": ""
    },
    // B-1
    {
        "id": 26,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "水平面と角度 $45°$ をなす方向に速さ $10\\text{ m/s}$ で物体を投げた。水平方向の速度成分はいくらか。",
        "options": [
            "$5\\text{ m/s}$",
            "$5\\sqrt{2}\\text{ m/s}$",
            "$10\\text{ m/s}$",
            "$\\dfrac{10}{\\sqrt{2}}\\text{ m/s}$"
        ],
        "answer": 1,
        "explanation": "水平方向の速度成分は $10 \\times \\cos 45° = 10 \\times \\dfrac{\\sqrt{2}}{2} = 5\\sqrt{2}\\text{ m/s}$ です。選択肢の $\\dfrac{10}{\\sqrt{2}} = 5\\sqrt{2}$ ですが、有理化した $5\\sqrt{2}$ が正答です。",
        "image_url": ""
    },
    // B-2
    {
        "id": 27,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "斜面の角度が $60°$、斜面に沿って $8.0\\text{ m}$ 移動した。水平方向の移動距離はいくらか。",
        "options": [
            "$4.0\\text{ m}$",
            "$4\\sqrt{3}\\text{ m}$",
            "$8.0\\text{ m}$",
            "$\\dfrac{8}{\\sqrt{3}}\\text{ m}$"
        ],
        "answer": 0,
        "explanation": "水平方向の移動距離は $8.0 \\times \\cos 60° = 8.0 \\times \\dfrac{1}{2} = 4.0\\text{ m}$ です。",
        "image_url": ""
    },
    // C-1
    {
        "id": 28,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\cos 30° \\cos 60° - \\sin 30° \\sin 60°$ の値はいくらか。",
        "options": [
            "$0$",
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$1$"
        ],
        "answer": 0,
        "explanation": "加法定理 $\\cos(A+B) = \\cos A \\cos B - \\sin A \\sin B$ より、$\\cos(30°+60°) = \\cos 90° = 0$ です。",
        "image_url": ""
    },

    // --- ベクトル（追加） ---

    // A-6
    {
        "id": 29,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "ベクトル",
        "question": "速さはスカラー量であり、速度はベクトル量である。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "速さは大きさのみのスカラー量、速度は大きさと向きを持つベクトル量です。物理ではこの区別が重要です。",
        "image_url": ""
    },
    // A-7
    {
        "id": 30,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "ベクトル",
        "question": "次のうち、スカラー量はどれか。",
        "options": [
            "力",
            "加速度",
            "質量",
            "速度"
        ],
        "answer": 2,
        "explanation": "質量は大きさのみを持つスカラー量です。力・加速度・速度は大きさと向きを持つベクトル量です。",
        "image_url": ""
    },
    // A-8
    {
        "id": 31,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "ベクトル",
        "question": "2つのベクトルの大きさが等しければ、それらは同じベクトルである。",
        "options": ["〇", "✕"],
        "answer": 1,
        "explanation": "ベクトルが等しいためには大きさだけでなく向きも等しくなければなりません。大きさが等しくても向きが異なれば別のベクトルです。",
        "image_url": ""
    },
    // B-3
    {
        "id": 32,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (1, \\sqrt{3})$ のとき、$|\\vec{a}|$ はいくらか。",
        "options": [
            "$2$",
            "$\\sqrt{2}$",
            "$4$",
            "$1 + \\sqrt{3}$"
        ],
        "answer": 0,
        "explanation": "$|\\vec{a}| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$ です。",
        "image_url": ""
    },
    // B-4
    {
        "id": 33,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (6, -2)$、$\\vec{b} = (-1, 5)$ のとき、$\\vec{a} - \\vec{b}$ はどれか。",
        "options": [
            "$(7, -7)$",
            "$(5, 3)$",
            "$(7, 7)$",
            "$(5, -7)$"
        ],
        "answer": 0,
        "explanation": "$\\vec{a} - \\vec{b} = (6-(-1),\\ -2-5) = (7, -7)$ です。",
        "image_url": ""
    },
    // B-5
    {
        "id": 34,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (2, 3)$ のとき、$3\\vec{a}$ はどれか。",
        "options": [
            "$(6, 9)$",
            "$(5, 6)$",
            "$(6, 3)$",
            "$(2, 9)$"
        ],
        "answer": 0,
        "explanation": "スカラー倍は各成分に掛けます。$3\\vec{a} = (3 \\times 2,\\ 3 \\times 3) = (6, 9)$ です。",
        "image_url": ""
    },
    // C-2
    {
        "id": 35,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "ベクトル",
        "question": "大きさ $5$ のベクトルが $x$ 軸と $30°$ の角をなしている。このベクトルの $y$ 成分はいくらか。",
        "options": [
            "$\\dfrac{5}{2}$",
            "$\\dfrac{5\\sqrt{3}}{2}$",
            "$5$",
            "$\\dfrac{5\\sqrt{2}}{2}$"
        ],
        "answer": 0,
        "explanation": "$y$ 成分は $5 \\sin 30° = 5 \\times \\dfrac{1}{2} = \\dfrac{5}{2}$ です。ベクトルの成分分解では、$x$ 成分に $\\cos$、$y$ 成分に $\\sin$ を使います。",
        "image_url": ""
    },

    // --- その他の数学の知識（追加） ---

    // A-9
    {
        "id": 36,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$1\\text{ km}$ は何 $\\text{m}$ か。",
        "options": [
            "$10\\text{ m}$",
            "$100\\text{ m}$",
            "$1000\\text{ m}$",
            "$10000\\text{ m}$"
        ],
        "answer": 2,
        "explanation": "$1\\text{ km} = 1000\\text{ m} = 10^3\\text{ m}$ です。$\\text{k}$（キロ）は $10^3$ を表す接頭辞です。",
        "image_url": ""
    },
    // A-10
    {
        "id": 37,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "その他の数学の知識",
        "question": "$1\\text{ m} = 10^{-3}\\text{ km}$ である。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "$1\\text{ km} = 10^3\\text{ m}$ なので、$1\\text{ m} = \\dfrac{1}{10^3}\\text{ km} = 10^{-3}\\text{ km}$ です。",
        "image_url": ""
    },
    // A-11
    {
        "id": 38,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "接頭辞「ミリ（m）」が表す倍率はどれか。",
        "options": [
            "$10^{-6}$",
            "$10^{-3}$",
            "$10^{-2}$",
            "$10^{-1}$"
        ],
        "answer": 1,
        "explanation": "ミリ（m）は $10^{-3}$ を表す接頭辞です。例えば $1\\text{ mm} = 10^{-3}\\text{ m}$ です。",
        "image_url": ""
    },
    // A-12
    {
        "id": 39,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "その他の数学の知識",
        "question": "有効数字3桁で $0.03456$ を表すと $3.46 \\times 10^{-2}$ である。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "$0.03456$ の有効数字3桁は上から3桁目（$5$）で四捨五入して $0.0346 = 3.46 \\times 10^{-2}$ です。",
        "image_url": ""
    },
    // A-13
    {
        "id": 40,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$72\\text{ km/h}$ は何 $\\text{m/s}$ か。",
        "options": [
            "$2.0\\text{ m/s}$",
            "$10\\text{ m/s}$",
            "$20\\text{ m/s}$",
            "$36\\text{ m/s}$"
        ],
        "answer": 2,
        "explanation": "$72\\text{ km/h} = 72 \\times \\dfrac{1000}{3600}\\text{ m/s} = 72 \\times \\dfrac{1}{3.6}\\text{ m/s} = 20\\text{ m/s}$ です。$\\text{km/h}$ を $\\text{m/s}$ に変換するには $3.6$ で割ります。",
        "image_url": ""
    },
    // B-6
    {
        "id": 41,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$(2.0 \\times 10^3) \\times (3.0 \\times 10^{-1})$ を計算するとどれか。",
        "options": [
            "$6.0 \\times 10^{2}$",
            "$6.0 \\times 10^{3}$",
            "$6.0 \\times 10^{-3}$",
            "$5.0 \\times 10^{2}$"
        ],
        "answer": 0,
        "explanation": "係数同士と指数同士を分けて計算します。$2.0 \\times 3.0 = 6.0$、$10^3 \\times 10^{-1} = 10^{3+(-1)} = 10^2$ より、$6.0 \\times 10^2$ です。",
        "image_url": ""
    },
    // B-7
    {
        "id": 42,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$\\dfrac{4.0 \\times 10^{6}}{2.0 \\times 10^{3}}$ を計算するとどれか。",
        "options": [
            "$2.0 \\times 10^{3}$",
            "$2.0 \\times 10^{2}$",
            "$2.0 \\times 10^{9}$",
            "$8.0 \\times 10^{3}$"
        ],
        "answer": 0,
        "explanation": "係数同士を割り、指数同士を引きます。$\\dfrac{4.0}{2.0} = 2.0$、$10^{6-3} = 10^3$ より、$2.0 \\times 10^3$ です。",
        "image_url": ""
    },
    // B-8
    {
        "id": 43,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$F = ma$ において、$m = 2.0\\text{ kg}$、$a = 3.0\\text{ m/s}^2$ のとき、$F$ はいくらか。",
        "options": [
            "$1.5\\text{ N}$",
            "$5.0\\text{ N}$",
            "$6.0\\text{ N}$",
            "$0.67\\text{ N}$"
        ],
        "answer": 2,
        "explanation": "$F = ma = 2.0 \\times 3.0 = 6.0\\text{ N}$ です。$1\\text{ N} = 1\\text{ kg} \\cdot \\text{m/s}^2$ なので単位も一致します。",
        "image_url": ""
    },
    // B-9
    {
        "id": 44,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$v = v_0 + at$ で $v_0 = 5.0\\text{ m/s}$、$a = 2.0\\text{ m/s}^2$、$t = 3.0\\text{ s}$ のとき、$v$ はいくらか。",
        "options": [
            "$7.0\\text{ m/s}$",
            "$10\\text{ m/s}$",
            "$11\\text{ m/s}$",
            "$30\\text{ m/s}$"
        ],
        "answer": 2,
        "explanation": "$v = 5.0 + 2.0 \\times 3.0 = 5.0 + 6.0 = 11\\text{ m/s}$ です。",
        "image_url": ""
    },
    // C-3
    {
        "id": 45,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$v^2 - v_0^2 = 2as$ を $s$ について解くとどれか。",
        "options": [
            "$s = \\dfrac{v^2 - v_0^2}{2a}$",
            "$s = \\dfrac{v - v_0}{2a}$",
            "$s = \\dfrac{2a}{v^2 - v_0^2}$",
            "$s = \\dfrac{v^2 + v_0^2}{2a}$"
        ],
        "answer": 0,
        "explanation": "両辺を $2a$ で割ると $s = \\dfrac{v^2 - v_0^2}{2a}$ となります。これは等加速度運動の公式の変形です。",
        "image_url": ""
    },
    // C-4
    {
        "id": 46,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ を $l$ について解くとどれか。",
        "options": [
            "$l = \\dfrac{gT^2}{4\\pi^2}$",
            "$l = \\dfrac{gT}{2\\pi}$",
            "$l = \\dfrac{4\\pi^2}{gT^2}$",
            "$l = \\dfrac{T^2}{2\\pi g}$"
        ],
        "answer": 0,
        "explanation": "両辺を2乗すると $T^2 = 4\\pi^2 \\dfrac{l}{g}$ です。$l$ について解くと $l = \\dfrac{gT^2}{4\\pi^2}$ となります。",
        "image_url": ""
    },
    // C-5
    {
        "id": 47,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$\\dfrac{1}{2}mv^2 = mgh$ から $v$ を求めるとどれか。ただし $v > 0$ とする。",
        "options": [
            "$v = \\sqrt{2gh}$",
            "$v = 2gh$",
            "$v = \\sqrt{\\dfrac{gh}{2}}$",
            "$v = \\dfrac{2gh}{m}$"
        ],
        "answer": 0,
        "explanation": "両辺を $m$ で割ると $\\dfrac{1}{2}v^2 = gh$ です。$v^2 = 2gh$ より $v = \\sqrt{2gh}$ となります。$m$ が消えることに注目しましょう。",
        "image_url": ""
    },
    // A-14 (ベクトル)
    {
        "id": 48,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "ベクトル",
        "question": "ベクトルの合成は、平行四辺形の法則または三角形の法則で行うことができる。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "2つのベクトルの合成は、平行四辺形の対角線として求める方法（平行四辺形の法則）と、一方のベクトルの終点からもう一方を繋ぐ方法（三角形の法則）があり、いずれも同じ結果になります。",
        "image_url": ""
    },
    // A-15 (その他)
    {
        "id": 49,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$10^{-6}$ を表す接頭辞はどれか。",
        "options": [
            "ナノ（n）",
            "マイクロ（$\\mu$）",
            "ミリ（m）",
            "ピコ（p）"
        ],
        "answer": 1,
        "explanation": "マイクロ（$\\mu$）は $10^{-6}$ を表す接頭辞です。ナノは $10^{-9}$、ミリは $10^{-3}$、ピコは $10^{-12}$ です。",
        "image_url": ""
    },
    // B-10 (ベクトル)
    {
        "id": 50,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "東向きに $3.0\\text{ m/s}$、北向きに $4.0\\text{ m/s}$ の速度を合成した速さはいくらか。",
        "options": [
            "$5.0\\text{ m/s}$",
            "$7.0\\text{ m/s}$",
            "$1.0\\text{ m/s}$",
            "$\\sqrt{7}\\text{ m/s}$"
        ],
        "answer": 0,
        "explanation": "東向きと北向きは直交するので、合成速度の大きさは $\\sqrt{3.0^2 + 4.0^2} = \\sqrt{9+16} = \\sqrt{25} = 5.0\\text{ m/s}$ です。",
        "image_url": ""
    },

    // ============================================================
    // 追加50問（ID 51〜100）
    // セクション: 三角比と三角関数 / ベクトル / その他の数学の知識
    // ============================================================

    // --- 三角比と三角関数（A難易度） ---

    {
        "id": 51,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "三角比と三角関数",
        "question": "$\\cos 0° = 1$ である。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "単位円上で角度 $0°$ の点は $(1, 0)$ なので、$x$ 座標である $\\cos 0° = 1$ です。",
        "image_url": ""
    },
    {
        "id": 52,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\sin 60°$ の値はどれか。",
        "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{2}}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$1$"
        ],
        "answer": 2,
        "explanation": "30°-60°-90° の直角三角形より、$\\sin 60° = \\dfrac{\\sqrt{3}}{2}$ です。",
        "image_url": ""
    },
    {
        "id": 53,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "三角比と三角関数",
        "question": "$\\tan 0° = 0$ である。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "$\\tan 0° = \\dfrac{\\sin 0°}{\\cos 0°} = \\dfrac{0}{1} = 0$ です。",
        "image_url": ""
    },
    {
        "id": 54,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\cos 45°$ の値はどれか。",
        "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{2}}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$0$"
        ],
        "answer": 1,
        "explanation": "45°-45°-90° の直角三角形より、$\\cos 45° = \\dfrac{\\sqrt{2}}{2}$ です。$\\sin 45°$ と同じ値です。",
        "image_url": ""
    },
    {
        "id": 55,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\tan 30°$ の値はどれか。",
        "options": [
            "$\\dfrac{1}{\\sqrt{3}}$",
            "$\\sqrt{3}$",
            "$1$",
            "$\\dfrac{\\sqrt{3}}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\tan 30° = \\dfrac{\\sin 30°}{\\cos 30°} = \\dfrac{\\frac{1}{2}}{\\frac{\\sqrt{3}}{2}} = \\dfrac{1}{\\sqrt{3}}$ です。",
        "image_url": ""
    },
    {
        "id": 56,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "三角比と三角関数",
        "question": "$\\sin \\theta$ は、直角三角形において「斜辺分の対辺」で定義される。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "$\\sin \\theta = \\dfrac{\\text{対辺}}{\\text{斜辺}}$ です。同様に $\\cos \\theta = \\dfrac{\\text{隣辺}}{\\text{斜辺}}$、$\\tan \\theta = \\dfrac{\\text{対辺}}{\\text{隣辺}}$ です。",
        "image_url": ""
    },

    // --- 三角比と三角関数（B難易度） ---

    {
        "id": 57,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "鉛直方向と角度 $30°$ をなす斜面上に質量 $m$ の物体がある。物体にはたらく重力の斜面方向の成分はいくらか。重力加速度を $g$ とする。",
        "options": [
            "$mg\\sin 30°$",
            "$mg\\cos 30°$",
            "$mg\\tan 30°$",
            "$mg$"
        ],
        "answer": 1,
        "explanation": "鉛直方向と斜面のなす角が $30°$ なので、斜面の傾斜角は $90° - 30° = 60°$ です。斜面方向の重力成分は $mg\\sin 60° = mg\\cos 30°$ です。",
        "image_url": ""
    },
    {
        "id": 58,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "直角三角形の底辺が $6\\text{ cm}$、底角が $45°$ のとき、高さはいくらか。",
        "options": [
            "$3\\text{ cm}$",
            "$6\\text{ cm}$",
            "$3\\sqrt{2}\\text{ cm}$",
            "$6\\sqrt{2}\\text{ cm}$"
        ],
        "answer": 1,
        "explanation": "底角が $45°$ のとき $\\tan 45° = 1$ なので、高さ $= 6 \\times \\tan 45° = 6 \\times 1 = 6\\text{ cm}$ です。",
        "image_url": ""
    },
    {
        "id": 59,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "水平面と角度 $60°$ をなす斜面の長さが $12\\text{ m}$ のとき、斜面の高さはいくらか。",
        "options": [
            "$6\\text{ m}$",
            "$6\\sqrt{3}\\text{ m}$",
            "$12\\text{ m}$",
            "$4\\sqrt{3}\\text{ m}$"
        ],
        "answer": 1,
        "explanation": "高さ $= 12 \\times \\sin 60° = 12 \\times \\dfrac{\\sqrt{3}}{2} = 6\\sqrt{3}\\text{ m}$ です。",
        "image_url": ""
    },
    {
        "id": 60,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "大きさ $F$ の力が水平面と角度 $30°$ をなす方向にはたらくとき、鉛直方向の力の成分はいくらか。",
        "options": [
            "$\\dfrac{F}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}F$",
            "$F$",
            "$\\dfrac{F}{\\sqrt{3}}$"
        ],
        "answer": 0,
        "explanation": "鉛直方向の成分は $F\\sin 30° = F \\times \\dfrac{1}{2} = \\dfrac{F}{2}$ です。",
        "image_url": ""
    },
    {
        "id": 61,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "速さ $v_0$ で水平面と角度 $\\theta$ をなす方向に物体を投げた。鉛直方向の初速度成分はどれか。",
        "options": [
            "$v_0 \\sin \\theta$",
            "$v_0 \\cos \\theta$",
            "$v_0 \\tan \\theta$",
            "$\\dfrac{v_0}{\\sin \\theta}$"
        ],
        "answer": 0,
        "explanation": "水平方向の成分は $v_0 \\cos \\theta$、鉛直方向の成分は $v_0 \\sin \\theta$ です。",
        "image_url": ""
    },

    // --- 三角比と三角関数（C難易度：sub_questions付き） ---

    {
        "id": 62,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "水平面と角度 $30°$ をなす斜面の長さが $L = 20\\text{ m}$ であるとき、次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "斜面の高さ $h$ はいくらか。",
                "options": [
                    "$10\\text{ m}$",
                    "$10\\sqrt{3}\\text{ m}$",
                    "$20\\text{ m}$",
                    "$\\dfrac{20}{\\sqrt{3}}\\text{ m}$"
                ],
                "answer": 0,
                "explanation": "$h = L\\sin 30° = 20 \\times \\dfrac{1}{2} = 10\\text{ m}$ です。"
            },
            {
                "question": "斜面の水平方向の長さ $d$ はいくらか。",
                "options": [
                    "$10\\text{ m}$",
                    "$10\\sqrt{3}\\text{ m}$",
                    "$20\\text{ m}$",
                    "$\\dfrac{20}{\\sqrt{3}}\\text{ m}$"
                ],
                "answer": 1,
                "explanation": "$d = L\\cos 30° = 20 \\times \\dfrac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ m}$ です。"
            },
            {
                "question": "高さ $h$ と水平距離 $d$ の比 $\\dfrac{h}{d}$ はいくらか。",
                "options": [
                    "$\\dfrac{1}{\\sqrt{3}}$",
                    "$\\sqrt{3}$",
                    "$1$",
                    "$\\dfrac{1}{2}$"
                ],
                "answer": 0,
                "explanation": "$\\dfrac{h}{d} = \\dfrac{\\sin 30°}{\\cos 30°} = \\tan 30° = \\dfrac{1}{\\sqrt{3}}$ です。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 63,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\theta$ が鋭角で $\\sin \\theta = \\dfrac{3}{5}$ であるとき、次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "$\\cos \\theta$ の値はいくらか。",
                "options": [
                    "$\\dfrac{3}{5}$",
                    "$\\dfrac{4}{5}$",
                    "$\\dfrac{5}{3}$",
                    "$\\dfrac{2}{5}$"
                ],
                "answer": 1,
                "explanation": "$\\sin^2 \\theta + \\cos^2 \\theta = 1$ より、$\\cos^2 \\theta = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$ です。$\\theta$ は鋭角なので $\\cos \\theta = \\dfrac{4}{5}$ です。"
            },
            {
                "question": "$\\tan \\theta$ の値はいくらか。",
                "options": [
                    "$\\dfrac{3}{4}$",
                    "$\\dfrac{4}{3}$",
                    "$\\dfrac{5}{4}$",
                    "$\\dfrac{5}{3}$"
                ],
                "answer": 0,
                "explanation": "$\\tan \\theta = \\dfrac{\\sin \\theta}{\\cos \\theta} = \\dfrac{\\frac{3}{5}}{\\frac{4}{5}} = \\dfrac{3}{4}$ です。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 64,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "速さ $20\\text{ m/s}$ で水平面と角度 $60°$ をなす方向に物体を投げ上げた。次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "水平方向の初速度成分 $v_x$ はいくらか。",
                "options": [
                    "$10\\text{ m/s}$",
                    "$10\\sqrt{3}\\text{ m/s}$",
                    "$20\\text{ m/s}$",
                    "$\\dfrac{20}{\\sqrt{3}}\\text{ m/s}$"
                ],
                "answer": 0,
                "explanation": "$v_x = 20\\cos 60° = 20 \\times \\dfrac{1}{2} = 10\\text{ m/s}$ です。"
            },
            {
                "question": "鉛直方向の初速度成分 $v_y$ はいくらか。",
                "options": [
                    "$10\\text{ m/s}$",
                    "$10\\sqrt{3}\\text{ m/s}$",
                    "$20\\text{ m/s}$",
                    "$\\dfrac{20}{\\sqrt{3}}\\text{ m/s}$"
                ],
                "answer": 1,
                "explanation": "$v_y = 20\\sin 60° = 20 \\times \\dfrac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ m/s}$ です。"
            },
            {
                "question": "$v_x^2 + v_y^2$ の値はいくらか。",
                "options": [
                    "$100\\text{ m}^2\\text{/s}^2$",
                    "$200\\text{ m}^2\\text{/s}^2$",
                    "$400\\text{ m}^2\\text{/s}^2$",
                    "$300\\text{ m}^2\\text{/s}^2$"
                ],
                "answer": 2,
                "explanation": "$v_x^2 + v_y^2 = (20\\cos 60°)^2 + (20\\sin 60°)^2 = 20^2(\\cos^2 60° + \\sin^2 60°) = 400\\text{ m}^2\\text{/s}^2$ です。"
            }
        ],
        "image_url": ""
    },

    // --- ベクトル（A難易度） ---

    {
        "id": 65,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "ベクトル",
        "question": "次のうち、ベクトル量はどれか。",
        "options": [
            "温度",
            "時間",
            "変位",
            "エネルギー"
        ],
        "answer": 2,
        "explanation": "変位は大きさと向きを持つベクトル量です。温度・時間・エネルギーは大きさのみのスカラー量です。",
        "image_url": ""
    },
    {
        "id": 66,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "ベクトル",
        "question": "大きさ $0$ のベクトルを零ベクトルといい、向きは定義しない。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "零ベクトル $\\vec{0}$ は大きさが $0$ のベクトルです。向きは定義されません（任意のベクトルに対して $\\vec{a} + \\vec{0} = \\vec{a}$ が成り立ちます）。",
        "image_url": ""
    },
    {
        "id": 67,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "ベクトル",
        "question": "ベクトル $\\vec{a}$ の大きさを表す記号はどれか。",
        "options": [
            "$|\\vec{a}|$",
            "$\\vec{a}^2$",
            "$\\overline{a}$",
            "$a^{-1}$"
        ],
        "answer": 0,
        "explanation": "ベクトル $\\vec{a}$ の大きさは $|\\vec{a}|$ または $a$ と書きます。絶対値記号を使うのが一般的です。",
        "image_url": ""
    },
    {
        "id": 68,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "ベクトル",
        "question": "同じ大きさで同じ向きのベクトルは、始点が異なっていても等しいベクトルである。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "ベクトルの相等は大きさと向きのみで判定します。始点の位置には依存しません。これを自由ベクトルといいます。",
        "image_url": ""
    },
    {
        "id": 69,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "ベクトル",
        "question": "次のうち、スカラー量でないものはどれか。",
        "options": [
            "距離",
            "仕事",
            "電圧",
            "力"
        ],
        "answer": 3,
        "explanation": "力は大きさと向きを持つベクトル量です。距離・仕事・電圧は大きさのみを持つスカラー量です。",
        "image_url": ""
    },
    {
        "id": 70,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "ベクトル",
        "question": "ベクトル $\\vec{a}$ をスカラー $k$ 倍すると、大きさは $|k|$ 倍になる。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "$k\\vec{a}$ の大きさは $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$ です。$k < 0$ のときは向きが逆になりますが、大きさは $|k|$ 倍です。",
        "image_url": ""
    },

    // --- ベクトル（B難易度） ---

    {
        "id": 71,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (5, 0)$、$\\vec{b} = (0, 12)$ のとき、$|\\vec{a} + \\vec{b}|$ はいくらか。",
        "options": [
            "$13$",
            "$17$",
            "$7$",
            "$\\sqrt{119}$"
        ],
        "answer": 0,
        "explanation": "$\\vec{a} + \\vec{b} = (5, 12)$ です。$|\\vec{a} + \\vec{b}| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ です。",
        "image_url": ""
    },
    {
        "id": 72,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (-3, 4)$ のとき、$|\\vec{a}|$ はいくらか。",
        "options": [
            "$1$",
            "$5$",
            "$7$",
            "$\\sqrt{7}$"
        ],
        "answer": 1,
        "explanation": "$|\\vec{a}| = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ です。",
        "image_url": ""
    },
    {
        "id": 73,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (4, -3)$、$\\vec{b} = (-2, 1)$ のとき、$2\\vec{a} + \\vec{b}$ はどれか。",
        "options": [
            "$(6, -5)$",
            "$(10, -5)$",
            "$(2, -2)$",
            "$(6, -7)$"
        ],
        "answer": 0,
        "explanation": "$2\\vec{a} + \\vec{b} = (8, -6) + (-2, 1) = (6, -5)$ です。",
        "image_url": ""
    },
    {
        "id": 74,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "南向きに $5.0\\text{ m/s}$、西向きに $12\\text{ m/s}$ の速度を合成した速さはいくらか。",
        "options": [
            "$13\\text{ m/s}$",
            "$17\\text{ m/s}$",
            "$7.0\\text{ m/s}$",
            "$\\sqrt{119}\\text{ m/s}$"
        ],
        "answer": 0,
        "explanation": "南向きと西向きは直交するので、合成速度の大きさは $\\sqrt{5.0^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ m/s}$ です。",
        "image_url": ""
    },
    {
        "id": 75,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (1, 2)$、$\\vec{b} = (3, 4)$ のとき、$\\vec{a}$ と $\\vec{b}$ の内積 $\\vec{a} \\cdot \\vec{b}$ はいくらか。",
        "options": [
            "$11$",
            "$10$",
            "$7$",
            "$14$"
        ],
        "answer": 0,
        "explanation": "内積は $\\vec{a} \\cdot \\vec{b} = 1 \\times 3 + 2 \\times 4 = 3 + 8 = 11$ です。",
        "image_url": ""
    },
    {
        "id": 76,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "ベクトル",
        "question": "大きさ $10$ のベクトルが $x$ 軸と $60°$ の角をなしている。このベクトルの $x$ 成分はいくらか。",
        "options": [
            "$5$",
            "$5\\sqrt{3}$",
            "$10$",
            "$5\\sqrt{2}$"
        ],
        "answer": 0,
        "explanation": "$x$ 成分は $10\\cos 60° = 10 \\times \\dfrac{1}{2} = 5$ です。",
        "image_url": ""
    },

    // --- ベクトル（C難易度：sub_questions付き） ---

    {
        "id": 77,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (3, 4)$、$\\vec{b} = (1, -2)$ について、次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "$\\vec{a} + 2\\vec{b}$ はどれか。",
                "options": [
                    "$(5, 0)$",
                    "$(5, 2)$",
                    "$(7, 0)$",
                    "$(4, 2)$"
                ],
                "answer": 0,
                "explanation": "$2\\vec{b} = (2, -4)$ なので、$\\vec{a} + 2\\vec{b} = (3+2,\\ 4+(-4)) = (5, 0)$ です。"
            },
            {
                "question": "$|\\vec{a} + 2\\vec{b}|$ はいくらか。",
                "options": [
                    "$5$",
                    "$\\sqrt{5}$",
                    "$\\sqrt{29}$",
                    "$0$"
                ],
                "answer": 0,
                "explanation": "$\\vec{a} + 2\\vec{b} = (5, 0)$ なので、$|\\vec{a} + 2\\vec{b}| = \\sqrt{25 + 0} = 5$ です。"
            },
            {
                "question": "$\\vec{a} \\cdot \\vec{b}$ はいくらか。",
                "options": [
                    "$-5$",
                    "$11$",
                    "$7$",
                    "$-3$"
                ],
                "answer": 0,
                "explanation": "$\\vec{a} \\cdot \\vec{b} = 3 \\times 1 + 4 \\times (-2) = 3 - 8 = -5$ です。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 78,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "ベクトル",
        "question": "大きさ $8$ のベクトル $\\vec{F}$ が $x$ 軸と角度 $45°$ をなしている。次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "$\\vec{F}$ の $x$ 成分 $F_x$ はいくらか。",
                "options": [
                    "$4$",
                    "$4\\sqrt{2}$",
                    "$8$",
                    "$4\\sqrt{3}$"
                ],
                "answer": 1,
                "explanation": "$F_x = 8\\cos 45° = 8 \\times \\dfrac{\\sqrt{2}}{2} = 4\\sqrt{2}$ です。"
            },
            {
                "question": "$\\vec{F}$ の $y$ 成分 $F_y$ はいくらか。",
                "options": [
                    "$4$",
                    "$4\\sqrt{2}$",
                    "$8$",
                    "$4\\sqrt{3}$"
                ],
                "answer": 1,
                "explanation": "$F_y = 8\\sin 45° = 8 \\times \\dfrac{\\sqrt{2}}{2} = 4\\sqrt{2}$ です。$45°$ のとき $x$ 成分と $y$ 成分は等しくなります。"
            },
            {
                "question": "$F_x^2 + F_y^2$ はいくらか。",
                "options": [
                    "$32$",
                    "$64$",
                    "$16$",
                    "$48$"
                ],
                "answer": 1,
                "explanation": "$F_x^2 + F_y^2 = (4\\sqrt{2})^2 + (4\\sqrt{2})^2 = 32 + 32 = 64 = |\\vec{F}|^2$ です。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 79,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "ベクトル",
        "question": "点 A$(1, 3)$ から点 B$(4, 7)$ への変位ベクトルについて、次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "変位ベクトル $\\overrightarrow{\\text{AB}}$ はどれか。",
                "options": [
                    "$(3, 4)$",
                    "$(5, 10)$",
                    "$(-3, -4)$",
                    "$(4, 7)$"
                ],
                "answer": 0,
                "explanation": "$\\overrightarrow{\\text{AB}} = (4-1,\\ 7-3) = (3, 4)$ です。"
            },
            {
                "question": "A から B までの距離はいくらか。",
                "options": [
                    "$5$",
                    "$7$",
                    "$\\sqrt{7}$",
                    "$\\sqrt{34}$"
                ],
                "answer": 0,
                "explanation": "$|\\overrightarrow{\\text{AB}}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ です。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 80,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (2, -1)$、$\\vec{b} = (4, 2)$ について、次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "$\\vec{a}$ と $\\vec{b}$ の内積 $\\vec{a} \\cdot \\vec{b}$ はいくらか。",
                "options": [
                    "$6$",
                    "$10$",
                    "$-6$",
                    "$0$"
                ],
                "answer": 0,
                "explanation": "$\\vec{a} \\cdot \\vec{b} = 2 \\times 4 + (-1) \\times 2 = 8 - 2 = 6$ です。"
            },
            {
                "question": "$|\\vec{a}|$ はいくらか。",
                "options": [
                    "$\\sqrt{5}$",
                    "$\\sqrt{3}$",
                    "$3$",
                    "$1$"
                ],
                "answer": 0,
                "explanation": "$|\\vec{a}| = \\sqrt{2^2 + (-1)^2} = \\sqrt{4 + 1} = \\sqrt{5}$ です。"
            },
            {
                "question": "$|\\vec{b}|$ はいくらか。",
                "options": [
                    "$2\\sqrt{5}$",
                    "$\\sqrt{20}$",
                    "$6$",
                    "$2\\sqrt{5}$ と $\\sqrt{20}$ は同じ値なのでどちらも正しい"
                ],
                "answer": 3,
                "explanation": "$|\\vec{b}| = \\sqrt{4^2 + 2^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}$ です。$\\sqrt{20} = 2\\sqrt{5}$ なので両方正しい表記です。"
            }
        ],
        "image_url": ""
    },

    // --- その他の数学の知識（A難易度） ---

    {
        "id": 81,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "接頭辞「キロ（k）」が表す倍率はどれか。",
        "options": [
            "$10^{1}$",
            "$10^{2}$",
            "$10^{3}$",
            "$10^{6}$"
        ],
        "answer": 2,
        "explanation": "キロ（k）は $10^3$ を表す接頭辞です。例えば $1\\text{ km} = 10^3\\text{ m}$、$1\\text{ kg} = 10^3\\text{ g}$ です。",
        "image_url": ""
    },
    {
        "id": 82,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "その他の数学の知識",
        "question": "$10^0 = 1$ である。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "任意の $0$ でない数 $a$ に対して $a^0 = 1$ です。特に $10^0 = 1$ が成り立ちます。",
        "image_url": ""
    },
    {
        "id": 83,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$5.0 \\times 10^{-2}$ はいくらか。",
        "options": [
            "$0.050$",
            "$0.50$",
            "$500$",
            "$50$"
        ],
        "answer": 0,
        "explanation": "$5.0 \\times 10^{-2} = 5.0 \\times 0.01 = 0.050$ です。$10^{-2} = \\dfrac{1}{100}$ です。",
        "image_url": ""
    },
    {
        "id": 84,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "その他の数学の知識",
        "question": "接頭辞「ギガ（G）」は $10^9$ を表す。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "ギガ（G）は $10^9$ を表す接頭辞です。例えば $1\\text{ GHz} = 10^9\\text{ Hz}$ です。",
        "image_url": ""
    },
    {
        "id": 85,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$36\\text{ km/h}$ は何 $\\text{m/s}$ か。",
        "options": [
            "$3.6\\text{ m/s}$",
            "$10\\text{ m/s}$",
            "$36\\text{ m/s}$",
            "$100\\text{ m/s}$"
        ],
        "answer": 1,
        "explanation": "$36\\text{ km/h} = \\dfrac{36}{3.6}\\text{ m/s} = 10\\text{ m/s}$ です。$\\text{km/h} \\to \\text{m/s}$ は $3.6$ で割ります。",
        "image_url": ""
    },
    {
        "id": 86,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "有効数字2桁で $1234$ を表すとどれか。",
        "options": [
            "$1.2 \\times 10^{3}$",
            "$12 \\times 10^{2}$",
            "$1.234 \\times 10^{3}$",
            "$1.3 \\times 10^{3}$"
        ],
        "answer": 0,
        "explanation": "有効数字2桁では上から3桁目（$3$）を四捨五入します。$1234 \\approx 1200 = 1.2 \\times 10^3$ です。整数部を1桁にするのが標準的な表記です。",
        "image_url": ""
    },

    // --- その他の数学の知識（B難易度） ---

    {
        "id": 87,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6}$ を計算するとどれか。",
        "options": [
            "$1$",
            "$\\dfrac{1}{11}$",
            "$\\dfrac{5}{6}$",
            "$\\dfrac{1}{36}$"
        ],
        "answer": 0,
        "explanation": "通分して $\\dfrac{3}{6} + \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{6}{6} = 1$ です。",
        "image_url": ""
    },
    {
        "id": 88,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "連立方程式 $3x + 2y = 12$、$x - 2y = 0$ を解いたとき、$x$ の値はいくらか。",
        "options": [
            "$2$",
            "$3$",
            "$4$",
            "$6$"
        ],
        "answer": 1,
        "explanation": "2式を加えると $4x = 12$ より $x = 3$ です。第2式から $y = \\dfrac{x}{2} = \\dfrac{3}{2}$ です。",
        "image_url": ""
    },
    {
        "id": 89,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ で $a = 1$、$b = -5$、$c = 6$ のとき、解はどれか。",
        "options": [
            "$x = 2,\\ 3$",
            "$x = -2,\\ -3$",
            "$x = 1,\\ 6$",
            "$x = -1,\\ 6$"
        ],
        "answer": 0,
        "explanation": "$x = \\dfrac{5 \\pm \\sqrt{25 - 24}}{2} = \\dfrac{5 \\pm 1}{2}$ より $x = 3$ または $x = 2$ です。因数分解すると $(x-2)(x-3) = 0$ です。",
        "image_url": ""
    },
    {
        "id": 90,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$(3.0 \\times 10^{2})^2$ を計算するとどれか。",
        "options": [
            "$9.0 \\times 10^{4}$",
            "$6.0 \\times 10^{4}$",
            "$9.0 \\times 10^{2}$",
            "$3.0 \\times 10^{4}$"
        ],
        "answer": 0,
        "explanation": "$(3.0 \\times 10^2)^2 = 3.0^2 \\times (10^2)^2 = 9.0 \\times 10^4$ です。指数法則 $(10^a)^b = 10^{ab}$ を使います。",
        "image_url": ""
    },
    {
        "id": 91,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$s = v_0 t + \\dfrac{1}{2}at^2$ で $v_0 = 0$、$a = 10\\text{ m/s}^2$、$t = 4.0\\text{ s}$ のとき、$s$ はいくらか。",
        "options": [
            "$20\\text{ m}$",
            "$40\\text{ m}$",
            "$80\\text{ m}$",
            "$160\\text{ m}$"
        ],
        "answer": 2,
        "explanation": "$s = 0 + \\dfrac{1}{2} \\times 10 \\times 4.0^2 = 5 \\times 16 = 80\\text{ m}$ です。",
        "image_url": ""
    },
    {
        "id": 92,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$\\sqrt{2} \\approx 1.41$ のとき、$\\dfrac{10}{\\sqrt{2}}$ の値に最も近いものはどれか。",
        "options": [
            "$5.0$",
            "$7.1$",
            "$14$",
            "$20$"
        ],
        "answer": 1,
        "explanation": "$\\dfrac{10}{\\sqrt{2}} = \\dfrac{10\\sqrt{2}}{2} = 5\\sqrt{2} \\approx 5 \\times 1.41 = 7.05 \\approx 7.1$ です。分母の有理化を使うと計算しやすくなります。",
        "image_url": ""
    },

    // --- その他の数学の知識（C難易度：sub_questions付き） ---

    {
        "id": 93,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "連立方程式 $2x + 3y = 13$、$4x - y = 5$ について、次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "$x$ の値はいくらか。",
                "options": [
                    "$1$",
                    "$2$",
                    "$3$",
                    "$4$"
                ],
                "answer": 1,
                "explanation": "第2式から $y = 4x - 5$ を第1式に代入して $2x + 3(4x-5) = 13$、$14x - 15 = 13$、$14x = 28$、$x = 2$ です。"
            },
            {
                "question": "$y$ の値はいくらか。",
                "options": [
                    "$1$",
                    "$2$",
                    "$3$",
                    "$4$"
                ],
                "answer": 2,
                "explanation": "$x = 2$ を $y = 4x - 5$ に代入して $y = 8 - 5 = 3$ です。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 94,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$E = \\dfrac{1}{2}mv^2$ について、$m = 2.0\\text{ kg}$、$v = 3.0\\text{ m/s}$ のとき、次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "$E$ の値はいくらか。",
                "options": [
                    "$3.0\\text{ J}$",
                    "$6.0\\text{ J}$",
                    "$9.0\\text{ J}$",
                    "$18\\text{ J}$"
                ],
                "answer": 2,
                "explanation": "$E = \\dfrac{1}{2} \\times 2.0 \\times 3.0^2 = \\dfrac{1}{2} \\times 2.0 \\times 9.0 = 9.0\\text{ J}$ です。"
            },
            {
                "question": "速さが2倍（$6.0\\text{ m/s}$）になったとき、$E$ はいくらか。",
                "options": [
                    "$18\\text{ J}$",
                    "$36\\text{ J}$",
                    "$27\\text{ J}$",
                    "$72\\text{ J}$"
                ],
                "answer": 1,
                "explanation": "$E = \\dfrac{1}{2} \\times 2.0 \\times 6.0^2 = \\dfrac{1}{2} \\times 2.0 \\times 36 = 36\\text{ J}$ です。速さが2倍になるとエネルギーは4倍になります。"
            },
            {
                "question": "速さが2倍になると $E$ は何倍になるか。",
                "options": [
                    "$2$ 倍",
                    "$3$ 倍",
                    "$4$ 倍",
                    "$8$ 倍"
                ],
                "answer": 2,
                "explanation": "$E$ は $v^2$ に比例するので、速さが2倍になると $E$ は $2^2 = 4$ 倍になります。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 95,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$F = G\\dfrac{m_1 m_2}{r^2}$ について、次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "距離 $r$ を2倍にすると $F$ は何倍になるか。",
                "options": [
                    "$2$ 倍",
                    "$\\dfrac{1}{2}$ 倍",
                    "$4$ 倍",
                    "$\\dfrac{1}{4}$ 倍"
                ],
                "answer": 3,
                "explanation": "$F$ は $r^2$ に反比例するので、$r$ を2倍にすると $F$ は $\\dfrac{1}{2^2} = \\dfrac{1}{4}$ 倍になります。"
            },
            {
                "question": "$m_1$ を3倍にすると $F$ は何倍になるか。",
                "options": [
                    "$3$ 倍",
                    "$9$ 倍",
                    "$\\dfrac{1}{3}$ 倍",
                    "$6$ 倍"
                ],
                "answer": 0,
                "explanation": "$F$ は $m_1$ に比例するので、$m_1$ を3倍にすると $F$ も $3$ 倍になります。"
            },
            {
                "question": "$m_1$ を2倍、$r$ を2倍にすると $F$ は何倍になるか。",
                "options": [
                    "$1$ 倍（変わらない）",
                    "$\\dfrac{1}{2}$ 倍",
                    "$2$ 倍",
                    "$\\dfrac{1}{4}$ 倍"
                ],
                "answer": 1,
                "explanation": "$m_1$ を2倍にすると $F$ は2倍、$r$ を2倍にすると $F$ は $\\dfrac{1}{4}$ 倍です。合わせると $2 \\times \\dfrac{1}{4} = \\dfrac{1}{2}$ 倍になります。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 96,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$y = ax^2$ のグラフについて、次の各問いに答えよ。ただし $a > 0$ とする。",
        "sub_questions": [
            {
                "question": "グラフの形状はどれか。",
                "options": [
                    "上に凸の放物線",
                    "下に凸の放物線",
                    "直線",
                    "双曲線"
                ],
                "answer": 1,
                "explanation": "$a > 0$ のとき $y = ax^2$ のグラフは下に凸の放物線です。物体の落下距離と時間の関係がこの形です。"
            },
            {
                "question": "$x$ が2倍になると $y$ は何倍になるか。",
                "options": [
                    "$2$ 倍",
                    "$4$ 倍",
                    "$8$ 倍",
                    "$\\sqrt{2}$ 倍"
                ],
                "answer": 1,
                "explanation": "$y$ は $x^2$ に比例するので、$x$ が2倍になると $y$ は $2^2 = 4$ 倍になります。"
            }
        ],
        "image_url": ""
    },
    {
        "id": 97,
        "category": "p0_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$v = v_0 + at$ と $s = v_0 t + \\dfrac{1}{2}at^2$ から $t$ を消去して $v$ と $s$ の関係式を導く。次の各問いに答えよ。",
        "sub_questions": [
            {
                "question": "第1式から $t$ を求めるとどれか。",
                "options": [
                    "$t = \\dfrac{v - v_0}{a}$",
                    "$t = \\dfrac{v + v_0}{a}$",
                    "$t = \\dfrac{a}{v - v_0}$",
                    "$t = v - v_0 - a$"
                ],
                "answer": 0,
                "explanation": "$v = v_0 + at$ から $at = v - v_0$ より $t = \\dfrac{v - v_0}{a}$ です。"
            },
            {
                "question": "導かれる関係式はどれか。",
                "options": [
                    "$v^2 - v_0^2 = 2as$",
                    "$v^2 + v_0^2 = 2as$",
                    "$v - v_0 = 2as$",
                    "$v^2 = v_0^2 + as$"
                ],
                "answer": 0,
                "explanation": "$t = \\dfrac{v-v_0}{a}$ を $s$ の式に代入して整理すると $v^2 - v_0^2 = 2as$ が得られます。これは等加速度運動の重要な公式です。"
            }
        ],
        "image_url": ""
    },

    // --- 残りのA難易度問題 ---

    {
        "id": 98,
        "category": "p0_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\cos 30°$ の値はどれか。",
        "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{\\sqrt{2}}{2}$",
            "$\\dfrac{\\sqrt{3}}{2}$",
            "$1$"
        ],
        "answer": 2,
        "explanation": "30°-60°-90° の直角三角形より、$\\cos 30° = \\dfrac{\\sqrt{3}}{2}$ です。$\\sin 60°$ と同じ値です。",
        "image_url": ""
    },
    {
        "id": 99,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "三角比と三角関数",
        "question": "直角三角形の一辺が $a$、斜辺が $c$、その間の角度が $\\theta$ のとき、$\\cos \\theta$ を表す式はどれか。",
        "options": [
            "$\\dfrac{a}{c}$",
            "$\\dfrac{c}{a}$",
            "$\\dfrac{a}{\\sqrt{c^2 - a^2}}$",
            "$\\dfrac{\\sqrt{c^2 - a^2}}{c}$"
        ],
        "answer": 0,
        "explanation": "$\\cos \\theta$ は隣辺（$a$）を斜辺（$c$）で割ったものです。$\\cos \\theta = \\dfrac{a}{c}$ です。",
        "image_url": ""
    },
    {
        "id": 100,
        "category": "p0_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$\\sqrt{(3.0 \\times 10^{4})^2 + (4.0 \\times 10^{4})^2}$ を計算するとどれか。",
        "options": [
            "$5.0 \\times 10^{4}$",
            "$7.0 \\times 10^{4}$",
            "$25 \\times 10^{4}$",
            "$5.0 \\times 10^{8}$"
        ],
        "answer": 0,
        "explanation": "$10^4$ でくくると $10^4\\sqrt{3.0^2 + 4.0^2} = 10^4 \\times \\sqrt{9+16} = 10^4 \\times 5.0 = 5.0 \\times 10^4$ です。",
        "image_url": ""
    },

    // ============================================================
    // 追加30問（ID 101-130）A+10, B+10, C+10
    // ============================================================

    // --- A難易度 10問 ---
    {
        "id": 101, "category": "p0_c1", "difficulty": "A", "type": "ox",
        "classification": "三角比と三角関数",
        "question": "$\\cos 180° = -1$ である。",
        "options": ["〇", "✕"], "answer": 0,
        "explanation": "$\\cos 180° = -1$ は正しいです。単位円上で角度$180°$の点は$(-1, 0)$です。"
    },
    {
        "id": 102, "category": "p0_c1", "difficulty": "A", "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\tan 45°$ の値はいくつか。",
        "options": ["$0$", "$\\dfrac{1}{2}$", "$1$", "$\\sqrt{2}$"], "answer": 2,
        "explanation": "$\\tan 45° = \\frac{\\sin 45°}{\\cos 45°} = 1$ です。"
    },
    {
        "id": 103, "category": "p0_c1", "difficulty": "A", "type": "ox",
        "classification": "ベクトル",
        "question": "力はベクトル量であり、大きさと向きを持つ。",
        "options": ["〇", "✕"], "answer": 0,
        "explanation": "力は代表的なベクトル量です。大きさと向きの両方で特定されます。"
    },
    {
        "id": 104, "category": "p0_c1", "difficulty": "A", "type": "choice",
        "classification": "ベクトル",
        "question": "大きさが$5$のベクトル$\\vec{a}$を$-2$倍したベクトルの大きさはいくつか。",
        "options": ["$-10$", "$10$", "$2.5$", "$7$"], "answer": 1,
        "explanation": "スカラー倍の大きさは $|-2| \\times 5 = 10$ です。向きは逆になりますが大きさは正の値です。"
    },
    {
        "id": 105, "category": "p0_c1", "difficulty": "A", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$1\\,\\text{km}$ は何$\\text{m}$か。",
        "options": ["$10\\,\\text{m}$", "$100\\,\\text{m}$", "$1000\\,\\text{m}$", "$10000\\,\\text{m}$"], "answer": 2,
        "explanation": "キロは$10^3$を表す接頭辞なので、$1\\,\\text{km} = 1000\\,\\text{m}$ です。"
    },
    {
        "id": 106, "category": "p0_c1", "difficulty": "A", "type": "ox",
        "classification": "その他の数学の知識",
        "question": "有効数字3桁で $2.345$ を表すと $2.35$ である。",
        "options": ["〇", "✕"], "answer": 0,
        "explanation": "4桁目の$5$を四捨五入して$2.35$（有効数字3桁）となります。"
    },
    {
        "id": 107, "category": "p0_c1", "difficulty": "A", "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\sin 150°$ の値はいくつか。",
        "options": ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$", "$\\dfrac{\\sqrt{3}}{2}$", "$-\\dfrac{\\sqrt{3}}{2}$"], "answer": 1,
        "explanation": "$\\sin 150° = \\sin(180° - 30°) = \\sin 30° = \\frac{1}{2}$ です。"
    },
    {
        "id": 108, "category": "p0_c1", "difficulty": "A", "type": "choice",
        "classification": "ベクトル",
        "question": "ベクトルの成分表示 $(3, -4)$ の大きさはいくつか。",
        "options": ["$1$", "$5$", "$7$", "$25$"], "answer": 1,
        "explanation": "$|\\vec{a}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ です。"
    },
    {
        "id": 109, "category": "p0_c1", "difficulty": "A", "type": "ox",
        "classification": "その他の数学の知識",
        "question": "$10^{-3}$ は $0.001$ である。",
        "options": ["〇", "✕"], "answer": 0,
        "explanation": "$10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000} = 0.001$ です。"
    },
    {
        "id": 110, "category": "p0_c1", "difficulty": "A", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "接頭辞「マイクロ（$\\mu$）」は$10$の何乗を表すか。",
        "options": ["$10^{-3}$", "$10^{-6}$", "$10^{-9}$", "$10^{-12}$"], "answer": 1,
        "explanation": "マイクロ（$\\mu$）は$10^{-6}$を表します。ミリ=$10^{-3}$、ナノ=$10^{-9}$です。"
    },

    // --- B難易度 10問 ---
    {
        "id": 111, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "三角比と三角関数",
        "question": "斜面の角度が$60°$のとき、重力加速度$g$の斜面方向成分は次のどれか。",
        "options": ["$\\dfrac{g}{2}$", "$\\dfrac{\\sqrt{3}}{2}g$", "$\\dfrac{\\sqrt{2}}{2}g$", "$g$"], "answer": 1,
        "explanation": "斜面方向成分は $g\\sin 60° = \\frac{\\sqrt{3}}{2}g$ です。"
    },
    {
        "id": 112, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "三角比と三角関数",
        "question": "$\\sin^2 \\theta + \\cos^2 \\theta$ の値を求めよ。",
        "options": ["$0$", "$1$", "$2$", "$\\theta$ による"], "answer": 1,
        "explanation": "三角関数の基本公式 $\\sin^2 \\theta + \\cos^2 \\theta = 1$ は任意の$\\theta$で成り立ちます。"
    },
    {
        "id": 113, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "三角比と三角関数",
        "question": "速度$v = 10\\,\\text{m/s}$、角度$\\theta = 30°$で投げ出した物体の水平方向の初速度成分はいくつか。",
        "options": ["$5\\,\\text{m/s}$", "$5\\sqrt{3}\\,\\text{m/s}$", "$10\\,\\text{m/s}$", "$5\\sqrt{2}\\,\\text{m/s}$"], "answer": 1,
        "explanation": "$v_x = v\\cos 30° = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\,\\text{m/s}$ です。"
    },
    {
        "id": 114, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "ベクトル",
        "question": "$\\vec{a} = (2, 3)$、$\\vec{b} = (-1, 4)$ のとき $\\vec{a} + \\vec{b}$ の成分を求めよ。",
        "options": ["$(1, 7)$", "$(3, -1)$", "$(1, -1)$", "$(3, 7)$"], "answer": 0,
        "explanation": "$\\vec{a} + \\vec{b} = (2 + (-1),\\, 3 + 4) = (1, 7)$ です。"
    },
    {
        "id": 115, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "ベクトル",
        "question": "東向きに$3\\,\\text{m/s}$、北向きに$4\\,\\text{m/s}$の速度の合成速度の大きさは何$\\text{m/s}$か。",
        "options": ["$5$", "$7$", "$1$", "$\\sqrt{7}$"], "answer": 0,
        "explanation": "直交する速度の合成は $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\,\\text{m/s}$ です。"
    },
    {
        "id": 116, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "ベクトル",
        "question": "大きさ$10\\,\\text{N}$の力を$x$軸から$60°$の方向に加えたとき、$y$方向の成分はいくつか。",
        "options": ["$5\\,\\text{N}$", "$5\\sqrt{3}\\,\\text{N}$", "$10\\,\\text{N}$", "$5\\sqrt{2}\\,\\text{N}$"], "answer": 1,
        "explanation": "$F_y = 10\\sin 60° = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\,\\text{N}$ です。"
    },
    {
        "id": 117, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$v = v_0 + at$ を $t$ について解くと正しいものはどれか。",
        "options": ["$t = \\dfrac{v - v_0}{a}$", "$t = \\dfrac{v + v_0}{a}$", "$t = \\dfrac{a}{v - v_0}$", "$t = a(v - v_0)$"], "answer": 0,
        "explanation": "$v - v_0 = at$ より $t = \\frac{v - v_0}{a}$ です。"
    },
    {
        "id": 118, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$3.0 \\times 10^2$ と $4.0 \\times 10^3$ の和を有効数字2桁で表すと？",
        "options": ["$4.3 \\times 10^3$", "$4.0 \\times 10^3$", "$7.0 \\times 10^3$", "$3.4 \\times 10^3$"], "answer": 0,
        "explanation": "$300 + 4000 = 4300 = 4.3 \\times 10^3$ です。"
    },
    {
        "id": 119, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "運動エネルギーの式 $K = \\frac{1}{2}mv^2$ で $m = 2.0\\,\\text{kg}$、$v = 3.0\\,\\text{m/s}$ のとき $K$ はいくつか。",
        "options": ["$3.0\\,\\text{J}$", "$6.0\\,\\text{J}$", "$9.0\\,\\text{J}$", "$18\\,\\text{J}$"], "answer": 2,
        "explanation": "$K = \\frac{1}{2} \\times 2.0 \\times 3.0^2 = \\frac{1}{2} \\times 2.0 \\times 9.0 = 9.0\\,\\text{J}$ です。"
    },
    {
        "id": 120, "category": "p0_c1", "difficulty": "B", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "$F = ma$ で $F = 6.0\\,\\text{N}$、$a = 2.0\\,\\text{m/s}^2$ のとき質量 $m$ は？",
        "options": ["$3.0\\,\\text{kg}$", "$4.0\\,\\text{kg}$", "$8.0\\,\\text{kg}$", "$12\\,\\text{kg}$"], "answer": 0,
        "explanation": "$m = \\frac{F}{a} = \\frac{6.0}{2.0} = 3.0\\,\\text{kg}$ です。"
    },

    // --- C難易度 10問 ---
    {
        "id": 121, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "三角比と三角関数",
        "question": "三角関数と力の分解に関する問題",
        "common_text": "質量$m$の物体が傾斜角$\\theta$の斜面上に静止している。重力加速度を$g$とする。",
        "sub_questions": [
            {
                "question": "重力の斜面方向成分はどれか。",
                "options": ["$mg\\sin\\theta$", "$mg\\cos\\theta$", "$mg\\tan\\theta$", "$\\dfrac{mg}{\\sin\\theta}$"],
                "answer": 0,
                "explanation": "斜面方向は重力の$\\sin\\theta$成分です。"
            },
            {
                "question": "垂直抗力の大きさはどれか。",
                "options": ["$mg\\sin\\theta$", "$mg\\cos\\theta$", "$mg$", "$mg\\tan\\theta$"],
                "answer": 1,
                "explanation": "斜面に垂直な方向のつり合いから垂直抗力 $N = mg\\cos\\theta$ です。"
            },
            {
                "question": "$\\theta = 30°$のとき、斜面方向成分と垂直抗力の比$\\dfrac{mg\\sin\\theta}{mg\\cos\\theta}$を求めよ。",
                "options": ["$\\dfrac{1}{\\sqrt{3}}$", "$\\sqrt{3}$", "$1$", "$\\dfrac{1}{2}$"],
                "answer": 0,
                "explanation": "$\\frac{\\sin 30°}{\\cos 30°} = \\tan 30° = \\frac{1}{\\sqrt{3}}$ です。"
            }
        ]
    },
    {
        "id": 122, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "三角比と三角関数",
        "question": "速度ベクトルの分解",
        "common_text": "ボールを水平面から角度$45°$、初速$20\\,\\text{m/s}$で投げ上げた。",
        "sub_questions": [
            {
                "question": "水平方向の初速度成分はいくつか。",
                "options": ["$10\\,\\text{m/s}$", "$10\\sqrt{2}\\,\\text{m/s}$", "$20\\,\\text{m/s}$", "$5\\sqrt{2}\\,\\text{m/s}$"],
                "answer": 1,
                "explanation": "$v_x = 20\\cos 45° = 20 \\times \\frac{\\sqrt{2}}{2} = 10\\sqrt{2}\\,\\text{m/s}$ です。"
            },
            {
                "question": "鉛直方向の初速度成分はいくつか。",
                "options": ["$10\\,\\text{m/s}$", "$10\\sqrt{2}\\,\\text{m/s}$", "$20\\,\\text{m/s}$", "$5\\sqrt{2}\\,\\text{m/s}$"],
                "answer": 1,
                "explanation": "$v_y = 20\\sin 45° = 10\\sqrt{2}\\,\\text{m/s}$ です。$45°$なので水平・鉛直成分は等しくなります。"
            }
        ]
    },
    {
        "id": 123, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "三角比と三角関数",
        "question": "三角関数の相互関係",
        "common_text": "$\\sin\\theta = \\dfrac{3}{5}$（$0° < \\theta < 90°$）であるとき、以下を求めよ。",
        "sub_questions": [
            {
                "question": "$\\cos\\theta$ の値はいくつか。",
                "options": ["$\\dfrac{3}{5}$", "$\\dfrac{4}{5}$", "$\\dfrac{5}{3}$", "$\\dfrac{2}{5}$"],
                "answer": 1,
                "explanation": "$\\cos\\theta = \\sqrt{1 - \\sin^2\\theta} = \\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$ です。"
            },
            {
                "question": "$\\tan\\theta$ の値はいくつか。",
                "options": ["$\\dfrac{3}{4}$", "$\\dfrac{4}{3}$", "$\\dfrac{5}{4}$", "$\\dfrac{5}{3}$"],
                "answer": 0,
                "explanation": "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{4/5} = \\frac{3}{4}$ です。"
            }
        ]
    },
    {
        "id": 124, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "ベクトル",
        "question": "力のつり合いとベクトル",
        "common_text": "天井から2本の糸で質量$10\\,\\text{kg}$の物体を吊るしている。左の糸は鉛直から$30°$、右の糸は鉛直から$60°$の角度で張っている。重力加速度$g = 9.8\\,\\text{m/s}^2$とする。",
        "sub_questions": [
            {
                "question": "物体にはたらく重力の大きさは何$\\text{N}$か。",
                "options": ["$49\\,\\text{N}$", "$98\\,\\text{N}$", "$10\\,\\text{N}$", "$980\\,\\text{N}$"],
                "answer": 1,
                "explanation": "$W = mg = 10 \\times 9.8 = 98\\,\\text{N}$ です。"
            },
            {
                "question": "力のつり合い条件として正しいものはどれか。",
                "options": ["水平方向と鉛直方向の各成分がそれぞれつり合う", "2本の糸の張力が等しい", "糸の張力の和が重力に等しい", "3力の大きさが全て等しい"],
                "answer": 0,
                "explanation": "ベクトルのつり合いは各成分ごとにつり合う必要があります。"
            }
        ]
    },
    {
        "id": 125, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "ベクトル",
        "question": "ベクトルの合成と分解",
        "common_text": "速度$\\vec{v_1} = (3, 4)\\,\\text{m/s}$ と $\\vec{v_2} = (5, -2)\\,\\text{m/s}$ の2つの速度がある。",
        "sub_questions": [
            {
                "question": "合成速度 $\\vec{v_1} + \\vec{v_2}$ の成分表示はどれか。",
                "options": ["$(8, 2)$", "$(2, 6)$", "$(8, 6)$", "$(2, 2)$"],
                "answer": 0,
                "explanation": "$(3+5,\\, 4+(-2)) = (8, 2)$ です。"
            },
            {
                "question": "合成速度の大きさはいくつか。",
                "options": ["$\\sqrt{68}\\,\\text{m/s}$", "$10\\,\\text{m/s}$", "$\\sqrt{40}\\,\\text{m/s}$", "$6\\,\\text{m/s}$"],
                "answer": 0,
                "explanation": "$|\\vec{v}| = \\sqrt{8^2 + 2^2} = \\sqrt{64 + 4} = \\sqrt{68} = 2\\sqrt{17}\\,\\text{m/s}$ です。"
            },
            {
                "question": "$\\vec{v_1}$ の大きさはいくつか。",
                "options": ["$5\\,\\text{m/s}$", "$7\\,\\text{m/s}$", "$\\sqrt{7}\\,\\text{m/s}$", "$25\\,\\text{m/s}$"],
                "answer": 0,
                "explanation": "$|\\vec{v_1}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\,\\text{m/s}$ です。"
            }
        ]
    },
    {
        "id": 126, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "ベクトル",
        "question": "相対速度のベクトル計算",
        "common_text": "電車Aが東向きに$20\\,\\text{m/s}$、電車Bが北向きに$15\\,\\text{m/s}$で走っている。",
        "sub_questions": [
            {
                "question": "Aから見たBの相対速度の大きさはいくつか。",
                "options": ["$5\\,\\text{m/s}$", "$25\\,\\text{m/s}$", "$35\\,\\text{m/s}$", "$\\sqrt{625}\\,\\text{m/s}$"],
                "answer": 1,
                "explanation": "相対速度$\\vec{v_{BA}} = \\vec{v_B} - \\vec{v_A}$。直交するので大きさは $\\sqrt{20^2 + 15^2} = \\sqrt{625} = 25\\,\\text{m/s}$ です。"
            },
            {
                "question": "Aから見たBの相対速度は、西と北のどちらの方向に近いか。",
                "options": ["北西", "北東", "南東", "南西"],
                "answer": 0,
                "explanation": "Bの速度は北向き、Aの速度を引くと西向き成分が加わるため、北西方向になります。"
            }
        ]
    },
    {
        "id": 127, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "有効数字と計算",
        "common_text": "物体の質量が$m = 2.50\\,\\text{kg}$、速度が$v = 4.0\\,\\text{m/s}$である。",
        "sub_questions": [
            {
                "question": "運動量$p = mv$を有効数字2桁で求めよ。",
                "options": ["$10\\,\\text{kg}\\cdot\\text{m/s}$", "$1.0 \\times 10^1\\,\\text{kg}\\cdot\\text{m/s}$", "$10.0\\,\\text{kg}\\cdot\\text{m/s}$", "$9.0\\,\\text{kg}\\cdot\\text{m/s}$"],
                "answer": 1,
                "explanation": "$p = 2.50 \\times 4.0 = 10$ ですが、有効数字2桁（$v$が2桁）で$1.0 \\times 10^1\\,\\text{kg}\\cdot\\text{m/s}$と表します。"
            },
            {
                "question": "運動エネルギー$K = \\frac{1}{2}mv^2$を有効数字2桁で求めよ。",
                "options": ["$20\\,\\text{J}$", "$2.0 \\times 10^1\\,\\text{J}$", "$8.0\\,\\text{J}$", "$2.5 \\times 10^1\\,\\text{J}$"],
                "answer": 1,
                "explanation": "$K = \\frac{1}{2} \\times 2.50 \\times 4.0^2 = \\frac{1}{2} \\times 2.50 \\times 16 = 20$。有効数字2桁で$2.0 \\times 10^1\\,\\text{J}$です。"
            }
        ]
    },
    {
        "id": 128, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "式の変形と代入",
        "common_text": "等加速度直線運動の公式 $v^2 - v_0^2 = 2as$ を用いて以下に答えよ。",
        "sub_questions": [
            {
                "question": "この式を加速度$a$について解いたものはどれか。",
                "options": ["$a = \\dfrac{v^2 - v_0^2}{2s}$", "$a = \\dfrac{v^2 + v_0^2}{2s}$", "$a = 2s(v^2 - v_0^2)$", "$a = \\dfrac{2s}{v^2 - v_0^2}$"],
                "answer": 0,
                "explanation": "$2as = v^2 - v_0^2$ より $a = \\frac{v^2 - v_0^2}{2s}$ です。"
            },
            {
                "question": "$v_0 = 0$、$v = 10\\,\\text{m/s}$、$s = 25\\,\\text{m}$ のとき $a$ はいくつか。",
                "options": ["$1.0\\,\\text{m/s}^2$", "$2.0\\,\\text{m/s}^2$", "$4.0\\,\\text{m/s}^2$", "$5.0\\,\\text{m/s}^2$"],
                "answer": 1,
                "explanation": "$a = \\frac{10^2 - 0}{2 \\times 25} = \\frac{100}{50} = 2.0\\,\\text{m/s}^2$ です。"
            },
            {
                "question": "この式を変位$s$について解いたものはどれか。",
                "options": ["$s = \\dfrac{v^2 - v_0^2}{2a}$", "$s = \\dfrac{v - v_0}{2a}$", "$s = \\dfrac{2a}{v^2 - v_0^2}$", "$s = \\dfrac{v^2 + v_0^2}{2a}$"],
                "answer": 0,
                "explanation": "$s = \\frac{v^2 - v_0^2}{2a}$ です。"
            }
        ]
    },
    {
        "id": 129, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "単位換算の連鎖",
        "common_text": "以下の単位換算を行え。",
        "sub_questions": [
            {
                "question": "$72\\,\\text{km/h}$ は何$\\text{m/s}$か。",
                "options": ["$10\\,\\text{m/s}$", "$20\\,\\text{m/s}$", "$36\\,\\text{m/s}$", "$72\\,\\text{m/s}$"],
                "answer": 1,
                "explanation": "$72 \\times \\frac{1000}{3600} = 72 \\times \\frac{1}{3.6} = 20\\,\\text{m/s}$ です。"
            },
            {
                "question": "$5.0\\,\\text{m/s}$ は何$\\text{km/h}$か。",
                "options": ["$1.4\\,\\text{km/h}$", "$13.9\\,\\text{km/h}$", "$18\\,\\text{km/h}$", "$50\\,\\text{km/h}$"],
                "answer": 2,
                "explanation": "$5.0 \\times 3.6 = 18\\,\\text{km/h}$ です。"
            }
        ]
    },
    {
        "id": 130, "category": "p0_c1", "difficulty": "C", "type": "choice",
        "classification": "その他の数学の知識",
        "question": "グラフの読み取りと傾き",
        "common_text": "物体の$v$-$t$グラフが原点を通る直線で、$t = 4.0\\,\\text{s}$のとき$v = 12\\,\\text{m/s}$であった。",
        "sub_questions": [
            {
                "question": "この直線の傾き（加速度）はいくつか。",
                "options": ["$3.0\\,\\text{m/s}^2$", "$4.0\\,\\text{m/s}^2$", "$48\\,\\text{m/s}^2$", "$0.33\\,\\text{m/s}^2$"],
                "answer": 0,
                "explanation": "傾き$= \\frac{\\Delta v}{\\Delta t} = \\frac{12}{4.0} = 3.0\\,\\text{m/s}^2$ です。"
            },
            {
                "question": "$t = 0$から$t = 4.0\\,\\text{s}$までの変位（グラフの面積）はいくつか。",
                "options": ["$12\\,\\text{m}$", "$24\\,\\text{m}$", "$48\\,\\text{m}$", "$36\\,\\text{m}$"],
                "answer": 1,
                "explanation": "三角形の面積 $= \\frac{1}{2} \\times 4.0 \\times 12 = 24\\,\\text{m}$ です。"
            },
            {
                "question": "$t = 6.0\\,\\text{s}$のとき速度はいくつか。",
                "options": ["$15\\,\\text{m/s}$", "$18\\,\\text{m/s}$", "$20\\,\\text{m/s}$", "$24\\,\\text{m/s}$"],
                "answer": 1,
                "explanation": "$v = at = 3.0 \\times 6.0 = 18\\,\\text{m/s}$ です。"
            }
        ]
    }
]);
