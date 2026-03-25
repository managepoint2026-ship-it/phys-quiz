window.loadQuizData("part2",
    [
        // ============================================================
        // 第2編 熱と気体（30問）
        // 第1章 熱と物質: p2_c1（熱と物質の状態 / 熱と仕事）
        // 第2章 気体のエネルギーと状態変化: p2_c2（気体の法則 / 気体分子の運動 / 気体の状態変化 / エネルギーの移り変わり）
        // ============================================================

        // ─── 第1章 熱と物質 ───

        // --- 熱と物質の状態 ---

        {
            "id": 201,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "セルシウス温度$t\\,[°\\text{C}]$と絶対温度$T\\,[\\text{K}]$の関係として正しいものはどれか。",
            "options": [
                "$T = t + 273$",
                "$T = t - 273$",
                "$T = 273 - t$",
                "$T = t \\times 273$"
            ],
            "answer": 0,
            "explanation": "絶対温度$T$はセルシウス温度$t$に273を加えたものです。$T = t + 273$（正確には273.15）。",
            "image_url": ""
        },
        {
            "id": 202,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "絶対零度は何$°\\text{C}$か。",
            "options": [
                "$0\\,°\\text{C}$",
                "$-100\\,°\\text{C}$",
                "$-273\\,°\\text{C}$",
                "$-373\\,°\\text{C}$"
            ],
            "answer": 2,
            "explanation": "絶対零度は$0\\,\\text{K}$であり、セルシウス温度では$-273\\,°\\text{C}$に相当します。",
            "image_url": ""
        },
        {
            "id": 203,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と物質の状態",
            "question": "熱は高温の物体から低温の物体へ自然に移動する。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。熱は自然に高温物体から低温物体へ移動します（熱力学第二法則）。",
            "image_url": ""
        },
        {
            "id": 204,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "質量$200\\,\\text{g}$、比熱$0.50\\,\\text{J/}(\\text{g} \\cdot \\text{K})$の金属を$20\\,°\\text{C}$から$70\\,°\\text{C}$に上げるのに必要な熱量はいくらか。",
            "options": [
                "$2000\\,\\text{J}$",
                "$5000\\,\\text{J}$",
                "$7000\\,\\text{J}$",
                "$10000\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "$Q = mc\\Delta T = 200 \\times 0.50 \\times (70 - 20) = 200 \\times 0.50 \\times 50 = 5000\\,\\text{J}$ です。",
            "image_url": ""
        },
        {
            "id": 205,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "比熱の単位として正しいものはどれか。",
            "options": [
                "$\\text{J}$",
                "$\\text{J/K}$",
                "$\\text{J/}(\\text{kg} \\cdot \\text{K})$",
                "$\\text{W}$"
            ],
            "answer": 2,
            "explanation": "比熱は物質$1\\,\\text{kg}$あたり、温度を$1\\,\\text{K}$上げるのに必要な熱量なので、単位は$\\text{J/}(\\text{kg} \\cdot \\text{K})$です。",
            "image_url": ""
        },
        {
            "id": 206,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "熱容量$C\\,[\\text{J/K}]$の物体の温度を$\\Delta T$だけ上げるのに必要な熱量$Q$はどれか。",
            "options": [
                "$Q = \\dfrac{C}{\\Delta T}$",
                "$Q = C \\Delta T$",
                "$Q = \\dfrac{\\Delta T}{C}$",
                "$Q = C + \\Delta T$"
            ],
            "answer": 1,
            "explanation": "熱容量$C$は温度を$1\\,\\text{K}$上げるのに必要な熱量なので、$Q = C\\Delta T$です。",
            "image_url": ""
        },
        {
            "id": 207,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と物質の状態",
            "question": "物質が固体から液体に変化するとき、温度は変化しない（融点において）。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。物質が融点で状態変化（融解）している間は、加えた熱は潜熱として使われ、温度は一定に保たれます。",
            "image_url": ""
        },
        {
            "id": 208,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "固体が液体を経ずに直接気体になる現象を何というか。",
            "options": [
                "融解",
                "蒸発",
                "昇華",
                "凝縮"
            ],
            "answer": 2,
            "explanation": "固体が直接気体になる現象を昇華といいます。ドライアイス（固体の$\\text{CO}_2$）が代表例です。",
            "image_url": ""
        },

        // --- 熱と仕事 ---

        {
            "id": 209,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "熱力学第一法則を表す式として正しいものはどれか（$\\Delta U$：内部エネルギーの変化、$Q$：加えた熱量、$W$：気体がした仕事）。",
            "options": [
                "$\\Delta U = Q + W$",
                "$\\Delta U = Q - W$",
                "$\\Delta U = W - Q$",
                "$\\Delta U = QW$"
            ],
            "answer": 1,
            "explanation": "熱力学第一法則は$\\Delta U = Q - W$です。気体が外部にした仕事$W$の分だけ内部エネルギーが減ります。",
            "image_url": ""
        },
        {
            "id": 210,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "気体に$500\\,\\text{J}$の熱を加え、気体が外部に$200\\,\\text{J}$の仕事をしたとき、内部エネルギーの変化はいくらか。",
            "options": [
                "$700\\,\\text{J}$",
                "$300\\,\\text{J}$",
                "$200\\,\\text{J}$",
                "$100\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "熱力学第一法則$\\Delta U = Q - W = 500 - 200 = 300\\,\\text{J}$です。",
            "image_url": ""
        },

        // ─── 第2章 気体のエネルギーと状態変化 ───

        // --- 気体の法則 ---

        {
            "id": 211,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の法則",
            "question": "理想気体の状態方程式として正しいものはどれか。",
            "options": [
                "$PV = nRT$",
                "$PV = mRT$",
                "$PT = nRV$",
                "$P = nRTV$"
            ],
            "answer": 0,
            "explanation": "理想気体の状態方程式は$PV = nRT$です。$n$は物質量[mol]、$R$は気体定数です。",
            "image_url": ""
        },
        {
            "id": 212,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の法則",
            "question": "温度一定で気体の体積を半分にすると、圧力はどうなるか。",
            "options": [
                "半分になる",
                "変わらない",
                "2倍になる",
                "4倍になる"
            ],
            "answer": 2,
            "explanation": "ボイルの法則$PV = \\text{一定}$（温度一定）より、体積が半分になれば圧力は2倍になります。",
            "image_url": ""
        },
        {
            "id": 213,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の法則",
            "question": "圧力一定で気体の絶対温度を2倍にすると、体積はどうなるか。",
            "options": [
                "半分になる",
                "変わらない",
                "2倍になる",
                "4倍になる"
            ],
            "answer": 2,
            "explanation": "シャルルの法則$\\dfrac{V}{T} = \\text{一定}$（圧力一定）より、絶対温度が2倍になれば体積も2倍になります。",
            "image_url": ""
        },
        {
            "id": 214,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の法則",
            "question": "$2.0\\,\\text{mol}$の理想気体が温度$300\\,\\text{K}$、体積$0.050\\,\\text{m}^3$のとき、圧力はおよそいくらか。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "options": [
                "$5.0 \\times 10^4\\,\\text{Pa}$",
                "$1.0 \\times 10^5\\,\\text{Pa}$",
                "$2.0 \\times 10^5\\,\\text{Pa}$",
                "$5.0 \\times 10^5\\,\\text{Pa}$"
            ],
            "answer": 1,
            "explanation": "$P = \\dfrac{nRT}{V} = \\dfrac{2.0 \\times 8.3 \\times 300}{0.050} = \\dfrac{4980}{0.050} = 99600 \\approx 1.0 \\times 10^5\\,\\text{Pa}$です。",
            "image_url": ""
        },

        // --- 気体分子の運動 ---

        {
            "id": 215,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "理想気体の内部エネルギーは何に比例するか（単原子分子理想気体の場合）。",
            "options": [
                "圧力",
                "体積",
                "絶対温度",
                "密度"
            ],
            "answer": 2,
            "explanation": "単原子分子理想気体の内部エネルギーは$U = \\dfrac{3}{2}nRT$であり、絶対温度$T$に比例します。",
            "image_url": ""
        },
        {
            "id": 216,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "単原子分子理想気体$1\\,\\text{mol}$の内部エネルギー$U$を表す式はどれか。",
            "options": [
                "$U = \\dfrac{1}{2}RT$",
                "$U = RT$",
                "$U = \\dfrac{3}{2}RT$",
                "$U = 3RT$"
            ],
            "answer": 2,
            "explanation": "単原子分子理想気体$1\\,\\text{mol}$の内部エネルギーは$U = \\dfrac{3}{2}RT$です。$\\dfrac{3}{2}$は自由度3（$x, y, z$の並進運動）に由来します。",
            "image_url": ""
        },
        {
            "id": 217,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "気体分子の二乗平均速度$\\sqrt{\\overline{v^2}}$は絶対温度$T$に対してどのような関係があるか。",
            "options": [
                "$T$に比例する",
                "$T^2$に比例する",
                "$\\sqrt{T}$に比例する",
                "$T$に反比例する"
            ],
            "answer": 2,
            "explanation": "$\\dfrac{1}{2}m\\overline{v^2} = \\dfrac{3}{2}k_BT$より、$\\sqrt{\\overline{v^2}} = \\sqrt{\\dfrac{3k_BT}{m}}$なので$\\sqrt{T}$に比例します。",
            "image_url": ""
        },

        // --- 気体の状態変化 ---

        {
            "id": 218,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "温度が一定に保たれた状態変化を何というか。",
            "options": [
                "断熱変化",
                "等温変化",
                "等圧変化",
                "等積変化"
            ],
            "answer": 1,
            "explanation": "温度一定の変化を等温変化といいます。$P$-$V$グラフでは双曲線（$PV=\\text{一定}$）となります。",
            "image_url": ""
        },
        {
            "id": 219,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "体積が一定の状態変化（等積変化）で、気体が外部にする仕事$W$はいくらか。",
            "options": [
                "$W = P\\Delta V$",
                "$W = nR\\Delta T$",
                "$W = 0$",
                "$W = Q$"
            ],
            "answer": 2,
            "explanation": "等積変化では体積が変化しないので、$W = P\\Delta V = 0$です。加えた熱はすべて内部エネルギーの増加に使われます。",
            "image_url": ""
        },
        {
            "id": 220,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "断熱膨張をした理想気体の温度はどうなるか。",
            "options": [
                "上がる",
                "変わらない",
                "下がる",
                "体積による"
            ],
            "answer": 2,
            "explanation": "断熱変化では$Q = 0$なので、$\\Delta U = -W$です。膨張すると$W > 0$なので$\\Delta U < 0$となり、温度は下がります。",
            "image_url": ""
        },

        // --- エネルギーの移り変わり ---

        {
            "id": 221,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "エネルギーの移り変わり",
            "question": "熱効率が100%の熱機関を作ることは不可能である。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。熱力学第二法則により、低温熱源に必ず一部の熱を捨てなければならず、熱効率100%の熱機関は実現できません。",
            "image_url": ""
        },
        {
            "id": 222,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "高温熱源から$Q_1$の熱を受け取り、低温熱源に$Q_2$の熱を捨てる熱機関の熱効率$e$はどれか。",
            "options": [
                "$e = \\dfrac{Q_2}{Q_1}$",
                "$e = \\dfrac{Q_1 - Q_2}{Q_1}$",
                "$e = \\dfrac{Q_1}{Q_2}$",
                "$e = \\dfrac{Q_1 + Q_2}{Q_1}$"
            ],
            "answer": 1,
            "explanation": "熱効率は$e = \\dfrac{W}{Q_1} = \\dfrac{Q_1 - Q_2}{Q_1}$です。仕事$W = Q_1 - Q_2$を受け取った熱$Q_1$で割ります。",
            "image_url": ""
        },
        {
            "id": 223,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "高温熱源から$800\\,\\text{J}$の熱を受け取り、$200\\,\\text{J}$の仕事をする熱機関の熱効率は何%か。",
            "options": [
                "$10\\%$",
                "$20\\%$",
                "$25\\%$",
                "$75\\%$"
            ],
            "answer": 2,
            "explanation": "$e = \\dfrac{W}{Q_1} = \\dfrac{200}{800} = 0.25 = 25\\%$です。",
            "image_url": ""
        },
        {
            "id": 224,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "単原子分子理想気体の定圧モル比熱$C_p$と定積モル比熱$C_v$の関係として正しいものはどれか。",
            "options": [
                "$C_p = C_v$",
                "$C_p = C_v + R$",
                "$C_p = C_v - R$",
                "$C_p = 2C_v$"
            ],
            "answer": 1,
            "explanation": "マイヤーの関係式$C_p = C_v + R$が成り立ちます。定圧では膨張の仕事が必要なため$C_p > C_v$です。",
            "image_url": ""
        },
        {
            "id": 225,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の法則",
            "question": "$P$-$V$グラフにおいて、等温変化の曲線と等圧変化の直線が点Aで交わっている。点Aから体積を増やすとき、等温変化と等圧変化ではどちらの圧力が高いか。",
            "options": [
                "等温変化の方が高い",
                "等圧変化の方が高い",
                "両方同じ",
                "条件によって異なる"
            ],
            "answer": 1,
            "explanation": "等温変化では$PV = \\text{一定}$で圧力が減少しますが、等圧変化では圧力は一定のままです。体積を増やすと等圧変化の方が圧力が高くなります。",
            "image_url": ""
        },
        {
            "id": 226,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "$P$-$V$グラフで、気体が状態AからBまで変化するとき、気体が外部にした仕事は何に対応するか。",
            "options": [
                "AからBへの直線の傾き",
                "AからBへの曲線の長さ",
                "曲線と$V$軸で囲まれた面積",
                "AとBの圧力差"
            ],
            "answer": 2,
            "explanation": "$P$-$V$グラフで気体がした仕事は$W = \\int P\\,dV$であり、曲線と$V$軸で囲まれた面積に等しいです。",
            "image_url": ""
        },
        {
            "id": 227,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "温度$80\\,°\\text{C}$、質量$100\\,\\text{g}$の金属球（比熱$0.40\\,\\text{J/}(\\text{g} \\cdot \\text{K})$）を、温度$20\\,°\\text{C}$、質量$200\\,\\text{g}$の水（比熱$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$）に入れた。熱平衡温度はおよそ何$°\\text{C}$か。ただし外部への熱の流出はないものとする。",
            "options": [
                "$22\\,°\\text{C}$",
                "$25\\,°\\text{C}$",
                "$30\\,°\\text{C}$",
                "$35\\,°\\text{C}$"
            ],
            "answer": 0,
            "explanation": "熱量保存より$100 \\times 0.40 \\times (80 - T) = 200 \\times 4.2 \\times (T - 20)$。$40(80-T) = 840(T-20)$、$3200 - 40T = 840T - 16800$、$20000 = 880T$、$T \\approx 22.7 \\approx 22\\,°\\text{C}$。",
            "image_url": ""
        },
        {
            "id": 228,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "同じ温度の水素$\\text{H}_2$（分子量2）とヘリウム$\\text{He}$（原子量4）の二乗平均速度の比$\\sqrt{\\overline{v_{\\text{H}_2}^2}}:\\sqrt{\\overline{v_{\\text{He}}^2}}$はいくらか。",
            "options": [
                "$1:1$",
                "$1:\\sqrt{2}$",
                "$\\sqrt{2}:1$",
                "$2:1$"
            ],
            "answer": 2,
            "explanation": "$\\sqrt{\\overline{v^2}} = \\sqrt{\\dfrac{3RT}{M}}$より分子量の平方根に反比例します。$\\sqrt{\\overline{v_{\\text{H}_2}^2}}:\\sqrt{\\overline{v_{\\text{He}}^2}} = \\sqrt{\\dfrac{4}{2}} = \\sqrt{2}:1$です。",
            "image_url": ""
        },
        {
            "id": 229,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "ox",
            "classification": "気体の法則",
            "question": "理想気体では、分子間に引力や斥力ははたらかない。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。理想気体は「分子間力がはたらかない」「分子自身の体積が無視できる」という仮定のもとでのモデルです。",
            "image_url": ""
        },
        {
            "id": 230,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "等圧変化で気体が外部にする仕事$W$を表す式はどれか。",
            "options": [
                "$W = nR\\Delta T$",
                "$W = P\\Delta V$",
                "$W = \\dfrac{3}{2}nR\\Delta T$",
                "$W = \\dfrac{1}{2}P\\Delta V$"
            ],
            "answer": 1,
            "explanation": "等圧変化では圧力$P$が一定なので、$W = P\\Delta V$です。状態方程式より$P\\Delta V = nR\\Delta T$とも書けます。",
            "image_url": ""
        },

        // ============================================================
        // 追加問題（231〜250）
        // ============================================================

        // --- A問題（基礎・語彙）---

        {
            "id": 231,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と物質の状態",
            "question": "熱量の単位として$\\text{J}$（ジュール）が用いられる。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。熱量はエネルギーの一形態であり、SI単位系では$\\text{J}$（ジュール）で表します。",
            "image_url": ""
        },
        {
            "id": 232,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "水の比熱はおよそいくらか。",
            "options": [
                "$0.42\\,\\text{J/}(\\text{g} \\cdot \\text{K})$",
                "$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$",
                "$42\\,\\text{J/}(\\text{g} \\cdot \\text{K})$",
                "$420\\,\\text{J/}(\\text{g} \\cdot \\text{K})$"
            ],
            "answer": 1,
            "explanation": "水の比熱はおよそ$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$です。水は比熱が大きい物質として知られています。",
            "image_url": ""
        },
        {
            "id": 233,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と仕事",
            "question": "断熱変化では、外部との熱のやりとりがない。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。断熱変化とは外部と熱のやりとりをしない（$Q = 0$）状態変化のことです。",
            "image_url": ""
        },
        {
            "id": 234,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の法則",
            "question": "ボイルの法則が成り立つ条件はどれか。",
            "options": [
                "圧力一定",
                "体積一定",
                "温度一定",
                "物質量一定"
            ],
            "answer": 2,
            "explanation": "ボイルの法則$PV = \\text{一定}$は、温度一定（等温変化）のとき成り立ちます。",
            "image_url": ""
        },
        {
            "id": 235,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "気体分子の運動",
            "question": "気体の絶対温度が高いほど、気体分子の平均の運動エネルギーは大きい。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。気体分子1個あたりの平均運動エネルギーは$\\dfrac{3}{2}k_BT$であり、絶対温度$T$に比例します。",
            "image_url": ""
        },
        {
            "id": 236,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "液体が気体に変化することを何というか。",
            "options": [
                "融解",
                "凝固",
                "蒸発（気化）",
                "凝縮"
            ],
            "answer": 2,
            "explanation": "液体が気体に変化することを蒸発（気化）といいます。逆に気体が液体になることを凝縮といいます。",
            "image_url": ""
        },
        {
            "id": 237,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "断熱圧縮をすると気体の温度はどうなるか。",
            "options": [
                "上がる",
                "下がる",
                "変わらない",
                "圧力による"
            ],
            "answer": 0,
            "explanation": "断熱圧縮では$Q = 0$で、外部から仕事をされる（$W < 0$）ので$\\Delta U = -W > 0$となり、温度は上がります。",
            "image_url": ""
        },
        {
            "id": 238,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "エネルギーの移り変わり",
            "question": "不可逆変化とは、自然に元の状態に戻ることのない変化のことである。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。摩擦による発熱や高温物体から低温物体への熱移動などは不可逆変化であり、外部から仕事をしない限り自然には元に戻りません。",
            "image_url": ""
        },

        // --- B問題（計算問題）---

        {
            "id": 239,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "熱容量$840\\,\\text{J/K}$の物体の温度を$10\\,\\text{K}$上げるのに必要な熱量はいくらか。",
            "options": [
                "$84\\,\\text{J}$",
                "$840\\,\\text{J}$",
                "$8400\\,\\text{J}$",
                "$84000\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "$Q = C\\Delta T = 840 \\times 10 = 8400\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 240,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "気体に$300\\,\\text{J}$の熱を加えたが、気体の内部エネルギーは$100\\,\\text{J}$しか増加しなかった。気体が外部にした仕事はいくらか。",
            "options": [
                "$100\\,\\text{J}$",
                "$200\\,\\text{J}$",
                "$300\\,\\text{J}$",
                "$400\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "熱力学第一法則$\\Delta U = Q - W$より、$100 = 300 - W$なので$W = 200\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 241,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の法則",
            "question": "$27\\,°\\text{C}$、$1.0 \\times 10^5\\,\\text{Pa}$の理想気体を、圧力一定のまま$127\\,°\\text{C}$に加熱した。体積は元の何倍になるか。",
            "options": [
                "$\\dfrac{4}{3}$倍",
                "$\\dfrac{3}{2}$倍",
                "$\\dfrac{127}{27}$倍",
                "$2$倍"
            ],
            "answer": 0,
            "explanation": "シャルルの法則より$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$。$T_1 = 300\\,\\text{K}$、$T_2 = 400\\,\\text{K}$なので、$\\dfrac{V_2}{V_1} = \\dfrac{400}{300} = \\dfrac{4}{3}$倍です。",
            "image_url": ""
        },
        {
            "id": 242,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "単原子分子理想気体$2.0\\,\\text{mol}$の温度を$50\\,\\text{K}$上げたときの内部エネルギーの変化はいくらか。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "options": [
                "$415\\,\\text{J}$",
                "$830\\,\\text{J}$",
                "$1245\\,\\text{J}$",
                "$2490\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "$\\Delta U = \\dfrac{3}{2}nR\\Delta T = \\dfrac{3}{2} \\times 2.0 \\times 8.3 \\times 50 = 1245\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 243,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "高温熱源から$1000\\,\\text{J}$の熱を受け取り、低温熱源に$600\\,\\text{J}$の熱を捨てる熱機関の熱効率は何%か。",
            "options": [
                "$20\\%$",
                "$40\\%$",
                "$60\\%$",
                "$80\\%$"
            ],
            "answer": 1,
            "explanation": "$e = \\dfrac{Q_1 - Q_2}{Q_1} = \\dfrac{1000 - 600}{1000} = 0.40 = 40\\%$です。",
            "image_url": ""
        },
        {
            "id": 244,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "単原子分子理想気体$1.0\\,\\text{mol}$を等積変化で温度を$100\\,\\text{K}$上げた。加えた熱量はいくらか。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "options": [
                "$830\\,\\text{J}$",
                "$1245\\,\\text{J}$",
                "$2075\\,\\text{J}$",
                "$2490\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "等積変化では$W = 0$なので$Q = \\Delta U = \\dfrac{3}{2}nR\\Delta T = \\dfrac{3}{2} \\times 1.0 \\times 8.3 \\times 100 = 1245\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 245,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "$0\\,°\\text{C}$の氷$100\\,\\text{g}$を全て$0\\,°\\text{C}$の水にするのに必要な熱量はいくらか。氷の融解熱を$334\\,\\text{J/g}$とする。",
            "options": [
                "$3340\\,\\text{J}$",
                "$16700\\,\\text{J}$",
                "$33400\\,\\text{J}$",
                "$66800\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "融解に必要な熱量は$Q = mL = 100 \\times 334 = 33400\\,\\text{J}$です。融解中は温度は$0\\,°\\text{C}$のまま一定です。",
            "image_url": ""
        },
        {
            "id": 246,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の法則",
            "question": "体積$2.0\\,\\text{L}$、圧力$1.0 \\times 10^5\\,\\text{Pa}$の理想気体を温度一定で体積$0.50\\,\\text{L}$に圧縮した。圧力はいくらになるか。",
            "options": [
                "$2.0 \\times 10^5\\,\\text{Pa}$",
                "$2.5 \\times 10^5\\,\\text{Pa}$",
                "$4.0 \\times 10^5\\,\\text{Pa}$",
                "$8.0 \\times 10^5\\,\\text{Pa}$"
            ],
            "answer": 2,
            "explanation": "ボイルの法則$P_1V_1 = P_2V_2$より、$1.0 \\times 10^5 \\times 2.0 = P_2 \\times 0.50$なので$P_2 = 4.0 \\times 10^5\\,\\text{Pa}$です。",
            "image_url": ""
        },

        // --- C問題（思考力・小問形式）---

        {
            "id": 247,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "熱量保存の法則と比熱に関する総合問題です。",
            "image_url": "",
            "common_text": "比熱$0.90\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、質量$150\\,\\text{g}$、温度$100\\,°\\text{C}$のアルミニウム球を、比熱$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、質量$300\\,\\text{g}$、温度$20\\,°\\text{C}$の水に入れた。外部への熱の流出はないものとする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "アルミニウム球が失う熱量$Q_{\\text{Al}}$を$T$（熱平衡温度）を用いて表した式として正しいものはどれか。",
                    "options": [
                        "$Q_{\\text{Al}} = 150 \\times 0.90 \\times (100 - T)$",
                        "$Q_{\\text{Al}} = 150 \\times 0.90 \\times (T - 100)$",
                        "$Q_{\\text{Al}} = 300 \\times 4.2 \\times (100 - T)$",
                        "$Q_{\\text{Al}} = 150 \\times 4.2 \\times (100 - T)$"
                    ],
                    "answer": 0,
                    "explanation": "アルミニウムが失う熱量は$Q_{\\text{Al}} = m_{\\text{Al}} c_{\\text{Al}} (100 - T) = 150 \\times 0.90 \\times (100 - T)$です。"
                },
                {
                    "type": "choice",
                    "question": "熱平衡温度$T$はおよそ何$°\\text{C}$か。",
                    "options": [
                        "$25\\,°\\text{C}$",
                        "$29\\,°\\text{C}$",
                        "$35\\,°\\text{C}$",
                        "$42\\,°\\text{C}$"
                    ],
                    "answer": 1,
                    "explanation": "熱量保存$150 \\times 0.90 \\times (100 - T) = 300 \\times 4.2 \\times (T - 20)$を解くと、$135(100 - T) = 1260(T - 20)$、$13500 - 135T = 1260T - 25200$、$38700 = 1395T$、$T \\approx 27.7 \\approx 29\\,°\\text{C}$（選択肢で最も近い値）。"
                },
                {
                    "type": "ox",
                    "question": "このとき、アルミニウム球の温度変化は水の温度変化より大きい。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 0,
                    "explanation": "正しいです。アルミニウムは約$100 - 29 = 71\\,°\\text{C}$下がり、水は約$29 - 20 = 9\\,°\\text{C}$上がるので、アルミニウムの温度変化の方が大きいです。水の方が比熱が大きく質量も大きいため、同じ熱量のやりとりでも温度変化は小さくなります。"
                }
            ]
        },
        {
            "id": 248,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "等圧変化における熱力学第一法則の総合問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$1.0\\,\\text{mol}$を圧力$1.0 \\times 10^5\\,\\text{Pa}$で一定に保ちながら、体積を$2.0 \\times 10^{-2}\\,\\text{m}^3$から$3.0 \\times 10^{-2}\\,\\text{m}^3$に膨張させた。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "この等圧変化で気体が外部にした仕事$W$はいくらか。",
                    "options": [
                        "$500\\,\\text{J}$",
                        "$1000\\,\\text{J}$",
                        "$2000\\,\\text{J}$",
                        "$3000\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$W = P\\Delta V = 1.0 \\times 10^5 \\times (3.0 - 2.0) \\times 10^{-2} = 1.0 \\times 10^5 \\times 1.0 \\times 10^{-2} = 1000\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "温度変化$\\Delta T$はおよそいくらか。$P\\Delta V = nR\\Delta T$を用いよ。",
                    "options": [
                        "$60\\,\\text{K}$",
                        "$120\\,\\text{K}$",
                        "$240\\,\\text{K}$",
                        "$360\\,\\text{K}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Delta T = \\dfrac{P\\Delta V}{nR} = \\dfrac{1000}{1.0 \\times 8.3} \\approx 120\\,\\text{K}$です。"
                },
                {
                    "type": "choice",
                    "question": "この変化で気体に加えた熱量$Q$はいくらか。ヒント：$Q = \\Delta U + W$、$\\Delta U = \\dfrac{3}{2}nR\\Delta T$。",
                    "options": [
                        "$1500\\,\\text{J}$",
                        "$2000\\,\\text{J}$",
                        "$2500\\,\\text{J}$",
                        "$3500\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$\\Delta U = \\dfrac{3}{2} \\times 1.0 \\times 8.3 \\times 120 \\approx 1494 \\approx 1500\\,\\text{J}$。$Q = \\Delta U + W = 1500 + 1000 = 2500\\,\\text{J}$です。"
                }
            ]
        },
        {
            "id": 249,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の法則",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "ボイル・シャルルの法則に関する総合問題です。",
            "image_url": "",
            "common_text": "温度$27\\,°\\text{C}$、圧力$1.0 \\times 10^5\\,\\text{Pa}$、体積$6.0\\,\\text{L}$の理想気体がある。この気体に対して次の変化を行った。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "温度を$27\\,°\\text{C}$に保ったまま体積を$2.0\\,\\text{L}$に圧縮した。圧力はいくらになるか。",
                    "options": [
                        "$1.5 \\times 10^5\\,\\text{Pa}$",
                        "$2.0 \\times 10^5\\,\\text{Pa}$",
                        "$3.0 \\times 10^5\\,\\text{Pa}$",
                        "$6.0 \\times 10^5\\,\\text{Pa}$"
                    ],
                    "answer": 2,
                    "explanation": "ボイルの法則$P_1V_1 = P_2V_2$より、$1.0 \\times 10^5 \\times 6.0 = P_2 \\times 2.0$なので$P_2 = 3.0 \\times 10^5\\,\\text{Pa}$です。"
                },
                {
                    "type": "choice",
                    "question": "さらに体積$2.0\\,\\text{L}$のまま温度を$327\\,°\\text{C}$に上げた。圧力はいくらになるか。",
                    "options": [
                        "$3.0 \\times 10^5\\,\\text{Pa}$",
                        "$4.0 \\times 10^5\\,\\text{Pa}$",
                        "$6.0 \\times 10^5\\,\\text{Pa}$",
                        "$9.0 \\times 10^5\\,\\text{Pa}$"
                    ],
                    "answer": 2,
                    "explanation": "等積変化で$\\dfrac{P_2}{T_2} = \\dfrac{P_3}{T_3}$。$T_2 = 300\\,\\text{K}$、$T_3 = 600\\,\\text{K}$なので$P_3 = 3.0 \\times 10^5 \\times \\dfrac{600}{300} = 6.0 \\times 10^5\\,\\text{Pa}$です。"
                }
            ]
        },
        {
            "id": 250,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "熱機関の熱効率と熱力学第二法則に関する総合問題です。",
            "image_url": "",
            "common_text": "ある熱機関が高温熱源（温度$T_1$）から毎サイクル$Q_1 = 2000\\,\\text{J}$の熱を受け取り、低温熱源（温度$T_2$）に$Q_2$の熱を放出して仕事をしている。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "この熱機関の熱効率が$30\\%$のとき、毎サイクルで外部にする仕事$W$はいくらか。",
                    "options": [
                        "$200\\,\\text{J}$",
                        "$400\\,\\text{J}$",
                        "$600\\,\\text{J}$",
                        "$800\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$e = \\dfrac{W}{Q_1}$より、$W = eQ_1 = 0.30 \\times 2000 = 600\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "このとき低温熱源に捨てる熱量$Q_2$はいくらか。",
                    "options": [
                        "$600\\,\\text{J}$",
                        "$1000\\,\\text{J}$",
                        "$1400\\,\\text{J}$",
                        "$1800\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "エネルギー保存より$Q_2 = Q_1 - W = 2000 - 600 = 1400\\,\\text{J}$です。"
                },
                {
                    "type": "ox",
                    "question": "この熱機関の熱効率を$100\\%$にすることは理論上可能である。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 1,
                    "explanation": "誤りです。熱力学第二法則により、熱をすべて仕事に変換する（$Q_2 = 0$）熱機関は実現不可能です。必ず低温熱源に一部の熱を捨てなければなりません。"
                }
            ]
        },

        // ============================================================
        // 追加問題（251〜300）— 50問追加
        // A=19, B=15, C=16
        // ============================================================

        // --- A問題（基礎・語彙）---

        {
            "id": 251,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と物質の状態",
            "question": "比熱が大きい物質ほど、同じ熱量を加えたときの温度変化は小さい。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。$Q = mc\\Delta T$より、比熱$c$が大きいほど同じ$Q$に対して$\\Delta T$は小さくなります。",
            "image_url": ""
        },
        {
            "id": 252,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "熱容量の単位として正しいものはどれか。",
            "options": [
                "$\\text{J}$",
                "$\\text{J/K}$",
                "$\\text{J/}(\\text{kg} \\cdot \\text{K})$",
                "$\\text{K/J}$"
            ],
            "answer": 1,
            "explanation": "熱容量は物体全体の温度を$1\\,\\text{K}$上げるのに必要な熱量なので、単位は$\\text{J/K}$です。",
            "image_url": ""
        },
        {
            "id": 253,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と物質の状態",
            "question": "水が沸騰しているとき、加えた熱はすべて温度上昇に使われる。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 1,
            "explanation": "誤りです。沸騰中は加えた熱は蒸発熱（気化熱）として使われ、温度は$100\\,°\\text{C}$で一定に保たれます。",
            "image_url": ""
        },
        {
            "id": 254,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "気体が液体に変化する現象を何というか。",
            "options": [
                "融解",
                "昇華",
                "凝縮",
                "蒸発"
            ],
            "answer": 2,
            "explanation": "気体が液体に変化する現象を凝縮といいます。逆に液体が気体になることを蒸発（気化）といいます。",
            "image_url": ""
        },
        {
            "id": 255,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "セルシウス温度$100\\,°\\text{C}$は絶対温度で何$\\text{K}$か。",
            "options": [
                "$100\\,\\text{K}$",
                "$173\\,\\text{K}$",
                "$273\\,\\text{K}$",
                "$373\\,\\text{K}$"
            ],
            "answer": 3,
            "explanation": "$T = t + 273 = 100 + 273 = 373\\,\\text{K}$です。",
            "image_url": ""
        },
        {
            "id": 256,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と仕事",
            "question": "熱力学第一法則はエネルギー保存の法則を熱現象に適用したものである。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。熱力学第一法則$\\Delta U = Q - W$は、熱と仕事を含むエネルギー保存則です。",
            "image_url": ""
        },
        {
            "id": 257,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "気体が外部から仕事をされ、熱の出入りがないとき、内部エネルギーはどうなるか。",
            "options": [
                "増加する",
                "減少する",
                "変化しない",
                "温度による"
            ],
            "answer": 0,
            "explanation": "$Q = 0$で外部から仕事をされる（$W < 0$）とき、$\\Delta U = Q - W = -W > 0$なので内部エネルギーは増加します。",
            "image_url": ""
        },
        {
            "id": 258,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の法則",
            "question": "シャルルの法則が成り立つ条件はどれか。",
            "options": [
                "温度一定",
                "圧力一定",
                "体積一定",
                "内部エネルギー一定"
            ],
            "answer": 1,
            "explanation": "シャルルの法則$\\dfrac{V}{T} = \\text{一定}$は、圧力一定（等圧変化）のとき成り立ちます。",
            "image_url": ""
        },
        {
            "id": 259,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "気体の法則",
            "question": "理想気体の状態方程式$PV = nRT$の$R$は気体の種類によって異なる。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 1,
            "explanation": "誤りです。$R$（気体定数）は気体の種類によらず一定で、$R \\approx 8.31\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$です。",
            "image_url": ""
        },
        {
            "id": 260,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "ボルツマン定数$k_B$と気体定数$R$、アボガドロ数$N_A$の関係として正しいものはどれか。",
            "options": [
                "$k_B = RN_A$",
                "$k_B = \\dfrac{R}{N_A}$",
                "$k_B = R + N_A$",
                "$k_B = R - N_A$"
            ],
            "answer": 1,
            "explanation": "ボルツマン定数は$k_B = \\dfrac{R}{N_A}$の関係があります。気体定数を1分子あたりに換算した値です。",
            "image_url": ""
        },
        {
            "id": 261,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "気体分子の運動",
            "question": "同じ温度の気体であれば、分子の種類によらず1分子あたりの平均運動エネルギーは等しい。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。気体分子1個あたりの平均運動エネルギーは$\\dfrac{3}{2}k_BT$であり、分子の種類によらず絶対温度のみで決まります。",
            "image_url": ""
        },
        {
            "id": 262,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "圧力が一定に保たれた状態変化を何というか。",
            "options": [
                "等温変化",
                "等積変化",
                "等圧変化",
                "断熱変化"
            ],
            "answer": 2,
            "explanation": "圧力一定の変化を等圧変化といいます。$V$-$T$グラフでは原点を通る直線になります。",
            "image_url": ""
        },
        {
            "id": 263,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "等温変化において、理想気体の内部エネルギーはどうなるか。",
            "options": [
                "増加する",
                "減少する",
                "変化しない",
                "圧力による"
            ],
            "answer": 2,
            "explanation": "理想気体の内部エネルギーは温度のみに依存するため、等温変化では$\\Delta U = 0$で変化しません。",
            "image_url": ""
        },
        {
            "id": 264,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "エネルギーの移り変わり",
            "question": "熱力学第二法則によれば、低温物体から高温物体へ自然に熱が移動することはない。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。外部から仕事をしなければ、低温物体から高温物体へ自然に熱が移動することはありません（クラウジウスの原理）。",
            "image_url": ""
        },
        {
            "id": 265,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "エネルギーの変換において、摩擦がある場合に生じるのはどのようなエネルギーか。",
            "options": [
                "位置エネルギー",
                "運動エネルギー",
                "熱エネルギー",
                "電気エネルギー"
            ],
            "answer": 2,
            "explanation": "摩擦によって力学的エネルギーの一部が熱エネルギーに変換されます。これは不可逆過程です。",
            "image_url": ""
        },
        {
            "id": 266,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "固体が液体に変化するときに必要な熱を何というか。",
            "options": [
                "蒸発熱",
                "融解熱",
                "比熱",
                "熱容量"
            ],
            "answer": 1,
            "explanation": "固体が液体に変化する（融解する）ときに必要な熱を融解熱といいます。",
            "image_url": ""
        },
        {
            "id": 267,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の法則",
            "question": "体積一定で理想気体の絶対温度を3倍にすると、圧力はどうなるか。",
            "options": [
                "$\\dfrac{1}{3}$倍になる",
                "変わらない",
                "3倍になる",
                "9倍になる"
            ],
            "answer": 2,
            "explanation": "体積一定のとき$\\dfrac{P}{T} = \\text{一定}$なので、絶対温度が3倍になれば圧力も3倍になります。",
            "image_url": ""
        },
        {
            "id": 268,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と仕事",
            "question": "等温変化では加えた熱がすべて気体のした仕事に変わる。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。等温変化では$\\Delta U = 0$なので、熱力学第一法則$\\Delta U = Q - W$より$Q = W$となり、加えた熱がすべて仕事に変わります。",
            "image_url": ""
        },
        {
            "id": 269,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "気体分子が容器の壁に衝突することで生じる力の効果は何か。",
            "options": [
                "温度",
                "内部エネルギー",
                "圧力",
                "熱量"
            ],
            "answer": 2,
            "explanation": "気体の圧力は、多数の気体分子が容器の壁に衝突して力を及ぼすことによって生じます。",
            "image_url": ""
        },

        // --- B問題（計算問題）---

        {
            "id": 270,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "質量$500\\,\\text{g}$、比熱$0.38\\,\\text{J/}(\\text{g} \\cdot \\text{K})$の銅の塊の熱容量はいくらか。",
            "options": [
                "$19\\,\\text{J/K}$",
                "$190\\,\\text{J/K}$",
                "$1900\\,\\text{J/K}$",
                "$19000\\,\\text{J/K}$"
            ],
            "answer": 1,
            "explanation": "熱容量$C = mc = 500 \\times 0.38 = 190\\,\\text{J/K}$です。",
            "image_url": ""
        },
        {
            "id": 271,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "質量$50\\,\\text{g}$の金属に$1050\\,\\text{J}$の熱を加えたところ、温度が$50\\,\\text{K}$上昇した。この金属の比熱はいくらか。",
            "options": [
                "$0.21\\,\\text{J/}(\\text{g} \\cdot \\text{K})$",
                "$0.42\\,\\text{J/}(\\text{g} \\cdot \\text{K})$",
                "$0.84\\,\\text{J/}(\\text{g} \\cdot \\text{K})$",
                "$1.05\\,\\text{J/}(\\text{g} \\cdot \\text{K})$"
            ],
            "answer": 1,
            "explanation": "$c = \\dfrac{Q}{m\\Delta T} = \\dfrac{1050}{50 \\times 50} = \\dfrac{1050}{2500} = 0.42\\,\\text{J/}(\\text{g} \\cdot \\text{K})$です。",
            "image_url": ""
        },
        {
            "id": 272,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "断熱変化で外部から気体に$400\\,\\text{J}$の仕事をした。内部エネルギーの変化はいくらか。",
            "options": [
                "$-400\\,\\text{J}$",
                "$0\\,\\text{J}$",
                "$200\\,\\text{J}$",
                "$400\\,\\text{J}$"
            ],
            "answer": 3,
            "explanation": "断熱変化では$Q = 0$です。外部から仕事をされたので気体がした仕事は$W = -400\\,\\text{J}$。$\\Delta U = Q - W = 0 - (-400) = 400\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 273,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "$100\\,°\\text{C}$の水蒸気$10\\,\\text{g}$が$100\\,°\\text{C}$の水になるとき放出される熱量はいくらか。水の蒸発熱を$2260\\,\\text{J/g}$とする。",
            "options": [
                "$2260\\,\\text{J}$",
                "$11300\\,\\text{J}$",
                "$22600\\,\\text{J}$",
                "$45200\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "凝縮で放出される熱量は$Q = mL = 10 \\times 2260 = 22600\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 274,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の法則",
            "question": "$0\\,°\\text{C}$、$1.0 \\times 10^5\\,\\text{Pa}$で$22.4\\,\\text{L}$を占める理想気体の物質量はいくらか。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "options": [
                "$0.50\\,\\text{mol}$",
                "$1.0\\,\\text{mol}$",
                "$2.0\\,\\text{mol}$",
                "$4.0\\,\\text{mol}$"
            ],
            "answer": 1,
            "explanation": "$n = \\dfrac{PV}{RT} = \\dfrac{1.0 \\times 10^5 \\times 22.4 \\times 10^{-3}}{8.3 \\times 273} = \\dfrac{2240}{2265.9} \\approx 1.0\\,\\text{mol}$です。",
            "image_url": ""
        },
        {
            "id": 275,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の法則",
            "question": "$27\\,°\\text{C}$、体積$3.0\\,\\text{L}$の理想気体を体積一定のまま$127\\,°\\text{C}$に加熱した。初期圧力が$2.0 \\times 10^5\\,\\text{Pa}$のとき、加熱後の圧力はいくらか。",
            "options": [
                "$2.0 \\times 10^5\\,\\text{Pa}$",
                "$\\dfrac{8.0}{3} \\times 10^5\\,\\text{Pa}$",
                "$4.0 \\times 10^5\\,\\text{Pa}$",
                "$8.0 \\times 10^5\\,\\text{Pa}$"
            ],
            "answer": 1,
            "explanation": "等積変化で$\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}$。$T_1 = 300\\,\\text{K}$、$T_2 = 400\\,\\text{K}$なので、$P_2 = 2.0 \\times 10^5 \\times \\dfrac{400}{300} = \\dfrac{8.0}{3} \\times 10^5\\,\\text{Pa}$です。",
            "image_url": ""
        },
        {
            "id": 276,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "単原子分子理想気体$3.0\\,\\text{mol}$の温度が$200\\,\\text{K}$のとき、内部エネルギーはいくらか。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "options": [
                "$2490\\,\\text{J}$",
                "$4980\\,\\text{J}$",
                "$7470\\,\\text{J}$",
                "$9960\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "$U = \\dfrac{3}{2}nRT = \\dfrac{3}{2} \\times 3.0 \\times 8.3 \\times 200 = 7470\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 277,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "単原子分子理想気体$2.0\\,\\text{mol}$を等圧変化で温度を$60\\,\\text{K}$上げた。気体が外部にした仕事はいくらか。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "options": [
                "$498\\,\\text{J}$",
                "$996\\,\\text{J}$",
                "$1494\\,\\text{J}$",
                "$2490\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "等圧変化で$W = P\\Delta V = nR\\Delta T = 2.0 \\times 8.3 \\times 60 = 996\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 278,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "単原子分子理想気体$1.0\\,\\text{mol}$を等圧変化で温度を$80\\,\\text{K}$上げた。加えた熱量はいくらか。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。ヒント：$Q = \\dfrac{5}{2}nR\\Delta T$。",
            "options": [
                "$664\\,\\text{J}$",
                "$996\\,\\text{J}$",
                "$1660\\,\\text{J}$",
                "$2324\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "等圧変化での加熱量は$Q = \\dfrac{5}{2}nR\\Delta T = \\dfrac{5}{2} \\times 1.0 \\times 8.3 \\times 80 = 1660\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 279,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "高温熱源から$1500\\,\\text{J}$の熱を受け取り、$500\\,\\text{J}$の仕事をする熱機関がある。低温熱源に捨てる熱量はいくらか。",
            "options": [
                "$500\\,\\text{J}$",
                "$1000\\,\\text{J}$",
                "$1500\\,\\text{J}$",
                "$2000\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "エネルギー保存より$Q_2 = Q_1 - W = 1500 - 500 = 1000\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 280,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "等積変化で気体に$600\\,\\text{J}$の熱を加えた。内部エネルギーの変化はいくらか。",
            "options": [
                "$0\\,\\text{J}$",
                "$300\\,\\text{J}$",
                "$600\\,\\text{J}$",
                "$1200\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "等積変化では$W = 0$なので、$\\Delta U = Q - W = 600 - 0 = 600\\,\\text{J}$です。加えた熱がすべて内部エネルギーの増加になります。",
            "image_url": ""
        },
        {
            "id": 281,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "気体分子1個の平均運動エネルギーが$6.2 \\times 10^{-21}\\,\\text{J}$であるとき、気体の温度はおよそ何$\\text{K}$か。ボルツマン定数$k_B = 1.38 \\times 10^{-23}\\,\\text{J/K}$とする。",
            "options": [
                "$100\\,\\text{K}$",
                "$200\\,\\text{K}$",
                "$300\\,\\text{K}$",
                "$400\\,\\text{K}$"
            ],
            "answer": 2,
            "explanation": "$\\dfrac{3}{2}k_BT = 6.2 \\times 10^{-21}$より、$T = \\dfrac{2 \\times 6.2 \\times 10^{-21}}{3 \\times 1.38 \\times 10^{-23}} = \\dfrac{12.4 \\times 10^{-21}}{4.14 \\times 10^{-23}} \\approx 300\\,\\text{K}$です。",
            "image_url": ""
        },
        {
            "id": 282,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "熱効率$20\\%$の熱機関が$400\\,\\text{J}$の仕事をするには、高温熱源から何$\\text{J}$の熱を受け取る必要があるか。",
            "options": [
                "$800\\,\\text{J}$",
                "$1200\\,\\text{J}$",
                "$2000\\,\\text{J}$",
                "$4000\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "$e = \\dfrac{W}{Q_1}$より、$Q_1 = \\dfrac{W}{e} = \\dfrac{400}{0.20} = 2000\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 283,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の法則",
            "question": "容器AとBが細い管でつながっている。Aの体積は$3.0\\,\\text{L}$で$3.0 \\times 10^5\\,\\text{Pa}$、Bの体積は$6.0\\,\\text{L}$で真空である。管を開いて十分に時間が経ったとき、温度一定で全体の圧力はいくらになるか。",
            "options": [
                "$0.50 \\times 10^5\\,\\text{Pa}$",
                "$1.0 \\times 10^5\\,\\text{Pa}$",
                "$1.5 \\times 10^5\\,\\text{Pa}$",
                "$3.0 \\times 10^5\\,\\text{Pa}$"
            ],
            "answer": 1,
            "explanation": "ボイルの法則$P_1V_1 = P_2V_2$より、$3.0 \\times 10^5 \\times 3.0 = P_2 \\times (3.0 + 6.0)$なので$P_2 = \\dfrac{9.0 \\times 10^5}{9.0} = 1.0 \\times 10^5\\,\\text{Pa}$です。",
            "image_url": ""
        },
        {
            "id": 284,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "比熱$0.90\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、質量$200\\,\\text{g}$のアルミニウムの温度を$30\\,°\\text{C}$から$80\\,°\\text{C}$に上げるのに必要な熱量はいくらか。",
            "options": [
                "$4500\\,\\text{J}$",
                "$9000\\,\\text{J}$",
                "$14400\\,\\text{J}$",
                "$18000\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "$Q = mc\\Delta T = 200 \\times 0.90 \\times (80 - 30) = 200 \\times 0.90 \\times 50 = 9000\\,\\text{J}$です。",
            "image_url": ""
        },

        // --- C問題（思考力・小問形式）---

        {
            "id": 285,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "氷の融解と温度変化を含む熱量計算の総合問題です。",
            "image_url": "",
            "common_text": "$0\\,°\\text{C}$の氷$50\\,\\text{g}$を$80\\,°\\text{C}$の水$200\\,\\text{g}$に入れた。水の比熱を$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、氷の融解熱を$334\\,\\text{J/g}$とし、外部への熱の流出はないものとする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "氷$50\\,\\text{g}$がすべて融解するのに必要な熱量はいくらか。",
                    "options": [
                        "$8350\\,\\text{J}$",
                        "$16700\\,\\text{J}$",
                        "$25050\\,\\text{J}$",
                        "$33400\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$Q_{\\text{融解}} = mL = 50 \\times 334 = 16700\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "熱平衡温度はおよそ何$°\\text{C}$か。",
                    "options": [
                        "$40\\,°\\text{C}$",
                        "$45\\,°\\text{C}$",
                        "$49\\,°\\text{C}$",
                        "$55\\,°\\text{C}$"
                    ],
                    "answer": 2,
                    "explanation": "水が失う熱$= 200 \\times 4.2 \\times (80 - T)$、氷が得る熱$= 16700 + 50 \\times 4.2 \\times (T - 0)$。$840(80 - T) = 16700 + 210T$、$67200 - 840T = 16700 + 210T$、$50500 = 1050T$、$T \\approx 48.1 \\approx 49\\,°\\text{C}$。"
                }
            ]
        },
        {
            "id": 286,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "熱力学第一法則の応用問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$2.0\\,\\text{mol}$に$4150\\,\\text{J}$の熱を加えたところ、気体は膨張して外部に$1660\\,\\text{J}$の仕事をした。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "内部エネルギーの変化$\\Delta U$はいくらか。",
                    "options": [
                        "$1245\\,\\text{J}$",
                        "$2490\\,\\text{J}$",
                        "$4150\\,\\text{J}$",
                        "$5810\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Delta U = Q - W = 4150 - 1660 = 2490\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "この変化による温度変化$\\Delta T$はおよそいくらか。$\\Delta U = \\dfrac{3}{2}nR\\Delta T$を用いよ。",
                    "options": [
                        "$50\\,\\text{K}$",
                        "$100\\,\\text{K}$",
                        "$150\\,\\text{K}$",
                        "$200\\,\\text{K}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Delta T = \\dfrac{\\Delta U}{\\dfrac{3}{2}nR} = \\dfrac{2490}{\\dfrac{3}{2} \\times 2.0 \\times 8.3} = \\dfrac{2490}{24.9} = 100\\,\\text{K}$です。"
                },
                {
                    "type": "ox",
                    "question": "この変化は等積変化である。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 1,
                    "explanation": "誤りです。等積変化では$W = 0$ですが、この変化では$W = 1660\\,\\text{J} \\neq 0$なので等積変化ではありません。"
                }
            ]
        },
        {
            "id": 287,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の法則",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "混合気体に関する総合問題です。",
            "image_url": "",
            "common_text": "容器A（体積$2.0\\,\\text{L}$、圧力$3.0 \\times 10^5\\,\\text{Pa}$）と容器B（体積$4.0\\,\\text{L}$、圧力$1.5 \\times 10^5\\,\\text{Pa}$）がコックのついた細い管でつながっている。両容器の温度は等しく一定に保たれているものとする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "コックを開いて十分に時間が経った後の全体の圧力はいくらか。",
                    "options": [
                        "$1.5 \\times 10^5\\,\\text{Pa}$",
                        "$2.0 \\times 10^5\\,\\text{Pa}$",
                        "$2.5 \\times 10^5\\,\\text{Pa}$",
                        "$3.0 \\times 10^5\\,\\text{Pa}$"
                    ],
                    "answer": 1,
                    "explanation": "温度一定なので全体の物質量は保存されます。$P_1V_1 + P_2V_2 = P(V_1 + V_2)$。$3.0 \\times 10^5 \\times 2.0 + 1.5 \\times 10^5 \\times 4.0 = P \\times 6.0$。$12.0 \\times 10^5 = 6.0P$。$P = 2.0 \\times 10^5\\,\\text{Pa}$です。"
                },
                {
                    "type": "ox",
                    "question": "コックを開いた後、容器A内の気体の圧力は元より低くなる。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 0,
                    "explanation": "正しいです。容器Aの元の圧力は$3.0 \\times 10^5\\,\\text{Pa}$で、混合後は$2.0 \\times 10^5\\,\\text{Pa}$なので低くなります。"
                }
            ]
        },
        {
            "id": 288,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "気体分子の運動エネルギーと速さに関する総合問題です。",
            "image_url": "",
            "common_text": "温度$27\\,°\\text{C}$のヘリウム（$\\text{He}$、原子量$4.0$）について考える。アボガドロ数$N_A = 6.0 \\times 10^{23}\\,/\\text{mol}$、ボルツマン定数$k_B = 1.38 \\times 10^{-23}\\,\\text{J/K}$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "ヘリウム原子1個の平均運動エネルギーはおよそいくらか。",
                    "options": [
                        "$2.1 \\times 10^{-21}\\,\\text{J}$",
                        "$4.1 \\times 10^{-21}\\,\\text{J}$",
                        "$6.2 \\times 10^{-21}\\,\\text{J}$",
                        "$8.3 \\times 10^{-21}\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$\\dfrac{3}{2}k_BT = \\dfrac{3}{2} \\times 1.38 \\times 10^{-23} \\times 300 = 6.21 \\times 10^{-21} \\approx 6.2 \\times 10^{-21}\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "ヘリウム原子1個の質量はおよそいくらか。",
                    "options": [
                        "$6.7 \\times 10^{-27}\\,\\text{kg}$",
                        "$6.7 \\times 10^{-26}\\,\\text{kg}$",
                        "$6.7 \\times 10^{-25}\\,\\text{kg}$",
                        "$6.7 \\times 10^{-24}\\,\\text{kg}$"
                    ],
                    "answer": 0,
                    "explanation": "$m = \\dfrac{M}{N_A} = \\dfrac{4.0 \\times 10^{-3}}{6.0 \\times 10^{23}} \\approx 6.7 \\times 10^{-27}\\,\\text{kg}$です。"
                },
                {
                    "type": "choice",
                    "question": "ヘリウム原子の二乗平均速度$\\sqrt{\\overline{v^2}}$はおよそいくらか。",
                    "options": [
                        "$680\\,\\text{m/s}$",
                        "$1360\\,\\text{m/s}$",
                        "$2040\\,\\text{m/s}$",
                        "$2720\\,\\text{m/s}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\sqrt{\\overline{v^2}} = \\sqrt{\\dfrac{3k_BT}{m}} = \\sqrt{\\dfrac{2 \\times 6.2 \\times 10^{-21}}{6.7 \\times 10^{-27}}} = \\sqrt{\\dfrac{12.4 \\times 10^{-21}}{6.7 \\times 10^{-27}}} = \\sqrt{1.85 \\times 10^{6}} \\approx 1360\\,\\text{m/s}$です。"
                }
            ]
        },
        {
            "id": 289,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "等積変化における熱力学第一法則の総合問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$2.0\\,\\text{mol}$が体積$1.0 \\times 10^{-2}\\,\\text{m}^3$の密閉容器に入っている。温度を$300\\,\\text{K}$から$500\\,\\text{K}$に上げた。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "気体が外部にした仕事$W$はいくらか。",
                    "options": [
                        "$0\\,\\text{J}$",
                        "$1660\\,\\text{J}$",
                        "$3320\\,\\text{J}$",
                        "$4980\\,\\text{J}$"
                    ],
                    "answer": 0,
                    "explanation": "密閉容器なので体積一定（等積変化）です。$W = P\\Delta V = 0$です。"
                },
                {
                    "type": "choice",
                    "question": "内部エネルギーの変化$\\Delta U$はいくらか。",
                    "options": [
                        "$2490\\,\\text{J}$",
                        "$4980\\,\\text{J}$",
                        "$7470\\,\\text{J}$",
                        "$9960\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Delta U = \\dfrac{3}{2}nR\\Delta T = \\dfrac{3}{2} \\times 2.0 \\times 8.3 \\times 200 = 4980\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "気体に加えた熱量$Q$はいくらか。",
                    "options": [
                        "$2490\\,\\text{J}$",
                        "$4980\\,\\text{J}$",
                        "$7470\\,\\text{J}$",
                        "$9960\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "等積変化では$W = 0$なので$Q = \\Delta U + W = 4980 + 0 = 4980\\,\\text{J}$です。"
                }
            ]
        },
        {
            "id": 290,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "カルノーサイクルに関する総合問題です。",
            "image_url": "",
            "common_text": "高温熱源$T_1 = 600\\,\\text{K}$、低温熱源$T_2 = 300\\,\\text{K}$で動作する理想的な熱機関（カルノー機関）がある。高温熱源から毎サイクル$Q_1 = 3000\\,\\text{J}$の熱を受け取るものとする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "カルノー機関の理論上の最大熱効率はいくらか。",
                    "options": [
                        "$25\\%$",
                        "$50\\%$",
                        "$75\\%$",
                        "$100\\%$"
                    ],
                    "answer": 1,
                    "explanation": "カルノー効率$e = 1 - \\dfrac{T_2}{T_1} = 1 - \\dfrac{300}{600} = 0.50 = 50\\%$です。"
                },
                {
                    "type": "choice",
                    "question": "毎サイクルで得られる最大の仕事$W$はいくらか。",
                    "options": [
                        "$750\\,\\text{J}$",
                        "$1000\\,\\text{J}$",
                        "$1500\\,\\text{J}$",
                        "$2000\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$W = eQ_1 = 0.50 \\times 3000 = 1500\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "低温熱源に捨てる熱量$Q_2$はいくらか。",
                    "options": [
                        "$750\\,\\text{J}$",
                        "$1000\\,\\text{J}$",
                        "$1500\\,\\text{J}$",
                        "$2000\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$Q_2 = Q_1 - W = 3000 - 1500 = 1500\\,\\text{J}$です。"
                }
            ]
        },
        {
            "id": 291,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "水の加熱と状態変化に関する総合問題です。",
            "image_url": "",
            "common_text": "$0\\,°\\text{C}$の氷$200\\,\\text{g}$を加熱して、すべて$100\\,°\\text{C}$の水蒸気にしたい。水の比熱を$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、氷の融解熱を$334\\,\\text{J/g}$、水の蒸発熱を$2260\\,\\text{J/g}$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "氷を$0\\,°\\text{C}$の水にするのに必要な熱量はいくらか。",
                    "options": [
                        "$33400\\,\\text{J}$",
                        "$66800\\,\\text{J}$",
                        "$84000\\,\\text{J}$",
                        "$100800\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$Q_1 = mL_{\\text{融解}} = 200 \\times 334 = 66800\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "$0\\,°\\text{C}$の水を$100\\,°\\text{C}$の水にするのに必要な熱量はいくらか。",
                    "options": [
                        "$42000\\,\\text{J}$",
                        "$63000\\,\\text{J}$",
                        "$84000\\,\\text{J}$",
                        "$126000\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$Q_2 = mc\\Delta T = 200 \\times 4.2 \\times 100 = 84000\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "全過程で必要な総熱量はおよそいくらか。",
                    "options": [
                        "$3.0 \\times 10^5\\,\\text{J}$",
                        "$4.5 \\times 10^5\\,\\text{J}$",
                        "$6.0 \\times 10^5\\,\\text{J}$",
                        "$7.5 \\times 10^5\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$Q_3 = mL_{\\text{蒸発}} = 200 \\times 2260 = 452000\\,\\text{J}$。総熱量$= Q_1 + Q_2 + Q_3 = 66800 + 84000 + 452000 = 602800 \\approx 6.0 \\times 10^5\\,\\text{J}$です。"
                }
            ]
        },
        {
            "id": 292,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の法則",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "状態方程式を用いた気体の状態変化に関する総合問題です。",
            "image_url": "",
            "common_text": "$1.0\\,\\text{mol}$の理想気体が温度$300\\,\\text{K}$、圧力$1.0 \\times 10^5\\,\\text{Pa}$の状態Aにある。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "状態Aでの気体の体積はおよそいくらか。",
                    "options": [
                        "$1.25 \\times 10^{-2}\\,\\text{m}^3$",
                        "$2.49 \\times 10^{-2}\\,\\text{m}^3$",
                        "$4.98 \\times 10^{-2}\\,\\text{m}^3$",
                        "$8.30 \\times 10^{-2}\\,\\text{m}^3$"
                    ],
                    "answer": 1,
                    "explanation": "$V = \\dfrac{nRT}{P} = \\dfrac{1.0 \\times 8.3 \\times 300}{1.0 \\times 10^5} = \\dfrac{2490}{1.0 \\times 10^5} = 2.49 \\times 10^{-2}\\,\\text{m}^3$です。"
                },
                {
                    "type": "choice",
                    "question": "圧力一定のまま温度を$600\\,\\text{K}$に上げた状態Bでの体積はいくらか。",
                    "options": [
                        "$2.49 \\times 10^{-2}\\,\\text{m}^3$",
                        "$4.98 \\times 10^{-2}\\,\\text{m}^3$",
                        "$7.47 \\times 10^{-2}\\,\\text{m}^3$",
                        "$9.96 \\times 10^{-2}\\,\\text{m}^3$"
                    ],
                    "answer": 1,
                    "explanation": "等圧変化で$\\dfrac{V_A}{T_A} = \\dfrac{V_B}{T_B}$。$V_B = 2.49 \\times 10^{-2} \\times \\dfrac{600}{300} = 4.98 \\times 10^{-2}\\,\\text{m}^3$です。"
                }
            ]
        },
        {
            "id": 293,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "気体の圧力と分子運動の関係に関する総合問題です。",
            "image_url": "",
            "common_text": "一辺$L\\,[\\text{m}]$の立方体の容器に、質量$m\\,[\\text{kg}]$の気体分子が$N$個入っている。分子の二乗平均速度を$\\sqrt{\\overline{v^2}}$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "この気体の圧力$P$を$N$、$m$、$\\overline{v^2}$、$L$を用いて表した式として正しいものはどれか。",
                    "options": [
                        "$P = \\dfrac{Nm\\overline{v^2}}{L^3}$",
                        "$P = \\dfrac{Nm\\overline{v^2}}{3L^3}$",
                        "$P = \\dfrac{3Nm\\overline{v^2}}{L^3}$",
                        "$P = \\dfrac{Nm\\overline{v^2}}{2L^3}$"
                    ],
                    "answer": 1,
                    "explanation": "気体分子運動論より$P = \\dfrac{1}{3} \\cdot \\dfrac{Nm\\overline{v^2}}{V}$で、$V = L^3$なので$P = \\dfrac{Nm\\overline{v^2}}{3L^3}$です。"
                },
                {
                    "type": "choice",
                    "question": "この式を変形すると$PV = \\dfrac{1}{3}Nm\\overline{v^2}$となる。気体分子1個の平均運動エネルギーを$\\overline{\\varepsilon} = \\dfrac{1}{2}m\\overline{v^2}$とすると、$PV$を$N$と$\\overline{\\varepsilon}$で表した式はどれか。",
                    "options": [
                        "$PV = \\dfrac{1}{3}N\\overline{\\varepsilon}$",
                        "$PV = \\dfrac{2}{3}N\\overline{\\varepsilon}$",
                        "$PV = N\\overline{\\varepsilon}$",
                        "$PV = 2N\\overline{\\varepsilon}$"
                    ],
                    "answer": 1,
                    "explanation": "$PV = \\dfrac{1}{3}Nm\\overline{v^2} = \\dfrac{2}{3}N \\cdot \\dfrac{1}{2}m\\overline{v^2} = \\dfrac{2}{3}N\\overline{\\varepsilon}$です。"
                }
            ]
        },
        {
            "id": 294,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "断熱変化における内部エネルギーと仕事の関係に関する問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$1.0\\,\\text{mol}$が温度$400\\,\\text{K}$の状態から断熱膨張して温度が$250\\,\\text{K}$になった。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "内部エネルギーの変化$\\Delta U$はいくらか。",
                    "options": [
                        "$-1868\\,\\text{J}$",
                        "$-1245\\,\\text{J}$",
                        "$1245\\,\\text{J}$",
                        "$1868\\,\\text{J}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\Delta U = \\dfrac{3}{2}nR\\Delta T = \\dfrac{3}{2} \\times 1.0 \\times 8.3 \\times (250 - 400) = \\dfrac{3}{2} \\times 8.3 \\times (-150) = -1867.5 \\approx -1868\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "気体が外部にした仕事$W$はいくらか。",
                    "options": [
                        "$-1868\\,\\text{J}$",
                        "$0\\,\\text{J}$",
                        "$1245\\,\\text{J}$",
                        "$1868\\,\\text{J}$"
                    ],
                    "answer": 3,
                    "explanation": "断熱変化では$Q = 0$なので$\\Delta U = -W$、$W = -\\Delta U = -(-1868) = 1868\\,\\text{J}$です。内部エネルギーの減少分がそのまま仕事に使われます。"
                }
            ]
        },
        {
            "id": 295,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "仕事と熱の等価性に関する総合問題です。",
            "image_url": "",
            "common_text": "質量$5.0\\,\\text{kg}$の水（比熱$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$）を羽根車で撹拌する実験を行う。重力加速度を$g = 9.8\\,\\text{m/s}^2$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "質量$10\\,\\text{kg}$のおもりを高さ$5.0\\,\\text{m}$から落下させたとき、おもりの位置エネルギーの減少量はいくらか。",
                    "options": [
                        "$245\\,\\text{J}$",
                        "$490\\,\\text{J}$",
                        "$735\\,\\text{J}$",
                        "$980\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$W = mgh = 10 \\times 9.8 \\times 5.0 = 490\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "この仕事がすべて水の温度上昇に使われたとすると、水の温度上昇はおよそ何$°\\text{C}$か。",
                    "options": [
                        "$0.023\\,°\\text{C}$",
                        "$0.046\\,°\\text{C}$",
                        "$0.23\\,°\\text{C}$",
                        "$0.46\\,°\\text{C}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\Delta T = \\dfrac{Q}{mc} = \\dfrac{490}{5000 \\times 4.2} = \\dfrac{490}{21000} \\approx 0.023\\,°\\text{C}$です。"
                }
            ]
        },
        {
            "id": 296,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "等温変化における仕事と熱の関係に関する問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$1.0\\,\\text{mol}$が温度$300\\,\\text{K}$で等温膨張し、体積が$V_0$から$2V_0$に変化した。この等温膨張で気体は外部に$W = 1730\\,\\text{J}$の仕事をした。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "この等温変化での内部エネルギーの変化$\\Delta U$はいくらか。",
                    "options": [
                        "$-1730\\,\\text{J}$",
                        "$0\\,\\text{J}$",
                        "$1730\\,\\text{J}$",
                        "$3460\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "等温変化では温度が変わらないので、理想気体の内部エネルギーは変化しません。$\\Delta U = 0$です。"
                },
                {
                    "type": "choice",
                    "question": "この変化で気体が吸収した熱量$Q$はいくらか。",
                    "options": [
                        "$0\\,\\text{J}$",
                        "$865\\,\\text{J}$",
                        "$1730\\,\\text{J}$",
                        "$3460\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$\\Delta U = Q - W$より、$0 = Q - 1730$なので$Q = 1730\\,\\text{J}$です。加えた熱がすべて仕事に変わります。"
                },
                {
                    "type": "ox",
                    "question": "等温膨張後の圧力は元の圧力の半分になる。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 0,
                    "explanation": "正しいです。等温変化では$PV = \\text{一定}$なので、体積が$2V_0$になれば圧力は$\\dfrac{P_0}{2}$と半分になります。"
                }
            ]
        },
        {
            "id": 297,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "熱機関の比較に関する総合問題です。",
            "image_url": "",
            "common_text": "熱機関Xは高温熱源（$T_1 = 500\\,\\text{K}$）から$Q_1 = 5000\\,\\text{J}$を受け取り、低温熱源（$T_2 = 300\\,\\text{K}$）に熱を捨てる。熱機関Xの実際の熱効率は$30\\%$である。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "熱機関Xが毎サイクルでする仕事はいくらか。",
                    "options": [
                        "$1000\\,\\text{J}$",
                        "$1500\\,\\text{J}$",
                        "$2000\\,\\text{J}$",
                        "$2500\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$W = eQ_1 = 0.30 \\times 5000 = 1500\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "この条件でのカルノー効率（理論上の最大熱効率）は何$\\%$か。",
                    "options": [
                        "$20\\%$",
                        "$30\\%$",
                        "$40\\%$",
                        "$50\\%$"
                    ],
                    "answer": 2,
                    "explanation": "カルノー効率$e_{\\text{max}} = 1 - \\dfrac{T_2}{T_1} = 1 - \\dfrac{300}{500} = 0.40 = 40\\%$です。"
                },
                {
                    "type": "ox",
                    "question": "熱機関Xの実際の熱効率はカルノー効率を超えていない。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 0,
                    "explanation": "正しいです。実際の熱効率$30\\%$はカルノー効率$40\\%$以下であり、熱力学第二法則と矛盾しません。"
                }
            ]
        },
        {
            "id": 298,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "比熱と熱容量の関係に関する総合問題です。",
            "image_url": "",
            "common_text": "比熱$c_1 = 0.38\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、質量$m_1 = 300\\,\\text{g}$の銅の容器に、比熱$c_2 = 4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、質量$m_2 = 100\\,\\text{g}$の水が入っている。全体の温度は$20\\,°\\text{C}$である。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "銅の容器の熱容量はいくらか。",
                    "options": [
                        "$38\\,\\text{J/K}$",
                        "$114\\,\\text{J/K}$",
                        "$380\\,\\text{J/K}$",
                        "$1140\\,\\text{J/K}$"
                    ],
                    "answer": 1,
                    "explanation": "$C_1 = m_1c_1 = 300 \\times 0.38 = 114\\,\\text{J/K}$です。"
                },
                {
                    "type": "choice",
                    "question": "容器と水の全体の温度を$20\\,°\\text{C}$から$50\\,°\\text{C}$に上げるのに必要な熱量はいくらか。",
                    "options": [
                        "$9720\\,\\text{J}$",
                        "$12600\\,\\text{J}$",
                        "$16020\\,\\text{J}$",
                        "$19320\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "水の熱容量$C_2 = 100 \\times 4.2 = 420\\,\\text{J/K}$。全体の熱容量$C = 114 + 420 = 534\\,\\text{J/K}$。$Q = C\\Delta T = 534 \\times 30 = 16020\\,\\text{J}$です。"
                }
            ]
        },
        {
            "id": 299,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の法則",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "ボイル・シャルルの法則の応用問題です。",
            "image_url": "",
            "common_text": "ピストンのついたシリンダー内に理想気体が閉じ込められている。初期状態は温度$27\\,°\\text{C}$、圧力$2.0 \\times 10^5\\,\\text{Pa}$、体積$4.0\\,\\text{L}$である。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "温度一定のまま圧力を$4.0 \\times 10^5\\,\\text{Pa}$にしたとき、体積はいくらか。",
                    "options": [
                        "$1.0\\,\\text{L}$",
                        "$2.0\\,\\text{L}$",
                        "$4.0\\,\\text{L}$",
                        "$8.0\\,\\text{L}$"
                    ],
                    "answer": 1,
                    "explanation": "ボイルの法則$P_1V_1 = P_2V_2$より、$2.0 \\times 10^5 \\times 4.0 = 4.0 \\times 10^5 \\times V_2$。$V_2 = 2.0\\,\\text{L}$です。"
                },
                {
                    "type": "choice",
                    "question": "上の状態（$4.0 \\times 10^5\\,\\text{Pa}$、$2.0\\,\\text{L}$）から、圧力一定で体積を$6.0\\,\\text{L}$にしたとき、温度は何$°\\text{C}$か。",
                    "options": [
                        "$354\\,°\\text{C}$",
                        "$627\\,°\\text{C}$",
                        "$900\\,°\\text{C}$",
                        "$1200\\,°\\text{C}$"
                    ],
                    "answer": 1,
                    "explanation": "シャルルの法則$\\dfrac{V_2}{T_2} = \\dfrac{V_3}{T_3}$。$T_2 = 300\\,\\text{K}$なので$T_3 = 300 \\times \\dfrac{6.0}{2.0} = 900\\,\\text{K} = 627\\,°\\text{C}$です。"
                },
                {
                    "type": "ox",
                    "question": "初期状態から最終状態まで、気体の物質量は変化していない。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 0,
                    "explanation": "正しいです。ピストンで閉じ込められた気体なので物質量は一定です。状態変化しても$n$は変わりません。"
                }
            ]
        },
        {
            "id": 300,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "定積モル比熱と定圧モル比熱に関する総合問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$1.0\\,\\text{mol}$について、定積モル比熱$C_v = \\dfrac{3}{2}R$、定圧モル比熱$C_p = \\dfrac{5}{2}R$である。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "等積変化で温度を$200\\,\\text{K}$上げるのに必要な熱量はいくらか。",
                    "options": [
                        "$1660\\,\\text{J}$",
                        "$2490\\,\\text{J}$",
                        "$4150\\,\\text{J}$",
                        "$8300\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$Q_v = nC_v\\Delta T = 1.0 \\times \\dfrac{3}{2} \\times 8.3 \\times 200 = 2490\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "等圧変化で同じく温度を$200\\,\\text{K}$上げるのに必要な熱量はいくらか。",
                    "options": [
                        "$2490\\,\\text{J}$",
                        "$4150\\,\\text{J}$",
                        "$6640\\,\\text{J}$",
                        "$8300\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$Q_p = nC_p\\Delta T = 1.0 \\times \\dfrac{5}{2} \\times 8.3 \\times 200 = 4150\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "$Q_p$と$Q_v$の差$Q_p - Q_v$は何に等しいか。",
                    "options": [
                        "内部エネルギーの変化",
                        "等圧変化で気体がした仕事",
                        "等積変化で加えた熱",
                        "温度変化"
                    ],
                    "answer": 1,
                    "explanation": "$Q_p - Q_v = nC_p\\Delta T - nC_v\\Delta T = n(C_p - C_v)\\Delta T = nR\\Delta T$。これは等圧変化で気体が外部にした仕事$W = nR\\Delta T = P\\Delta V$に等しいです。等圧変化では膨張の仕事の分だけ余分に熱が必要になります。"
                }
            ]
        },

        // ============================================================
        // 追加30問（ID 301–330）
        // A=10問, B=10問, C=10問
        // ============================================================

        // --- A問題（301–310） ---

        {
            "id": 301,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "氷が水に変わるとき、温度が$0\\,°\\text{C}$で一定に保たれる。このとき加えた熱は主に何に使われるか。",
            "options": [
                "温度を上げること",
                "分子間の結合を切って状態変化させること",
                "氷の体積を増やすこと",
                "周囲の空気を温めること"
            ],
            "answer": 1,
            "explanation": "状態変化中（融解）は温度が一定です。加えた熱は分子間の結合を切り、固体から液体への状態変化（融解）に使われます。この熱を融解熱といいます。",
            "image_url": ""
        },
        {
            "id": 302,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "気体の法則",
            "question": "ボイルの法則は「温度一定のとき、気体の圧力と体積の積は一定である」という法則である。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。ボイルの法則は温度一定のとき$PV = \\text{一定}$が成り立つことを示す法則です。",
            "image_url": ""
        },
        {
            "id": 303,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "熱の仕事当量として正しい値に最も近いものはどれか。",
            "options": [
                "$4.2\\,\\text{J/cal}$",
                "$42\\,\\text{J/cal}$",
                "$0.42\\,\\text{J/cal}$",
                "$420\\,\\text{J/cal}$"
            ],
            "answer": 0,
            "explanation": "熱の仕事当量は$1\\,\\text{cal} = 4.2\\,\\text{J}$（正確には4.186 J）です。",
            "image_url": ""
        },
        {
            "id": 304,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "気体分子の熱運動について正しいものはどれか。",
            "options": [
                "温度が高いほど分子の平均の速さは小さくなる",
                "温度が高いほど分子の平均の速さは大きくなる",
                "温度に関係なく分子の速さは一定である",
                "分子の速さは圧力だけで決まる"
            ],
            "answer": 1,
            "explanation": "気体分子の平均運動エネルギーは絶対温度に比例します。温度が高いほど分子の平均の速さは大きくなります。",
            "image_url": ""
        },
        {
            "id": 305,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "熱と物質の状態",
            "question": "熱容量の大きい物体ほど、同じ熱量を加えたときの温度上昇は小さい。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。$Q = C\\Delta T$より$\\Delta T = Q/C$なので、熱容量$C$が大きいほど温度変化$\\Delta T$は小さくなります。",
            "image_url": ""
        },
        {
            "id": 306,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "気体の法則",
            "question": "シャルルの法則が適用される条件はどれか。",
            "options": [
                "温度一定",
                "圧力一定",
                "体積一定",
                "物質量が変化する"
            ],
            "answer": 1,
            "explanation": "シャルルの法則は圧力一定のもとで$V/T = \\text{一定}$（体積と絶対温度が比例する）という法則です。",
            "image_url": ""
        },
        {
            "id": 307,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "断熱圧縮を行ったとき、気体の温度はどうなるか。",
            "options": [
                "上がる",
                "下がる",
                "変わらない",
                "条件によって異なる"
            ],
            "answer": 0,
            "explanation": "断熱圧縮では外部から仕事をされるため、気体の内部エネルギーが増加し、温度が上がります。熱力学第一法則$\\Delta U = Q + W$で$Q = 0$、$W > 0$（仕事をされる）なので$\\Delta U > 0$です。",
            "image_url": ""
        },
        {
            "id": 308,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "気体分子の運動",
            "question": "理想気体では分子間力を無視できる。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。理想気体の仮定では、分子は大きさのない質点であり、分子間力は無視します。衝突は完全弾性衝突とします。",
            "image_url": ""
        },
        {
            "id": 309,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "水の比熱は約$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$である。$500\\,\\text{g}$の水の熱容量はいくらか。",
            "options": [
                "$210\\,\\text{J/K}$",
                "$2100\\,\\text{J/K}$",
                "$4200\\,\\text{J/K}$",
                "$21000\\,\\text{J/K}$"
            ],
            "answer": 1,
            "explanation": "熱容量$C = mc = 500 \\times 4.2 = 2100\\,\\text{J/K}$です。",
            "image_url": ""
        },
        {
            "id": 310,
            "category": "p2_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "熱力学第一法則$\\Delta U = Q + W$において、気体が外部から仕事をされたとき$W$はどう表されるか。",
            "options": [
                "$W > 0$",
                "$W < 0$",
                "$W = 0$",
                "$W$の符号は決まらない"
            ],
            "answer": 0,
            "explanation": "気体が外部から仕事をされると内部エネルギーが増えるので$W > 0$です。逆に気体が外部に仕事をしたときは$W < 0$です。（教科書により符号の取り方が異なる場合がありますが、ここでは$\\Delta U = Q + W$の形式で$W$は「気体がされた仕事」とします。）",
            "image_url": ""
        },

        // --- B問題（311–320） ---

        {
            "id": 311,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "質量$50\\,\\text{g}$の氷（$0\\,°\\text{C}$）を全て水（$0\\,°\\text{C}$）に変えるのに必要な熱量はいくらか。ただし水の融解熱を$334\\,\\text{J/g}$とする。",
            "options": [
                "$8350\\,\\text{J}$",
                "$16700\\,\\text{J}$",
                "$33400\\,\\text{J}$",
                "$50100\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "$Q = mL = 50 \\times 334 = 16700\\,\\text{J}$です。融解中は温度が$0\\,°\\text{C}$で一定のまま、すべての熱が状態変化に使われます。",
            "image_url": ""
        },
        {
            "id": 312,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の法則",
            "question": "圧力$1.0 \\times 10^5\\,\\text{Pa}$、体積$3.0\\,\\text{L}$、温度$300\\,\\text{K}$の理想気体がある。体積を$6.0\\,\\text{L}$に等温膨張させたとき、圧力はいくらか。",
            "options": [
                "$2.0 \\times 10^5\\,\\text{Pa}$",
                "$1.0 \\times 10^5\\,\\text{Pa}$",
                "$5.0 \\times 10^4\\,\\text{Pa}$",
                "$2.5 \\times 10^4\\,\\text{Pa}$"
            ],
            "answer": 2,
            "explanation": "ボイルの法則$P_1V_1 = P_2V_2$より、$1.0 \\times 10^5 \\times 3.0 = P_2 \\times 6.0$。$P_2 = 5.0 \\times 10^4\\,\\text{Pa}$です。",
            "image_url": ""
        },
        {
            "id": 313,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "熱効率$25\\%$の熱機関が$800\\,\\text{J}$の熱を吸収した。外部にした仕事はいくらか。",
            "options": [
                "$100\\,\\text{J}$",
                "$200\\,\\text{J}$",
                "$400\\,\\text{J}$",
                "$600\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "熱効率$e = W/Q_\\text{in}$より、$W = eQ_\\text{in} = 0.25 \\times 800 = 200\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 314,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "単原子分子理想気体$1\\,\\text{mol}$の内部エネルギーを表す式はどれか。$R$は気体定数、$T$は絶対温度とする。",
            "options": [
                "$U = \\dfrac{1}{2}RT$",
                "$U = RT$",
                "$U = \\dfrac{3}{2}RT$",
                "$U = \\dfrac{5}{2}RT$"
            ],
            "answer": 2,
            "explanation": "単原子分子理想気体$1\\,\\text{mol}$の内部エネルギーは$U = \\dfrac{3}{2}RT$です。分子1個あたり$\\dfrac{3}{2}k_BT$の運動エネルギーを持ちます。",
            "image_url": ""
        },
        {
            "id": 315,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "比熱$0.90\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、質量$300\\,\\text{g}$の金属を$100\\,°\\text{C}$に熱して$20\\,°\\text{C}$の水$200\\,\\text{g}$に入れた。熱平衡温度は約何$°\\text{C}$か。水の比熱を$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$とし、外部への熱の流出はないとする。",
            "options": [
                "$30\\,°\\text{C}$",
                "$36\\,°\\text{C}$",
                "$40\\,°\\text{C}$",
                "$50\\,°\\text{C}$"
            ],
            "answer": 2,
            "explanation": "熱量保存：$300 \\times 0.90 \\times (100 - T) = 200 \\times 4.2 \\times (T - 20)$。$270(100-T) = 840(T-20)$、$27000 - 270T = 840T - 16800$、$43800 = 1110T$、$T \\approx 39.5 \\approx 40\\,°\\text{C}$です。",
            "image_url": ""
        },
        {
            "id": 316,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "理想気体の等積変化において、加えた熱量$Q$と内部エネルギーの変化$\\Delta U$の関係はどれか。",
            "options": [
                "$Q = \\Delta U$",
                "$Q = 2\\Delta U$",
                "$Q = \\Delta U + P\\Delta V$",
                "$Q = 0$"
            ],
            "answer": 0,
            "explanation": "等積変化では体積変化がないので気体は仕事をしません（$W = 0$）。熱力学第一法則$\\Delta U = Q + W$より$\\Delta U = Q$です。加えた熱がすべて内部エネルギーの増加になります。",
            "image_url": ""
        },
        {
            "id": 317,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "ox",
            "classification": "気体の法則",
            "question": "理想気体の状態方程式$PV = nRT$において、物質量$n$が2倍になると同じ温度・体積で圧力も2倍になる。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。$PV = nRT$より$P = nRT/V$なので、$T$と$V$が一定なら$P$は$n$に比例します。",
            "image_url": ""
        },
        {
            "id": 318,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "気体が等圧膨張して体積が$\\Delta V = 2.0 \\times 10^{-3}\\,\\text{m}^3$だけ増えた。圧力が$1.0 \\times 10^5\\,\\text{Pa}$のとき、気体が外部にした仕事はいくらか。",
            "options": [
                "$100\\,\\text{J}$",
                "$200\\,\\text{J}$",
                "$500\\,\\text{J}$",
                "$2000\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "$W = P\\Delta V = 1.0 \\times 10^5 \\times 2.0 \\times 10^{-3} = 200\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 319,
            "category": "p2_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "絶対温度$T$における単原子分子理想気体の分子1個あたりの平均運動エネルギーはどれか。$k_B$はボルツマン定数とする。",
            "options": [
                "$\\dfrac{1}{2}k_BT$",
                "$k_BT$",
                "$\\dfrac{3}{2}k_BT$",
                "$3k_BT$"
            ],
            "answer": 2,
            "explanation": "気体分子の平均運動エネルギーは$\\dfrac{1}{2}m\\overline{v^2} = \\dfrac{3}{2}k_BT$です。3は並進運動の自由度の数に対応します。",
            "image_url": ""
        },
        {
            "id": 320,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "$100\\,°\\text{C}$の水蒸気$10\\,\\text{g}$が$100\\,°\\text{C}$の水になるとき放出する熱量はいくらか。水の蒸発熱を$2260\\,\\text{J/g}$とする。",
            "options": [
                "$2260\\,\\text{J}$",
                "$11300\\,\\text{J}$",
                "$22600\\,\\text{J}$",
                "$42000\\,\\text{J}$"
            ],
            "answer": 2,
            "explanation": "$Q = mL = 10 \\times 2260 = 22600\\,\\text{J}$です。凝縮のとき蒸発熱と同じ大きさの熱を放出します。",
            "image_url": ""
        },

        // --- C問題（321–330） ---

        {
            "id": 321,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "$-10\\,°\\text{C}$の氷$50\\,\\text{g}$を$40\\,°\\text{C}$の水にするために必要な熱量はいくらか。氷の比熱を$2.1\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、水の比熱を$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$、水の融解熱を$334\\,\\text{J/g}$とする。",
            "options": [
                "$17750\\,\\text{J}$",
                "$26150\\,\\text{J}$",
                "$9450\\,\\text{J}$",
                "$34400\\,\\text{J}$"
            ],
            "answer": 1,
            "explanation": "(1) 氷を$-10 \\to 0\\,°\\text{C}$：$Q_1 = 50 \\times 2.1 \\times 10 = 1050\\,\\text{J}$。(2) 融解：$Q_2 = 50 \\times 334 = 16700\\,\\text{J}$。(3) 水を$0 \\to 40\\,°\\text{C}$：$Q_3 = 50 \\times 4.2 \\times 40 = 8400\\,\\text{J}$。合計$Q = 1050 + 16700 + 8400 = 26150\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 322,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "等圧変化における熱力学第一法則の応用問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$2.0\\,\\text{mol}$が等圧変化で温度が$300\\,\\text{K}$から$500\\,\\text{K}$に上昇した。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "気体に加えた熱量$Q$はいくらか。",
                    "options": [
                        "$3320\\,\\text{J}$",
                        "$4980\\,\\text{J}$",
                        "$8300\\,\\text{J}$",
                        "$16600\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "等圧変化で$Q = nC_p\\Delta T = 2.0 \\times \\dfrac{5}{2} \\times 8.3 \\times 200 = 8300\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "内部エネルギーの変化$\\Delta U$はいくらか。",
                    "options": [
                        "$3320\\,\\text{J}$",
                        "$4980\\,\\text{J}$",
                        "$8300\\,\\text{J}$",
                        "$16600\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Delta U = nC_v\\Delta T = 2.0 \\times \\dfrac{3}{2} \\times 8.3 \\times 200 = 4980\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "気体が外部にした仕事$W$はいくらか。",
                    "options": [
                        "$1660\\,\\text{J}$",
                        "$3320\\,\\text{J}$",
                        "$4980\\,\\text{J}$",
                        "$8300\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$W = Q - \\Delta U = 8300 - 4980 = 3320\\,\\text{J}$。または$W = nR\\Delta T = 2.0 \\times 8.3 \\times 200 = 3320\\,\\text{J}$です。"
                }
            ]
        },
        {
            "id": 323,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の法則",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "混合気体に関する問題です。",
            "image_url": "",
            "common_text": "温度$27\\,°\\text{C}$で、体積$2.0\\,\\text{L}$の容器Aに圧力$3.0 \\times 10^5\\,\\text{Pa}$の気体、体積$4.0\\,\\text{L}$の容器Bに圧力$1.5 \\times 10^5\\,\\text{Pa}$の気体が入っている。両方とも理想気体とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "コックを開いて2つの容器を温度一定のまま連結したとき、全体の圧力はいくらか。",
                    "options": [
                        "$1.5 \\times 10^5\\,\\text{Pa}$",
                        "$2.0 \\times 10^5\\,\\text{Pa}$",
                        "$2.25 \\times 10^5\\,\\text{Pa}$",
                        "$3.0 \\times 10^5\\,\\text{Pa}$"
                    ],
                    "answer": 1,
                    "explanation": "ボイルの法則より、$P(V_A + V_B) = P_AV_A + P_BV_B$。$P \\times 6.0 = 3.0 \\times 10^5 \\times 2.0 + 1.5 \\times 10^5 \\times 4.0 = 6.0 \\times 10^5 + 6.0 \\times 10^5 = 12.0 \\times 10^5$。$P = 2.0 \\times 10^5\\,\\text{Pa}$です。"
                },
                {
                    "type": "choice",
                    "question": "連結後、温度を$127\\,°\\text{C}$に上げたとき、圧力はいくらになるか。",
                    "options": [
                        "$2.0 \\times 10^5\\,\\text{Pa}$",
                        "$2.67 \\times 10^5\\,\\text{Pa}$",
                        "$3.0 \\times 10^5\\,\\text{Pa}$",
                        "$4.0 \\times 10^5\\,\\text{Pa}$"
                    ],
                    "answer": 1,
                    "explanation": "体積一定なので$P/T = \\text{一定}$。$\\dfrac{2.0 \\times 10^5}{300} = \\dfrac{P'}{400}$。$P' = 2.0 \\times 10^5 \\times \\dfrac{400}{300} \\approx 2.67 \\times 10^5\\,\\text{Pa}$です。"
                },
                {
                    "type": "ox",
                    "question": "連結前後で気体全体の物質量の合計は変わらない。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 0,
                    "explanation": "正しいです。コックを開いて連結しただけなので、気体分子の総数（物質量）は変わりません。"
                }
            ]
        },
        {
            "id": 324,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "熱機関と熱効率に関する総合問題です。",
            "image_url": "",
            "common_text": "ある熱機関が高温熱源から毎サイクル$1000\\,\\text{J}$の熱を吸収し、低温熱源に$600\\,\\text{J}$の熱を放出する。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "この熱機関が1サイクルで外部にする仕事はいくらか。",
                    "options": [
                        "$200\\,\\text{J}$",
                        "$400\\,\\text{J}$",
                        "$600\\,\\text{J}$",
                        "$1000\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$W = Q_\\text{in} - Q_\\text{out} = 1000 - 600 = 400\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "この熱機関の熱効率は何$\\%$か。",
                    "options": [
                        "$20\\%$",
                        "$40\\%$",
                        "$60\\%$",
                        "$80\\%$"
                    ],
                    "answer": 1,
                    "explanation": "$e = \\dfrac{W}{Q_\\text{in}} = \\dfrac{400}{1000} = 0.40 = 40\\%$です。"
                },
                {
                    "type": "ox",
                    "question": "この熱機関の熱効率を$100\\%$にすることは原理的に可能である。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 1,
                    "explanation": "誤りです。熱力学第二法則により、熱を全て仕事に変換する（熱効率$100\\%$の）熱機関は実現できません。低温熱源への排熱は必ず生じます。"
                }
            ]
        },
        {
            "id": 325,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "断熱変化に関する総合問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$1.0\\,\\text{mol}$が断熱膨張し、温度が$600\\,\\text{K}$から$400\\,\\text{K}$に低下した。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "内部エネルギーの変化$\\Delta U$はいくらか。",
                    "options": [
                        "$-2490\\,\\text{J}$",
                        "$-1660\\,\\text{J}$",
                        "$+1660\\,\\text{J}$",
                        "$+2490\\,\\text{J}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\Delta U = nC_v\\Delta T = 1.0 \\times \\dfrac{3}{2} \\times 8.3 \\times (400 - 600) = 1.0 \\times 12.45 \\times (-200) = -2490\\,\\text{J}$です。温度が下がるので内部エネルギーは減少します。"
                },
                {
                    "type": "choice",
                    "question": "この断熱膨張で気体が外部にした仕事はいくらか。",
                    "options": [
                        "$1245\\,\\text{J}$",
                        "$1660\\,\\text{J}$",
                        "$2490\\,\\text{J}$",
                        "$4980\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "断熱変化では$Q = 0$なので、$\\Delta U = -W_\\text{out}$（気体がした仕事の分だけ内部エネルギーが減少）。$W_\\text{out} = -\\Delta U = 2490\\,\\text{J}$です。"
                },
                {
                    "type": "ox",
                    "question": "断熱膨張では気体に出入りする熱量は$0$である。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 0,
                    "explanation": "正しいです。「断熱」とは外部との熱のやりとりがない（$Q = 0$）ことを意味します。"
                }
            ]
        },
        {
            "id": 326,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と物質の状態",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "熱量保存と状態変化を含む総合問題です。",
            "image_url": "",
            "common_text": "$100\\,°\\text{C}$の水蒸気$20\\,\\text{g}$を$20\\,°\\text{C}$の水$200\\,\\text{g}$の中に吹き込む。水の蒸発熱を$2260\\,\\text{J/g}$、水の比熱を$4.2\\,\\text{J/}(\\text{g} \\cdot \\text{K})$とし、外部への熱の流出はないとする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "水蒸気が$100\\,°\\text{C}$の水になるまでに放出する熱量はいくらか。",
                    "options": [
                        "$22600\\,\\text{J}$",
                        "$45200\\,\\text{J}$",
                        "$67800\\,\\text{J}$",
                        "$90400\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$Q_1 = mL = 20 \\times 2260 = 45200\\,\\text{J}$です。"
                },
                {
                    "type": "choice",
                    "question": "熱平衡温度はおよそ何$°\\text{C}$か。",
                    "options": [
                        "$56\\,°\\text{C}$",
                        "$68\\,°\\text{C}$",
                        "$76\\,°\\text{C}$",
                        "$88\\,°\\text{C}$"
                    ],
                    "answer": 2,
                    "explanation": "水蒸気がまず$100\\,°\\text{C}$の水に凝縮し（$Q_1 = 45200\\,\\text{J}$を放出）、その後$100\\,°\\text{C}$の水$20\\,\\text{g}$と$20\\,°\\text{C}$の水$200\\,\\text{g}$が混合します。熱量保存：$20 \\times 4.2 \\times (100 - T) + 45200 = 200 \\times 4.2 \\times (T - 20)$。$84(100-T) + 45200 = 840(T-20)$、$8400 - 84T + 45200 = 840T - 16800$、$70400 = 924T$、$T \\approx 76\\,°\\text{C}$です。"
                },
                {
                    "type": "ox",
                    "question": "水蒸気が凝縮するとき、温度は$100\\,°\\text{C}$で一定である。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 0,
                    "explanation": "正しいです。$1\\,\\text{atm}$のもとで水蒸気が凝縮する間、温度は$100\\,°\\text{C}$で一定です。状態変化中は加えた（放出した）熱は状態変化に使われます。"
                }
            ]
        },
        {
            "id": 327,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "エネルギーの移り変わり",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "熱力学第一法則の各過程への適用問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体$1.0\\,\\text{mol}$について、次の各過程を考える。気体定数$R = 8.3\\,\\text{J/}(\\text{mol} \\cdot \\text{K})$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "等温変化で気体が$500\\,\\text{J}$の仕事を外部にした。気体が吸収した熱量はいくらか。",
                    "options": [
                        "$0\\,\\text{J}$",
                        "$250\\,\\text{J}$",
                        "$500\\,\\text{J}$",
                        "$1000\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "等温変化では$\\Delta U = 0$なので、$Q = W_\\text{out} = 500\\,\\text{J}$です。吸収した熱がそのまま仕事になります。"
                },
                {
                    "type": "choice",
                    "question": "等積変化で$830\\,\\text{J}$の熱を加えた。温度は何K上昇したか。",
                    "options": [
                        "$33\\,\\text{K}$",
                        "$50\\,\\text{K}$",
                        "$67\\,\\text{K}$",
                        "$100\\,\\text{K}$"
                    ],
                    "answer": 2,
                    "explanation": "等積変化では$Q = nC_v\\Delta T$。$830 = 1.0 \\times \\dfrac{3}{2} \\times 8.3 \\times \\Delta T = 12.45\\Delta T$。$\\Delta T = \\dfrac{830}{12.45} \\approx 66.7 \\approx 67\\,\\text{K}$です。"
                },
                {
                    "type": "choice",
                    "question": "断熱変化で外部から$400\\,\\text{J}$の仕事をされた。内部エネルギーの変化はいくらか。",
                    "options": [
                        "$-400\\,\\text{J}$",
                        "$0\\,\\text{J}$",
                        "$+200\\,\\text{J}$",
                        "$+400\\,\\text{J}$"
                    ],
                    "answer": 3,
                    "explanation": "断熱変化では$Q = 0$なので$\\Delta U = W = +400\\,\\text{J}$です。外部からされた仕事がそのまま内部エネルギーの増加になります。"
                }
            ]
        },
        {
            "id": 328,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体分子の運動",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "気体分子の運動と圧力に関する総合問題です。",
            "image_url": "",
            "common_text": "一辺$L$の立方体容器に質量$m$の分子$N$個からなる理想気体が入っている。分子の二乗平均速度を$\\overline{v^2}$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "気体の圧力$P$を表す式はどれか。",
                    "options": [
                        "$P = \\dfrac{Nm\\overline{v^2}}{L^3}$",
                        "$P = \\dfrac{Nm\\overline{v^2}}{3L^3}$",
                        "$P = \\dfrac{3Nm\\overline{v^2}}{L^3}$",
                        "$P = \\dfrac{Nm\\overline{v^2}}{2L^3}$"
                    ],
                    "answer": 1,
                    "explanation": "気体分子運動論から$P = \\dfrac{Nm\\overline{v^2}}{3V}$で、$V = L^3$なので$P = \\dfrac{Nm\\overline{v^2}}{3L^3}$です。"
                },
                {
                    "type": "choice",
                    "question": "この式と理想気体の状態方程式$PV = Nk_BT$を比較すると、$\\dfrac{1}{2}m\\overline{v^2}$は何に等しいか。",
                    "options": [
                        "$\\dfrac{1}{2}k_BT$",
                        "$k_BT$",
                        "$\\dfrac{3}{2}k_BT$",
                        "$3k_BT$"
                    ],
                    "answer": 2,
                    "explanation": "$PV = \\dfrac{Nm\\overline{v^2}}{3} = Nk_BT$より$m\\overline{v^2} = 3k_BT$。したがって$\\dfrac{1}{2}m\\overline{v^2} = \\dfrac{3}{2}k_BT$です。"
                },
                {
                    "type": "ox",
                    "question": "絶対温度が2倍になると、分子の二乗平均速度の平方根$\\sqrt{\\overline{v^2}}$も2倍になる。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 1,
                    "explanation": "誤りです。$\\dfrac{1}{2}m\\overline{v^2} = \\dfrac{3}{2}k_BT$より$\\overline{v^2} \\propto T$なので$\\sqrt{\\overline{v^2}} \\propto \\sqrt{T}$です。温度が2倍なら$\\sqrt{\\overline{v^2}}$は$\\sqrt{2}$倍です。"
                }
            ]
        },
        {
            "id": 329,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "熱と仕事",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "不可逆変化と熱力学第二法則に関する問題です。",
            "image_url": "",
            "common_text": "高温物体（温度$80\\,°\\text{C}$、熱容量$100\\,\\text{J/K}$）と低温物体（温度$20\\,°\\text{C}$、熱容量$100\\,\\text{J/K}$）を接触させた。外部への熱の流出はないとする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "熱平衡温度は何$°\\text{C}$か。",
                    "options": [
                        "$40\\,°\\text{C}$",
                        "$50\\,°\\text{C}$",
                        "$60\\,°\\text{C}$",
                        "$80\\,°\\text{C}$"
                    ],
                    "answer": 1,
                    "explanation": "熱容量が等しいので$T = \\dfrac{80 + 20}{2} = 50\\,°\\text{C}$です。"
                },
                {
                    "type": "choice",
                    "question": "高温物体が放出した熱量はいくらか。",
                    "options": [
                        "$1500\\,\\text{J}$",
                        "$3000\\,\\text{J}$",
                        "$5000\\,\\text{J}$",
                        "$6000\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$Q = C\\Delta T = 100 \\times (80 - 50) = 3000\\,\\text{J}$です。"
                },
                {
                    "type": "ox",
                    "question": "この過程の逆、すなわち$50\\,°\\text{C}$の2つの物体が自発的に$80\\,°\\text{C}$と$20\\,°\\text{C}$に分かれることは起こりうる。",
                    "options": [
                        "〇",
                        "✕"
                    ],
                    "answer": 1,
                    "explanation": "誤りです。熱は高温から低温へ自発的に移動しますが、その逆は自発的には起こりません。これは熱力学第二法則の一つの表現です。"
                }
            ]
        },
        {
            "id": 330,
            "category": "p2_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "気体の状態変化",
            "question": "以下の問いに答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "サイクル過程における仕事と熱に関する総合問題です。",
            "image_url": "",
            "common_text": "単原子分子理想気体が次のサイクルを行う。状態A（$P_0$, $V_0$, $T_0$）→ 等圧膨張 → 状態B（$P_0$, $2V_0$） → 等積変化 → 状態C（$P_0/2$, $2V_0$） → 等圧圧縮 → 状態D（$P_0/2$, $V_0$） → 等積変化 → 状態A。気体は$1.0\\,\\text{mol}$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "A→Bの等圧膨張で気体が外部にした仕事はどれか。",
                    "options": [
                        "$\\dfrac{1}{2}P_0V_0$",
                        "$P_0V_0$",
                        "$2P_0V_0$",
                        "$3P_0V_0$"
                    ],
                    "answer": 1,
                    "explanation": "$W_{AB} = P_0(2V_0 - V_0) = P_0V_0$です。"
                },
                {
                    "type": "choice",
                    "question": "C→Dの等圧圧縮で気体が外部にした仕事はどれか。",
                    "options": [
                        "$-\\dfrac{1}{2}P_0V_0$",
                        "$-P_0V_0$",
                        "$\\dfrac{1}{2}P_0V_0$",
                        "$P_0V_0$"
                    ],
                    "answer": 0,
                    "explanation": "$W_{CD} = \\dfrac{P_0}{2}(V_0 - 2V_0) = -\\dfrac{1}{2}P_0V_0$です。圧縮なので負の仕事です。"
                },
                {
                    "type": "choice",
                    "question": "1サイクル全体で気体が外部にした正味の仕事はどれか。",
                    "options": [
                        "$\\dfrac{1}{4}P_0V_0$",
                        "$\\dfrac{1}{2}P_0V_0$",
                        "$P_0V_0$",
                        "$\\dfrac{3}{2}P_0V_0$"
                    ],
                    "answer": 1,
                    "explanation": "等積変化では仕事は$0$なので、$W_\\text{total} = W_{AB} + W_{CD} = P_0V_0 - \\dfrac{1}{2}P_0V_0 = \\dfrac{1}{2}P_0V_0$です。これは$P$-$V$グラフでサイクルが囲む面積に等しいです。"
                }
            ]
        }
    ]
);
