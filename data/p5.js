window.loadQuizData("part5",
    [
        // ============================================================
        // 第5編 原子（50問）
        // 第1章 電子と光: p5_c1（電子 / 光の粒子性 / X線 / 粒子の波動性）
        // 第2章 原子と原子核: p5_c2（原子の構造とエネルギー準位 / 原子核 / 放射線とその性質 / 核反応と核エネルギー / 素粒子）
        // ============================================================

        // ─── 第1章 電子と光 ───

        // --- 電子 ---

        {
            "id": 501,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "電子",
            "question": "電気素量$e$の値として最も近いものはどれか。",
            "options": [
                "$1.6 \\times 10^{-19}\\,\\text{C}$",
                "$1.6 \\times 10^{-16}\\,\\text{C}$",
                "$9.1 \\times 10^{-31}\\,\\text{C}$",
                "$6.0 \\times 10^{-23}\\,\\text{C}$"
            ],
            "answer": 0,
            "explanation": "電気素量は$e = 1.6 \\times 10^{-19}\\,\\text{C}$です。電子の電荷は$-e$です。",
            "image_url": ""
        },
        {
            "id": 502,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "電子",
            "question": "ミリカンの油滴実験で明らかになったことはどれか。",
            "options": [
                "電子の波動性",
                "電荷が電気素量の整数倍であること",
                "光の粒子性",
                "原子核の存在"
            ],
            "answer": 1,
            "explanation": "ミリカンは油滴実験により、電荷が電気素量$e$の整数倍であること（電荷の量子化）を示しました。",
            "image_url": ""
        },

        // --- 光の粒子性 ---

        {
            "id": 503,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果において、金属表面に光を当てると飛び出す粒子は何か。",
            "options": [
                "陽子",
                "中性子",
                "電子",
                "光子"
            ],
            "answer": 2,
            "explanation": "光電効果では金属表面に光を当てると電子（光電子）が飛び出します。",
            "image_url": ""
        },
        {
            "id": 504,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "振動数$\\nu$の光子1個のエネルギー$E$はどれか（$h$はプランク定数）。",
            "options": [
                "$E = h\\nu$",
                "$E = \\dfrac{h}{\\nu}$",
                "$E = h\\nu^2$",
                "$E = \\dfrac{\\nu}{h}$"
            ],
            "answer": 0,
            "explanation": "光子のエネルギーは$E = h\\nu$です。これはアインシュタインの光量子仮説の基本式です。",
            "image_url": ""
        },
        {
            "id": 505,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果で、光の振動数が限界振動数$\\nu_0$より小さいとき、光の強度を上げるとどうなるか。",
            "options": [
                "光電子が飛び出す",
                "光電子の運動エネルギーが増える",
                "光電子は飛び出さない",
                "光電子の数が増える"
            ],
            "answer": 2,
            "explanation": "光の振動数が限界振動数$\\nu_0$未満の場合、いくら強度を上げても光電子は飛び出しません。1個の光子のエネルギーが仕事関数に足りないからです。",
            "image_url": ""
        },
        {
            "id": 506,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果において、飛び出す光電子の最大運動エネルギー$K_{\\text{max}}$を表す式はどれか（$W$は仕事関数）。",
            "options": [
                "$K_{\\text{max}} = h\\nu + W$",
                "$K_{\\text{max}} = h\\nu - W$",
                "$K_{\\text{max}} = W - h\\nu$",
                "$K_{\\text{max}} = \\dfrac{h\\nu}{W}$"
            ],
            "answer": 1,
            "explanation": "アインシュタインの光電効果の式は$K_{\\text{max}} = h\\nu - W$です。光子のエネルギーから仕事関数を引いた分が運動エネルギーになります。",
            "image_url": ""
        },

        // --- X線 ---

        {
            "id": 507,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "X線",
            "question": "X線の発生方法として正しいものはどれか。",
            "options": [
                "金属を加熱する",
                "高速の電子を金属に衝突させる",
                "金属に光を当てる",
                "金属に磁場をかける"
            ],
            "answer": 1,
            "explanation": "X線は高速に加速した電子を金属ターゲットに衝突させることで発生します。",
            "image_url": ""
        },

        // --- 粒子の波動性 ---

        {
            "id": 508,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "運動量$p$の粒子のド・ブロイ波長$\\lambda$はどれか（$h$はプランク定数）。",
            "options": [
                "$\\lambda = hp$",
                "$\\lambda = \\dfrac{h}{p}$",
                "$\\lambda = \\dfrac{p}{h}$",
                "$\\lambda = h^2p$"
            ],
            "answer": 1,
            "explanation": "ド・ブロイの物質波の波長は$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}$です。運動量が大きいほど波長は短くなります。",
            "image_url": ""
        },
        {
            "id": 509,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "粒子の波動性",
            "question": "電子は波としての性質（波動性）を持つ。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。電子線の回折実験により、電子が波としての性質を持つことが確認されました（ド・ブロイ波、物質波）。",
            "image_url": ""
        },

        // ─── 第2章 原子と原子核 ───

        // --- 原子の構造とエネルギー準位 ---

        {
            "id": 510,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "ラザフォードの実験で明らかになった原子モデルはどれか。",
            "options": [
                "ぶどうパンモデル（トムソンモデル）",
                "原子核を中心とする惑星モデル",
                "電子雲モデル",
                "殻模型"
            ],
            "answer": 1,
            "explanation": "ラザフォードは$\\alpha$粒子の散乱実験から、原子の中心に正電荷が集中した小さな原子核があることを示しました。",
            "image_url": ""
        },
        {
            "id": 511,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "水素原子のボーアモデルで、電子がエネルギー準位$E_n$から$E_m$（$E_n > E_m$）に遷移するとき放出される光の振動数$\\nu$はどれか。",
            "options": [
                "$\\nu = \\dfrac{E_n + E_m}{h}$",
                "$\\nu = \\dfrac{E_n - E_m}{h}$",
                "$\\nu = \\dfrac{h}{E_n - E_m}$",
                "$\\nu = h(E_n - E_m)$"
            ],
            "answer": 1,
            "explanation": "エネルギーの差が光子のエネルギーとして放出されるので、$h\\nu = E_n - E_m$、すなわち$\\nu = \\dfrac{E_n - E_m}{h}$です。",
            "image_url": ""
        },

        // --- 原子核 ---

        {
            "id": 512,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "原子核",
            "question": "原子番号$Z$、質量数$A$の原子核に含まれる中性子の数はいくつか。",
            "options": [
                "$Z$",
                "$A$",
                "$A - Z$",
                "$A + Z$"
            ],
            "answer": 2,
            "explanation": "質量数$A$は陽子数$Z$と中性子数$N$の和なので、$N = A - Z$です。",
            "image_url": ""
        },
        {
            "id": 513,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "原子核",
            "question": "同じ元素で中性子数が異なる原子どうしを同位体（アイソトープ）という。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。同じ原子番号（陽子数）で質量数（中性子数）が異なる原子を同位体といいます。例：$^{12}\\text{C}$と$^{14}\\text{C}$。",
            "image_url": ""
        },

        // --- 放射線とその性質 ---

        {
            "id": 514,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "$\\alpha$線の正体はどれか。",
            "options": [
                "電子の流れ",
                "ヘリウム原子核の流れ",
                "電磁波",
                "中性子の流れ"
            ],
            "answer": 1,
            "explanation": "$\\alpha$線はヘリウム原子核$^4_2\\text{He}$（陽子2個＋中性子2個）の流れです。",
            "image_url": ""
        },
        {
            "id": 515,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "$\\beta$線の正体はどれか。",
            "options": [
                "ヘリウム原子核の流れ",
                "電磁波",
                "電子の流れ",
                "陽子の流れ"
            ],
            "answer": 2,
            "explanation": "$\\beta$線は原子核内の中性子が陽子に変わるとき放出される高速の電子の流れです。",
            "image_url": ""
        },
        {
            "id": 516,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "放射性物質の量が半分になるまでの時間を何というか。",
            "options": [
                "減衰時間",
                "半減期",
                "崩壊定数",
                "寿命"
            ],
            "answer": 1,
            "explanation": "放射性原子核の数が半分に減るまでの時間を半減期といいます。半減期は物質固有の値で外部条件に依存しません。",
            "image_url": ""
        },
        {
            "id": 517,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "ある放射性物質の半減期が$T$のとき、$3T$経過後に残る原子核は最初の何倍か。",
            "options": [
                "$\\dfrac{1}{3}$",
                "$\\dfrac{1}{4}$",
                "$\\dfrac{1}{8}$",
                "$\\dfrac{1}{16}$"
            ],
            "answer": 2,
            "explanation": "半減期$T$ごとに半分になるので、$3T$後には$\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8}$になります。",
            "image_url": ""
        },

        // --- 核反応と核エネルギー ---

        {
            "id": 518,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "アインシュタインの質量とエネルギーの等価性を表す式はどれか。",
            "options": [
                "$E = mc$",
                "$E = mc^2$",
                "$E = \\dfrac{1}{2}mc^2$",
                "$E = m^2c$"
            ],
            "answer": 1,
            "explanation": "質量$m$とエネルギー$E$は$E = mc^2$の関係にあります。核反応で質量が減少すると莫大なエネルギーが発生します。",
            "image_url": ""
        },
        {
            "id": 519,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "重い原子核が2つ以上の原子核に分かれる反応を何というか。",
            "options": [
                "核融合",
                "核分裂",
                "$\\beta$崩壊",
                "$\\alpha$崩壊"
            ],
            "answer": 1,
            "explanation": "重い原子核（ウランなど）が分裂する反応を核分裂といいます。原子力発電はこの反応を利用しています。",
            "image_url": ""
        },
        {
            "id": 520,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "軽い原子核どうしが結合してより重い原子核になる反応を何というか。",
            "options": [
                "核分裂",
                "核融合",
                "連鎖反応",
                "$\\gamma$崩壊"
            ],
            "answer": 1,
            "explanation": "軽い原子核（水素など）が結合する反応を核融合といいます。太陽のエネルギー源は水素の核融合反応です。",
            "image_url": ""
        },

        // ============================================================
        // 以下、追加30問（521〜550）
        // ============================================================

        // ─── 第1章 電子と光（追加） ───

        // --- 電子 ---

        {
            "id": 521,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "電子",
            "question": "陰極線（真空放電で陰極から出る線）の正体は電子の流れである。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。トムソンは陰極線が電場・磁場で曲がることから、負の電荷を持つ粒子（電子）の流れであることを示しました。",
            "image_url": ""
        },
        {
            "id": 522,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "電子",
            "question": "電圧$V$で加速された電子の運動エネルギーはどれか（$e$は電気素量）。",
            "options": [
                "$\\dfrac{eV}{2}$",
                "$eV$",
                "$2eV$",
                "$e^2V$"
            ],
            "answer": 1,
            "explanation": "電圧$V$で加速された電子が得る運動エネルギーは$eV$です。$\\dfrac{1}{2}mv^2 = eV$の関係が成り立ちます。",
            "image_url": ""
        },
        {
            "id": 523,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "電子",
            "question": "電子の比電荷$\\dfrac{e}{m}$を初めて測定した科学者は誰か。",
            "options": [
                "ミリカン",
                "ラザフォード",
                "トムソン",
                "ボーア"
            ],
            "answer": 2,
            "explanation": "J.J.トムソンは陰極線の実験で電子の比電荷$\\dfrac{e}{m}$を初めて測定しました。",
            "image_url": ""
        },

        // --- 光の粒子性 ---

        {
            "id": 524,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "光の粒子性",
            "question": "光電効果において、光電子の最大運動エネルギーは光の強度（明るさ）に比例する。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 1,
            "explanation": "誤りです。光電子の最大運動エネルギーは光の振動数で決まり、光の強度には依存しません。強度は飛び出す光電子の数に関係します。",
            "image_url": ""
        },
        {
            "id": 525,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "仕事関数が$W = 4.0\\,\\text{eV}$の金属に波長$2.0 \\times 10^{-7}\\,\\text{m}$の紫外線を当てた。飛び出す光電子の最大運動エネルギーに最も近い値はどれか。ただし$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$c = 3.0 \\times 10^8\\,\\text{m/s}$、$1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$とする。",
            "options": [
                "$2.2\\,\\text{eV}$",
                "$4.0\\,\\text{eV}$",
                "$6.2\\,\\text{eV}$",
                "$1.0\\,\\text{eV}$"
            ],
            "answer": 0,
            "explanation": "光子のエネルギーは$E = \\dfrac{hc}{\\lambda} = \\dfrac{6.6 \\times 10^{-34} \\times 3.0 \\times 10^8}{2.0 \\times 10^{-7}} = 9.9 \\times 10^{-19}\\,\\text{J} \\approx 6.2\\,\\text{eV}$です。最大運動エネルギーは$K_{\\text{max}} = 6.2 - 4.0 = 2.2\\,\\text{eV}$です。",
            "image_url": ""
        },
        {
            "id": 526,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果を理論的に説明し、光量子仮説を提唱した科学者は誰か。",
            "options": [
                "プランク",
                "アインシュタイン",
                "ド・ブロイ",
                "コンプトン"
            ],
            "answer": 1,
            "explanation": "アインシュタインは光を振動数$\\nu$に比例するエネルギー$h\\nu$を持つ粒子（光量子）と考え、光電効果を説明しました。",
            "image_url": ""
        },
        {
            "id": 527,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "仕事関数$W = 2.0\\,\\text{eV}$の金属に振動数$\\nu$の光を当てたところ光電子が飛び出した。限界振動数$\\nu_0$を求めよ。ただし$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$とする。",
                    "options": [
                        "$4.8 \\times 10^{14}\\,\\text{Hz}$",
                        "$3.2 \\times 10^{14}\\,\\text{Hz}$",
                        "$6.4 \\times 10^{14}\\,\\text{Hz}$",
                        "$1.6 \\times 10^{14}\\,\\text{Hz}$"
                    ],
                    "answer": 0,
                    "explanation": "$W = h\\nu_0$より$\\nu_0 = \\dfrac{W}{h} = \\dfrac{2.0 \\times 1.6 \\times 10^{-19}}{6.6 \\times 10^{-34}} \\approx 4.8 \\times 10^{14}\\,\\text{Hz}$です。"
                },
                {
                    "question": "この金属に振動数$\\nu = 7.0 \\times 10^{14}\\,\\text{Hz}$の光を当てたとき、光電子の最大運動エネルギーに最も近い値はどれか。",
                    "options": [
                        "$0.46\\,\\text{eV}$",
                        "$0.90\\,\\text{eV}$",
                        "$1.5\\,\\text{eV}$",
                        "$2.9\\,\\text{eV}$"
                    ],
                    "answer": 1,
                    "explanation": "$K_{\\text{max}} = h\\nu - W = 6.6 \\times 10^{-34} \\times 7.0 \\times 10^{14} - 3.2 \\times 10^{-19} = 4.62 \\times 10^{-19} - 3.2 \\times 10^{-19} = 1.42 \\times 10^{-19}\\,\\text{J} \\approx 0.89\\,\\text{eV}$です。"
                },
                {
                    "question": "この光電子を止めるために必要な阻止電圧$V_0$に最も近い値はどれか。",
                    "options": [
                        "$0.45\\,\\text{V}$",
                        "$0.89\\,\\text{V}$",
                        "$1.5\\,\\text{V}$",
                        "$2.0\\,\\text{V}$"
                    ],
                    "answer": 1,
                    "explanation": "阻止電圧は$eV_0 = K_{\\text{max}}$より$V_0 = \\dfrac{K_{\\text{max}}}{e} \\approx \\dfrac{0.89\\,\\text{eV}}{e} = 0.89\\,\\text{V}$です。"
                }
            ]
        },

        // --- X線 ---

        {
            "id": 528,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "X線",
            "question": "X線は可視光よりも波長が長い電磁波である。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 1,
            "explanation": "誤りです。X線は可視光よりも波長が短い（振動数が大きい）電磁波です。波長はおよそ$10^{-12}$〜$10^{-8}\\,\\text{m}$程度です。",
            "image_url": ""
        },
        {
            "id": 529,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "X線",
            "question": "X線管で電子を電圧$V$で加速したとき、発生するX線の最短波長$\\lambda_{\\text{min}}$はどれか。",
            "options": [
                "$\\lambda_{\\text{min}} = \\dfrac{hc}{eV}$",
                "$\\lambda_{\\text{min}} = \\dfrac{eV}{hc}$",
                "$\\lambda_{\\text{min}} = \\dfrac{h}{eV}$",
                "$\\lambda_{\\text{min}} = \\dfrac{hV}{ec}$"
            ],
            "answer": 0,
            "explanation": "電子の運動エネルギー$eV$がすべてX線光子のエネルギーに変わるとき波長は最短になり、$eV = \\dfrac{hc}{\\lambda_{\\text{min}}}$より$\\lambda_{\\text{min}} = \\dfrac{hc}{eV}$です。",
            "image_url": ""
        },
        {
            "id": 530,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "X線",
            "question": "X線のスペクトルに見られる、ターゲット元素に固有の鋭いピークを何というか。",
            "options": [
                "連続X線",
                "固有X線（特性X線）",
                "制動放射",
                "蛍光X線"
            ],
            "answer": 1,
            "explanation": "ターゲット元素の内殻電子の遷移によって発生する、元素固有の波長を持つX線を固有X線（特性X線）といいます。",
            "image_url": ""
        },
        {
            "id": 531,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "X線",
            "question": "コンプトン効果で、X線が電子に衝突した後のX線の波長はどうなるか。",
            "options": [
                "短くなる",
                "長くなる",
                "変わらない",
                "ゼロになる"
            ],
            "answer": 1,
            "explanation": "コンプトン効果では、X線光子が電子にエネルギーの一部を与えるため、散乱後のX線の波長は長く（エネルギーは小さく）なります。",
            "image_url": ""
        },

        // --- 粒子の波動性 ---

        {
            "id": 532,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "物質波（ド・ブロイ波）の存在を最初に提唱した科学者は誰か。",
            "options": [
                "アインシュタイン",
                "ハイゼンベルク",
                "ド・ブロイ",
                "シュレーディンガー"
            ],
            "answer": 2,
            "explanation": "ド・ブロイは1924年に、すべての物質粒子が波としての性質を持つことを提唱しました。",
            "image_url": ""
        },
        {
            "id": 533,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "電圧$V$で加速された電子のド・ブロイ波長$\\lambda$はどれか（$m$は電子の質量）。",
            "options": [
                "$\\lambda = \\dfrac{h}{\\sqrt{2meV}}$",
                "$\\lambda = \\dfrac{h}{2meV}$",
                "$\\lambda = \\dfrac{\\sqrt{2meV}}{h}$",
                "$\\lambda = h\\sqrt{2meV}$"
            ],
            "answer": 0,
            "explanation": "$\\dfrac{1}{2}mv^2 = eV$より$mv = \\sqrt{2meV}$。ド・ブロイ波長は$\\lambda = \\dfrac{h}{mv} = \\dfrac{h}{\\sqrt{2meV}}$です。",
            "image_url": ""
        },
        {
            "id": 534,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "物質波とX線に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "質量$9.1 \\times 10^{-31}\\,\\text{kg}$の電子を$150\\,\\text{V}$で加速したときのド・ブロイ波長に最も近い値はどれか。ただし$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$e = 1.6 \\times 10^{-19}\\,\\text{C}$とする。",
                    "options": [
                        "$1.0 \\times 10^{-10}\\,\\text{m}$",
                        "$1.0 \\times 10^{-8}\\,\\text{m}$",
                        "$1.0 \\times 10^{-12}\\,\\text{m}$",
                        "$1.0 \\times 10^{-6}\\,\\text{m}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\lambda = \\dfrac{h}{\\sqrt{2meV}} = \\dfrac{6.6 \\times 10^{-34}}{\\sqrt{2 \\times 9.1 \\times 10^{-31} \\times 1.6 \\times 10^{-19} \\times 150}} \\approx 1.0 \\times 10^{-10}\\,\\text{m}$です。"
                },
                {
                    "question": "この波長はおよそ原子間距離と同程度である。このことから電子線で可能な実験はどれか。",
                    "options": [
                        "結晶による電子線の回折実験",
                        "電子線のドップラー効果の測定",
                        "電子線による光電効果の観察",
                        "電子線の偏光の観察"
                    ],
                    "answer": 0,
                    "explanation": "波長が結晶の格子間隔と同程度のとき回折が起こります。デビソンとガーマーは結晶による電子線の回折を観測し、電子の波動性を実証しました。"
                }
            ]
        },

        // ─── 第2章 原子と原子核（追加） ───

        // --- 原子の構造とエネルギー準位 ---

        {
            "id": 535,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "ボーアの原子模型における量子条件として正しいものはどれか。",
            "options": [
                "電子の速さが光速の整数倍",
                "電子の軌道の円周が物質波の波長の整数倍",
                "電子のエネルギーが連続的に変化する",
                "電子が原子核に落ち込む"
            ],
            "answer": 1,
            "explanation": "ボーアの量子条件は$2\\pi r = n\\lambda$（$n = 1, 2, 3, \\ldots$）です。電子の軌道の円周がド・ブロイ波長の整数倍になる定常状態のみが許されます。",
            "image_url": ""
        },
        {
            "id": 536,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "水素原子の基底状態のエネルギーは$E_1 = -13.6\\,\\text{eV}$である。量子数$n$の準位のエネルギー$E_n$はどれか。",
            "options": [
                "$E_n = -\\dfrac{13.6}{n}\\,\\text{eV}$",
                "$E_n = -\\dfrac{13.6}{n^2}\\,\\text{eV}$",
                "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
                "$E_n = -13.6 \\times n\\,\\text{eV}$"
            ],
            "answer": 1,
            "explanation": "水素原子のエネルギー準位は$E_n = \\dfrac{E_1}{n^2} = -\\dfrac{13.6}{n^2}\\,\\text{eV}$です。$n$が大きいほどエネルギーは$0$に近づきます。",
            "image_url": ""
        },
        {
            "id": 537,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "水素原子で$n = 3$から$n = 2$への遷移で放出される光子のエネルギーに最も近い値はどれか。ただし$E_1 = -13.6\\,\\text{eV}$とする。",
            "options": [
                "$1.51\\,\\text{eV}$",
                "$1.89\\,\\text{eV}$",
                "$3.40\\,\\text{eV}$",
                "$10.2\\,\\text{eV}$"
            ],
            "answer": 1,
            "explanation": "$E_3 = -\\dfrac{13.6}{9} \\approx -1.51\\,\\text{eV}$、$E_2 = -\\dfrac{13.6}{4} = -3.40\\,\\text{eV}$。放出エネルギーは$E_3 - E_2 = -1.51 - (-3.40) = 1.89\\,\\text{eV}$です。",
            "image_url": ""
        },
        {
            "id": 538,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "原子の構造とエネルギー準位",
            "question": "水素原子のスペクトル線のうち、バルマー系列は可視光領域に現れる。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。バルマー系列は$n \\geq 3$から$n = 2$への遷移で生じ、可視光領域のスペクトル線です。",
            "image_url": ""
        },
        {
            "id": 539,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "水素原子のエネルギー準位に関する以下の小問に順に答えよ。$E_1 = -13.6\\,\\text{eV}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "水素原子を基底状態（$n = 1$）から$n = 4$の状態に励起するのに必要なエネルギーに最も近い値はどれか。",
                    "options": [
                        "$10.2\\,\\text{eV}$",
                        "$12.75\\,\\text{eV}$",
                        "$13.6\\,\\text{eV}$",
                        "$3.40\\,\\text{eV}$"
                    ],
                    "answer": 1,
                    "explanation": "$E_4 = -\\dfrac{13.6}{16} = -0.85\\,\\text{eV}$。必要なエネルギーは$E_4 - E_1 = -0.85 - (-13.6) = 12.75\\,\\text{eV}$です。"
                },
                {
                    "question": "$n = 4$の状態から基底状態に戻るまでに放出しうるスペクトル線は最大何本か。",
                    "options": [
                        "$3$本",
                        "$4$本",
                        "$6$本",
                        "$10$本"
                    ],
                    "answer": 2,
                    "explanation": "$n = 4$から下の準位への遷移の組合せは$_4C_2 = 6$通りです（$4 \\to 3$、$4 \\to 2$、$4 \\to 1$、$3 \\to 2$、$3 \\to 1$、$2 \\to 1$）。"
                },
                {
                    "question": "これらのスペクトル線のうち、最も波長が長いものはどの遷移で生じるか。",
                    "options": [
                        "$4 \\to 1$",
                        "$4 \\to 3$",
                        "$3 \\to 2$",
                        "$2 \\to 1$"
                    ],
                    "answer": 1,
                    "explanation": "波長が最も長い（エネルギーが最も小さい）遷移は、隣り合う準位間で上の方の遷移です。$E_4 - E_3 = -0.85 - (-1.51) = 0.66\\,\\text{eV}$が最小です。"
                }
            ]
        },

        // --- 原子核 ---

        {
            "id": 540,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "原子核",
            "question": "原子核中の陽子と中性子を総称して何というか。",
            "options": [
                "レプトン",
                "核子",
                "ハドロン",
                "ボソン"
            ],
            "answer": 1,
            "explanation": "原子核を構成する陽子と中性子を総称して核子といいます。",
            "image_url": ""
        },
        {
            "id": 541,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子核",
            "question": "原子核の結合エネルギーについて正しい説明はどれか。",
            "options": [
                "原子核を構成する核子をバラバラにするのに必要なエネルギー",
                "原子核が崩壊するときに放出される放射線のエネルギー",
                "原子核中の電子が持つエネルギー",
                "原子核が他の原子核と衝突するのに必要なエネルギー"
            ],
            "answer": 0,
            "explanation": "結合エネルギーとは、原子核を個々の核子に分解するのに必要なエネルギーです。結合エネルギーが大きいほど原子核は安定です。",
            "image_url": ""
        },
        {
            "id": 542,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子核",
            "question": "原子核の質量は、それを構成する陽子と中性子の質量の合計より小さい。この差を何というか。",
            "options": [
                "質量欠損",
                "質量過剰",
                "比質量",
                "臨界質量"
            ],
            "answer": 0,
            "explanation": "原子核の質量が構成核子の質量の合計より小さくなる差を質量欠損といいます。質量欠損$\\Delta m$に対応するエネルギー$\\Delta mc^2$が結合エネルギーです。",
            "image_url": ""
        },

        // --- 放射線とその性質 ---

        {
            "id": 543,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "$\\gamma$線の正体はどれか。",
            "options": [
                "ヘリウム原子核の流れ",
                "電子の流れ",
                "波長の短い電磁波",
                "中性子の流れ"
            ],
            "answer": 2,
            "explanation": "$\\gamma$線は非常に波長の短い電磁波（光子）です。電荷を持たず透過力が強いのが特徴です。",
            "image_url": ""
        },
        {
            "id": 544,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "$\\alpha$線、$\\beta$線、$\\gamma$線の中で、磁場中で曲がらないのはどれか。",
            "options": [
                "$\\alpha$線のみ",
                "$\\beta$線のみ",
                "$\\gamma$線のみ",
                "$\\alpha$線と$\\beta$線"
            ],
            "answer": 2,
            "explanation": "$\\gamma$線は電荷を持たない電磁波なので、磁場中で曲がりません。$\\alpha$線と$\\beta$線は荷電粒子なのでローレンツ力により曲がります。",
            "image_url": ""
        },
        {
            "id": 545,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "放射性崩壊に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "$^{238}_{92}\\text{U}$が$\\alpha$崩壊したとき、生成される原子核の質量数と原子番号の組合せとして正しいものはどれか。",
                    "options": [
                        "質量数$234$、原子番号$90$",
                        "質量数$236$、原子番号$91$",
                        "質量数$234$、原子番号$92$",
                        "質量数$238$、原子番号$90$"
                    ],
                    "answer": 0,
                    "explanation": "$\\alpha$崩壊では$^4_2\\text{He}$が放出されるので、質量数は$238 - 4 = 234$、原子番号は$92 - 2 = 90$になります。"
                },
                {
                    "question": "生成された原子核がさらに$\\beta$崩壊した。$\\beta$崩壊後の原子核の原子番号はいくつか。",
                    "options": [
                        "$89$",
                        "$90$",
                        "$91$",
                        "$92$"
                    ],
                    "answer": 2,
                    "explanation": "$\\beta$崩壊では中性子が陽子に変わるため質量数は変わらず、原子番号が$1$増えます。$90 + 1 = 91$です。"
                },
                {
                    "question": "半減期$T = 4.5 \\times 10^9$年の$^{238}\\text{U}$が$9.0 \\times 10^9$年後に残る割合はいくらか。",
                    "options": [
                        "$\\dfrac{1}{2}$",
                        "$\\dfrac{1}{4}$",
                        "$\\dfrac{1}{8}$",
                        "$\\dfrac{1}{16}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\dfrac{9.0 \\times 10^9}{4.5 \\times 10^9} = 2$回の半減期が経過するので、$\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$が残ります。"
                }
            ]
        },

        // --- 核反応と核エネルギー ---

        {
            "id": 546,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "核反応と核エネルギー",
            "question": "核反応では、反応の前後で質量数の合計と原子番号の合計はそれぞれ保存される。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。核反応では質量数の合計と原子番号（電荷数）の合計がそれぞれ反応の前後で保存されます（保存則）。",
            "image_url": ""
        },
        {
            "id": 547,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "質量欠損$\\Delta m = 0.010\\,\\text{u}$に相当するエネルギーに最も近い値はどれか。ただし$1\\,\\text{u} = 931\\,\\text{MeV}/c^2$とする。",
            "options": [
                "$0.93\\,\\text{MeV}$",
                "$9.3\\,\\text{MeV}$",
                "$93\\,\\text{MeV}$",
                "$930\\,\\text{MeV}$"
            ],
            "answer": 1,
            "explanation": "$E = \\Delta m \\times c^2 = 0.010 \\times 931 = 9.31\\,\\text{MeV} \\approx 9.3\\,\\text{MeV}$です。",
            "image_url": ""
        },
        {
            "id": 548,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "核分裂と核エネルギーに関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "ウラン$^{235}\\text{U}$に中性子を吸収させると核分裂が起こり、さらに中性子が放出される。この中性子が別のウラン原子核に核分裂を起こさせる反応を何というか。",
                    "options": [
                        "核融合反応",
                        "連鎖反応",
                        "$\\beta$崩壊",
                        "対消滅"
                    ],
                    "answer": 1,
                    "explanation": "核分裂で生じた中性子が次々と核分裂を引き起こす反応を連鎖反応といいます。原子炉や核兵器の原理です。"
                },
                {
                    "question": "連鎖反応が持続的に起こるために必要な核燃料の最小量を何というか。",
                    "options": [
                        "半減量",
                        "結合量",
                        "臨界量",
                        "飽和量"
                    ],
                    "answer": 2,
                    "explanation": "連鎖反応を持続させるのに必要な核燃料の最小量を臨界量（臨界質量）といいます。"
                },
                {
                    "question": "原子炉で連鎖反応の速度を制御するために用いるものはどれか。",
                    "options": [
                        "減速材",
                        "制御棒",
                        "冷却材",
                        "遮蔽材"
                    ],
                    "answer": 1,
                    "explanation": "制御棒は中性子を吸収する物質（カドミウムなど）でできており、炉内の中性子の数を調節して連鎖反応の速度を制御します。"
                }
            ]
        },

        // --- 素粒子 ---

        {
            "id": 549,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "素粒子",
            "question": "陽子や中性子を構成するとされる素粒子は何か。",
            "options": [
                "レプトン",
                "ニュートリノ",
                "クォーク",
                "ミュオン"
            ],
            "answer": 2,
            "explanation": "陽子や中性子は3つのクォークから構成されています。陽子はアップクォーク2個とダウンクォーク1個からなります。",
            "image_url": ""
        },
        {
            "id": 550,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "素粒子",
            "question": "自然界に存在する4つの基本的な力（相互作用）に含まれないものはどれか。",
            "options": [
                "重力",
                "電磁気力",
                "遠心力",
                "強い力"
            ],
            "answer": 2,
            "explanation": "4つの基本的な力は、重力・電磁気力・強い力（核力）・弱い力です。遠心力は見かけの力（慣性力）であり、基本的な力ではありません。",
            "image_url": ""
        },

        // ============================================================
        // 以下、追加50問（551〜600）
        // A=15, B=15, C=20
        // ============================================================

        // ─── 第1章 電子と光（追加） ───

        // --- 電子 ---

        {
            "id": 551,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "電子",
            "question": "ミリカンの油滴実験では、油滴にかかる重力と電気力をつり合わせて電荷を測定した。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。ミリカンは帯電した油滴を電場中で静止させ、重力と電気力のつり合いから油滴の電荷を精密に測定しました。",
            "image_url": ""
        },
        {
            "id": 552,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "電子",
            "question": "電子の質量$m = 9.1 \\times 10^{-31}\\,\\text{kg}$、電気素量$e = 1.6 \\times 10^{-19}\\,\\text{C}$のとき、電子の比電荷$\\dfrac{e}{m}$に最も近い値はどれか。",
            "options": [
                "$1.8 \\times 10^{11}\\,\\text{C/kg}$",
                "$1.8 \\times 10^{8}\\,\\text{C/kg}$",
                "$5.7 \\times 10^{-12}\\,\\text{C/kg}$",
                "$1.8 \\times 10^{-11}\\,\\text{C/kg}$"
            ],
            "answer": 0,
            "explanation": "$\\dfrac{e}{m} = \\dfrac{1.6 \\times 10^{-19}}{9.1 \\times 10^{-31}} \\approx 1.76 \\times 10^{11}\\,\\text{C/kg}$です。",
            "image_url": ""
        },
        {
            "id": 553,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "電子",
            "question": "電子の加速と偏向に関する以下の小問に順に答えよ。$e = 1.6 \\times 10^{-19}\\,\\text{C}$、$m = 9.1 \\times 10^{-31}\\,\\text{kg}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "電圧$V = 200\\,\\text{V}$で静止状態から加速された電子の速さに最も近い値はどれか。",
                    "options": [
                        "$8.4 \\times 10^6\\,\\text{m/s}$",
                        "$4.2 \\times 10^6\\,\\text{m/s}$",
                        "$8.4 \\times 10^5\\,\\text{m/s}$",
                        "$1.7 \\times 10^7\\,\\text{m/s}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\dfrac{1}{2}mv^2 = eV$より$v = \\sqrt{\\dfrac{2eV}{m}} = \\sqrt{\\dfrac{2 \\times 1.6 \\times 10^{-19} \\times 200}{9.1 \\times 10^{-31}}} \\approx 8.4 \\times 10^6\\,\\text{m/s}$です。"
                },
                {
                    "question": "この電子が一様な電場$E$の中に入ると、電場の向きと逆方向に力を受ける。この力の大きさはどれか。",
                    "options": [
                        "$eE$",
                        "$\\dfrac{e}{E}$",
                        "$mE$",
                        "$\\dfrac{E}{e}$"
                    ],
                    "answer": 0,
                    "explanation": "電場$E$中の電子が受ける力の大きさは$F = eE$です。電子は負電荷なので、電場と逆向きに力を受けます。"
                },
                {
                    "question": "この電子が一様な磁場$B$中に速さ$v$で磁場に垂直に入射した。電子が描く円運動の半径$r$を表す式はどれか。",
                    "options": [
                        "$r = \\dfrac{mv}{eB}$",
                        "$r = \\dfrac{eB}{mv}$",
                        "$r = \\dfrac{eBv}{m}$",
                        "$r = \\dfrac{m}{eBv}$"
                    ],
                    "answer": 0,
                    "explanation": "ローレンツ力$evB$が向心力$\\dfrac{mv^2}{r}$と等しいので、$r = \\dfrac{mv}{eB}$です。"
                }
            ]
        },

        // --- 光の粒子性 ---

        {
            "id": 554,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果において、光の振動数を大きくすると飛び出す光電子の最大運動エネルギーはどうなるか。",
            "options": [
                "変わらない",
                "小さくなる",
                "大きくなる",
                "ゼロになる"
            ],
            "answer": 2,
            "explanation": "光電子の最大運動エネルギーは$K_{\\text{max}} = h\\nu - W$なので、振動数$\\nu$が大きいほど最大運動エネルギーは大きくなります。",
            "image_url": ""
        },
        {
            "id": 555,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "波長$\\lambda$の光子の運動量$p$はどれか（$h$はプランク定数）。",
            "options": [
                "$p = h\\lambda$",
                "$p = \\dfrac{h}{\\lambda}$",
                "$p = \\dfrac{\\lambda}{h}$",
                "$p = h\\lambda^2$"
            ],
            "answer": 1,
            "explanation": "光子の運動量は$p = \\dfrac{h}{\\lambda}$です。$E = pc$と$E = \\dfrac{hc}{\\lambda}$から導かれます。",
            "image_url": ""
        },
        {
            "id": 556,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果の実験に関する以下の小問に順に答えよ。$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$c = 3.0 \\times 10^8\\,\\text{m/s}$、$1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "ある金属に波長$4.0 \\times 10^{-7}\\,\\text{m}$の光を当てたところ光電子が飛び出し、阻止電圧が$1.1\\,\\text{V}$であった。この光子のエネルギーに最も近い値はどれか。",
                    "options": [
                        "$3.1\\,\\text{eV}$",
                        "$2.0\\,\\text{eV}$",
                        "$4.1\\,\\text{eV}$",
                        "$1.1\\,\\text{eV}$"
                    ],
                    "answer": 0,
                    "explanation": "$E = \\dfrac{hc}{\\lambda} = \\dfrac{6.6 \\times 10^{-34} \\times 3.0 \\times 10^8}{4.0 \\times 10^{-7}} = 4.95 \\times 10^{-19}\\,\\text{J} \\approx 3.1\\,\\text{eV}$です。"
                },
                {
                    "question": "この金属の仕事関数$W$に最も近い値はどれか。",
                    "options": [
                        "$1.1\\,\\text{eV}$",
                        "$2.0\\,\\text{eV}$",
                        "$3.1\\,\\text{eV}$",
                        "$4.2\\,\\text{eV}$"
                    ],
                    "answer": 1,
                    "explanation": "$W = h\\nu - K_{\\text{max}} = 3.1 - 1.1 = 2.0\\,\\text{eV}$です。"
                },
                {
                    "question": "この金属の限界波長に最も近い値はどれか。",
                    "options": [
                        "$6.2 \\times 10^{-7}\\,\\text{m}$",
                        "$4.0 \\times 10^{-7}\\,\\text{m}$",
                        "$3.0 \\times 10^{-7}\\,\\text{m}$",
                        "$8.0 \\times 10^{-7}\\,\\text{m}$"
                    ],
                    "answer": 0,
                    "explanation": "$W = \\dfrac{hc}{\\lambda_0}$より$\\lambda_0 = \\dfrac{hc}{W} = \\dfrac{6.6 \\times 10^{-34} \\times 3.0 \\times 10^8}{2.0 \\times 1.6 \\times 10^{-19}} \\approx 6.2 \\times 10^{-7}\\,\\text{m}$です。"
                }
            ]
        },

        // --- X線 ---

        {
            "id": 557,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "X線",
            "question": "X線が結晶格子で回折する現象を利用した実験を行い、X線が波であることを示した科学者は誰か。",
            "options": [
                "ド・ブロイ",
                "ラウエ",
                "コンプトン",
                "ベクレル"
            ],
            "answer": 1,
            "explanation": "ラウエは結晶によるX線の回折を発見し、X線が電磁波であることを示しました。",
            "image_url": ""
        },
        {
            "id": 558,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "X線",
            "question": "ブラッグの条件$2d\\sin\\theta = n\\lambda$において、$d$が表すものはどれか。",
            "options": [
                "X線管の長さ",
                "結晶の格子面間隔",
                "電子の飛行距離",
                "X線の振幅"
            ],
            "answer": 1,
            "explanation": "ブラッグの条件$2d\\sin\\theta = n\\lambda$の$d$は結晶の格子面間隔です。この条件を満たすとき、X線の回折が強め合います。",
            "image_url": ""
        },
        {
            "id": 559,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "X線",
            "question": "X線の発生と性質に関する以下の小問に順に答えよ。$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$c = 3.0 \\times 10^8\\,\\text{m/s}$、$e = 1.6 \\times 10^{-19}\\,\\text{C}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "電圧$V = 50\\,\\text{kV}$で電子を加速してX線を発生させた。発生するX線の最短波長に最も近い値はどれか。",
                    "options": [
                        "$2.5 \\times 10^{-11}\\,\\text{m}$",
                        "$2.5 \\times 10^{-9}\\,\\text{m}$",
                        "$2.5 \\times 10^{-13}\\,\\text{m}$",
                        "$1.2 \\times 10^{-10}\\,\\text{m}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\lambda_{\\text{min}} = \\dfrac{hc}{eV} = \\dfrac{6.6 \\times 10^{-34} \\times 3.0 \\times 10^8}{1.6 \\times 10^{-19} \\times 5.0 \\times 10^4} \\approx 2.5 \\times 10^{-11}\\,\\text{m}$です。"
                },
                {
                    "question": "加速電圧を$2$倍にすると、X線の最短波長はどうなるか。",
                    "options": [
                        "$2$倍になる",
                        "$\\dfrac{1}{2}$倍になる",
                        "$4$倍になる",
                        "変わらない"
                    ],
                    "answer": 1,
                    "explanation": "$\\lambda_{\\text{min}} = \\dfrac{hc}{eV}$より、加速電圧が$2$倍になると最短波長は$\\dfrac{1}{2}$倍になります。"
                }
            ]
        },

        // --- 粒子の波動性 ---

        {
            "id": 560,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "粒子の波動性",
            "question": "デビソンとガーマーの実験は、電子線の回折を観測して電子の波動性を実証したものである。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。デビソンとガーマーはニッケル結晶に電子線を照射し、回折パターンを観測することで電子の波動性を実験的に実証しました。",
            "image_url": ""
        },
        {
            "id": 561,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "質量$m$、運動エネルギー$K$の粒子のド・ブロイ波長$\\lambda$はどれか。",
            "options": [
                "$\\lambda = \\dfrac{h}{\\sqrt{2mK}}$",
                "$\\lambda = \\dfrac{h}{2mK}$",
                "$\\lambda = h\\sqrt{2mK}$",
                "$\\lambda = \\dfrac{2mK}{h}$"
            ],
            "answer": 0,
            "explanation": "$K = \\dfrac{p^2}{2m}$より$p = \\sqrt{2mK}$。ド・ブロイ波長は$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{\\sqrt{2mK}}$です。",
            "image_url": ""
        },
        {
            "id": 562,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "電子線の回折と物質波に関する以下の小問に順に答えよ。$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$m = 9.1 \\times 10^{-31}\\,\\text{kg}$、$e = 1.6 \\times 10^{-19}\\,\\text{C}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "電圧$V = 100\\,\\text{V}$で加速された電子のド・ブロイ波長に最も近い値はどれか。",
                    "options": [
                        "$1.2 \\times 10^{-10}\\,\\text{m}$",
                        "$1.2 \\times 10^{-8}\\,\\text{m}$",
                        "$1.2 \\times 10^{-12}\\,\\text{m}$",
                        "$6.0 \\times 10^{-11}\\,\\text{m}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\lambda = \\dfrac{h}{\\sqrt{2meV}} = \\dfrac{6.6 \\times 10^{-34}}{\\sqrt{2 \\times 9.1 \\times 10^{-31} \\times 1.6 \\times 10^{-19} \\times 100}} \\approx 1.2 \\times 10^{-10}\\,\\text{m}$です。"
                },
                {
                    "question": "加速電圧を$4$倍にすると、ド・ブロイ波長はどうなるか。",
                    "options": [
                        "$4$倍になる",
                        "$2$倍になる",
                        "$\\dfrac{1}{2}$倍になる",
                        "$\\dfrac{1}{4}$倍になる"
                    ],
                    "answer": 2,
                    "explanation": "$\\lambda \\propto \\dfrac{1}{\\sqrt{V}}$より、$V$が$4$倍になると$\\lambda$は$\\dfrac{1}{\\sqrt{4}} = \\dfrac{1}{2}$倍になります。"
                },
                {
                    "question": "陽子（質量$1.67 \\times 10^{-27}\\,\\text{kg}$）を同じ電圧で加速した場合、電子と比べてド・ブロイ波長はどうなるか。",
                    "options": [
                        "電子より長くなる",
                        "電子より短くなる",
                        "電子と同じになる",
                        "波長を持たない"
                    ],
                    "answer": 1,
                    "explanation": "$\\lambda = \\dfrac{h}{\\sqrt{2mqV}}$で、陽子は電子より質量$m$が大きいため、同じ加速電圧では波長は短くなります。"
                }
            ]
        },

        // ─── 第2章 原子と原子核（追加） ───

        // --- 原子の構造とエネルギー準位 ---

        {
            "id": 563,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "原子の構造とエネルギー準位",
            "question": "ボーアの原子模型では、電子は定常状態にあるとき電磁波を放出しない。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。ボーアの仮説では、電子が定常状態（許された軌道）にあるときは加速度運動をしていても電磁波を放出しません。",
            "image_url": ""
        },
        {
            "id": 564,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "水素原子のスペクトル系列のうち、$n = 1$の準位への遷移で生じるものは何か。",
            "options": [
                "バルマー系列",
                "ライマン系列",
                "パッシェン系列",
                "ブラケット系列"
            ],
            "answer": 1,
            "explanation": "ライマン系列は$n \\geq 2$から$n = 1$への遷移で生じるスペクトル線で、紫外線領域に現れます。",
            "image_url": ""
        },
        {
            "id": 565,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "水素原子で$n = 2$から$n = 1$への遷移で放出される光子のエネルギーに最も近い値はどれか。ただし$E_1 = -13.6\\,\\text{eV}$とする。",
            "options": [
                "$3.4\\,\\text{eV}$",
                "$10.2\\,\\text{eV}$",
                "$13.6\\,\\text{eV}$",
                "$1.9\\,\\text{eV}$"
            ],
            "answer": 1,
            "explanation": "$E_2 = -\\dfrac{13.6}{4} = -3.4\\,\\text{eV}$。放出エネルギーは$E_2 - E_1 = -3.4 - (-13.6) = 10.2\\,\\text{eV}$です。",
            "image_url": ""
        },
        {
            "id": 566,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "ボーアの水素原子模型に関する以下の小問に順に答えよ。$E_1 = -13.6\\,\\text{eV}$、$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "水素原子のイオン化エネルギー（基底状態の電子を無限遠に引き離すのに必要なエネルギー）はいくらか。",
                    "options": [
                        "$3.4\\,\\text{eV}$",
                        "$10.2\\,\\text{eV}$",
                        "$13.6\\,\\text{eV}$",
                        "$1.51\\,\\text{eV}$"
                    ],
                    "answer": 2,
                    "explanation": "イオン化エネルギーは$E_{\\infty} - E_1 = 0 - (-13.6) = 13.6\\,\\text{eV}$です。"
                },
                {
                    "question": "$n = 3$から$n = 1$への遷移で放出される光子の振動数に最も近い値はどれか。",
                    "options": [
                        "$2.9 \\times 10^{15}\\,\\text{Hz}$",
                        "$1.5 \\times 10^{15}\\,\\text{Hz}$",
                        "$4.6 \\times 10^{14}\\,\\text{Hz}$",
                        "$7.3 \\times 10^{14}\\,\\text{Hz}$"
                    ],
                    "answer": 0,
                    "explanation": "$E_3 - E_1 = -1.51 - (-13.6) = 12.09\\,\\text{eV} = 1.93 \\times 10^{-18}\\,\\text{J}$。$\\nu = \\dfrac{E}{h} = \\dfrac{1.93 \\times 10^{-18}}{6.6 \\times 10^{-34}} \\approx 2.9 \\times 10^{15}\\,\\text{Hz}$です。"
                },
                {
                    "question": "この光子は可視光、紫外線、赤外線のどの領域に属するか。",
                    "options": [
                        "可視光",
                        "紫外線",
                        "赤外線",
                        "マイクロ波"
                    ],
                    "answer": 1,
                    "explanation": "$n = 1$への遷移（ライマン系列）はすべて紫外線領域に属します。エネルギー$12.09\\,\\text{eV}$は可視光よりもはるかに大きいです。"
                }
            ]
        },

        // --- 原子核 ---

        {
            "id": 567,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "原子核",
            "question": "原子核の大きさ（半径）のおおよその値として最も適切なものはどれか。",
            "options": [
                "$10^{-10}\\,\\text{m}$",
                "$10^{-15}\\,\\text{m}$",
                "$10^{-8}\\,\\text{m}$",
                "$10^{-20}\\,\\text{m}$"
            ],
            "answer": 1,
            "explanation": "原子核の半径はおよそ$10^{-15}\\,\\text{m}$（$1\\,\\text{fm}$）程度です。原子全体の大きさ$10^{-10}\\,\\text{m}$に比べて非常に小さいです。",
            "image_url": ""
        },
        {
            "id": 568,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "原子核",
            "question": "原子核中の陽子どうしには電気的な反発力がはたらくが、それを上回る強い力（核力）によって原子核はまとまっている。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。核力は非常に短い距離で強くはたらく引力で、陽子間のクーロン反発力に打ち勝って原子核を安定に保っています。",
            "image_url": ""
        },
        {
            "id": 569,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子核",
            "question": "$^{56}_{26}\\text{Fe}$に含まれる陽子、中性子の数の組合せとして正しいものはどれか。",
            "options": [
                "陽子$26$個、中性子$56$個",
                "陽子$56$個、中性子$26$個",
                "陽子$26$個、中性子$30$個",
                "陽子$30$個、中性子$26$個"
            ],
            "answer": 2,
            "explanation": "原子番号$Z = 26$が陽子の数、質量数$A = 56$が核子の総数です。中性子数は$N = A - Z = 56 - 26 = 30$個です。",
            "image_url": ""
        },
        {
            "id": 570,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "原子核",
            "question": "原子核の結合エネルギーと質量欠損に関する以下の小問に順に答えよ。陽子の質量$m_p = 1.0073\\,\\text{u}$、中性子の質量$m_n = 1.0087\\,\\text{u}$、$1\\,\\text{u} = 931\\,\\text{MeV}/c^2$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "$^4_2\\text{He}$の質量が$4.0026\\,\\text{u}$のとき、質量欠損に最も近い値はどれか。",
                    "options": [
                        "$0.0294\\,\\text{u}$",
                        "$0.0187\\,\\text{u}$",
                        "$0.0400\\,\\text{u}$",
                        "$0.0100\\,\\text{u}$"
                    ],
                    "answer": 0,
                    "explanation": "核子の質量の合計は$2 \\times 1.0073 + 2 \\times 1.0087 = 4.0320\\,\\text{u}$。質量欠損は$4.0320 - 4.0026 = 0.0294\\,\\text{u}$です。"
                },
                {
                    "question": "この質量欠損に対応する結合エネルギーに最も近い値はどれか。",
                    "options": [
                        "$27.4\\,\\text{MeV}$",
                        "$17.4\\,\\text{MeV}$",
                        "$37.2\\,\\text{MeV}$",
                        "$9.3\\,\\text{MeV}$"
                    ],
                    "answer": 0,
                    "explanation": "$E = 0.0294 \\times 931 \\approx 27.4\\,\\text{MeV}$です。"
                },
                {
                    "question": "核子1個あたりの結合エネルギーに最も近い値はどれか。",
                    "options": [
                        "$6.8\\,\\text{MeV}$",
                        "$13.7\\,\\text{MeV}$",
                        "$27.4\\,\\text{MeV}$",
                        "$3.4\\,\\text{MeV}$"
                    ],
                    "answer": 0,
                    "explanation": "核子1個あたりの結合エネルギーは$\\dfrac{27.4}{4} \\approx 6.8\\,\\text{MeV}$です。"
                }
            ]
        },

        // --- 放射線とその性質 ---

        {
            "id": 571,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "$\\alpha$線、$\\beta$線、$\\gamma$線の中で、透過力が最も強いのはどれか。",
            "options": [
                "$\\alpha$線",
                "$\\beta$線",
                "$\\gamma$線",
                "すべて同じ"
            ],
            "answer": 2,
            "explanation": "透過力は$\\gamma$線が最も強く、鉛板でないと遮蔽できません。$\\alpha$線は紙で、$\\beta$線はアルミニウム板で遮蔽できます。",
            "image_url": ""
        },
        {
            "id": 572,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "放射線とその性質",
            "question": "$\\alpha$崩壊では質量数が$4$減少し、原子番号が$2$減少する。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正しいです。$\\alpha$崩壊では$^4_2\\text{He}$が放出されるため、質量数は$4$減少、原子番号は$2$減少します。",
            "image_url": ""
        },
        {
            "id": 573,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "$\\beta$崩壊で質量数と原子番号はどのように変化するか。",
            "options": [
                "質量数は不変、原子番号が$1$増加",
                "質量数が$1$減少、原子番号が$1$増加",
                "質量数が$4$減少、原子番号が$2$減少",
                "質量数は不変、原子番号が$1$減少"
            ],
            "answer": 0,
            "explanation": "$\\beta$崩壊では中性子が陽子に変わり電子を放出するため、質量数は変わらず原子番号が$1$増加します。",
            "image_url": ""
        },
        {
            "id": 574,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "放射性崩壊と半減期に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "ある放射性物質の初期の原子数が$N_0 = 1.6 \\times 10^{10}$個、半減期$T = 8$日のとき、$24$日後に残っている原子数に最も近い値はどれか。",
                    "options": [
                        "$2.0 \\times 10^9$個",
                        "$4.0 \\times 10^9$個",
                        "$8.0 \\times 10^9$個",
                        "$1.0 \\times 10^9$個"
                    ],
                    "answer": 0,
                    "explanation": "$24$日$\\div 8$日$= 3$回の半減期。$N = 1.6 \\times 10^{10} \\times \\left(\\dfrac{1}{2}\\right)^3 = 2.0 \\times 10^9$個です。"
                },
                {
                    "question": "この物質が初期の$\\dfrac{1}{16}$に減るまでの時間はいくらか。",
                    "options": [
                        "$16$日",
                        "$24$日",
                        "$32$日",
                        "$64$日"
                    ],
                    "answer": 2,
                    "explanation": "$\\left(\\dfrac{1}{2}\\right)^n = \\dfrac{1}{16}$より$n = 4$。$t = 4T = 4 \\times 8 = 32$日です。"
                },
                {
                    "question": "半減期が$2$倍の別の放射性物質がある場合、$32$日後に残る割合はいくらか。",
                    "options": [
                        "$\\dfrac{1}{2}$",
                        "$\\dfrac{1}{4}$",
                        "$\\dfrac{1}{8}$",
                        "$\\dfrac{1}{16}$"
                    ],
                    "answer": 1,
                    "explanation": "半減期が$16$日の場合、$32$日$\\div 16$日$= 2$回の半減期。$\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$が残ります。"
                }
            ]
        },
        {
            "id": 575,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "放射線の電離作用と透過力に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "$\\alpha$線、$\\beta$線、$\\gamma$線の中で、電離作用が最も強いのはどれか。",
                    "options": [
                        "$\\alpha$線",
                        "$\\beta$線",
                        "$\\gamma$線",
                        "すべて同じ"
                    ],
                    "answer": 0,
                    "explanation": "$\\alpha$線は電荷が$+2e$と大きく質量も大きいため、電離作用が最も強いです。"
                },
                {
                    "question": "$\\alpha$線を遮蔽できる物質として正しいものはどれか。",
                    "options": [
                        "鉛板",
                        "アルミニウム板",
                        "紙",
                        "コンクリート壁"
                    ],
                    "answer": 2,
                    "explanation": "$\\alpha$線は透過力が弱く、薄い紙1枚で遮蔽できます。"
                },
                {
                    "question": "$\\gamma$線を遮蔽するのに適した物質はどれか。",
                    "options": [
                        "紙",
                        "アルミニウム板",
                        "木材",
                        "鉛板"
                    ],
                    "answer": 3,
                    "explanation": "$\\gamma$線は透過力が非常に強く、厚い鉛板やコンクリートで遮蔽する必要があります。"
                }
            ]
        },

        // --- 核反応と核エネルギー ---

        {
            "id": 576,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "太陽のエネルギー源として正しいものはどれか。",
            "options": [
                "核分裂反応",
                "核融合反応",
                "化学反応（燃焼）",
                "放射性崩壊"
            ],
            "answer": 1,
            "explanation": "太陽では水素原子核どうしが核融合してヘリウムになる反応が起きており、これが莫大なエネルギーの源です。",
            "image_url": ""
        },
        {
            "id": 577,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "核反応と核エネルギー",
            "question": "原子力発電では核融合反応を利用してエネルギーを取り出している。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 1,
            "explanation": "誤りです。現在の原子力発電ではウランやプルトニウムの核分裂反応を利用しています。核融合反応は実用化に向けて研究中です。",
            "image_url": ""
        },
        {
            "id": 578,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "原子炉で核分裂により生じた高速中性子を減速するために用いる減速材として適切なものはどれか。",
            "options": [
                "カドミウム",
                "鉛",
                "水（軽水）",
                "ウラン"
            ],
            "answer": 2,
            "explanation": "減速材には水素を多く含む水（軽水）や重水、黒鉛などが使われます。中性子と質量の近い水素原子核との衝突で効率よく減速されます。",
            "image_url": ""
        },
        {
            "id": 579,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "核反応と質量エネルギーに関する以下の小問に順に答えよ。$1\\,\\text{u} = 931\\,\\text{MeV}/c^2$、$c = 3.0 \\times 10^8\\,\\text{m/s}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "次の核反応$^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0\\text{n}$において、反応前後の質量の差（質量欠損）が$0.019\\,\\text{u}$であった。放出されるエネルギーに最も近い値はどれか。",
                    "options": [
                        "$17.7\\,\\text{MeV}$",
                        "$8.8\\,\\text{MeV}$",
                        "$1.77\\,\\text{MeV}$",
                        "$177\\,\\text{MeV}$"
                    ],
                    "answer": 0,
                    "explanation": "$E = 0.019 \\times 931 \\approx 17.7\\,\\text{MeV}$です。"
                },
                {
                    "question": "この反応は核融合、核分裂のどちらに分類されるか。",
                    "options": [
                        "核融合",
                        "核分裂",
                        "$\\alpha$崩壊",
                        "$\\beta$崩壊"
                    ],
                    "answer": 0,
                    "explanation": "軽い原子核（重水素と三重水素）が結合してヘリウムになる反応なので核融合です。"
                },
                {
                    "question": "質量$1\\,\\text{kg}$がすべてエネルギーに変換されたとき、得られるエネルギーに最も近い値はどれか。",
                    "options": [
                        "$9.0 \\times 10^{16}\\,\\text{J}$",
                        "$3.0 \\times 10^8\\,\\text{J}$",
                        "$9.0 \\times 10^{8}\\,\\text{J}$",
                        "$3.0 \\times 10^{16}\\,\\text{J}$"
                    ],
                    "answer": 0,
                    "explanation": "$E = mc^2 = 1 \\times (3.0 \\times 10^8)^2 = 9.0 \\times 10^{16}\\,\\text{J}$です。"
                }
            ]
        },
        {
            "id": 580,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "核分裂反応に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "ウラン$^{235}\\text{U}$が中性子を吸収して核分裂するとき、平均して放出される中性子の数はおよそいくつか。",
                    "options": [
                        "約$1$個",
                        "約$2$〜$3$個",
                        "約$10$個",
                        "約$100$個"
                    ],
                    "answer": 1,
                    "explanation": "$^{235}\\text{U}$の核分裂では平均$2$〜$3$個の中性子が放出されます。これが連鎖反応の原因になります。"
                },
                {
                    "question": "核分裂反応で放出された中性子の数を制御して、1回の核分裂あたり平均1個の中性子が次の核分裂を起こす状態を何というか。",
                    "options": [
                        "超臨界",
                        "臨界",
                        "未臨界",
                        "飽和"
                    ],
                    "answer": 1,
                    "explanation": "1回の核分裂で平均1個の中性子が次の核分裂を引き起こす状態を臨界状態といいます。原子炉はこの状態で運転されます。"
                }
            ]
        },

        // --- 素粒子 ---

        {
            "id": 581,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "素粒子",
            "question": "陽子を構成するクォークの組合せとして正しいものはどれか。",
            "options": [
                "アップ$2$個、ダウン$1$個",
                "アップ$1$個、ダウン$2$個",
                "アップ$3$個",
                "ダウン$3$個"
            ],
            "answer": 0,
            "explanation": "陽子はアップクォーク（$u$）$2$個とダウンクォーク（$d$）$1$個で構成されています（$uud$）。",
            "image_url": ""
        },
        {
            "id": 582,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "素粒子",
            "question": "中性子を構成するクォークの組合せとして正しいものはどれか。",
            "options": [
                "アップ$2$個、ダウン$1$個",
                "アップ$1$個、ダウン$2$個",
                "アップ$3$個",
                "ダウン$3$個"
            ],
            "answer": 1,
            "explanation": "中性子はアップクォーク（$u$）$1$個とダウンクォーク（$d$）$2$個で構成されています（$udd$）。",
            "image_url": ""
        },
        {
            "id": 583,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "素粒子",
            "question": "電子はクォークで構成されている。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 1,
            "explanation": "誤りです。電子はレプトンに分類される素粒子で、それ以上の内部構造を持ちません。クォークで構成されるのは陽子や中性子などのハドロンです。",
            "image_url": ""
        },
        {
            "id": 584,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "素粒子",
            "question": "$\\beta$崩壊で電子とともに放出される素粒子はどれか。",
            "options": [
                "光子",
                "陽子",
                "反ニュートリノ",
                "ミュオン"
            ],
            "answer": 2,
            "explanation": "$\\beta$崩壊では中性子が陽子に変わり、電子と反電子ニュートリノが放出されます。$n \\to p + e^- + \\bar{\\nu}_e$",
            "image_url": ""
        },
        {
            "id": 585,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "素粒子",
            "question": "電磁気力を媒介する素粒子（ゲージ粒子）はどれか。",
            "options": [
                "グルーオン",
                "光子",
                "Wボソン",
                "重力子"
            ],
            "answer": 1,
            "explanation": "電磁気力を媒介するゲージ粒子は光子（フォトン）です。グルーオンは強い力、Wボソン・Zボソンは弱い力を媒介します。",
            "image_url": ""
        },
        {
            "id": 586,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "素粒子",
            "question": "素粒子と基本的な力に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "クォークどうしを結びつけている力を媒介する素粒子はどれか。",
                    "options": [
                        "光子",
                        "グルーオン",
                        "Wボソン",
                        "ヒッグス粒子"
                    ],
                    "answer": 1,
                    "explanation": "強い力（カラー力）を媒介するゲージ粒子はグルーオンです。"
                },
                {
                    "question": "弱い力が関わる現象として正しいものはどれか。",
                    "options": [
                        "原子核の$\\alpha$崩壊",
                        "原子核の$\\beta$崩壊",
                        "光電効果",
                        "万有引力"
                    ],
                    "answer": 1,
                    "explanation": "$\\beta$崩壊は弱い力による反応です。中性子が陽子に変わるとき、弱い力を媒介するWボソンが関与します。"
                },
                {
                    "question": "すべての粒子に質量を与えるとされるメカニズムに関係する素粒子はどれか。",
                    "options": [
                        "グルーオン",
                        "ニュートリノ",
                        "ヒッグス粒子",
                        "重力子"
                    ],
                    "answer": 2,
                    "explanation": "ヒッグス粒子はヒッグス場と関連し、素粒子に質量を与えるメカニズム（ヒッグス機構）に関わります。2012年にCERNで発見されました。"
                }
            ]
        },

        // ─── 追加問題（分類の補強） ───

        // --- 電子 ---

        {
            "id": 587,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "電子",
            "question": "ミリカンの油滴実験に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "帯電した油滴が平行板コンデンサーの電場中で静止しているとき、油滴にはたらく力のつり合いの式として正しいものはどれか。ただし油滴の電荷を$q$、質量を$m$、電場の大きさを$E$、重力加速度を$g$とする。",
                    "options": [
                        "$qE = mg$",
                        "$qE = \\dfrac{mg}{2}$",
                        "$q = mgE$",
                        "$qg = mE$"
                    ],
                    "answer": 0,
                    "explanation": "電気力$qE$と重力$mg$がつり合うので$qE = mg$です。"
                },
                {
                    "question": "実験で測定された油滴の電荷が$4.8 \\times 10^{-19}\\,\\text{C}$であった。この電荷は電気素量の何倍か。ただし$e = 1.6 \\times 10^{-19}\\,\\text{C}$とする。",
                    "options": [
                        "$2$倍",
                        "$3$倍",
                        "$4$倍",
                        "$5$倍"
                    ],
                    "answer": 1,
                    "explanation": "$\\dfrac{4.8 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 3$より、電気素量の$3$倍です。"
                }
            ]
        },

        // --- 光の粒子性 ---

        {
            "id": 588,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果で、金属から飛び出す光電子の数を増やすにはどうすればよいか。",
            "options": [
                "光の振動数を大きくする",
                "光の強度を強くする",
                "光の波長を長くする",
                "金属の温度を上げる"
            ],
            "answer": 1,
            "explanation": "光の強度（明るさ）を強くすると、光子の数が増えるため飛び出す光電子の数も増えます。光電子の最大運動エネルギーは変わりません。",
            "image_url": ""
        },

        // --- X線 ---

        {
            "id": 589,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "X線",
            "question": "コンプトン効果に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "コンプトン効果は、X線をどのような物質に照射したとき観測されるか。",
                    "options": [
                        "結晶",
                        "自由電子を含む物質",
                        "磁性体",
                        "超伝導体"
                    ],
                    "answer": 1,
                    "explanation": "コンプトン効果はX線と自由電子（または束縛の弱い電子）の衝突で観測されます。"
                },
                {
                    "question": "コンプトン効果で散乱されたX線の波長が入射X線の波長より長くなる理由として正しいものはどれか。",
                    "options": [
                        "X線光子が電子からエネルギーを受け取るから",
                        "X線光子がエネルギーの一部を電子に与えるから",
                        "X線の速さが遅くなるから",
                        "電子がX線を吸収するから"
                    ],
                    "answer": 1,
                    "explanation": "コンプトン効果ではX線光子がエネルギーの一部を電子に与えるため、散乱後の光子のエネルギーが減少し波長が長くなります。"
                },
                {
                    "question": "コンプトン効果は光のどのような性質を示す証拠となるか。",
                    "options": [
                        "波動性",
                        "粒子性",
                        "偏光性",
                        "干渉性"
                    ],
                    "answer": 1,
                    "explanation": "コンプトン効果は光子と電子の衝突として説明できるため、光の粒子性を示す重要な証拠です。"
                }
            ]
        },

        // --- 粒子の波動性 ---

        {
            "id": 590,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "不確定性原理を提唱した科学者は誰か。",
            "options": [
                "ド・ブロイ",
                "シュレーディンガー",
                "ハイゼンベルク",
                "ディラック"
            ],
            "answer": 2,
            "explanation": "ハイゼンベルクは1927年に不確定性原理を提唱しました。粒子の位置と運動量を同時に正確に決定することはできないとする原理です。",
            "image_url": ""
        },

        // --- 原子の構造とエネルギー準位 ---

        {
            "id": 591,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "原子の構造とエネルギー準位",
            "question": "ラザフォードの$\\alpha$粒子散乱実験に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "ラザフォードの実験で、金箔に$\\alpha$粒子を照射したとき、大部分の$\\alpha$粒子はどうなったか。",
                    "options": [
                        "金箔に吸収された",
                        "ほぼ直進して通過した",
                        "大きく散乱された",
                        "静止した"
                    ],
                    "answer": 1,
                    "explanation": "大部分の$\\alpha$粒子はほとんど曲がらずに金箔を通過しました。これは原子の大部分が空間であることを示しています。"
                },
                {
                    "question": "ごく一部の$\\alpha$粒子が大きく散乱（$90°$以上曲げられたり跳ね返されたり）された理由として正しいものはどれか。",
                    "options": [
                        "電子との衝突で跳ね返された",
                        "正電荷が原子の中心の狭い領域に集中しているため",
                        "原子全体に正電荷が一様に分布しているため",
                        "金箔の結晶構造による回折"
                    ],
                    "answer": 1,
                    "explanation": "正電荷（と質量の大部分）が原子の中心の非常に小さな領域（原子核）に集中しているため、近づいた$\\alpha$粒子が強いクーロン力で大きく散乱されました。"
                }
            ]
        },

        // --- 原子核 ---

        {
            "id": 592,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子核",
            "question": "核子$1$個あたりの結合エネルギーが最も大きく、最も安定な原子核に近いのはどれか。",
            "options": [
                "$^2_1\\text{H}$（重水素）",
                "$^4_2\\text{He}$（ヘリウム）",
                "$^{56}_{26}\\text{Fe}$（鉄）",
                "$^{238}_{92}\\text{U}$（ウラン）"
            ],
            "answer": 2,
            "explanation": "核子$1$個あたりの結合エネルギーは鉄$^{56}\\text{Fe}$付近で最大（約$8.8\\,\\text{MeV}$）であり、最も安定です。",
            "image_url": ""
        },

        // --- 放射線とその性質 ---

        {
            "id": 593,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "放射線とその性質",
            "question": "$\\alpha$線、$\\beta$線、$\\gamma$線を磁場中に通したとき、$\\alpha$線と$\\beta$線は逆方向に曲がる。この理由として正しいものはどれか。",
            "options": [
                "質量が異なるため",
                "速さが異なるため",
                "電荷の符号が逆であるため",
                "波長が異なるため"
            ],
            "answer": 2,
            "explanation": "$\\alpha$線は正電荷（$+2e$）、$\\beta$線は負電荷（$-e$）を持つため、磁場中でローレンツ力の向きが逆になり、反対方向に曲がります。",
            "image_url": ""
        },

        // --- 核反応と核エネルギー ---

        {
            "id": 594,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "$\\alpha$崩壊に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "$^{226}_{88}\\text{Ra}$が$\\alpha$崩壊したとき生じる原子核はどれか。",
                    "options": [
                        "$^{222}_{86}\\text{Rn}$",
                        "$^{224}_{87}\\text{Fr}$",
                        "$^{222}_{88}\\text{Ra}$",
                        "$^{226}_{86}\\text{Rn}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\alpha$崩壊で$^4_2\\text{He}$が放出されるので、質量数$226 - 4 = 222$、原子番号$88 - 2 = 86$の$^{222}_{86}\\text{Rn}$（ラドン）になります。"
                },
                {
                    "question": "この$\\alpha$崩壊で放出される$\\alpha$粒子の運動エネルギーが$4.8\\,\\text{MeV}$のとき、この崩壊で失われた質量に最も近い値はどれか。ただし$1\\,\\text{u} = 931\\,\\text{MeV}/c^2$とし、娘核の反跳エネルギーは無視する。",
                    "options": [
                        "$0.0052\\,\\text{u}$",
                        "$0.052\\,\\text{u}$",
                        "$0.52\\,\\text{u}$",
                        "$0.0026\\,\\text{u}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\Delta m = \\dfrac{E}{c^2} = \\dfrac{4.8}{931} \\approx 0.0052\\,\\text{u}$です。"
                }
            ]
        },

        // --- 素粒子 ---

        {
            "id": 595,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "素粒子",
            "question": "粒子と反粒子が出会って消滅し、エネルギー（光子）に変わる現象を何というか。",
            "options": [
                "対生成",
                "対消滅",
                "核分裂",
                "光電効果"
            ],
            "answer": 1,
            "explanation": "粒子と反粒子が出会って消滅し、質量に相当するエネルギーが光子として放出される現象を対消滅といいます。",
            "image_url": ""
        },
        {
            "id": 596,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "素粒子",
            "question": "高エネルギーの光子から粒子と反粒子が生まれる現象を何というか。",
            "options": [
                "光電効果",
                "コンプトン効果",
                "対生成",
                "核融合"
            ],
            "answer": 2,
            "explanation": "高エネルギーの光子が原子核の近くで粒子と反粒子の対を生み出す現象を対生成といいます。",
            "image_url": ""
        },
        {
            "id": 597,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "素粒子",
            "question": "対生成と対消滅に関する以下の小問に順に答えよ。電子の質量$m_e = 9.1 \\times 10^{-31}\\,\\text{kg}$、$c = 3.0 \\times 10^8\\,\\text{m/s}$、$1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "電子と陽電子の対消滅で放出されるエネルギーの合計に最も近い値はどれか。",
                    "options": [
                        "$1.02\\,\\text{MeV}$",
                        "$0.51\\,\\text{MeV}$",
                        "$2.04\\,\\text{MeV}$",
                        "$0.26\\,\\text{MeV}$"
                    ],
                    "answer": 0,
                    "explanation": "$E = 2m_ec^2 = 2 \\times 9.1 \\times 10^{-31} \\times (3.0 \\times 10^8)^2 = 1.64 \\times 10^{-13}\\,\\text{J} \\approx 1.02\\,\\text{MeV}$です。"
                },
                {
                    "question": "対消滅で放出される$\\gamma$線光子は通常何個か。",
                    "options": [
                        "$1$個",
                        "$2$個",
                        "$3$個",
                        "$4$個"
                    ],
                    "answer": 1,
                    "explanation": "運動量保存則を満たすため、対消滅では通常$2$個の$\\gamma$線光子が反対方向に放出されます。"
                },
                {
                    "question": "電子・陽電子対を生成するのに必要な$\\gamma$線光子の最小エネルギーに最も近い値はどれか。",
                    "options": [
                        "$0.51\\,\\text{MeV}$",
                        "$1.02\\,\\text{MeV}$",
                        "$2.04\\,\\text{MeV}$",
                        "$0.26\\,\\text{MeV}$"
                    ],
                    "answer": 1,
                    "explanation": "電子と陽電子を対生成するには、少なくとも$2m_ec^2 \\approx 1.02\\,\\text{MeV}$のエネルギーが必要です。"
                }
            ]
        },

        // --- 追加の補強問題 ---

        {
            "id": 598,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光子のエネルギーと運動量に関する以下の小問に順に答えよ。$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$c = 3.0 \\times 10^8\\,\\text{m/s}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "波長$5.0 \\times 10^{-7}\\,\\text{m}$の可視光の光子$1$個のエネルギーに最も近い値はどれか。",
                    "options": [
                        "$4.0 \\times 10^{-19}\\,\\text{J}$",
                        "$4.0 \\times 10^{-17}\\,\\text{J}$",
                        "$1.3 \\times 10^{-19}\\,\\text{J}$",
                        "$1.3 \\times 10^{-27}\\,\\text{J}$"
                    ],
                    "answer": 0,
                    "explanation": "$E = \\dfrac{hc}{\\lambda} = \\dfrac{6.6 \\times 10^{-34} \\times 3.0 \\times 10^8}{5.0 \\times 10^{-7}} \\approx 4.0 \\times 10^{-19}\\,\\text{J}$です。"
                },
                {
                    "question": "この光子$1$個の運動量に最も近い値はどれか。",
                    "options": [
                        "$1.3 \\times 10^{-27}\\,\\text{kg}\\cdot\\text{m/s}$",
                        "$1.3 \\times 10^{-19}\\,\\text{kg}\\cdot\\text{m/s}$",
                        "$4.0 \\times 10^{-27}\\,\\text{kg}\\cdot\\text{m/s}$",
                        "$4.0 \\times 10^{-19}\\,\\text{kg}\\cdot\\text{m/s}$"
                    ],
                    "answer": 0,
                    "explanation": "$p = \\dfrac{h}{\\lambda} = \\dfrac{6.6 \\times 10^{-34}}{5.0 \\times 10^{-7}} = 1.32 \\times 10^{-27}\\,\\text{kg}\\cdot\\text{m/s}$です。"
                }
            ]
        },
        {
            "id": 599,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "原子核",
            "question": "同位体と原子核の安定性に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "$^{12}_6\\text{C}$と$^{14}_6\\text{C}$は互いに同位体である。両者の異なる点はどれか。",
                    "options": [
                        "陽子の数",
                        "中性子の数",
                        "電子の数",
                        "原子番号"
                    ],
                    "answer": 1,
                    "explanation": "同位体は原子番号（陽子数）が同じで質量数（中性子数）が異なります。$^{12}\\text{C}$は中性子$6$個、$^{14}\\text{C}$は中性子$8$個です。"
                },
                {
                    "question": "$^{14}\\text{C}$は放射性同位体で$\\beta$崩壊する。崩壊後に生じる原子核はどれか。",
                    "options": [
                        "$^{14}_7\\text{N}$",
                        "$^{10}_4\\text{Be}$",
                        "$^{14}_5\\text{B}$",
                        "$^{12}_6\\text{C}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\beta$崩壊では質量数は変わらず原子番号が$1$増えるので、$^{14}_6\\text{C} \\to ^{14}_7\\text{N} + e^- + \\bar{\\nu}_e$となります。"
                },
                {
                    "question": "$^{14}\\text{C}$の半減期は約$5730$年である。考古学ではこれを利用して年代測定を行う方法を何というか。",
                    "options": [
                        "質量分析法",
                        "放射性炭素年代測定法",
                        "スペクトル分析法",
                        "X線回折法"
                    ],
                    "answer": 1,
                    "explanation": "$^{14}\\text{C}$の半減期を利用して有機物の年代を推定する方法を放射性炭素年代測定法（$^{14}\\text{C}$年代測定法）といいます。"
                }
            ]
        },
        {
            "id": 600,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "核反応と核エネルギー",
            "question": "核融合反応に関する以下の小問に順に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "question": "核融合反応を起こすために非常に高い温度が必要な理由として正しいものはどれか。",
                    "options": [
                        "原子核を溶かすため",
                        "原子核どうしのクーロン反発力を超えて接近させるため",
                        "中性子を発生させるため",
                        "電子を原子核から引き離すため"
                    ],
                    "answer": 1,
                    "explanation": "原子核はともに正電荷を持つため、クーロン反発力がはたらきます。核力が届く距離まで接近するには非常に高い運動エネルギー（高温）が必要です。"
                },
                {
                    "question": "太陽内部で起きている主な核融合反応の最終生成物はどれか。",
                    "options": [
                        "$^{12}\\text{C}$（炭素）",
                        "$^{4}\\text{He}$（ヘリウム）",
                        "$^{56}\\text{Fe}$（鉄）",
                        "$^{16}\\text{O}$（酸素）"
                    ],
                    "answer": 1,
                    "explanation": "太陽の中心部では、$4$個の水素原子核（陽子）が核融合して$1$個のヘリウム原子核$^4\\text{He}$になる反応が起きています。"
                },
                {
                    "question": "核融合を地上で実現するための装置として研究されているものはどれか。",
                    "options": [
                        "サイクロトロン",
                        "トカマク型装置",
                        "原子炉",
                        "ガイガーカウンター"
                    ],
                    "answer": 1,
                    "explanation": "トカマク型装置は磁場を用いてプラズマを閉じ込め、核融合反応を実現するための装置です。ITERなどで研究が進められています。"
                }
            ]
        },

        // ============================================================
        // 追加30問（ID 601–630）  A=10, B=10, C=10
        // ============================================================

        // ─── A問題（基礎） ───

        {
            "id": 601,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "電子",
            "question": "真空中で電子を電位差$V$で加速したとき、電子が得る運動エネルギーはどれか。ただし電気素量を$e$とする。",
            "options": [
                "$eV$",
                "$\\dfrac{eV}{2}$",
                "$2eV$",
                "$\\dfrac{e}{V}$"
            ],
            "answer": 0,
            "explanation": "電子が電位差$V$で加速されると、静電気力がした仕事$eV$がそのまま運動エネルギーになります。",
            "image_url": ""
        },
        {
            "id": 602,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "光の粒子性",
            "question": "光電効果において、照射する光の振動数が限界振動数より小さければ、光の強度をどれだけ大きくしても光電子は放出されない。",
            "options": ["○", "×"],
            "answer": 0,
            "explanation": "光電効果はフォトン1個のエネルギー$h\\nu$が仕事関数$W$以上であることが条件です。振動数が限界振動数$\\nu_0$より小さい場合、光の強度を上げても光電子は放出されません。",
            "image_url": ""
        },
        {
            "id": 603,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "X線",
            "question": "X線管において、X線の最短波長$\\lambda_{\\min}$を与える式はどれか。ただし加速電圧を$V$、プランク定数を$h$、光速を$c$、電気素量を$e$とする。",
            "options": [
                "$\\lambda_{\\min} = \\dfrac{hc}{eV}$",
                "$\\lambda_{\\min} = \\dfrac{eV}{hc}$",
                "$\\lambda_{\\min} = \\dfrac{h}{eV}$",
                "$\\lambda_{\\min} = \\dfrac{hV}{ec}$"
            ],
            "answer": 0,
            "explanation": "電子の運動エネルギー$eV$がすべて1個のX線フォトンのエネルギーに変換されたとき最短波長になります。$eV = \\dfrac{hc}{\\lambda_{\\min}}$より$\\lambda_{\\min} = \\dfrac{hc}{eV}$です。",
            "image_url": ""
        },
        {
            "id": 604,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "質量$m$、速さ$v$で運動する粒子のド・ブロイ波長$\\lambda$はどれか。ただしプランク定数を$h$とする。",
            "options": [
                "$\\lambda = \\dfrac{h}{mv}$",
                "$\\lambda = \\dfrac{mv}{h}$",
                "$\\lambda = hmv$",
                "$\\lambda = \\dfrac{h}{m^2 v}$"
            ],
            "answer": 0,
            "explanation": "ド・ブロイの関係式より、物質波の波長は$\\lambda = \\dfrac{h}{mv} = \\dfrac{h}{p}$（$p$は運動量）です。",
            "image_url": ""
        },
        {
            "id": 605,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "原子の構造",
            "question": "ボーアの水素原子模型では、電子の軌道半径は連続的な値をとることができる。",
            "options": ["○", "×"],
            "answer": 1,
            "explanation": "ボーアの量子条件により、電子の軌道半径はとびとびの値（$r_n = n^2 r_1$、$n = 1, 2, 3, \\ldots$）しかとることができません。",
            "image_url": ""
        },
        {
            "id": 606,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "原子核",
            "question": "原子番号$Z$、質量数$A$の原子核に含まれる中性子の数はどれか。",
            "options": [
                "$A - Z$",
                "$A + Z$",
                "$Z$",
                "$A$"
            ],
            "answer": 0,
            "explanation": "質量数$A$は陽子数$Z$と中性子数$N$の和なので、$N = A - Z$です。",
            "image_url": ""
        },
        {
            "id": 607,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "放射線",
            "question": "$\\alpha$線の正体として正しいものはどれか。",
            "options": [
                "ヘリウム原子核$^{4}_{2}\\text{He}$の流れ",
                "高速の電子の流れ",
                "電磁波",
                "中性子の流れ"
            ],
            "answer": 0,
            "explanation": "$\\alpha$線はヘリウム原子核$^{4}_{2}\\text{He}$（陽子2個＋中性子2個）の流れです。$\\beta$線は高速電子、$\\gamma$線は電磁波です。",
            "image_url": ""
        },
        {
            "id": 608,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "核エネルギー",
            "question": "質量欠損とは、原子核の質量がそれを構成する核子の質量の総和よりも小さいことをいう。",
            "options": ["○", "×"],
            "answer": 0,
            "explanation": "原子核を構成する核子をバラバラにするには結合エネルギーが必要です。$E = mc^2$の関係により、結合エネルギー分だけ原子核の質量は軽くなっており、これを質量欠損といいます。",
            "image_url": ""
        },
        {
            "id": 609,
            "category": "p5_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "波長$\\lambda$の光子1個がもつエネルギーはどれか。ただしプランク定数を$h$、光速を$c$とする。",
            "options": [
                "$\\dfrac{hc}{\\lambda}$",
                "$\\dfrac{h\\lambda}{c}$",
                "$h\\lambda c$",
                "$\\dfrac{c}{h\\lambda}$"
            ],
            "answer": 0,
            "explanation": "光子のエネルギーは$E = h\\nu = \\dfrac{hc}{\\lambda}$です。",
            "image_url": ""
        },
        {
            "id": 610,
            "category": "p5_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "放射線",
            "question": "放射性物質の半減期の説明として正しいものはどれか。",
            "options": [
                "放射性原子核の数が半分になるまでの時間",
                "放射線の強さが半分になるまでの時間",
                "放射性物質の質量が半分になるまでの時間",
                "放射線のエネルギーが半分になるまでの時間"
            ],
            "answer": 0,
            "explanation": "半減期$T$は、放射性原子核の数が最初の半分に減少するまでの時間です。$N = N_0 \\left(\\dfrac{1}{2}\\right)^{t/T}$で表されます。",
            "image_url": ""
        },

        // ─── B問題（標準） ───

        {
            "id": 611,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "電子",
            "question": "ミリカンの実験で帯電した油滴が空中に静止した。油滴の質量を$m$、重力加速度を$g$、極板間の電場を$E$とすると、油滴の電荷$q$はどれか。",
            "options": [
                "$q = \\dfrac{mg}{E}$",
                "$q = mgE$",
                "$q = \\dfrac{E}{mg}$",
                "$q = \\dfrac{m}{gE}$"
            ],
            "answer": 0,
            "explanation": "油滴が静止しているとき、重力$mg$と静電気力$qE$がつり合うので$qE = mg$、よって$q = \\dfrac{mg}{E}$です。",
            "image_url": ""
        },
        {
            "id": 612,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "仕事関数$W = 4.0\\,\\text{eV}$の金属に波長$200\\,\\text{nm}$の紫外線を照射した。放出される光電子の最大運動エネルギーに最も近い値はどれか。ただし$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$c = 3.0 \\times 10^8\\,\\text{m/s}$、$1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$とする。",
            "options": [
                "$2.2\\,\\text{eV}$",
                "$1.0\\,\\text{eV}$",
                "$6.2\\,\\text{eV}$",
                "$4.0\\,\\text{eV}$"
            ],
            "answer": 0,
            "explanation": "光子のエネルギーは$E = \\dfrac{hc}{\\lambda} = \\dfrac{6.6 \\times 10^{-34} \\times 3.0 \\times 10^8}{200 \\times 10^{-9}} = 9.9 \\times 10^{-19}\\,\\text{J} \\approx 6.2\\,\\text{eV}$です。最大運動エネルギーは$K_{\\max} = E - W = 6.2 - 4.0 = 2.2\\,\\text{eV}$です。",
            "image_url": ""
        },
        {
            "id": 613,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "X線",
            "question": "加速電圧$50\\,\\text{kV}$のX線管から発生するX線の最短波長に最も近い値はどれか。ただし$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$c = 3.0 \\times 10^8\\,\\text{m/s}$、$e = 1.6 \\times 10^{-19}\\,\\text{C}$とする。",
            "options": [
                "$2.5 \\times 10^{-11}\\,\\text{m}$",
                "$2.5 \\times 10^{-8}\\,\\text{m}$",
                "$5.0 \\times 10^{-11}\\,\\text{m}$",
                "$1.2 \\times 10^{-10}\\,\\text{m}$"
            ],
            "answer": 0,
            "explanation": "$\\lambda_{\\min} = \\dfrac{hc}{eV} = \\dfrac{6.6 \\times 10^{-34} \\times 3.0 \\times 10^8}{1.6 \\times 10^{-19} \\times 50 \\times 10^3} = \\dfrac{1.98 \\times 10^{-25}}{8.0 \\times 10^{-15}} \\approx 2.5 \\times 10^{-11}\\,\\text{m}$です。",
            "image_url": ""
        },
        {
            "id": 614,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "電位差$V$で加速された電子のド・ブロイ波長$\\lambda$を表す式はどれか。ただし電子の質量を$m$、電気素量を$e$、プランク定数を$h$とする。",
            "options": [
                "$\\lambda = \\dfrac{h}{\\sqrt{2meV}}$",
                "$\\lambda = \\dfrac{h}{2meV}$",
                "$\\lambda = \\dfrac{\\sqrt{2meV}}{h}$",
                "$\\lambda = \\dfrac{h}{meV}$"
            ],
            "answer": 0,
            "explanation": "電位差$V$で加速された電子の運動エネルギーは$\\dfrac{1}{2}mv^2 = eV$なので$mv = \\sqrt{2meV}$です。よってド・ブロイ波長は$\\lambda = \\dfrac{h}{mv} = \\dfrac{h}{\\sqrt{2meV}}$です。",
            "image_url": ""
        },
        {
            "id": 615,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子の構造",
            "question": "水素原子の量子数$n$の軌道にある電子のエネルギーが$E_n = -\\dfrac{13.6}{n^2}\\,\\text{eV}$で与えられるとき、$n=2$から$n=1$に遷移するときに放出される光子のエネルギーはどれか。",
            "options": [
                "$10.2\\,\\text{eV}$",
                "$3.4\\,\\text{eV}$",
                "$13.6\\,\\text{eV}$",
                "$1.5\\,\\text{eV}$"
            ],
            "answer": 0,
            "explanation": "$E_2 = -\\dfrac{13.6}{4} = -3.4\\,\\text{eV}$、$E_1 = -13.6\\,\\text{eV}$なので、放出される光子のエネルギーは$E_2 - E_1 = -3.4 - (-13.6) = 10.2\\,\\text{eV}$です。",
            "image_url": ""
        },
        {
            "id": 616,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "原子核",
            "question": "$^{238}_{92}\\text{U}$が$\\alpha$崩壊を1回起こしたとき、生じる原子核はどれか。",
            "options": [
                "$^{234}_{90}\\text{Th}$",
                "$^{234}_{92}\\text{U}$",
                "$^{236}_{90}\\text{Th}$",
                "$^{238}_{90}\\text{Th}$"
            ],
            "answer": 0,
            "explanation": "$\\alpha$崩壊では$^{4}_{2}\\text{He}$が放出されるので、質量数は$4$減り、原子番号は$2$減ります。$^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + ^{4}_{2}\\text{He}$です。",
            "image_url": ""
        },
        {
            "id": 617,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "放射線",
            "question": "ある放射性同位体の半減期が$8$日である。この同位体の原子核の数が最初の$\\dfrac{1}{8}$になるのは何日後か。",
            "options": [
                "$24$日後",
                "$16$日後",
                "$32$日後",
                "$64$日後"
            ],
            "answer": 0,
            "explanation": "$\\dfrac{1}{8} = \\left(\\dfrac{1}{2}\\right)^3$なので、半減期$3$回分の時間が必要です。$8 \\times 3 = 24$日後です。",
            "image_url": ""
        },
        {
            "id": 618,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "核エネルギー",
            "question": "$1\\,\\text{u}$（原子質量単位）の質量欠損に相当するエネルギーに最も近い値はどれか。",
            "options": [
                "$931.5\\,\\text{MeV}$",
                "$93.15\\,\\text{MeV}$",
                "$9.315\\,\\text{MeV}$",
                "$9315\\,\\text{MeV}$"
            ],
            "answer": 0,
            "explanation": "$E = mc^2$より、$1\\,\\text{u} = 1.66 \\times 10^{-27}\\,\\text{kg}$に相当するエネルギーは約$931.5\\,\\text{MeV}$です。",
            "image_url": ""
        },
        {
            "id": 619,
            "category": "p5_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "コンプトン効果において、散乱X線の波長が入射X線の波長より長くなる理由として正しいものはどれか。",
            "options": [
                "X線光子が電子にエネルギーの一部を与えるため",
                "X線が物質に吸収されるため",
                "X線の速さが遅くなるため",
                "X線の振動数が増加するため"
            ],
            "answer": 0,
            "explanation": "コンプトン効果では、X線光子が電子と衝突してエネルギーの一部を電子に渡します。光子のエネルギーが減少するため、$E = \\dfrac{hc}{\\lambda}$より波長が長くなります。",
            "image_url": ""
        },
        {
            "id": 620,
            "category": "p5_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "素粒子",
            "question": "陽子を構成するクォークの組み合わせとして正しいものはどれか。",
            "options": [
                "アップクォーク2個とダウンクォーク1個（$uud$）",
                "アップクォーク1個とダウンクォーク2個（$udd$）",
                "アップクォーク3個（$uuu$）",
                "ダウンクォーク3個（$ddd$）"
            ],
            "answer": 0,
            "explanation": "陽子は$uud$（アップクォーク2個＋ダウンクォーク1個）で構成されます。中性子は$udd$（アップクォーク1個＋ダウンクォーク2個）です。",
            "image_url": ""
        },

        // ─── C問題（思考力・小問形式） ───

        {
            "id": 621,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "光電効果の実験に関する以下の小問に順に答えよ。仕事関数$W$の金属に振動数$\\nu$の光を照射する。$h$はプランク定数、$e$は電気素量とする。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "光電子の最大運動エネルギー$K_{\\max}$を表す式はどれか。",
                    "options": [
                        "$K_{\\max} = h\\nu - W$",
                        "$K_{\\max} = W - h\\nu$",
                        "$K_{\\max} = h\\nu + W$",
                        "$K_{\\max} = \\dfrac{W}{h\\nu}$"
                    ],
                    "answer": 0,
                    "explanation": "アインシュタインの光電効果の式$K_{\\max} = h\\nu - W$です。"
                },
                {
                    "type": "choice",
                    "question": "光電子の放出を止めるために必要な阻止電圧$V_0$を表す式はどれか。",
                    "options": [
                        "$V_0 = \\dfrac{h\\nu - W}{e}$",
                        "$V_0 = \\dfrac{W}{e}$",
                        "$V_0 = \\dfrac{h\\nu}{e} + \\dfrac{W}{e}$",
                        "$V_0 = \\dfrac{e}{h\\nu - W}$"
                    ],
                    "answer": 0,
                    "explanation": "$eV_0 = K_{\\max} = h\\nu - W$より、$V_0 = \\dfrac{h\\nu - W}{e}$です。"
                },
                {
                    "type": "choice",
                    "question": "照射する光の振動数$\\nu$を横軸、阻止電圧$V_0$を縦軸にとったグラフの傾きはどれか。",
                    "options": [
                        "$\\dfrac{h}{e}$",
                        "$\\dfrac{e}{h}$",
                        "$h$",
                        "$\\dfrac{W}{e}$"
                    ],
                    "answer": 0,
                    "explanation": "$V_0 = \\dfrac{h}{e}\\nu - \\dfrac{W}{e}$なので、$V_0$-$\\nu$グラフの傾きは$\\dfrac{h}{e}$です。"
                }
            ]
        },
        {
            "id": 622,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "X線",
            "question": "X線の発生と性質に関する以下の小問に順に答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "X線管の加速電圧を上げたとき、連続X線のスペクトルに起こる変化として正しいものはどれか。",
                    "options": [
                        "最短波長が短くなり、強度の最大値も大きくなる",
                        "最短波長が長くなり、強度の最大値は変わらない",
                        "最短波長は変わらず、強度の最大値だけ大きくなる",
                        "スペクトル全体が長波長側にずれる"
                    ],
                    "answer": 0,
                    "explanation": "加速電圧を上げると電子のエネルギーが増加するので、最短波長$\\lambda_{\\min} = \\dfrac{hc}{eV}$は短くなり、全体の強度も大きくなります。"
                },
                {
                    "type": "choice",
                    "question": "特性X線が発生する仕組みとして正しいものはどれか。",
                    "options": [
                        "高速電子が原子の内殻電子をはじき出し、外殻電子が遷移する際にX線を放出する",
                        "高速電子が原子核に衝突して跳ね返される際にX線を放出する",
                        "高速電子が減速される際に連続的にX線を放出する",
                        "原子核が崩壊する際にX線を放出する"
                    ],
                    "answer": 0,
                    "explanation": "特性X線は、高速電子が原子の内殻電子をはじき出した後、外殻電子がその空席に遷移するときにエネルギー差に対応するX線が放出されることで発生します。"
                },
                {
                    "type": "choice",
                    "question": "X線の結晶による回折において、ブラッグの条件式はどれか。ただし結晶の格子面間隔を$d$、X線の波長を$\\lambda$、入射角を$\\theta$とする。",
                    "options": [
                        "$2d \\sin\\theta = n\\lambda$（$n$は正の整数）",
                        "$d \\sin\\theta = n\\lambda$（$n$は正の整数）",
                        "$2d \\cos\\theta = n\\lambda$（$n$は正の整数）",
                        "$d \\cos\\theta = n\\lambda$（$n$は正の整数）"
                    ],
                    "answer": 0,
                    "explanation": "ブラッグの条件は$2d \\sin\\theta = n\\lambda$です。隣り合う格子面で反射されたX線の経路差が波長の整数倍のとき強め合います。"
                }
            ]
        },
        {
            "id": 623,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "粒子の波動性",
            "question": "電子線の回折実験に関する以下の小問に順に答えよ。電子の質量を$m = 9.1 \\times 10^{-31}\\,\\text{kg}$、$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$e = 1.6 \\times 10^{-19}\\,\\text{C}$とする。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "電位差$150\\,\\text{V}$で加速された電子の速さに最も近い値はどれか。",
                    "options": [
                        "$7.3 \\times 10^6\\,\\text{m/s}$",
                        "$7.3 \\times 10^5\\,\\text{m/s}$",
                        "$5.1 \\times 10^6\\,\\text{m/s}$",
                        "$1.0 \\times 10^7\\,\\text{m/s}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\dfrac{1}{2}mv^2 = eV$より$v = \\sqrt{\\dfrac{2eV}{m}} = \\sqrt{\\dfrac{2 \\times 1.6 \\times 10^{-19} \\times 150}{9.1 \\times 10^{-31}}} \\approx 7.3 \\times 10^6\\,\\text{m/s}$です。"
                },
                {
                    "type": "choice",
                    "question": "この電子のド・ブロイ波長に最も近い値はどれか。",
                    "options": [
                        "$1.0 \\times 10^{-10}\\,\\text{m}$",
                        "$1.0 \\times 10^{-8}\\,\\text{m}$",
                        "$1.0 \\times 10^{-12}\\,\\text{m}$",
                        "$1.0 \\times 10^{-6}\\,\\text{m}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\lambda = \\dfrac{h}{mv} = \\dfrac{6.6 \\times 10^{-34}}{9.1 \\times 10^{-31} \\times 7.3 \\times 10^6} \\approx 1.0 \\times 10^{-10}\\,\\text{m}$です。これは原子間距離と同程度であり、結晶による回折が観測できます。"
                },
                {
                    "type": "choice",
                    "question": "電子線の回折実験で確認された物理的事実として最も適切なものはどれか。",
                    "options": [
                        "電子が波動性をもつこと",
                        "電子が粒子性をもつこと",
                        "光が粒子性をもつこと",
                        "X線が波動性をもつこと"
                    ],
                    "answer": 0,
                    "explanation": "デイヴィソンとジャーマーの電子線回折実験は、電子が波動性をもつこと（ド・ブロイの仮説）を実験的に確認したものです。"
                }
            ]
        },
        {
            "id": 624,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "原子の構造",
            "question": "水素原子のスペクトルに関する以下の小問に順に答えよ。$E_n = -\\dfrac{13.6}{n^2}\\,\\text{eV}$、$h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$、$c = 3.0 \\times 10^8\\,\\text{m/s}$、$1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$とする。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "$n=3$から$n=2$への遷移で放出される光子のエネルギーはどれか。",
                    "options": [
                        "$1.89\\,\\text{eV}$",
                        "$3.4\\,\\text{eV}$",
                        "$10.2\\,\\text{eV}$",
                        "$12.1\\,\\text{eV}$"
                    ],
                    "answer": 0,
                    "explanation": "$E_3 = -\\dfrac{13.6}{9} \\approx -1.51\\,\\text{eV}$、$E_2 = -\\dfrac{13.6}{4} = -3.40\\,\\text{eV}$なので、$\\Delta E = -1.51 - (-3.40) = 1.89\\,\\text{eV}$です。"
                },
                {
                    "type": "choice",
                    "question": "この遷移で放出される光の波長に最も近い値はどれか。",
                    "options": [
                        "$656\\,\\text{nm}$",
                        "$486\\,\\text{nm}$",
                        "$434\\,\\text{nm}$",
                        "$122\\,\\text{nm}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\lambda = \\dfrac{hc}{\\Delta E} = \\dfrac{6.6 \\times 10^{-34} \\times 3.0 \\times 10^8}{1.89 \\times 1.6 \\times 10^{-19}} \\approx 6.5 \\times 10^{-7}\\,\\text{m} = 656\\,\\text{nm}$です。これはバルマー系列のH$\\alpha$線（赤色）です。"
                },
                {
                    "type": "choice",
                    "question": "$n=2$に遷移する系列（バルマー系列）の短波長側の限界波長（系列限界）に最も近い値はどれか。",
                    "options": [
                        "$365\\,\\text{nm}$",
                        "$91\\,\\text{nm}$",
                        "$820\\,\\text{nm}$",
                        "$122\\,\\text{nm}$"
                    ],
                    "answer": 0,
                    "explanation": "系列限界は$n = \\infty$から$n = 2$への遷移に対応し、$\\Delta E = 0 - (-3.40) = 3.40\\,\\text{eV}$です。$\\lambda = \\dfrac{hc}{3.40 \\times 1.6 \\times 10^{-19}} \\approx 3.6 \\times 10^{-7}\\,\\text{m} = 365\\,\\text{nm}$です。"
                }
            ]
        },
        {
            "id": 625,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "原子核",
            "question": "原子核の崩壊系列に関する以下の小問に順に答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "$^{232}_{90}\\text{Th}$が$\\alpha$崩壊を$6$回、$\\beta$崩壊を$4$回起こして安定な鉛の同位体になった。生じた鉛の同位体はどれか。",
                    "options": [
                        "$^{208}_{82}\\text{Pb}$",
                        "$^{206}_{82}\\text{Pb}$",
                        "$^{207}_{82}\\text{Pb}$",
                        "$^{210}_{82}\\text{Pb}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\alpha$崩壊$6$回で質量数は$6 \\times 4 = 24$減り、原子番号は$6 \\times 2 = 12$減ります。$\\beta$崩壊$4$回で原子番号は$4$増えます。質量数$232 - 24 = 208$、原子番号$90 - 12 + 4 = 82$なので$^{208}_{82}\\text{Pb}$です。"
                },
                {
                    "type": "choice",
                    "question": "$\\beta$崩壊で原子番号が1増える理由として正しいものはどれか。",
                    "options": [
                        "原子核内の中性子が陽子に変わるため",
                        "原子核が電子を吸収するため",
                        "原子核に陽子が追加されるため",
                        "原子核から陽子が放出されるため"
                    ],
                    "answer": 0,
                    "explanation": "$\\beta$崩壊では原子核内の中性子$n$が陽子$p$と電子$e^-$と反ニュートリノ$\\bar{\\nu}_e$に変わります。$n \\to p + e^- + \\bar{\\nu}_e$"
                },
                {
                    "type": "ox",
                    "question": "$\\gamma$崩壊では原子番号も質量数も変化しない。",
                    "options": ["○", "×"],
                    "answer": 0,
                    "explanation": "$\\gamma$線は電磁波であり、原子核から$\\gamma$線が放出されてもエネルギー状態が変わるだけで、陽子数・中性子数は変化しません。よって原子番号も質量数も変わりません。"
                }
            ]
        },
        {
            "id": 626,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "放射線",
            "question": "放射線の性質と遮蔽に関する以下の小問に順に答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "$\\alpha$線、$\\beta$線、$\\gamma$線を電場中に入れたとき、電場の方向に曲がるものはどれか。",
                    "options": [
                        "$\\alpha$線",
                        "$\\beta$線",
                        "$\\gamma$線",
                        "$\\alpha$線と$\\beta$線の両方"
                    ],
                    "answer": 0,
                    "explanation": "$\\alpha$線は正電荷をもつので電場の方向に曲がります。$\\beta$線は負電荷なので電場と逆方向に曲がり、$\\gamma$線は電荷をもたないので曲がりません。"
                },
                {
                    "type": "choice",
                    "question": "$\\alpha$線、$\\beta$線、$\\gamma$線の透過力を弱い順に並べたものはどれか。",
                    "options": [
                        "$\\alpha$線 ＜ $\\beta$線 ＜ $\\gamma$線",
                        "$\\gamma$線 ＜ $\\beta$線 ＜ $\\alpha$線",
                        "$\\beta$線 ＜ $\\alpha$線 ＜ $\\gamma$線",
                        "$\\alpha$線 ＜ $\\gamma$線 ＜ $\\beta$線"
                    ],
                    "answer": 0,
                    "explanation": "透過力は$\\alpha$線が最も弱く紙1枚で止まり、$\\beta$線はアルミニウム薄板で止まり、$\\gamma$線は最も強く鉛や厚いコンクリートが必要です。"
                },
                {
                    "type": "choice",
                    "question": "物質中での電離作用が最も強いのはどれか。",
                    "options": [
                        "$\\alpha$線",
                        "$\\beta$線",
                        "$\\gamma$線",
                        "すべて同じ"
                    ],
                    "answer": 0,
                    "explanation": "$\\alpha$線は電荷が大きく質量も大きいため、物質中の原子との相互作用が強く、電離作用が最も大きいです。透過力が弱いのはそれだけ多くのエネルギーを物質に与えるからです。"
                }
            ]
        },
        {
            "id": 627,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "核エネルギー",
            "question": "核分裂における質量欠損とエネルギーに関する以下の小問に順に答えよ。$1\\,\\text{u} = 931.5\\,\\text{MeV}/c^2$とする。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "核分裂反応$^{235}_{92}\\text{U} + ^{1}_{0}\\text{n} \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3\\,^{1}_{0}\\text{n}$において、両辺の質量数の和が等しいことを確認せよ。左辺の質量数の合計はいくつか。",
                    "options": [
                        "$236$",
                        "$235$",
                        "$237$",
                        "$238$"
                    ],
                    "answer": 0,
                    "explanation": "左辺は$235 + 1 = 236$です。右辺も$141 + 92 + 3 \\times 1 = 236$で一致します。"
                },
                {
                    "type": "choice",
                    "question": "この反応で質量欠損が$0.215\\,\\text{u}$であるとき、放出されるエネルギーに最も近い値はどれか。",
                    "options": [
                        "$200\\,\\text{MeV}$",
                        "$20\\,\\text{MeV}$",
                        "$2000\\,\\text{MeV}$",
                        "$2\\,\\text{MeV}$"
                    ],
                    "answer": 0,
                    "explanation": "$E = 0.215 \\times 931.5 \\approx 200\\,\\text{MeV}$です。ウラン$235$の核分裂1回あたり約$200\\,\\text{MeV}$のエネルギーが放出されます。"
                },
                {
                    "type": "choice",
                    "question": "核分裂で放出された中性子が次の核分裂を引き起こす現象を何というか。",
                    "options": [
                        "連鎖反応",
                        "核融合",
                        "放射性崩壊",
                        "対生成"
                    ],
                    "answer": 0,
                    "explanation": "核分裂で生じた中性子が他のウラン原子核に吸収されてさらに核分裂を起こす反応が続くことを連鎖反応といいます。"
                }
            ]
        },
        {
            "id": 628,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "電子",
            "question": "電子の比電荷の測定に関する以下の小問に順に答えよ。電子の電荷を$-e$、質量を$m$とする。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "磁束密度$B$の一様な磁場中を速さ$v$で磁場に垂直に入射した電子が描く円運動の半径$r$はどれか。",
                    "options": [
                        "$r = \\dfrac{mv}{eB}$",
                        "$r = \\dfrac{eB}{mv}$",
                        "$r = \\dfrac{eBv}{m}$",
                        "$r = \\dfrac{m}{eBv}$"
                    ],
                    "answer": 0,
                    "explanation": "ローレンツ力$evB$が向心力$\\dfrac{mv^2}{r}$に等しいので、$evB = \\dfrac{mv^2}{r}$より$r = \\dfrac{mv}{eB}$です。"
                },
                {
                    "type": "choice",
                    "question": "電子の比電荷$\\dfrac{e}{m}$を$v$、$B$、$r$で表す式はどれか。",
                    "options": [
                        "$\\dfrac{e}{m} = \\dfrac{v}{rB}$",
                        "$\\dfrac{e}{m} = \\dfrac{rB}{v}$",
                        "$\\dfrac{e}{m} = vBr$",
                        "$\\dfrac{e}{m} = \\dfrac{v^2}{rB}$"
                    ],
                    "answer": 0,
                    "explanation": "$r = \\dfrac{mv}{eB}$より$\\dfrac{e}{m} = \\dfrac{v}{rB}$です。"
                },
                {
                    "type": "choice",
                    "question": "トムソンの実験では、電場と磁場を直交させて電子を直進させることで電子の速さを求めた。電場$E$、磁束密度$B$のとき、電子の速さ$v$はどれか。",
                    "options": [
                        "$v = \\dfrac{E}{B}$",
                        "$v = EB$",
                        "$v = \\dfrac{B}{E}$",
                        "$v = \\dfrac{E}{B^2}$"
                    ],
                    "answer": 0,
                    "explanation": "電場による力$eE$と磁場による力$evB$がつり合うとき電子は直進します。$eE = evB$より$v = \\dfrac{E}{B}$です。"
                }
            ]
        },
        {
            "id": 629,
            "category": "p5_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "素粒子",
            "question": "素粒子と基本的な力に関する以下の小問に順に答えよ。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "自然界の4つの基本的な力（基本相互作用）に含まれないものはどれか。",
                    "options": [
                        "弾性力",
                        "重力",
                        "電磁気力",
                        "強い力"
                    ],
                    "answer": 0,
                    "explanation": "自然界の4つの基本相互作用は、重力、電磁気力、強い力（核力）、弱い力です。弾性力は電磁気力に由来するもので基本的な力ではありません。"
                },
                {
                    "type": "choice",
                    "question": "中間子の存在を理論的に予言した科学者は誰か。",
                    "options": [
                        "湯川秀樹",
                        "ラザフォード",
                        "ボーア",
                        "ド・ブロイ"
                    ],
                    "answer": 0,
                    "explanation": "湯川秀樹は1935年に核力を媒介する中間子の存在を理論的に予言し、1949年にノーベル物理学賞を受賞しました。"
                },
                {
                    "type": "choice",
                    "question": "レプトン（軽粒子）に分類されるものはどれか。",
                    "options": [
                        "電子",
                        "陽子",
                        "中性子",
                        "中間子"
                    ],
                    "answer": 0,
                    "explanation": "電子はレプトン（軽粒子）に分類されます。陽子と中性子はバリオン（クォーク3個から構成）、中間子はメソン（クォークと反クォークの対から構成）です。"
                }
            ]
        },
        {
            "id": 630,
            "category": "p5_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "光の粒子性",
            "question": "コンプトン効果に関する以下の小問に順に答えよ。光速を$c$、プランク定数を$h$、電子の静止質量を$m_e$とする。",
            "options": [
                "（小問形式）",
                "（小問形式）",
                "（小問形式）",
                "（小問形式）"
            ],
            "answer": 0,
            "explanation": "",
            "image_url": "",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "コンプトン効果で散乱角$\\theta$のときの波長変化$\\Delta\\lambda$を表す式はどれか。",
                    "options": [
                        "$\\Delta\\lambda = \\dfrac{h}{m_e c}(1 - \\cos\\theta)$",
                        "$\\Delta\\lambda = \\dfrac{m_e c}{h}(1 - \\cos\\theta)$",
                        "$\\Delta\\lambda = \\dfrac{h}{m_e c}\\cos\\theta$",
                        "$\\Delta\\lambda = \\dfrac{h}{m_e c}(1 + \\cos\\theta)$"
                    ],
                    "answer": 0,
                    "explanation": "コンプトン散乱の公式は$\\Delta\\lambda = \\lambda' - \\lambda = \\dfrac{h}{m_e c}(1 - \\cos\\theta)$です。$\\dfrac{h}{m_e c}$をコンプトン波長といいます。"
                },
                {
                    "type": "choice",
                    "question": "波長変化$\\Delta\\lambda$が最大になるのは散乱角$\\theta$がいくつのときか。",
                    "options": [
                        "$180°$",
                        "$90°$",
                        "$0°$",
                        "$45°$"
                    ],
                    "answer": 0,
                    "explanation": "$\\Delta\\lambda = \\dfrac{h}{m_e c}(1 - \\cos\\theta)$において、$\\cos\\theta$が最小（$\\cos 180° = -1$）のとき$\\Delta\\lambda$は最大値$\\dfrac{2h}{m_e c}$になります。"
                },
                {
                    "type": "choice",
                    "question": "コンプトン効果が光の粒子性を支持する理由として最も適切なものはどれか。",
                    "options": [
                        "光子と電子の衝突を運動量とエネルギーの保存則で説明できるため",
                        "散乱光の強度が入射光の強度に比例するため",
                        "波長変化が入射光の波長に依存するため",
                        "散乱光が干渉縞をつくるため"
                    ],
                    "answer": 0,
                    "explanation": "コンプトン効果では、X線光子と電子の衝突を粒子どうしの衝突として扱い、エネルギー保存則と運動量保存則で波長変化を正確に説明できます。これは光が粒子としてふるまう証拠です。"
                }
            ]
        }
    ]
);
