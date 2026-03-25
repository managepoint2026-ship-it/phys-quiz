window.loadQuizData("part4",
    [
        // ============================================================
        // 第4編 電気と磁気（50問）
        // 第1章 電場: p4_c1（静電気力 / 電場 / 電位 / 物質と電場 / コンデンサー）
        // 第2章 電流: p4_c2（オームの法則 / 直流回路 / 半導体）
        // 第3章 電流と磁場: p4_c3（磁場 / 電流のつくる磁場 / 電流が磁場から受ける力 / ローレンツ力）
        // 第4章 電磁誘導と電磁波: p4_c4（電磁誘導の法則 / 自己誘導と相互誘導 / 交流の発生 / 交流回路 / 電磁波）
        // ============================================================

        // ─── 第1章 電場 ───

        {
            "id": 401,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "静電気力",
            "question": "同じ符号の電荷どうしにはたらく力はどれか。",
            "options": [
                "引力",
                "斥力（反発力）",
                "力ははたらかない",
                "引力と斥力が交互にはたらく"
            ],
            "answer": 1,
            "explanation": "同じ符号の電荷どうしには斥力（反発力）がはたらきます。異符号の場合は引力です。",
            "image_url": ""
        },
        {
            "id": 402,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "静電気力",
            "question": "クーロンの法則において、2つの点電荷間にはたらく力$F$は距離$r$に対してどのような関係か。",
            "options": [
                "$r$に比例",
                "$r^2$に比例",
                "$r$に反比例",
                "$r^2$に反比例"
            ],
            "answer": 3,
            "explanation": "クーロンの法則$F = k\\dfrac{q_1 q_2}{r^2}$より、力は距離の2乗に反比例します。",
            "image_url": ""
        },
        {
            "id": 403,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "電場",
            "question": "正の点電荷$Q$から距離$r$の位置の電場の大きさ$E$はどれか（$k$はクーロン定数）。",
            "options": [
                "$E = kQr$",
                "$E = k\\dfrac{Q}{r}$",
                "$E = k\\dfrac{Q}{r^2}$",
                "$E = k\\dfrac{Q^2}{r^2}$"
            ],
            "answer": 2,
            "explanation": "点電荷が作る電場の大きさは$E = k\\dfrac{Q}{r^2}$です。距離の2乗に反比例します。",
            "image_url": ""
        },
        {
            "id": 404,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "電位",
            "question": "電位の単位はどれか。",
            "options": [
                "$\\text{A}$（アンペア）",
                "$\\text{V}$（ボルト）",
                "$\\text{F}$（ファラド）",
                "$\\text{C}$（クーロン）"
            ],
            "answer": 1,
            "explanation": "電位の単位はボルト$[\\text{V}]$です。$1\\,\\text{V} = 1\\,\\text{J/C}$です。",
            "image_url": ""
        },
        {
            "id": 405,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "コンデンサー",
            "question": "平行板コンデンサーの電気容量$C$は、極板面積$S$にどのように依存するか。",
            "options": [
                "$S$に比例",
                "$S^2$に比例",
                "$S$に反比例",
                "$S$によらない"
            ],
            "answer": 0,
            "explanation": "平行板コンデンサーの電気容量は$C = \\varepsilon_0 \\dfrac{S}{d}$なので、極板面積$S$に比例します。",
            "image_url": ""
        },
        {
            "id": 406,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "コンデンサー",
            "question": "電気容量$C$のコンデンサーに電圧$V$をかけたとき、蓄えられる電荷$Q$はどれか。",
            "options": [
                "$Q = \\dfrac{C}{V}$",
                "$Q = CV$",
                "$Q = \\dfrac{V}{C}$",
                "$Q = C + V$"
            ],
            "answer": 1,
            "explanation": "コンデンサーの基本式は$Q = CV$です。電気容量$C$が大きいほど多くの電荷を蓄えられます。",
            "image_url": ""
        },

        // ─── 第2章 電流 ───

        {
            "id": 407,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "オームの法則",
            "question": "オームの法則$V = RI$において、$R$の単位はどれか。",
            "options": [
                "$\\text{A}$（アンペア）",
                "$\\text{V}$（ボルト）",
                "$\\text{W}$（ワット）",
                "$\\Omega$（オーム）"
            ],
            "answer": 3,
            "explanation": "抵抗$R$の単位はオーム$[\\Omega]$です。$1\\,\\Omega = 1\\,\\text{V/A}$です。",
            "image_url": ""
        },
        {
            "id": 408,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "$3\\,\\Omega$と$6\\,\\Omega$の抵抗を並列に接続したとき、合成抵抗はいくらか。",
            "options": [
                "$1\\,\\Omega$",
                "$2\\,\\Omega$",
                "$4.5\\,\\Omega$",
                "$9\\,\\Omega$"
            ],
            "answer": 1,
            "explanation": "並列接続の合成抵抗は$\\dfrac{1}{R} = \\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$より$R = 2\\,\\Omega$です。",
            "image_url": ""
        },
        {
            "id": 409,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "抵抗$R$に電流$I$が流れるとき、消費電力$P$を表す式はどれか。",
            "options": [
                "$P = RI$",
                "$P = RI^2$",
                "$P = R^2I$",
                "$P = \\dfrac{R}{I}$"
            ],
            "answer": 1,
            "explanation": "消費電力は$P = VI = RI^2$です。$V = RI$を代入して得られます。$P = \\dfrac{V^2}{R}$とも書けます。",
            "image_url": ""
        },
        {
            "id": 410,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "直流回路",
            "question": "キルヒホッフの第一法則（電流の法則）の内容はどれか。",
            "options": [
                "回路の各点で電流の和はゼロ",
                "閉回路の電圧の和はゼロ",
                "電流は常に一定",
                "電圧は抵抗に比例"
            ],
            "answer": 0,
            "explanation": "キルヒホッフの第一法則は「回路の分岐点に流入する電流の和と流出する電流の和が等しい」ことを述べています。",
            "image_url": ""
        },

        // ─── 第3章 電流と磁場 ───

        {
            "id": 411,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": "電流のつくる磁場",
            "question": "直線電流がつくる磁場の向きを求める法則はどれか。",
            "options": [
                "レンツの法則",
                "右ねじの法則",
                "フレミングの左手の法則",
                "クーロンの法則"
            ],
            "answer": 1,
            "explanation": "直線電流がつくる磁場の向きは右ねじの法則（右手の法則）で求められます。電流の向きに右ねじを進めると、回す向きが磁場の向きです。",
            "image_url": ""
        },
        {
            "id": 412,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "電流が磁場から受ける力",
            "question": "磁束密度$B$の磁場中で、長さ$L$の導線に電流$I$が磁場に垂直に流れるとき、導線が受ける力$F$はどれか。",
            "options": [
                "$F = BIL$",
                "$F = \\dfrac{BI}{L}$",
                "$F = \\dfrac{BL}{I}$",
                "$F = B^2IL$"
            ],
            "answer": 0,
            "explanation": "磁場中の電流が受ける力は$F = BIL$（電流と磁場が垂直のとき）です。向きはフレミングの左手の法則で求めます。",
            "image_url": ""
        },
        {
            "id": 413,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "ローレンツ力",
            "question": "磁束密度$B$の磁場中を速さ$v$で磁場に垂直に運動する電荷$q$（正）が受けるローレンツ力の大きさはどれか。",
            "options": [
                "$qvB$",
                "$\\dfrac{qv}{B}$",
                "$qv^2B$",
                "$\\dfrac{qB}{v}$"
            ],
            "answer": 0,
            "explanation": "ローレンツ力は$F = qvB$（速度と磁場が垂直のとき）です。荷電粒子は磁場中で円運動をします。",
            "image_url": ""
        },
        {
            "id": 414,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "ローレンツ力",
            "question": "磁束密度$B$の一様な磁場中を、質量$m$、電荷$q$の荷電粒子が速さ$v$で磁場に垂直に入射した。粒子の円運動の半径$r$はどれか。",
            "options": [
                "$r = \\dfrac{mv}{qB}$",
                "$r = \\dfrac{qB}{mv}$",
                "$r = \\dfrac{qvB}{m}$",
                "$r = \\dfrac{mB}{qv}$"
            ],
            "answer": 0,
            "explanation": "ローレンツ力が向心力になるので$qvB = \\dfrac{mv^2}{r}$。整理すると$r = \\dfrac{mv}{qB}$です。",
            "image_url": ""
        },

        // ─── 第4章 電磁誘導と電磁波 ───

        {
            "id": 415,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "コイルを貫く磁束が変化したとき、コイルに起電力が生じる現象を何というか。",
            "options": [
                "自己誘導",
                "相互誘導",
                "電磁誘導",
                "静電誘導"
            ],
            "answer": 2,
            "explanation": "コイルを貫く磁束の変化によって起電力が生じる現象を電磁誘導といいます。ファラデーが発見しました。",
            "image_url": ""
        },
        {
            "id": 416,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "電磁誘導で生じる誘導起電力の向きについて述べた法則はどれか。",
            "options": [
                "ファラデーの法則",
                "レンツの法則",
                "アンペールの法則",
                "ガウスの法則"
            ],
            "answer": 1,
            "explanation": "レンツの法則は「誘導電流は磁束の変化を打ち消す向きに流れる」ことを述べています。",
            "image_url": ""
        },
        {
            "id": 417,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "交流の発生",
            "question": "日本の家庭用交流電源の周波数は東日本で何$\\text{Hz}$か。",
            "options": [
                "$40\\,\\text{Hz}$",
                "$50\\,\\text{Hz}$",
                "$60\\,\\text{Hz}$",
                "$100\\,\\text{Hz}$"
            ],
            "answer": 1,
            "explanation": "日本では東日本が$50\\,\\text{Hz}$、西日本が$60\\,\\text{Hz}$の交流を使用しています。",
            "image_url": ""
        },
        {
            "id": 418,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "交流回路",
            "question": "交流の実効値$V_e$と最大値$V_0$の関係はどれか。",
            "options": [
                "$V_e = V_0$",
                "$V_e = \\dfrac{V_0}{2}$",
                "$V_e = \\dfrac{V_0}{\\sqrt{2}}$",
                "$V_e = \\sqrt{2}\\,V_0$"
            ],
            "answer": 2,
            "explanation": "交流の実効値は最大値を$\\sqrt{2}$で割った値です。$V_e = \\dfrac{V_0}{\\sqrt{2}}$。家庭用$100\\,\\text{V}$は実効値です。",
            "image_url": ""
        },
        {
            "id": 419,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": "電磁波",
            "question": "電磁波の伝わる速さは真空中でおよそいくらか。",
            "options": [
                "$3.0 \\times 10^6\\,\\text{m/s}$",
                "$3.0 \\times 10^8\\,\\text{m/s}$",
                "$3.0 \\times 10^{10}\\,\\text{m/s}$",
                "$3.0 \\times 10^{12}\\,\\text{m/s}$"
            ],
            "answer": 1,
            "explanation": "電磁波は真空中で光速$c = 3.0 \\times 10^8\\,\\text{m/s}$で伝わります。",
            "image_url": ""
        },
        {
            "id": 420,
            "category": "p4_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "コンデンサー",
            "question": "電気容量$C$のコンデンサーに電圧$V$をかけたとき、蓄えられる静電エネルギー$U$はどれか。",
            "options": [
                "$U = CV$",
                "$U = CV^2$",
                "$U = \\dfrac{1}{2}CV^2$",
                "$U = \\dfrac{1}{2}C^2V$"
            ],
            "answer": 2,
            "explanation": "コンデンサーに蓄えられる静電エネルギーは$U = \\dfrac{1}{2}CV^2 = \\dfrac{1}{2}QV = \\dfrac{Q^2}{2C}$です。",
            "image_url": ""
        },

        // ============================================================
        // ここから追加30問（ID: 421〜450）
        // A: 12問, B: 12問, C: 6問
        // ============================================================

        // ─── 追加: 第1章 電場 (421〜428) ───

        {
            "id": 421,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "静電気力",
            "question": "絹の布でガラス棒をこすると、ガラス棒は正に帯電する。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "ガラス棒を絹でこすると、ガラス棒から電子が絹に移動するため、ガラス棒は正に帯電します。",
            "image_url": ""
        },
        {
            "id": 422,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "電場",
            "question": "電気力線は正の電荷から出て負の電荷に入る。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "電気力線は正の電荷から出発し、負の電荷に終わります。これは電場の向きを表しています。",
            "image_url": ""
        },
        {
            "id": 423,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "物質と電場",
            "question": "導体内部の電場はどうなっているか。",
            "options": [
                "一定の電場がある",
                "電場はゼロである",
                "電場の向きが周期的に変わる",
                "電場の大きさが距離に比例する"
            ],
            "answer": 1,
            "explanation": "静電平衡状態の導体内部では電場はゼロです。電荷は導体の表面に分布します。",
            "image_url": ""
        },
        {
            "id": 424,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "静電気力",
            "question": "$2.0 \\times 10^{-6}\\,\\text{C}$と$3.0 \\times 10^{-6}\\,\\text{C}$の点電荷が$0.30\\,\\text{m}$離れているとき、はたらくクーロン力の大きさはいくらか。クーロン定数を$k = 9.0 \\times 10^9\\,\\text{N} \\cdot \\text{m}^2\\text{/C}^2$とする。",
            "options": [
                "$0.20\\,\\text{N}$",
                "$0.60\\,\\text{N}$",
                "$1.8\\,\\text{N}$",
                "$6.0\\,\\text{N}$"
            ],
            "answer": 1,
            "explanation": "$F = k\\dfrac{q_1 q_2}{r^2} = 9.0 \\times 10^9 \\times \\dfrac{2.0 \\times 10^{-6} \\times 3.0 \\times 10^{-6}}{0.30^2} = 9.0 \\times 10^9 \\times \\dfrac{6.0 \\times 10^{-12}}{0.09} = 0.60\\,\\text{N}$",
            "image_url": ""
        },
        {
            "id": 425,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "電位",
            "question": "一様な電場$E = 500\\,\\text{V/m}$の中で、電場の向きに$0.20\\,\\text{m}$移動したとき、電位の変化はいくらか。",
            "options": [
                "$+100\\,\\text{V}$",
                "$-100\\,\\text{V}$",
                "$+2500\\,\\text{V}$",
                "$-2500\\,\\text{V}$"
            ],
            "answer": 1,
            "explanation": "一様な電場中の電位差は$V = -Ed$です。電場の向きに移動すると電位は下がるので$\\Delta V = -500 \\times 0.20 = -100\\,\\text{V}$です。",
            "image_url": ""
        },
        {
            "id": 426,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "コンデンサー",
            "question": "電気容量$2.0\\,\\mu\\text{F}$と$3.0\\,\\mu\\text{F}$のコンデンサーを直列に接続したとき、合成容量はいくらか。",
            "options": [
                "$0.83\\,\\mu\\text{F}$",
                "$1.2\\,\\mu\\text{F}$",
                "$2.5\\,\\mu\\text{F}$",
                "$5.0\\,\\mu\\text{F}$"
            ],
            "answer": 1,
            "explanation": "直列接続の合成容量は$\\dfrac{1}{C} = \\dfrac{1}{2.0} + \\dfrac{1}{3.0} = \\dfrac{5}{6}$より$C = \\dfrac{6}{5} = 1.2\\,\\mu\\text{F}$です。",
            "image_url": ""
        },
        {
            "id": 427,
            "category": "p4_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "コンデンサー",
            "question": "平行板コンデンサーについて、以下の小問に答えよ。極板面積$S = 0.010\\,\\text{m}^2$、極板間隔$d = 1.0 \\times 10^{-3}\\,\\text{m}$、真空の誘電率$\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "このコンデンサーの電気容量$C$はいくらか。",
                    "options": [
                        "$8.85 \\times 10^{-11}\\,\\text{F}$",
                        "$8.85 \\times 10^{-10}\\,\\text{F}$",
                        "$8.85 \\times 10^{-9}\\,\\text{F}$",
                        "$8.85 \\times 10^{-8}\\,\\text{F}$"
                    ],
                    "answer": 0,
                    "explanation": "$C = \\varepsilon_0 \\dfrac{S}{d} = 8.85 \\times 10^{-12} \\times \\dfrac{0.010}{1.0 \\times 10^{-3}} = 8.85 \\times 10^{-11}\\,\\text{F}$"
                },
                {
                    "question": "このコンデンサーに$100\\,\\text{V}$の電圧をかけたとき、蓄えられる電荷$Q$はいくらか。",
                    "options": [
                        "$8.85 \\times 10^{-11}\\,\\text{C}$",
                        "$8.85 \\times 10^{-10}\\,\\text{C}$",
                        "$8.85 \\times 10^{-9}\\,\\text{C}$",
                        "$8.85 \\times 10^{-8}\\,\\text{C}$"
                    ],
                    "answer": 2,
                    "explanation": "$Q = CV = 8.85 \\times 10^{-11} \\times 100 = 8.85 \\times 10^{-9}\\,\\text{C}$"
                },
                {
                    "question": "このとき蓄えられる静電エネルギー$U$はいくらか。",
                    "options": [
                        "$4.4 \\times 10^{-9}\\,\\text{J}$",
                        "$4.4 \\times 10^{-8}\\,\\text{J}$",
                        "$4.4 \\times 10^{-7}\\,\\text{J}$",
                        "$4.4 \\times 10^{-6}\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$U = \\dfrac{1}{2}CV^2 = \\dfrac{1}{2} \\times 8.85 \\times 10^{-11} \\times 100^2 = 4.4 \\times 10^{-7}\\,\\text{J}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 428,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "物質と電場",
            "question": "誘電体（絶縁体）をコンデンサーの極板間に挿入すると、電気容量は小さくなる。",
            "options": ["〇", "✕"],
            "answer": 1,
            "explanation": "誘電体を極板間に挿入すると、誘電分極により電場が弱まり、電気容量は大きくなります。$C = \\varepsilon_r \\varepsilon_0 \\dfrac{S}{d}$で$\\varepsilon_r > 1$です。",
            "image_url": ""
        },

        // ─── 追加: 第2章 電流 (429〜437) ───

        {
            "id": 429,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "オームの法則",
            "question": "金属の電気抵抗は温度が上がると大きくなる。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "金属では温度が上がると格子振動が激しくなり、自由電子の移動が妨げられるため、電気抵抗は大きくなります。",
            "image_url": ""
        },
        {
            "id": 430,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "半導体",
            "question": "半導体の電気抵抗は温度が上がるとどうなるか。",
            "options": [
                "大きくなる",
                "小さくなる",
                "変化しない",
                "まず大きくなり、その後小さくなる"
            ],
            "answer": 1,
            "explanation": "半導体では温度が上がると自由電子と正孔が増えるため、電気抵抗は小さくなります。金属とは逆の振る舞いです。",
            "image_url": ""
        },
        {
            "id": 431,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "オームの法則",
            "question": "長さ$L$、断面積$S$、抵抗率$\\rho$の導線の電気抵抗$R$を表す式はどれか。",
            "options": [
                "$R = \\rho \\dfrac{S}{L}$",
                "$R = \\rho \\dfrac{L}{S}$",
                "$R = \\dfrac{L}{\\rho S}$",
                "$R = \\rho LS$"
            ],
            "answer": 1,
            "explanation": "電気抵抗は$R = \\rho \\dfrac{L}{S}$です。長さに比例し、断面積に反比例します。",
            "image_url": ""
        },
        {
            "id": 432,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "起電力$12\\,\\text{V}$、内部抵抗$1.0\\,\\Omega$の電池に外部抵抗$5.0\\,\\Omega$を接続したとき、回路に流れる電流はいくらか。",
            "options": [
                "$1.0\\,\\text{A}$",
                "$2.0\\,\\text{A}$",
                "$2.4\\,\\text{A}$",
                "$12\\,\\text{A}$"
            ],
            "answer": 1,
            "explanation": "$I = \\dfrac{E}{R + r} = \\dfrac{12}{5.0 + 1.0} = \\dfrac{12}{6.0} = 2.0\\,\\text{A}$",
            "image_url": ""
        },
        {
            "id": 433,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "$10\\,\\Omega$の抵抗に$2.0\\,\\text{A}$の電流が$5.0$分間流れたとき、発生するジュール熱はいくらか。",
            "options": [
                "$100\\,\\text{J}$",
                "$1000\\,\\text{J}$",
                "$6000\\,\\text{J}$",
                "$12000\\,\\text{J}$"
            ],
            "answer": 3,
            "explanation": "ジュール熱は$Q = RI^2t = 10 \\times 2.0^2 \\times (5.0 \\times 60) = 10 \\times 4.0 \\times 300 = 12000\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 434,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "直流回路",
            "question": "キルヒホッフの第二法則（電圧の法則）の内容はどれか。",
            "options": [
                "分岐点に流入する電流の和は流出する電流の和に等しい",
                "閉回路を一周したとき、起電力の和と電圧降下の和は等しい",
                "抵抗と電流は反比例する",
                "電力は電圧と電流の積に等しい"
            ],
            "answer": 1,
            "explanation": "キルヒホッフの第二法則は「閉回路を一周したとき、起電力の総和と電圧降下の総和が等しい」というものです。",
            "image_url": ""
        },
        {
            "id": 435,
            "category": "p4_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "直流回路",
            "question": "内部抵抗$r$、起電力$E$の電池に外部抵抗$R$を接続した回路について、以下の小問に答えよ。$E = 6.0\\,\\text{V}$、$r = 0.50\\,\\Omega$、$R = 2.5\\,\\Omega$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "回路に流れる電流$I$はいくらか。",
                    "options": [
                        "$1.0\\,\\text{A}$",
                        "$2.0\\,\\text{A}$",
                        "$2.4\\,\\text{A}$",
                        "$3.0\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$I = \\dfrac{E}{R + r} = \\dfrac{6.0}{2.5 + 0.50} = \\dfrac{6.0}{3.0} = 2.0\\,\\text{A}$"
                },
                {
                    "question": "電池の端子電圧$V$はいくらか。",
                    "options": [
                        "$4.0\\,\\text{V}$",
                        "$5.0\\,\\text{V}$",
                        "$5.5\\,\\text{V}$",
                        "$6.0\\,\\text{V}$"
                    ],
                    "answer": 1,
                    "explanation": "$V = E - rI = 6.0 - 0.50 \\times 2.0 = 6.0 - 1.0 = 5.0\\,\\text{V}$"
                },
                {
                    "question": "外部抵抗$R$で消費される電力$P$はいくらか。",
                    "options": [
                        "$5.0\\,\\text{W}$",
                        "$8.0\\,\\text{W}$",
                        "$10\\,\\text{W}$",
                        "$12\\,\\text{W}$"
                    ],
                    "answer": 2,
                    "explanation": "$P = RI^2 = 2.5 \\times 2.0^2 = 2.5 \\times 4.0 = 10\\,\\text{W}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 436,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "半導体",
            "question": "p型半導体の多数キャリアはどれか。",
            "options": [
                "自由電子",
                "正孔（ホール）",
                "陽子",
                "中性子"
            ],
            "answer": 1,
            "explanation": "p型半導体は価電子が3個の不純物（ホウ素など）を添加したもので、正孔（ホール）が多数キャリアです。",
            "image_url": ""
        },
        {
            "id": 437,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "$4.0\\,\\Omega$の抵抗3つを直列に接続したとき、合成抵抗はいくらか。",
            "options": [
                "$1.3\\,\\Omega$",
                "$4.0\\,\\Omega$",
                "$8.0\\,\\Omega$",
                "$12\\,\\Omega$"
            ],
            "answer": 3,
            "explanation": "直列接続の合成抵抗は$R = R_1 + R_2 + R_3 = 4.0 + 4.0 + 4.0 = 12\\,\\Omega$です。",
            "image_url": ""
        },

        // ─── 追加: 第3章 電流と磁場 (438〜444) ───

        {
            "id": 438,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": "磁場",
            "question": "磁束密度の単位はどれか。",
            "options": [
                "$\\text{Wb}$（ウェーバ）",
                "$\\text{T}$（テスラ）",
                "$\\text{H}$（ヘンリー）",
                "$\\text{V}$（ボルト）"
            ],
            "answer": 1,
            "explanation": "磁束密度の単位はテスラ$[\\text{T}]$です。$1\\,\\text{T} = 1\\,\\text{Wb/m}^2$です。",
            "image_url": ""
        },
        {
            "id": 439,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "ox",
            "classification": "電流が磁場から受ける力",
            "question": "電流が磁場から受ける力の向きはフレミングの左手の法則で求められる。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "フレミングの左手の法則では、人差し指を磁場の向き、中指を電流の向きに合わせると、親指が力の向きを示します。",
            "image_url": ""
        },
        {
            "id": 440,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "電流のつくる磁場",
            "question": "半径$r$の円形コイルに電流$I$が流れるとき、コイルの中心の磁場の大きさ$H$はどれか。",
            "options": [
                "$H = \\dfrac{I}{2r}$",
                "$H = \\dfrac{I}{2\\pi r}$",
                "$H = \\dfrac{2\\pi I}{r}$",
                "$H = \\dfrac{Ir}{2}$"
            ],
            "answer": 0,
            "explanation": "円形コイルの中心の磁場の大きさは$H = \\dfrac{I}{2r}$です。巻数$N$のコイルでは$H = \\dfrac{NI}{2r}$となります。",
            "image_url": ""
        },
        {
            "id": 441,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "ローレンツ力",
            "question": "磁場に平行に運動する荷電粒子が受けるローレンツ力の大きさはどれか。",
            "options": [
                "$qvB$",
                "$\\dfrac{qvB}{2}$",
                "$qv^2B$",
                "$0$"
            ],
            "answer": 3,
            "explanation": "ローレンツ力は$F = qvB\\sin\\theta$です。速度と磁場が平行（$\\theta = 0°$）のとき$\\sin 0° = 0$なので、力はゼロです。",
            "image_url": ""
        },
        {
            "id": 442,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "電流が磁場から受ける力",
            "question": "磁束密度$B = 0.50\\,\\text{T}$の一様な磁場中に、長さ$L = 0.40\\,\\text{m}$の導線が磁場に垂直に置かれている。以下の小問に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "導線に$3.0\\,\\text{A}$の電流を流したとき、導線が受ける力の大きさはいくらか。",
                    "options": [
                        "$0.30\\,\\text{N}$",
                        "$0.60\\,\\text{N}$",
                        "$1.5\\,\\text{N}$",
                        "$6.0\\,\\text{N}$"
                    ],
                    "answer": 1,
                    "explanation": "$F = BIL = 0.50 \\times 3.0 \\times 0.40 = 0.60\\,\\text{N}$"
                },
                {
                    "question": "導線を磁場に対して$30°$傾けて電流を流したとき、力の大きさはいくらか。",
                    "options": [
                        "$0.15\\,\\text{N}$",
                        "$0.30\\,\\text{N}$",
                        "$0.52\\,\\text{N}$",
                        "$0.60\\,\\text{N}$"
                    ],
                    "answer": 1,
                    "explanation": "$F = BIL\\sin\\theta = 0.50 \\times 3.0 \\times 0.40 \\times \\sin 30° = 0.60 \\times 0.50 = 0.30\\,\\text{N}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 443,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "電流のつくる磁場",
            "question": "十分に長い直線電流$I$から距離$r$離れた点の磁場の大きさ$H$はどれか。",
            "options": [
                "$H = \\dfrac{I}{r}$",
                "$H = \\dfrac{I}{2\\pi r}$",
                "$H = \\dfrac{I}{4\\pi r}$",
                "$H = \\dfrac{2I}{r}$"
            ],
            "answer": 1,
            "explanation": "十分に長い直線電流がつくる磁場の大きさは$H = \\dfrac{I}{2\\pi r}$です。距離に反比例します。",
            "image_url": ""
        },
        {
            "id": 444,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "ローレンツ力",
            "question": "質量$m = 1.6 \\times 10^{-27}\\,\\text{kg}$、電荷$q = 1.6 \\times 10^{-19}\\,\\text{C}$の陽子が磁束密度$B = 0.20\\,\\text{T}$の一様な磁場に垂直に速さ$v = 1.0 \\times 10^6\\,\\text{m/s}$で入射した。以下の小問に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "陽子が受けるローレンツ力の大きさはいくらか。",
                    "options": [
                        "$3.2 \\times 10^{-14}\\,\\text{N}$",
                        "$1.6 \\times 10^{-14}\\,\\text{N}$",
                        "$3.2 \\times 10^{-13}\\,\\text{N}$",
                        "$1.6 \\times 10^{-13}\\,\\text{N}$"
                    ],
                    "answer": 0,
                    "explanation": "$F = qvB = 1.6 \\times 10^{-19} \\times 1.0 \\times 10^6 \\times 0.20 = 3.2 \\times 10^{-14}\\,\\text{N}$"
                },
                {
                    "question": "陽子の円運動の半径$r$はいくらか。",
                    "options": [
                        "$0.010\\,\\text{m}$",
                        "$0.050\\,\\text{m}$",
                        "$0.10\\,\\text{m}$",
                        "$0.50\\,\\text{m}$"
                    ],
                    "answer": 1,
                    "explanation": "$r = \\dfrac{mv}{qB} = \\dfrac{1.6 \\times 10^{-27} \\times 1.0 \\times 10^6}{1.6 \\times 10^{-19} \\times 0.20} = \\dfrac{1.6 \\times 10^{-21}}{3.2 \\times 10^{-20}} = 0.050\\,\\text{m}$"
                },
                {
                    "question": "陽子の円運動の周期$T$はいくらか。",
                    "options": [
                        "$3.1 \\times 10^{-7}\\,\\text{s}$",
                        "$1.6 \\times 10^{-7}\\,\\text{s}$",
                        "$3.1 \\times 10^{-8}\\,\\text{s}$",
                        "$1.6 \\times 10^{-8}\\,\\text{s}$"
                    ],
                    "answer": 0,
                    "explanation": "$T = \\dfrac{2\\pi r}{v} = \\dfrac{2\\pi \\times 0.050}{1.0 \\times 10^6} = \\dfrac{0.314}{1.0 \\times 10^6} \\approx 3.1 \\times 10^{-7}\\,\\text{s}$。または$T = \\dfrac{2\\pi m}{qB}$からも求められます。"
                }
            ],
            "image_url": ""
        },

        // ─── 追加: 第4章 電磁誘導と電磁波 (445〜450) ───

        {
            "id": 445,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "ox",
            "classification": "自己誘導と相互誘導",
            "question": "自己誘導とは、コイル自身の電流変化によりコイル自身に誘導起電力が生じる現象である。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "自己誘導は、コイルに流れる電流が変化すると、その変化を妨げる向きにコイル自身に誘導起電力が生じる現象です。",
            "image_url": ""
        },
        {
            "id": 446,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "巻数$N$のコイルを貫く磁束が時間$\\Delta t$の間に$\\Delta \\Phi$だけ変化したとき、誘導起電力の大きさ$|V|$はどれか。",
            "options": [
                "$|V| = \\dfrac{\\Delta \\Phi}{N \\Delta t}$",
                "$|V| = N\\dfrac{\\Delta \\Phi}{\\Delta t}$",
                "$|V| = \\dfrac{N \\Delta t}{\\Delta \\Phi}$",
                "$|V| = N \\Delta \\Phi \\Delta t$"
            ],
            "answer": 1,
            "explanation": "ファラデーの電磁誘導の法則より、誘導起電力の大きさは$|V| = N\\dfrac{\\Delta \\Phi}{\\Delta t}$です。巻数に比例し、磁束の時間変化率に比例します。",
            "image_url": ""
        },
        {
            "id": 447,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "交流回路",
            "question": "変圧器（トランス）で、一次コイルの巻数$N_1 = 200$、二次コイルの巻数$N_2 = 50$のとき、一次側に$100\\,\\text{V}$を加えると二次側の電圧はいくらか。",
            "options": [
                "$12.5\\,\\text{V}$",
                "$25\\,\\text{V}$",
                "$50\\,\\text{V}$",
                "$400\\,\\text{V}$"
            ],
            "answer": 1,
            "explanation": "$\\dfrac{V_1}{V_2} = \\dfrac{N_1}{N_2}$より$V_2 = V_1 \\times \\dfrac{N_2}{N_1} = 100 \\times \\dfrac{50}{200} = 25\\,\\text{V}$です。",
            "image_url": ""
        },
        {
            "id": 448,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": "電磁波",
            "question": "次のうち、電磁波の波長が最も短いものはどれか。",
            "options": [
                "赤外線",
                "可視光線",
                "紫外線",
                "電波"
            ],
            "answer": 2,
            "explanation": "波長の短い順に、ガンマ線 → X線 → 紫外線 → 可視光線 → 赤外線 → 電波です。選択肢の中では紫外線が最も波長が短いです。",
            "image_url": ""
        },
        {
            "id": 449,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "磁束密度$B = 0.40\\,\\text{T}$の一様な磁場中に、幅$L = 0.50\\,\\text{m}$の導体レールが磁場に垂直に置かれている。導体棒がレール上を速さ$v = 2.0\\,\\text{m/s}$で動く。回路全体の抵抗を$R = 0.20\\,\\Omega$とし、以下の小問に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "導体棒に生じる誘導起電力の大きさはいくらか。",
                    "options": [
                        "$0.10\\,\\text{V}$",
                        "$0.20\\,\\text{V}$",
                        "$0.40\\,\\text{V}$",
                        "$1.0\\,\\text{V}$"
                    ],
                    "answer": 2,
                    "explanation": "$V = BLv = 0.40 \\times 0.50 \\times 2.0 = 0.40\\,\\text{V}$"
                },
                {
                    "question": "回路に流れる電流の大きさはいくらか。",
                    "options": [
                        "$0.50\\,\\text{A}$",
                        "$1.0\\,\\text{A}$",
                        "$2.0\\,\\text{A}$",
                        "$4.0\\,\\text{A}$"
                    ],
                    "answer": 2,
                    "explanation": "$I = \\dfrac{V}{R} = \\dfrac{0.40}{0.20} = 2.0\\,\\text{A}$"
                },
                {
                    "question": "導体棒を動かすのに必要な外力の大きさはいくらか。",
                    "options": [
                        "$0.10\\,\\text{N}$",
                        "$0.20\\,\\text{N}$",
                        "$0.40\\,\\text{N}$",
                        "$0.80\\,\\text{N}$"
                    ],
                    "answer": 2,
                    "explanation": "導体棒には$F = BIL = 0.40 \\times 2.0 \\times 0.50 = 0.40\\,\\text{N}$の力がはたらくので、等速で動かすには同じ大きさの外力$0.40\\,\\text{N}$が必要です。"
                }
            ],
            "image_url": ""
        },
        {
            "id": 450,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "自己誘導と相互誘導",
            "question": "自己インダクタンス$L = 0.50\\,\\text{H}$のコイルに流れる電流が$0.10\\,\\text{s}$間に$2.0\\,\\text{A}$変化したとき、コイルに生じる自己誘導起電力の大きさはいくらか。",
            "options": [
                "$1.0\\,\\text{V}$",
                "$5.0\\,\\text{V}$",
                "$10\\,\\text{V}$",
                "$25\\,\\text{V}$"
            ],
            "answer": 2,
            "explanation": "$|V| = L\\dfrac{\\Delta I}{\\Delta t} = 0.50 \\times \\dfrac{2.0}{0.10} = 0.50 \\times 20 = 10\\,\\text{V}$です。",
            "image_url": ""
        },

        // ============================================================
        // ここから追加50問（ID: 451〜500）
        // A: 19問, B: 13問, C: 18問
        // ============================================================

        // ─── 追加: 第1章 電場 (451〜462) ───

        {
            "id": 451,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "静電気力",
            "question": "帯電した物体どうしの間にはたらくクーロン力は、万有引力と同様に距離の2乗に反比例する。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "クーロンの法則$F = k\\dfrac{q_1 q_2}{r^2}$より、クーロン力は距離の2乗に反比例します。万有引力と同じ形の法則です。",
            "image_url": ""
        },
        {
            "id": 452,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "電場",
            "question": "電場の単位はどれか。",
            "options": [
                "$\\text{V}$（ボルト）",
                "$\\text{N/C}$（ニュートン毎クーロン）",
                "$\\text{C/m}^2$（クーロン毎平方メートル）",
                "$\\text{F}$（ファラド）"
            ],
            "answer": 1,
            "explanation": "電場の単位は$\\text{N/C}$（ニュートン毎クーロン）です。$\\text{V/m}$（ボルト毎メートル）とも表せます。",
            "image_url": ""
        },
        {
            "id": 453,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "電位",
            "question": "等電位面上で電荷を移動させるとき、電場の力は仕事をしない。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "等電位面上では電位差がゼロなので、電場の力がする仕事$W = q\\Delta V = 0$です。",
            "image_url": ""
        },
        {
            "id": 454,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "物質と電場",
            "question": "静電誘導の説明として正しいものはどれか。",
            "options": [
                "絶縁体の分子が分極する現象",
                "導体に帯電体を近づけると、導体内の電荷が移動する現象",
                "コイルに誘導起電力が生じる現象",
                "帯電体どうしが引き合う現象"
            ],
            "answer": 1,
            "explanation": "静電誘導とは、帯電体を導体に近づけると、導体内の自由電子が移動し、表面に正負の電荷が現れる現象です。",
            "image_url": ""
        },
        {
            "id": 455,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "コンデンサー",
            "question": "コンデンサーの電気容量の単位はファラド$[\\text{F}]$である。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "電気容量の単位はファラド$[\\text{F}]$です。$1\\,\\text{F} = 1\\,\\text{C/V}$です。",
            "image_url": ""
        },
        {
            "id": 456,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "電場",
            "question": "一様な電場$E = 200\\,\\text{V/m}$の中で、電場の向きに$+2.0 \\times 10^{-6}\\,\\text{C}$の電荷を$0.30\\,\\text{m}$移動させたとき、電場がした仕事はいくらか。",
            "options": [
                "$1.2 \\times 10^{-4}\\,\\text{J}$",
                "$6.0 \\times 10^{-5}\\,\\text{J}$",
                "$6.0 \\times 10^{-4}\\,\\text{J}$",
                "$1.2 \\times 10^{-3}\\,\\text{J}$"
            ],
            "answer": 0,
            "explanation": "$W = qEd = 2.0 \\times 10^{-6} \\times 200 \\times 0.30 = 1.2 \\times 10^{-4}\\,\\text{J}$です。",
            "image_url": ""
        },
        {
            "id": 457,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "電位",
            "question": "クーロン定数$k = 9.0 \\times 10^9\\,\\text{N} \\cdot \\text{m}^2\\text{/C}^2$のとき、$+4.0 \\times 10^{-6}\\,\\text{C}$の点電荷から$0.60\\,\\text{m}$離れた点の電位はいくらか。",
            "options": [
                "$1.5 \\times 10^4\\,\\text{V}$",
                "$3.0 \\times 10^4\\,\\text{V}$",
                "$6.0 \\times 10^4\\,\\text{V}$",
                "$9.0 \\times 10^4\\,\\text{V}$"
            ],
            "answer": 2,
            "explanation": "$V = k\\dfrac{Q}{r} = 9.0 \\times 10^9 \\times \\dfrac{4.0 \\times 10^{-6}}{0.60} = 6.0 \\times 10^4\\,\\text{V}$です。",
            "image_url": ""
        },
        {
            "id": 458,
            "category": "p4_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "静電気力",
            "question": "クーロン力と電場について、以下の小問に答えよ。クーロン定数を$k = 9.0 \\times 10^9\\,\\text{N} \\cdot \\text{m}^2\\text{/C}^2$とする。$+3.0 \\times 10^{-6}\\,\\text{C}$の点電荷Aと$-6.0 \\times 10^{-6}\\,\\text{C}$の点電荷Bが$0.30\\,\\text{m}$離れて置かれている。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "AとBの間にはたらくクーロン力の大きさはいくらか。",
                    "options": [
                        "$0.60\\,\\text{N}$",
                        "$1.2\\,\\text{N}$",
                        "$1.8\\,\\text{N}$",
                        "$5.4\\,\\text{N}$"
                    ],
                    "answer": 2,
                    "explanation": "$F = k\\dfrac{|q_A||q_B|}{r^2} = 9.0 \\times 10^9 \\times \\dfrac{3.0 \\times 10^{-6} \\times 6.0 \\times 10^{-6}}{0.30^2} = 9.0 \\times 10^9 \\times \\dfrac{18 \\times 10^{-12}}{0.09} = 1.8\\,\\text{N}$"
                },
                {
                    "question": "Aが作る電場の、Bの位置での大きさはいくらか。",
                    "options": [
                        "$1.0 \\times 10^5\\,\\text{V/m}$",
                        "$2.0 \\times 10^5\\,\\text{V/m}$",
                        "$3.0 \\times 10^5\\,\\text{V/m}$",
                        "$6.0 \\times 10^5\\,\\text{V/m}$"
                    ],
                    "answer": 2,
                    "explanation": "$E = k\\dfrac{|q_A|}{r^2} = 9.0 \\times 10^9 \\times \\dfrac{3.0 \\times 10^{-6}}{0.30^2} = 9.0 \\times 10^9 \\times \\dfrac{3.0 \\times 10^{-6}}{0.09} = 3.0 \\times 10^5\\,\\text{V/m}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 459,
            "category": "p4_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "電位",
            "question": "一様な電場中の電位と仕事について、以下の小問に答えよ。極板間隔$d = 0.020\\,\\text{m}$の平行板コンデンサーに$V = 100\\,\\text{V}$の電圧をかけた。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "極板間の電場の大きさはいくらか。",
                    "options": [
                        "$2.0 \\times 10^3\\,\\text{V/m}$",
                        "$5.0 \\times 10^3\\,\\text{V/m}$",
                        "$1.0 \\times 10^4\\,\\text{V/m}$",
                        "$2.0 \\times 10^4\\,\\text{V/m}$"
                    ],
                    "answer": 1,
                    "explanation": "$E = \\dfrac{V}{d} = \\dfrac{100}{0.020} = 5.0 \\times 10^3\\,\\text{V/m}$"
                },
                {
                    "question": "$+1.6 \\times 10^{-19}\\,\\text{C}$の電荷を正極板から負極板まで移動させるとき、電場がする仕事はいくらか。",
                    "options": [
                        "$1.6 \\times 10^{-19}\\,\\text{J}$",
                        "$1.6 \\times 10^{-18}\\,\\text{J}$",
                        "$1.6 \\times 10^{-17}\\,\\text{J}$",
                        "$1.6 \\times 10^{-16}\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$W = qV = 1.6 \\times 10^{-19} \\times 100 = 1.6 \\times 10^{-17}\\,\\text{J}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 460,
            "category": "p4_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "コンデンサー",
            "question": "コンデンサーの並列・直列接続について、以下の小問に答えよ。$C_1 = 4.0\\,\\mu\\text{F}$と$C_2 = 6.0\\,\\mu\\text{F}$の2つのコンデンサーがある。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "2つを並列に接続したとき、合成容量はいくらか。",
                    "options": [
                        "$2.4\\,\\mu\\text{F}$",
                        "$5.0\\,\\mu\\text{F}$",
                        "$10\\,\\mu\\text{F}$",
                        "$24\\,\\mu\\text{F}$"
                    ],
                    "answer": 2,
                    "explanation": "並列接続の合成容量は$C = C_1 + C_2 = 4.0 + 6.0 = 10\\,\\mu\\text{F}$です。"
                },
                {
                    "question": "2つを直列に接続したとき、合成容量はいくらか。",
                    "options": [
                        "$2.4\\,\\mu\\text{F}$",
                        "$5.0\\,\\mu\\text{F}$",
                        "$10\\,\\mu\\text{F}$",
                        "$24\\,\\mu\\text{F}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\dfrac{1}{C} = \\dfrac{1}{4.0} + \\dfrac{1}{6.0} = \\dfrac{3+2}{12} = \\dfrac{5}{12}$より$C = \\dfrac{12}{5} = 2.4\\,\\mu\\text{F}$です。"
                },
                {
                    "question": "直列に接続して$12\\,\\text{V}$の電圧をかけたとき、$C_1$にかかる電圧はいくらか。",
                    "options": [
                        "$4.0\\,\\text{V}$",
                        "$4.8\\,\\text{V}$",
                        "$7.2\\,\\text{V}$",
                        "$8.0\\,\\text{V}$"
                    ],
                    "answer": 2,
                    "explanation": "直列接続では電荷が等しいので$Q = CV = 2.4 \\times 10^{-6} \\times 12 = 28.8 \\times 10^{-6}\\,\\text{C}$。$V_1 = \\dfrac{Q}{C_1} = \\dfrac{28.8 \\times 10^{-6}}{4.0 \\times 10^{-6}} = 7.2\\,\\text{V}$です。"
                }
            ],
            "image_url": ""
        },
        {
            "id": 461,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "電場",
            "question": "電気力線の性質として誤っているものはどれか。",
            "options": [
                "電気力線は途中で枝分かれしない",
                "電気力線どうしは交わらない",
                "電気力線の接線の向きが電場の向きを表す",
                "電気力線は負の電荷から出て正の電荷に入る"
            ],
            "answer": 3,
            "explanation": "電気力線は正の電荷から出て負の電荷に入ります。「負から正に入る」は誤りです。",
            "image_url": ""
        },
        {
            "id": 462,
            "category": "p4_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "物質と電場",
            "question": "極板間に誘電体を挿入したコンデンサーについて、以下の小問に答えよ。真空中の電気容量が$C_0 = 5.0 \\times 10^{-11}\\,\\text{F}$で、比誘電率$\\varepsilon_r = 4.0$の誘電体を極板間全体に挿入する。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "誘電体挿入後の電気容量はいくらか。",
                    "options": [
                        "$1.25 \\times 10^{-11}\\,\\text{F}$",
                        "$5.0 \\times 10^{-11}\\,\\text{F}$",
                        "$2.0 \\times 10^{-10}\\,\\text{F}$",
                        "$1.0 \\times 10^{-9}\\,\\text{F}$"
                    ],
                    "answer": 2,
                    "explanation": "$C = \\varepsilon_r C_0 = 4.0 \\times 5.0 \\times 10^{-11} = 2.0 \\times 10^{-10}\\,\\text{F}$"
                },
                {
                    "question": "$50\\,\\text{V}$の電圧をかけたとき、蓄えられる電荷はいくらか。",
                    "options": [
                        "$2.5 \\times 10^{-9}\\,\\text{C}$",
                        "$1.0 \\times 10^{-8}\\,\\text{C}$",
                        "$5.0 \\times 10^{-8}\\,\\text{C}$",
                        "$2.0 \\times 10^{-7}\\,\\text{C}$"
                    ],
                    "answer": 1,
                    "explanation": "$Q = CV = 2.0 \\times 10^{-10} \\times 50 = 1.0 \\times 10^{-8}\\,\\text{C}$"
                }
            ],
            "image_url": ""
        },

        // ─── 追加: 第2章 電流 (463〜475) ───

        {
            "id": 463,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "オームの法則",
            "question": "電流の単位アンペア$[\\text{A}]$は、$1\\,\\text{A} = 1\\,\\text{C/s}$と定義される。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "$1\\,\\text{A}$は$1$秒間に$1\\,\\text{C}$の電荷が流れる電流の大きさです。",
            "image_url": ""
        },
        {
            "id": 464,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "直流回路",
            "question": "電力の単位ワット$[\\text{W}]$を基本単位で表したものはどれか。",
            "options": [
                "$\\text{V} \\cdot \\text{A}$",
                "$\\text{V} / \\text{A}$",
                "$\\text{A}^2 / \\text{V}$",
                "$\\text{V}^2 \\cdot \\text{A}$"
            ],
            "answer": 0,
            "explanation": "電力$P = VI$なので、$[\\text{W}] = [\\text{V}] \\cdot [\\text{A}]$です。",
            "image_url": ""
        },
        {
            "id": 465,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "半導体",
            "question": "ダイオードは電流を一方向にのみ流す性質をもつ。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "ダイオードはpn接合を利用した素子で、順方向には電流を流しますが、逆方向にはほとんど流しません（整流作用）。",
            "image_url": ""
        },
        {
            "id": 466,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "半導体",
            "question": "n型半導体をつくるために、シリコンに添加する不純物として適切なものはどれか。",
            "options": [
                "ホウ素（B）",
                "リン（P）",
                "酸素（O）",
                "炭素（C）"
            ],
            "answer": 1,
            "explanation": "n型半導体は価電子が5個の元素（リン、ヒ素など）を添加してつくります。余った電子が自由電子（多数キャリア）になります。",
            "image_url": ""
        },
        {
            "id": 467,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "オームの法則",
            "question": "長さ$2.0\\,\\text{m}$、断面積$1.0 \\times 10^{-6}\\,\\text{m}^2$、抵抗率$1.7 \\times 10^{-8}\\,\\Omega \\cdot \\text{m}$の銅線の抵抗はいくらか。",
            "options": [
                "$1.7 \\times 10^{-2}\\,\\Omega$",
                "$3.4 \\times 10^{-2}\\,\\Omega$",
                "$1.7 \\times 10^{-1}\\,\\Omega$",
                "$3.4 \\times 10^{-1}\\,\\Omega$"
            ],
            "answer": 1,
            "explanation": "$R = \\rho \\dfrac{L}{S} = 1.7 \\times 10^{-8} \\times \\dfrac{2.0}{1.0 \\times 10^{-6}} = 3.4 \\times 10^{-2}\\,\\Omega$",
            "image_url": ""
        },
        {
            "id": 468,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "$6.0\\,\\Omega$と$3.0\\,\\Omega$と$2.0\\,\\Omega$の抵抗を直列に接続して$22\\,\\text{V}$の電圧をかけたとき、回路に流れる電流はいくらか。",
            "options": [
                "$1.0\\,\\text{A}$",
                "$2.0\\,\\text{A}$",
                "$3.7\\,\\text{A}$",
                "$11\\,\\text{A}$"
            ],
            "answer": 1,
            "explanation": "合成抵抗$R = 6.0 + 3.0 + 2.0 = 11\\,\\Omega$。$I = \\dfrac{V}{R} = \\dfrac{22}{11} = 2.0\\,\\text{A}$です。",
            "image_url": ""
        },
        {
            "id": 469,
            "category": "p4_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "直流回路",
            "question": "ホイートストンブリッジ回路について、以下の小問に答えよ。$R_1 = 2.0\\,\\Omega$、$R_2 = 4.0\\,\\Omega$、$R_3 = 3.0\\,\\Omega$、$R_4$が未知抵抗で、検流計の電流がゼロになった。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "ブリッジが平衡しているとき成り立つ条件はどれか。",
                    "options": [
                        "$R_1 R_4 = R_2 R_3$",
                        "$R_1 R_2 = R_3 R_4$",
                        "$R_1 + R_4 = R_2 + R_3$",
                        "$R_1 R_3 = R_2 R_4$"
                    ],
                    "answer": 0,
                    "explanation": "ホイートストンブリッジの平衡条件は$R_1 R_4 = R_2 R_3$です。"
                },
                {
                    "question": "未知抵抗$R_4$の値はいくらか。",
                    "options": [
                        "$1.5\\,\\Omega$",
                        "$3.0\\,\\Omega$",
                        "$6.0\\,\\Omega$",
                        "$8.0\\,\\Omega$"
                    ],
                    "answer": 2,
                    "explanation": "$R_4 = \\dfrac{R_2 R_3}{R_1} = \\dfrac{4.0 \\times 3.0}{2.0} = 6.0\\,\\Omega$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 470,
            "category": "p4_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "直流回路",
            "question": "電気エネルギーと熱量について、以下の小問に答えよ。$100\\,\\text{V}$の電源に$50\\,\\Omega$の電熱線を接続した。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "電熱線に流れる電流はいくらか。",
                    "options": [
                        "$0.50\\,\\text{A}$",
                        "$2.0\\,\\text{A}$",
                        "$5.0\\,\\text{A}$",
                        "$50\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$I = \\dfrac{V}{R} = \\dfrac{100}{50} = 2.0\\,\\text{A}$"
                },
                {
                    "question": "電熱線の消費電力はいくらか。",
                    "options": [
                        "$50\\,\\text{W}$",
                        "$100\\,\\text{W}$",
                        "$200\\,\\text{W}$",
                        "$500\\,\\text{W}$"
                    ],
                    "answer": 2,
                    "explanation": "$P = VI = 100 \\times 2.0 = 200\\,\\text{W}$"
                },
                {
                    "question": "10分間で発生する熱量はいくらか。",
                    "options": [
                        "$1.2 \\times 10^4\\,\\text{J}$",
                        "$6.0 \\times 10^4\\,\\text{J}$",
                        "$1.2 \\times 10^5\\,\\text{J}$",
                        "$6.0 \\times 10^5\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$Q = Pt = 200 \\times 10 \\times 60 = 1.2 \\times 10^5\\,\\text{J}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 471,
            "category": "p4_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "半導体",
            "question": "半導体とダイオードについて、以下の小問に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "真性半導体（不純物を含まない半導体）の代表的な元素はどれか。",
                    "options": [
                        "銅（Cu）",
                        "シリコン（Si）",
                        "鉄（Fe）",
                        "アルミニウム（Al）"
                    ],
                    "answer": 1,
                    "explanation": "シリコン（Si）やゲルマニウム（Ge）が代表的な半導体の元素です。"
                },
                {
                    "question": "pn接合ダイオードの順方向とは、p型半導体側に何をつなぐことか。",
                    "options": [
                        "電源の負極",
                        "電源の正極",
                        "アースをつなぐ",
                        "抵抗をつなぐ"
                    ],
                    "answer": 1,
                    "explanation": "p型半導体側に電源の正極、n型半導体側に負極をつなぐのが順方向（順バイアス）です。"
                }
            ],
            "image_url": ""
        },
        {
            "id": 472,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "$2.0\\,\\Omega$と$3.0\\,\\Omega$の抵抗を並列に接続し、全体に$2.0\\,\\text{A}$の電流が流れているとき、$2.0\\,\\Omega$の抵抗に流れる電流はいくらか。",
            "options": [
                "$0.80\\,\\text{A}$",
                "$1.0\\,\\text{A}$",
                "$1.2\\,\\text{A}$",
                "$1.5\\,\\text{A}$"
            ],
            "answer": 2,
            "explanation": "並列なので電圧が等しく、電流は抵抗の逆比に分配されます。$I_1 : I_2 = R_2 : R_1 = 3 : 2$。$I_1 = 2.0 \\times \\dfrac{3}{5} = 1.2\\,\\text{A}$です。",
            "image_url": ""
        },
        {
            "id": 473,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "直流回路",
            "question": "電流計は測定したい部分に対して直列に接続する。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "電流計は測定したい部分に直列に接続します。一方、電圧計は並列に接続します。",
            "image_url": ""
        },
        {
            "id": 474,
            "category": "p4_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "オームの法則",
            "question": "導体の抵抗の温度変化について、以下の小問に答えよ。$0\\,°\\text{C}$での抵抗が$R_0 = 10\\,\\Omega$、温度係数$\\alpha = 4.0 \\times 10^{-3}\\,/°\\text{C}$の導線がある。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "抵抗の温度変化を表す式$R = R_0(1 + \\alpha t)$を用いて、$50\\,°\\text{C}$での抵抗はいくらか。",
                    "options": [
                        "$10.2\\,\\Omega$",
                        "$11\\,\\Omega$",
                        "$12\\,\\Omega$",
                        "$14\\,\\Omega$"
                    ],
                    "answer": 2,
                    "explanation": "$R = 10 \\times (1 + 4.0 \\times 10^{-3} \\times 50) = 10 \\times (1 + 0.20) = 10 \\times 1.20 = 12\\,\\Omega$"
                },
                {
                    "question": "抵抗が$11\\,\\Omega$になるのは何$°\\text{C}$のときか。",
                    "options": [
                        "$10\\,°\\text{C}$",
                        "$25\\,°\\text{C}$",
                        "$40\\,°\\text{C}$",
                        "$50\\,°\\text{C}$"
                    ],
                    "answer": 1,
                    "explanation": "$11 = 10(1 + 4.0 \\times 10^{-3} \\cdot t)$より$1.1 = 1 + 4.0 \\times 10^{-3} \\cdot t$。$t = \\dfrac{0.1}{4.0 \\times 10^{-3}} = 25\\,°\\text{C}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 475,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "$100\\,\\text{V}$-$60\\,\\text{W}$と表示された電球の抵抗はおよそいくらか（使用時の抵抗値）。",
            "options": [
                "$0.60\\,\\Omega$",
                "$1.7\\,\\Omega$",
                "$60\\,\\Omega$",
                "$170\\,\\Omega$"
            ],
            "answer": 3,
            "explanation": "$P = \\dfrac{V^2}{R}$より$R = \\dfrac{V^2}{P} = \\dfrac{100^2}{60} \\approx 170\\,\\Omega$です。",
            "image_url": ""
        },

        // ─── 追加: 第3章 電流と磁場 (476〜487) ───

        {
            "id": 476,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "ox",
            "classification": "磁場",
            "question": "磁力線は磁石のN極から出てS極に入る。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "磁力線は磁石のN極から出発し、S極に入ります。磁力線の接線の向きが磁場の向きを表します。",
            "image_url": ""
        },
        {
            "id": 477,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": "磁場",
            "question": "磁束$\\Phi$の単位はどれか。",
            "options": [
                "$\\text{T}$（テスラ）",
                "$\\text{Wb}$（ウェーバ）",
                "$\\text{H}$（ヘンリー）",
                "$\\text{A/m}$（アンペア毎メートル）"
            ],
            "answer": 1,
            "explanation": "磁束の単位はウェーバ$[\\text{Wb}]$です。$\\Phi = BS$より$1\\,\\text{Wb} = 1\\,\\text{T} \\cdot \\text{m}^2$です。",
            "image_url": ""
        },
        {
            "id": 478,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": "電流のつくる磁場",
            "question": "ソレノイド（長いコイル）の内部の磁場の特徴として正しいものはどれか。",
            "options": [
                "磁場はゼロである",
                "ほぼ一様な磁場が生じる",
                "磁場の向きが周期的に変わる",
                "中心に近いほど磁場が弱くなる"
            ],
            "answer": 1,
            "explanation": "十分に長いソレノイドの内部には、ほぼ一様（均一）な磁場が生じます。外部の磁場はほぼゼロです。",
            "image_url": ""
        },
        {
            "id": 479,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "電流のつくる磁場",
            "question": "単位長さあたり$n$回巻のソレノイドに電流$I$を流したとき、内部の磁場の大きさ$H$はどれか。",
            "options": [
                "$H = nI$",
                "$H = \\dfrac{nI}{2}$",
                "$H = \\dfrac{I}{2\\pi n}$",
                "$H = n^2 I$"
            ],
            "answer": 0,
            "explanation": "ソレノイド内部の磁場の大きさは$H = nI$です。巻数密度$n$と電流$I$に比例します。",
            "image_url": ""
        },
        {
            "id": 480,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": "電流が磁場から受ける力",
            "question": "平行な2本の導線に同じ向きの電流を流すと、導線間にはどのような力がはたらくか。",
            "options": [
                "引力",
                "斥力",
                "力ははたらかない",
                "引力と斥力が交互にはたらく"
            ],
            "answer": 0,
            "explanation": "同じ向きの電流が流れる平行導線には引力がはたらきます。逆向きの場合は斥力がはたらきます。",
            "image_url": ""
        },
        {
            "id": 481,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "ローレンツ力",
            "question": "磁束密度$B = 0.50\\,\\text{T}$の一様な磁場中を、電荷$q = 1.6 \\times 10^{-19}\\,\\text{C}$の電子が磁場に垂直に$v = 2.0 \\times 10^7\\,\\text{m/s}$で運動しているとき、受けるローレンツ力の大きさはいくらか。",
            "options": [
                "$1.6 \\times 10^{-12}\\,\\text{N}$",
                "$3.2 \\times 10^{-12}\\,\\text{N}$",
                "$1.6 \\times 10^{-11}\\,\\text{N}$",
                "$3.2 \\times 10^{-11}\\,\\text{N}$"
            ],
            "answer": 0,
            "explanation": "$F = qvB = 1.6 \\times 10^{-19} \\times 2.0 \\times 10^7 \\times 0.50 = 1.6 \\times 10^{-12}\\,\\text{N}$です。",
            "image_url": ""
        },
        {
            "id": 482,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "電流のつくる磁場",
            "question": "直線電流と円形コイルの磁場について、以下の小問に答えよ。透磁率$\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{T} \\cdot \\text{m/A}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "$I = 10\\,\\text{A}$の直線電流から$r = 0.10\\,\\text{m}$離れた点の磁束密度$B$はいくらか。",
                    "options": [
                        "$2.0 \\times 10^{-6}\\,\\text{T}$",
                        "$2.0 \\times 10^{-5}\\,\\text{T}$",
                        "$4.0 \\times 10^{-5}\\,\\text{T}$",
                        "$2.0 \\times 10^{-4}\\,\\text{T}$"
                    ],
                    "answer": 1,
                    "explanation": "$B = \\dfrac{\\mu_0 I}{2\\pi r} = \\dfrac{4\\pi \\times 10^{-7} \\times 10}{2\\pi \\times 0.10} = 2.0 \\times 10^{-5}\\,\\text{T}$"
                },
                {
                    "question": "半径$r = 0.050\\,\\text{m}$の円形コイルに$I = 5.0\\,\\text{A}$の電流を流したとき、中心の磁束密度$B$はいくらか。",
                    "options": [
                        "$2.0\\pi \\times 10^{-5}\\,\\text{T}$",
                        "$4.0\\pi \\times 10^{-5}\\,\\text{T}$",
                        "$2.0\\pi \\times 10^{-4}\\,\\text{T}$",
                        "$4.0\\pi \\times 10^{-4}\\,\\text{T}$"
                    ],
                    "answer": 0,
                    "explanation": "$B = \\dfrac{\\mu_0 I}{2r} = \\dfrac{4\\pi \\times 10^{-7} \\times 5.0}{2 \\times 0.050} = 2.0\\pi \\times 10^{-5}\\,\\text{T}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 483,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "電流が磁場から受ける力",
            "question": "平行導線間の力について、以下の小問に答えよ。$0.50\\,\\text{m}$離れた2本の十分に長い平行導線に、それぞれ$I_1 = 4.0\\,\\text{A}$、$I_2 = 6.0\\,\\text{A}$の同じ向きの電流が流れている。透磁率$\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{T} \\cdot \\text{m/A}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "導線1が導線2の位置につくる磁束密度はいくらか。",
                    "options": [
                        "$1.6 \\times 10^{-6}\\,\\text{T}$",
                        "$3.2 \\times 10^{-6}\\,\\text{T}$",
                        "$1.6 \\times 10^{-5}\\,\\text{T}$",
                        "$3.2 \\times 10^{-5}\\,\\text{T}$"
                    ],
                    "answer": 0,
                    "explanation": "$B = \\dfrac{\\mu_0 I_1}{2\\pi r} = \\dfrac{4\\pi \\times 10^{-7} \\times 4.0}{2\\pi \\times 0.50} = 1.6 \\times 10^{-6}\\,\\text{T}$"
                },
                {
                    "question": "導線2の長さ$1.0\\,\\text{m}$あたりに受ける力の大きさはいくらか。",
                    "options": [
                        "$4.8 \\times 10^{-6}\\,\\text{N}$",
                        "$9.6 \\times 10^{-6}\\,\\text{N}$",
                        "$4.8 \\times 10^{-5}\\,\\text{N}$",
                        "$9.6 \\times 10^{-5}\\,\\text{N}$"
                    ],
                    "answer": 1,
                    "explanation": "$F = BI_2L = 1.6 \\times 10^{-6} \\times 6.0 \\times 1.0 = 9.6 \\times 10^{-6}\\,\\text{N}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 484,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "ローレンツ力",
            "question": "荷電粒子の磁場中での運動について、以下の小問に答えよ。質量$m = 9.1 \\times 10^{-31}\\,\\text{kg}$、電荷$e = 1.6 \\times 10^{-19}\\,\\text{C}$の電子が磁束密度$B = 1.0 \\times 10^{-3}\\,\\text{T}$の磁場に垂直に$v = 4.0 \\times 10^6\\,\\text{m/s}$で入射した。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "電子の円運動の半径はおよそいくらか。",
                    "options": [
                        "$0.023\\,\\text{m}$",
                        "$0.046\\,\\text{m}$",
                        "$0.11\\,\\text{m}$",
                        "$0.23\\,\\text{m}$"
                    ],
                    "answer": 0,
                    "explanation": "$r = \\dfrac{mv}{eB} = \\dfrac{9.1 \\times 10^{-31} \\times 4.0 \\times 10^6}{1.6 \\times 10^{-19} \\times 1.0 \\times 10^{-3}} = \\dfrac{3.64 \\times 10^{-24}}{1.6 \\times 10^{-22}} \\approx 0.023\\,\\text{m}$"
                },
                {
                    "question": "ローレンツ力は電子の運動エネルギーを変えるか。",
                    "options": [
                        "増加させる",
                        "減少させる",
                        "変えない",
                        "速さによって変わる"
                    ],
                    "answer": 2,
                    "explanation": "ローレンツ力は常に速度に垂直にはたらくため、仕事をしません。したがって運動エネルギーは変化しません。"
                }
            ],
            "image_url": ""
        },
        {
            "id": 485,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "ox",
            "classification": "ローレンツ力",
            "question": "ローレンツ力は荷電粒子の速度に垂直にはたらくため、荷電粒子に対して仕事をしない。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "ローレンツ力は常に速度と垂直なので、力の方向と変位の方向が垂直であり、仕事$W = F \\cdot d \\cdot \\cos 90° = 0$です。",
            "image_url": ""
        },
        {
            "id": 486,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "電流が磁場から受ける力",
            "question": "磁束密度$B = 0.80\\,\\text{T}$の磁場中で、長さ$L = 0.25\\,\\text{m}$の導線に$I = 5.0\\,\\text{A}$の電流が磁場に対して$60°$の角度で流れるとき、導線が受ける力の大きさはいくらか。$\\sin 60° = \\dfrac{\\sqrt{3}}{2} \\approx 0.87$とする。",
            "options": [
                "$0.43\\,\\text{N}$",
                "$0.50\\,\\text{N}$",
                "$0.87\\,\\text{N}$",
                "$1.0\\,\\text{N}$"
            ],
            "answer": 2,
            "explanation": "$F = BIL\\sin\\theta = 0.80 \\times 5.0 \\times 0.25 \\times 0.87 = 0.87\\,\\text{N}$です。",
            "image_url": ""
        },
        {
            "id": 487,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "磁場",
            "question": "磁場と磁束について、以下の小問に答えよ。磁束密度$B = 0.30\\,\\text{T}$の一様な磁場がある。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "面積$S = 0.020\\,\\text{m}^2$のコイルの面を磁場に垂直に置いたとき、コイルを貫く磁束はいくらか。",
                    "options": [
                        "$3.0 \\times 10^{-3}\\,\\text{Wb}$",
                        "$6.0 \\times 10^{-3}\\,\\text{Wb}$",
                        "$1.5 \\times 10^{-2}\\,\\text{Wb}$",
                        "$3.0 \\times 10^{-2}\\,\\text{Wb}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Phi = BS = 0.30 \\times 0.020 = 6.0 \\times 10^{-3}\\,\\text{Wb}$"
                },
                {
                    "question": "コイルの面を磁場に対して$30°$傾けた（面の法線と磁場のなす角が$30°$）とき、磁束はいくらか。$\\cos 30° \\approx 0.87$とする。",
                    "options": [
                        "$3.0 \\times 10^{-3}\\,\\text{Wb}$",
                        "$5.2 \\times 10^{-3}\\,\\text{Wb}$",
                        "$6.0 \\times 10^{-3}\\,\\text{Wb}$",
                        "$6.9 \\times 10^{-3}\\,\\text{Wb}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Phi = BS\\cos\\theta = 0.30 \\times 0.020 \\times 0.87 = 5.2 \\times 10^{-3}\\,\\text{Wb}$"
                }
            ],
            "image_url": ""
        },

        // ─── 追加: 第4章 電磁誘導と電磁波 (488〜500) ───

        {
            "id": 488,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "ファラデーの電磁誘導の法則の説明として正しいものはどれか。",
            "options": [
                "磁場中の電流が力を受ける法則",
                "コイルを貫く磁束の変化率に比例した起電力が生じる法則",
                "電荷間にはたらく力に関する法則",
                "電流と磁場の関係を示す法則"
            ],
            "answer": 1,
            "explanation": "ファラデーの電磁誘導の法則は、コイルを貫く磁束の時間変化率に比例した誘導起電力が生じるという法則です。",
            "image_url": ""
        },
        {
            "id": 489,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "ox",
            "classification": "自己誘導と相互誘導",
            "question": "自己インダクタンスの単位はヘンリー$[\\text{H}]$である。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "自己インダクタンス$L$の単位はヘンリー$[\\text{H}]$です。$1\\,\\text{H} = 1\\,\\text{V} \\cdot \\text{s/A}$です。",
            "image_url": ""
        },
        {
            "id": 490,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": "交流の発生",
            "question": "交流の波形は一般にどのような関数で表されるか。",
            "options": [
                "指数関数",
                "正弦関数（sin）",
                "対数関数",
                "一次関数"
            ],
            "answer": 1,
            "explanation": "交流の電圧や電流は正弦関数（sin）で表されます。$V = V_0 \\sin \\omega t$のような形です。",
            "image_url": ""
        },
        {
            "id": 491,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": "電磁波",
            "question": "電磁波を波長の短い順に並べたとき、正しいものはどれか。",
            "options": [
                "電波 → 赤外線 → 可視光線 → 紫外線",
                "紫外線 → 可視光線 → 赤外線 → 電波",
                "赤外線 → 電波 → 紫外線 → 可視光線",
                "可視光線 → 紫外線 → 電波 → 赤外線"
            ],
            "answer": 1,
            "explanation": "波長の短い順に紫外線 → 可視光線 → 赤外線 → 電波です。（さらに短いものにX線、ガンマ線があります。）",
            "image_url": ""
        },
        {
            "id": 492,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "面積$0.040\\,\\text{m}^2$のコイル（巻数$N = 100$）を貫く磁束密度が$0.20\\,\\text{s}$間に$0.50\\,\\text{T}$から$0$に変化したとき、誘導起電力の大きさはいくらか。",
            "options": [
                "$1.0\\,\\text{V}$",
                "$5.0\\,\\text{V}$",
                "$10\\,\\text{V}$",
                "$100\\,\\text{V}$"
            ],
            "answer": 2,
            "explanation": "$|V| = N\\dfrac{\\Delta \\Phi}{\\Delta t} = N\\dfrac{B \\cdot S}{\\Delta t} = 100 \\times \\dfrac{0.50 \\times 0.040}{0.20} = 100 \\times 0.10 = 10\\,\\text{V}$",
            "image_url": ""
        },
        {
            "id": 493,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "交流回路",
            "question": "交流回路でコイル（インダクタンス$L$）に角周波数$\\omega$の交流を流したとき、誘導リアクタンス$X_L$はどれか。",
            "options": [
                "$X_L = \\omega L$",
                "$X_L = \\dfrac{1}{\\omega L}$",
                "$X_L = \\omega^2 L$",
                "$X_L = \\dfrac{L}{\\omega}$"
            ],
            "answer": 0,
            "explanation": "コイルの誘導リアクタンスは$X_L = \\omega L$です。周波数が高いほどリアクタンスは大きくなります。",
            "image_url": ""
        },
        {
            "id": 494,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "交流回路",
            "question": "交流回路でコンデンサー（電気容量$C$）に角周波数$\\omega$の交流を流したとき、容量リアクタンス$X_C$はどれか。",
            "options": [
                "$X_C = \\omega C$",
                "$X_C = \\dfrac{1}{\\omega C}$",
                "$X_C = \\omega^2 C$",
                "$X_C = \\dfrac{C}{\\omega}$"
            ],
            "answer": 1,
            "explanation": "コンデンサーの容量リアクタンスは$X_C = \\dfrac{1}{\\omega C}$です。周波数が高いほどリアクタンスは小さくなります。",
            "image_url": ""
        },
        {
            "id": 495,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "自己誘導と相互誘導",
            "question": "コイルのエネルギーと自己誘導について、以下の小問に答えよ。自己インダクタンス$L = 2.0\\,\\text{H}$のコイルに$3.0\\,\\text{A}$の電流が流れている。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "コイルに蓄えられるエネルギーはいくらか。",
                    "options": [
                        "$3.0\\,\\text{J}$",
                        "$6.0\\,\\text{J}$",
                        "$9.0\\,\\text{J}$",
                        "$18\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$U = \\dfrac{1}{2}LI^2 = \\dfrac{1}{2} \\times 2.0 \\times 3.0^2 = \\dfrac{1}{2} \\times 2.0 \\times 9.0 = 9.0\\,\\text{J}$"
                },
                {
                    "question": "この電流が$0.10\\,\\text{s}$で$0\\,\\text{A}$に減少したとき、自己誘導起電力の大きさはいくらか。",
                    "options": [
                        "$6.0\\,\\text{V}$",
                        "$20\\,\\text{V}$",
                        "$30\\,\\text{V}$",
                        "$60\\,\\text{V}$"
                    ],
                    "answer": 3,
                    "explanation": "$|V| = L\\dfrac{\\Delta I}{\\Delta t} = 2.0 \\times \\dfrac{3.0}{0.10} = 60\\,\\text{V}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 496,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "交流の発生",
            "question": "交流の発生と性質について、以下の小問に答えよ。最大値$V_0 = 141\\,\\text{V}$の交流電圧がある。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "実効値$V_e$はおよそいくらか。$\\dfrac{1}{\\sqrt{2}} \\approx 0.707$とする。",
                    "options": [
                        "$70.5\\,\\text{V}$",
                        "$100\\,\\text{V}$",
                        "$141\\,\\text{V}$",
                        "$200\\,\\text{V}$"
                    ],
                    "answer": 1,
                    "explanation": "$V_e = \\dfrac{V_0}{\\sqrt{2}} = \\dfrac{141}{\\sqrt{2}} \\approx 141 \\times 0.707 \\approx 100\\,\\text{V}$"
                },
                {
                    "question": "この交流を$50\\,\\Omega$の抵抗に接続したとき、消費される平均電力はいくらか。",
                    "options": [
                        "$100\\,\\text{W}$",
                        "$200\\,\\text{W}$",
                        "$400\\,\\text{W}$",
                        "$800\\,\\text{W}$"
                    ],
                    "answer": 1,
                    "explanation": "$P = \\dfrac{V_e^2}{R} = \\dfrac{100^2}{50} = 200\\,\\text{W}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 497,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "交流回路",
            "question": "変圧器と送電について、以下の小問に答えよ。発電所から消費地まで送電する。送電線の抵抗は合計$10\\,\\Omega$、送電電力は$1.0 \\times 10^6\\,\\text{W}$とする。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "$1000\\,\\text{V}$で送電したとき、送電線を流れる電流はいくらか。",
                    "options": [
                        "$100\\,\\text{A}$",
                        "$1000\\,\\text{A}$",
                        "$1.0 \\times 10^4\\,\\text{A}$",
                        "$1.0 \\times 10^5\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$I = \\dfrac{P}{V} = \\dfrac{1.0 \\times 10^6}{1000} = 1000\\,\\text{A}$"
                },
                {
                    "question": "このとき送電線で失われる電力はいくらか。",
                    "options": [
                        "$1.0 \\times 10^4\\,\\text{W}$",
                        "$1.0 \\times 10^5\\,\\text{W}$",
                        "$1.0 \\times 10^6\\,\\text{W}$",
                        "$1.0 \\times 10^7\\,\\text{W}$"
                    ],
                    "answer": 3,
                    "explanation": "$P_{\\text{loss}} = RI^2 = 10 \\times 1000^2 = 1.0 \\times 10^7\\,\\text{W}$"
                },
                {
                    "question": "送電電圧を$10000\\,\\text{V}$に上げると、送電線での電力損失はいくらになるか。",
                    "options": [
                        "$1.0 \\times 10^3\\,\\text{W}$",
                        "$1.0 \\times 10^4\\,\\text{W}$",
                        "$1.0 \\times 10^5\\,\\text{W}$",
                        "$1.0 \\times 10^6\\,\\text{W}$"
                    ],
                    "answer": 2,
                    "explanation": "$I = \\dfrac{1.0 \\times 10^6}{10000} = 100\\,\\text{A}$。$P_{\\text{loss}} = 10 \\times 100^2 = 1.0 \\times 10^5\\,\\text{W}$。電圧を10倍にすると損失は$\\dfrac{1}{100}$になります。"
                }
            ],
            "image_url": ""
        },
        {
            "id": 498,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "磁場中を回転するコイルの電磁誘導について、以下の小問に答えよ。面積$S = 0.10\\,\\text{m}^2$、巻数$N = 50$のコイルが磁束密度$B = 0.20\\,\\text{T}$の一様な磁場中で回転している。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "コイルの面が磁場に垂直なとき、コイルを貫く磁束はいくらか。",
                    "options": [
                        "$0.010\\,\\text{Wb}$",
                        "$0.020\\,\\text{Wb}$",
                        "$1.0\\,\\text{Wb}$",
                        "$10\\,\\text{Wb}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Phi = BS = 0.20 \\times 0.10 = 0.020\\,\\text{Wb}$"
                },
                {
                    "question": "コイルが磁場に垂直の状態から磁場に平行の状態まで$0.050\\,\\text{s}$で回転したとき、誘導起電力の平均の大きさはいくらか。",
                    "options": [
                        "$10\\,\\text{V}$",
                        "$20\\,\\text{V}$",
                        "$50\\,\\text{V}$",
                        "$100\\,\\text{V}$"
                    ],
                    "answer": 1,
                    "explanation": "磁束が$0.020\\,\\text{Wb}$から$0\\,\\text{Wb}$に変化するので$|V| = N\\dfrac{\\Delta \\Phi}{\\Delta t} = 50 \\times \\dfrac{0.020}{0.050} = 20\\,\\text{V}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 499,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "電磁波",
            "question": "電磁波の性質について、以下の小問に答えよ。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "真空中で周波数$f = 6.0 \\times 10^{14}\\,\\text{Hz}$の電磁波の波長はいくらか。光速$c = 3.0 \\times 10^8\\,\\text{m/s}$とする。",
                    "options": [
                        "$5.0 \\times 10^{-7}\\,\\text{m}$",
                        "$2.0 \\times 10^{-6}\\,\\text{m}$",
                        "$5.0 \\times 10^{-6}\\,\\text{m}$",
                        "$2.0 \\times 10^{-5}\\,\\text{m}$"
                    ],
                    "answer": 0,
                    "explanation": "$\\lambda = \\dfrac{c}{f} = \\dfrac{3.0 \\times 10^8}{6.0 \\times 10^{14}} = 5.0 \\times 10^{-7}\\,\\text{m}$"
                },
                {
                    "question": "この波長の電磁波は何に分類されるか。",
                    "options": [
                        "赤外線",
                        "可視光線",
                        "紫外線",
                        "X線"
                    ],
                    "answer": 1,
                    "explanation": "$500\\,\\text{nm}$は可視光線の範囲（約$380 \\sim 780\\,\\text{nm}$）にあり、青緑色の光に相当します。"
                }
            ],
            "image_url": ""
        },
        {
            "id": 500,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "交流回路",
            "question": "RLC直列回路について、以下の小問に答えよ。抵抗$R = 30\\,\\Omega$、誘導リアクタンス$X_L = 50\\,\\Omega$、容量リアクタンス$X_C = 10\\,\\Omega$の素子を直列に接続し、実効値$V_e = 100\\,\\text{V}$の交流電源に接続した。",
            "options": [],
            "answer": 0,
            "explanation": "",
            "sub_questions": [
                {
                    "question": "回路のインピーダンス$Z$はいくらか。",
                    "options": [
                        "$30\\,\\Omega$",
                        "$40\\,\\Omega$",
                        "$50\\,\\Omega$",
                        "$90\\,\\Omega$"
                    ],
                    "answer": 2,
                    "explanation": "$Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{30^2 + (50-10)^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\,\\Omega$"
                },
                {
                    "question": "回路に流れる電流の実効値はいくらか。",
                    "options": [
                        "$1.0\\,\\text{A}$",
                        "$2.0\\,\\text{A}$",
                        "$2.5\\,\\text{A}$",
                        "$3.3\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$I_e = \\dfrac{V_e}{Z} = \\dfrac{100}{50} = 2.0\\,\\text{A}$"
                },
                {
                    "question": "回路で消費される平均電力はいくらか。",
                    "options": [
                        "$60\\,\\text{W}$",
                        "$120\\,\\text{W}$",
                        "$200\\,\\text{W}$",
                        "$400\\,\\text{W}$"
                    ],
                    "answer": 1,
                    "explanation": "交流回路の消費電力は抵抗分のみで$P = RI_e^2 = 30 \\times 2.0^2 = 120\\,\\text{W}$です。"
                }
            ],
            "image_url": ""
        },

        // ============================================================
        // ここから追加30問（ID: 501〜530）
        // A: 10問, B: 10問, C: 10問
        // ============================================================

        // ─── 追加: 第1章 電場 (501〜507) ───

        {
            "id": 501,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": "電場",
            "question": "電場の強さの単位は$\\text{N/C}$であり、$\\text{V/m}$とも等しい。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "$\\text{N/C} = \\text{V/m}$は同じ単位です。電場の定義$E = \\dfrac{F}{q}$から$\\text{N/C}$、電位の勾配$E = -\\dfrac{\\Delta V}{\\Delta x}$から$\\text{V/m}$が得られます。",
            "image_url": ""
        },
        {
            "id": 502,
            "category": "p4_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": "電位",
            "question": "等電位面上で電荷を移動させたとき、電場がする仕事はいくらか。",
            "options": [
                "正の仕事",
                "負の仕事",
                "ゼロ",
                "移動距離に比例する仕事"
            ],
            "answer": 2,
            "explanation": "等電位面上では電位差がゼロなので、電場が電荷にする仕事$W = q\\Delta V = 0$です。",
            "image_url": ""
        },
        {
            "id": 503,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "電場",
            "question": "点電荷$Q = 4.0 \\times 10^{-8}\\,\\text{C}$から$r = 0.60\\,\\text{m}$離れた点の電場の強さはいくらか。クーロン定数を$k = 9.0 \\times 10^9\\,\\text{N} \\cdot \\text{m}^2\\text{/C}^2$とする。",
            "options": [
                "$5.0 \\times 10^2\\,\\text{V/m}$",
                "$1.0 \\times 10^3\\,\\text{V/m}$",
                "$6.0 \\times 10^3\\,\\text{V/m}$",
                "$3.6 \\times 10^4\\,\\text{V/m}$"
            ],
            "answer": 1,
            "explanation": "$E = k\\dfrac{Q}{r^2} = 9.0 \\times 10^9 \\times \\dfrac{4.0 \\times 10^{-8}}{0.60^2} = 9.0 \\times 10^9 \\times \\dfrac{4.0 \\times 10^{-8}}{0.36} = 1.0 \\times 10^3\\,\\text{V/m}$",
            "image_url": ""
        },
        {
            "id": 504,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "コンデンサー",
            "question": "極板間の距離$d = 2.0 \\times 10^{-3}\\,\\text{m}$の平行板コンデンサーに$V = 100\\,\\text{V}$の電圧を加えた。極板間の電場の強さはいくらか。",
            "options": [
                "$2.0 \\times 10^3\\,\\text{V/m}$",
                "$5.0 \\times 10^3\\,\\text{V/m}$",
                "$2.0 \\times 10^4\\,\\text{V/m}$",
                "$5.0 \\times 10^4\\,\\text{V/m}$"
            ],
            "answer": 3,
            "explanation": "平行板コンデンサーの電場は$E = \\dfrac{V}{d} = \\dfrac{100}{2.0 \\times 10^{-3}} = 5.0 \\times 10^4\\,\\text{V/m}$です。",
            "image_url": ""
        },
        {
            "id": 505,
            "category": "p4_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "コンデンサー",
            "question": "コンデンサーの接続について、以下の小問に答えよ。$C_1 = 2.0\\,\\mu\\text{F}$、$C_2 = 3.0\\,\\mu\\text{F}$の2つのコンデンサーがある。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "$C_1 = 2.0\\,\\mu\\text{F}$、$C_2 = 3.0\\,\\mu\\text{F}$の2つのコンデンサーがある。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "2つを並列に接続したときの合成容量はいくらか。",
                    "options": [
                        "$1.2\\,\\mu\\text{F}$",
                        "$2.5\\,\\mu\\text{F}$",
                        "$5.0\\,\\mu\\text{F}$",
                        "$6.0\\,\\mu\\text{F}$"
                    ],
                    "answer": 2,
                    "explanation": "並列接続の合成容量は$C = C_1 + C_2 = 2.0 + 3.0 = 5.0\\,\\mu\\text{F}$です。"
                },
                {
                    "type": "choice",
                    "question": "2つを直列に接続したときの合成容量はいくらか。",
                    "options": [
                        "$1.2\\,\\mu\\text{F}$",
                        "$2.5\\,\\mu\\text{F}$",
                        "$5.0\\,\\mu\\text{F}$",
                        "$6.0\\,\\mu\\text{F}$"
                    ],
                    "answer": 0,
                    "explanation": "直列接続の合成容量は$\\dfrac{1}{C} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} = \\dfrac{1}{2.0} + \\dfrac{1}{3.0} = \\dfrac{5}{6}$より$C = 1.2\\,\\mu\\text{F}$です。"
                },
                {
                    "type": "choice",
                    "question": "直列接続で$V = 12\\,\\text{V}$の電圧を加えたとき、$C_1$にかかる電圧はいくらか。",
                    "options": [
                        "$4.8\\,\\text{V}$",
                        "$6.0\\,\\text{V}$",
                        "$7.2\\,\\text{V}$",
                        "$12\\,\\text{V}$"
                    ],
                    "answer": 2,
                    "explanation": "直列では電荷が等しく$Q = CV = 1.2 \\times 10^{-6} \\times 12 = 1.44 \\times 10^{-5}\\,\\text{C}$。$V_1 = \\dfrac{Q}{C_1} = \\dfrac{1.44 \\times 10^{-5}}{2.0 \\times 10^{-6}} = 7.2\\,\\text{V}$です。"
                }
            ],
            "image_url": ""
        },
        {
            "id": 506,
            "category": "p4_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": "電位",
            "question": "点電荷がつくる電位について、以下の小問に答えよ。クーロン定数を$k = 9.0 \\times 10^9\\,\\text{N} \\cdot \\text{m}^2\\text{/C}^2$とする。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "$Q = 5.0 \\times 10^{-9}\\,\\text{C}$の正の点電荷がある。クーロン定数を$k = 9.0 \\times 10^9\\,\\text{N} \\cdot \\text{m}^2\\text{/C}^2$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "点電荷から$r = 0.30\\,\\text{m}$離れた点Aの電位はいくらか。",
                    "options": [
                        "$50\\,\\text{V}$",
                        "$100\\,\\text{V}$",
                        "$150\\,\\text{V}$",
                        "$300\\,\\text{V}$"
                    ],
                    "answer": 2,
                    "explanation": "$V = k\\dfrac{Q}{r} = 9.0 \\times 10^9 \\times \\dfrac{5.0 \\times 10^{-9}}{0.30} = 150\\,\\text{V}$"
                },
                {
                    "type": "choice",
                    "question": "点電荷から$r = 0.90\\,\\text{m}$離れた点Bの電位はいくらか。",
                    "options": [
                        "$25\\,\\text{V}$",
                        "$50\\,\\text{V}$",
                        "$100\\,\\text{V}$",
                        "$150\\,\\text{V}$"
                    ],
                    "answer": 1,
                    "explanation": "$V = k\\dfrac{Q}{r} = 9.0 \\times 10^9 \\times \\dfrac{5.0 \\times 10^{-9}}{0.90} = 50\\,\\text{V}$"
                },
                {
                    "type": "choice",
                    "question": "点Aから点Bまで$q = 2.0 \\times 10^{-6}\\,\\text{C}$の正電荷を移動させるとき、電場がする仕事はいくらか。",
                    "options": [
                        "$1.0 \\times 10^{-4}\\,\\text{J}$",
                        "$2.0 \\times 10^{-4}\\,\\text{J}$",
                        "$3.0 \\times 10^{-4}\\,\\text{J}$",
                        "$5.0 \\times 10^{-4}\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$W = q(V_A - V_B) = 2.0 \\times 10^{-6} \\times (150 - 50) = 2.0 \\times 10^{-4}\\,\\text{J}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 507,
            "category": "p4_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": "物質と電場",
            "question": "比誘電率$\\varepsilon_r = 4.0$の誘電体を平行板コンデンサーの極板間に挿入すると、電気容量はどうなるか。",
            "options": [
                "$\\dfrac{1}{4}$倍になる",
                "変わらない",
                "$2$倍になる",
                "$4$倍になる"
            ],
            "answer": 3,
            "explanation": "誘電体を挿入すると電気容量は比誘電率倍になり、$C' = \\varepsilon_r C = 4.0C$です。",
            "image_url": ""
        },

        // ─── 追加: 第2章 電流 (508〜515) ───

        {
            "id": 508,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": "オームの法則",
            "question": "オームの法則によれば、導体に流れる電流は導体にかかる電圧に比例する。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "オームの法則$V = RI$より、抵抗が一定のとき電流$I$は電圧$V$に比例します。",
            "image_url": ""
        },
        {
            "id": 509,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "直流回路",
            "question": "キルヒホッフの第1法則（電流則）が表すのはどれか。",
            "options": [
                "回路の任意の接続点に流入する電流の和は流出する電流の和に等しい",
                "閉回路の起電力の和は電圧降下の和に等しい",
                "抵抗の直列合成は各抵抗の和に等しい",
                "電力は電圧と電流の積に等しい"
            ],
            "answer": 0,
            "explanation": "キルヒホッフの第1法則は電荷保存則に基づき、接続点（ノード）に流れ込む電流の総和がゼロであることを表します。",
            "image_url": ""
        },
        {
            "id": 510,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "オームの法則",
            "question": "長さ$L$、断面積$S$、抵抗率$\\rho$の導線の抵抗$R$を表す式はどれか。",
            "options": [
                "$R = \\dfrac{\\rho S}{L}$",
                "$R = \\dfrac{\\rho L}{S}$",
                "$R = \\rho L S$",
                "$R = \\dfrac{L}{\\rho S}$"
            ],
            "answer": 1,
            "explanation": "導線の抵抗は$R = \\dfrac{\\rho L}{S}$です。長さに比例し断面積に反比例します。",
            "image_url": ""
        },
        {
            "id": 511,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "$6.0\\,\\Omega$の抵抗3つを並列に接続したとき、合成抵抗はいくらか。",
            "options": [
                "$2.0\\,\\Omega$",
                "$3.0\\,\\Omega$",
                "$6.0\\,\\Omega$",
                "$18\\,\\Omega$"
            ],
            "answer": 0,
            "explanation": "並列接続の合成抵抗は$\\dfrac{1}{R} = \\dfrac{1}{6.0} + \\dfrac{1}{6.0} + \\dfrac{1}{6.0} = \\dfrac{3}{6.0} = \\dfrac{1}{2.0}$より$R = 2.0\\,\\Omega$です。",
            "image_url": ""
        },
        {
            "id": 512,
            "category": "p4_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": "半導体",
            "question": "ダイオードの主な性質はどれか。",
            "options": [
                "電流を一方向にのみ流す整流作用",
                "電圧を増幅する作用",
                "電流を蓄える作用",
                "磁場を発生させる作用"
            ],
            "answer": 0,
            "explanation": "ダイオードはpn接合を利用し、順方向には電流を流しますが逆方向にはほとんど流さない整流作用を持ちます。",
            "image_url": ""
        },
        {
            "id": 513,
            "category": "p4_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "直流回路",
            "question": "ホイートストンブリッジ回路について、以下の小問に答えよ。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "ホイートストンブリッジ回路で$R_1 = 10\\,\\Omega$、$R_2 = 20\\,\\Omega$、$R_3 = 30\\,\\Omega$のとき、検流計に電流が流れない（平衡状態）であった。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "平衡条件$R_1 R_4 = R_2 R_3$から、未知抵抗$R_4$の値はいくらか。",
                    "options": [
                        "$15\\,\\Omega$",
                        "$40\\,\\Omega$",
                        "$60\\,\\Omega$",
                        "$120\\,\\Omega$"
                    ],
                    "answer": 2,
                    "explanation": "$R_4 = \\dfrac{R_2 R_3}{R_1} = \\dfrac{20 \\times 30}{10} = 60\\,\\Omega$"
                },
                {
                    "type": "choice",
                    "question": "この回路全体に$V = 12\\,\\text{V}$を加えたとき、$R_1$と$R_3$の直列経路に流れる電流はいくらか。",
                    "options": [
                        "$0.10\\,\\text{A}$",
                        "$0.20\\,\\text{A}$",
                        "$0.30\\,\\text{A}$",
                        "$0.40\\,\\text{A}$"
                    ],
                    "answer": 2,
                    "explanation": "$R_1 + R_3 = 10 + 30 = 40\\,\\Omega$に$12\\,\\text{V}$がかかるので$I = \\dfrac{12}{40} = 0.30\\,\\text{A}$"
                },
                {
                    "type": "choice",
                    "question": "$R_2$と$R_4$の直列経路に流れる電流はいくらか。",
                    "options": [
                        "$0.10\\,\\text{A}$",
                        "$0.15\\,\\text{A}$",
                        "$0.20\\,\\text{A}$",
                        "$0.30\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$R_2 + R_4 = 20 + 60 = 80\\,\\Omega$に$12\\,\\text{V}$がかかるので$I = \\dfrac{12}{80} = 0.15\\,\\text{A}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 514,
            "category": "p4_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": "直流回路",
            "question": "電力と電力量について、以下の小問に答えよ。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "$100\\,\\text{V}$、$500\\,\\text{W}$の電熱器を$100\\,\\text{V}$の電源に接続した。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "電熱器に流れる電流はいくらか。",
                    "options": [
                        "$2.0\\,\\text{A}$",
                        "$5.0\\,\\text{A}$",
                        "$10\\,\\text{A}$",
                        "$50\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$I = \\dfrac{P}{V} = \\dfrac{500}{100} = 5.0\\,\\text{A}$"
                },
                {
                    "type": "choice",
                    "question": "電熱器の抵抗はいくらか。",
                    "options": [
                        "$5.0\\,\\Omega$",
                        "$10\\,\\Omega$",
                        "$20\\,\\Omega$",
                        "$50\\,\\Omega$"
                    ],
                    "answer": 2,
                    "explanation": "$R = \\dfrac{V}{I} = \\dfrac{100}{5.0} = 20\\,\\Omega$（または$R = \\dfrac{V^2}{P} = \\dfrac{100^2}{500} = 20\\,\\Omega$）"
                },
                {
                    "type": "choice",
                    "question": "この電熱器を$10$分間使用したときの電力量は何$\\text{kJ}$か。",
                    "options": [
                        "$50\\,\\text{kJ}$",
                        "$100\\,\\text{kJ}$",
                        "$300\\,\\text{kJ}$",
                        "$500\\,\\text{kJ}$"
                    ],
                    "answer": 2,
                    "explanation": "$W = Pt = 500 \\times 10 \\times 60 = 300{,}000\\,\\text{J} = 300\\,\\text{kJ}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 515,
            "category": "p4_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": "直流回路",
            "question": "電池の内部抵抗$r = 1.0\\,\\Omega$、起電力$E = 3.0\\,\\text{V}$の電池に$R = 5.0\\,\\Omega$の外部抵抗を接続したとき、端子電圧はいくらか。",
            "options": [
                "$2.0\\,\\text{V}$",
                "$2.5\\,\\text{V}$",
                "$3.0\\,\\text{V}$",
                "$3.5\\,\\text{V}$"
            ],
            "answer": 1,
            "explanation": "$I = \\dfrac{E}{R + r} = \\dfrac{3.0}{5.0 + 1.0} = 0.50\\,\\text{A}$。端子電圧は$V = E - rI = 3.0 - 1.0 \\times 0.50 = 2.5\\,\\text{V}$です。",
            "image_url": ""
        },

        // ─── 追加: 第3章 電流と磁場 (516〜522) ───

        {
            "id": 516,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": "電流と磁場",
            "question": "直線電流のまわりにできる磁場の向きを決める法則はどれか。",
            "options": [
                "フレミングの左手の法則",
                "右ねじの法則（アンペールの右手の法則）",
                "レンツの法則",
                "ファラデーの法則"
            ],
            "answer": 1,
            "explanation": "直線電流がつくる磁場の向きは、右ねじの法則（アンペールの右手の法則）で決まります。電流の向きに右ねじを進めると、ねじの回転方向が磁場の向きです。",
            "image_url": ""
        },
        {
            "id": 517,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "ox",
            "classification": "電流が磁場から受ける力",
            "question": "磁場中の電流が受ける力の向きは、フレミングの左手の法則で求められる。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "フレミングの左手の法則では、人差し指を磁場の向き、中指を電流の向きに合わせると、親指が力の向きを表します。",
            "image_url": ""
        },
        {
            "id": 518,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "電流と磁場",
            "question": "直線電流$I$から距離$r$離れた点の磁場の強さ$H$はどれか。",
            "options": [
                "$H = \\dfrac{I}{2\\pi r}$",
                "$H = \\dfrac{2\\pi I}{r}$",
                "$H = \\dfrac{I}{r}$",
                "$H = \\dfrac{I}{4\\pi r^2}$"
            ],
            "answer": 0,
            "explanation": "直線電流がつくる磁場の強さは$H = \\dfrac{I}{2\\pi r}$です。距離$r$に反比例します。",
            "image_url": ""
        },
        {
            "id": 519,
            "category": "p4_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": "電流が磁場から受ける力",
            "question": "磁束密度$B = 0.40\\,\\text{T}$の一様な磁場中に、磁場に垂直に長さ$L = 0.50\\,\\text{m}$の導線を置き、$I = 3.0\\,\\text{A}$の電流を流した。導線が受ける力の大きさはいくらか。",
            "options": [
                "$0.20\\,\\text{N}$",
                "$0.40\\,\\text{N}$",
                "$0.60\\,\\text{N}$",
                "$1.2\\,\\text{N}$"
            ],
            "answer": 2,
            "explanation": "$F = BIL = 0.40 \\times 3.0 \\times 0.50 = 0.60\\,\\text{N}$",
            "image_url": ""
        },
        {
            "id": 520,
            "category": "p4_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": "ローレンツ力",
            "question": "ローレンツ力の大きさを表す式として正しいものはどれか。ただし荷電粒子の電荷を$q$、速さを$v$、磁束密度を$B$とし、速度と磁場は垂直とする。",
            "options": [
                "$f = qvB$",
                "$f = qv^2B$",
                "$f = \\dfrac{qB}{v}$",
                "$f = qv^2B^2$"
            ],
            "answer": 0,
            "explanation": "速度と磁場が垂直のとき、ローレンツ力の大きさは$f = qvB$です。",
            "image_url": ""
        },
        {
            "id": 521,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "ローレンツ力",
            "question": "磁場中の荷電粒子の運動について、以下の小問に答えよ。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "磁束密度$B = 0.20\\,\\text{T}$の一様な磁場に垂直に、質量$m = 1.6 \\times 10^{-27}\\,\\text{kg}$、電荷$q = 1.6 \\times 10^{-19}\\,\\text{C}$の陽子が速さ$v = 4.0 \\times 10^6\\,\\text{m/s}$で入射した。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "陽子に作用するローレンツ力の大きさはいくらか。",
                    "options": [
                        "$1.28 \\times 10^{-13}\\,\\text{N}$",
                        "$6.4 \\times 10^{-14}\\,\\text{N}$",
                        "$3.2 \\times 10^{-14}\\,\\text{N}$",
                        "$1.6 \\times 10^{-14}\\,\\text{N}$"
                    ],
                    "answer": 0,
                    "explanation": "$f = qvB = 1.6 \\times 10^{-19} \\times 4.0 \\times 10^6 \\times 0.20 = 1.28 \\times 10^{-13}\\,\\text{N}$"
                },
                {
                    "type": "choice",
                    "question": "陽子が描く円運動の半径はいくらか。",
                    "options": [
                        "$0.10\\,\\text{m}$",
                        "$0.20\\,\\text{m}$",
                        "$0.50\\,\\text{m}$",
                        "$1.0\\,\\text{m}$"
                    ],
                    "answer": 1,
                    "explanation": "$r = \\dfrac{mv}{qB} = \\dfrac{1.6 \\times 10^{-27} \\times 4.0 \\times 10^6}{1.6 \\times 10^{-19} \\times 0.20} = \\dfrac{6.4 \\times 10^{-21}}{3.2 \\times 10^{-20}} = 0.20\\,\\text{m}$"
                },
                {
                    "type": "choice",
                    "question": "陽子の円運動の周期はいくらか。",
                    "options": [
                        "$\\pi \\times 10^{-7}\\,\\text{s}$",
                        "$2\\pi \\times 10^{-7}\\,\\text{s}$",
                        "$\\pi \\times 10^{-6}\\,\\text{s}$",
                        "$2\\pi \\times 10^{-6}\\,\\text{s}$"
                    ],
                    "answer": 0,
                    "explanation": "$T = \\dfrac{2\\pi r}{v} = \\dfrac{2\\pi \\times 0.20}{4.0 \\times 10^6} = \\pi \\times 10^{-7}\\,\\text{s}$（または$T = \\dfrac{2\\pi m}{qB}$から求められます）"
                }
            ],
            "image_url": ""
        },
        {
            "id": 522,
            "category": "p4_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": "電流と磁場",
            "question": "ソレノイドの磁場について、以下の小問に答えよ。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "長さ$l = 0.50\\,\\text{m}$のソレノイドに$N = 1000$回の巻線があり、$I = 2.0\\,\\text{A}$の電流を流した。真空の透磁率を$\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{T} \\cdot \\text{m/A}$とする。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "ソレノイド内部の磁場の強さ$H$はいくらか。",
                    "options": [
                        "$1.0 \\times 10^3\\,\\text{A/m}$",
                        "$2.0 \\times 10^3\\,\\text{A/m}$",
                        "$4.0 \\times 10^3\\,\\text{A/m}$",
                        "$1.0 \\times 10^4\\,\\text{A/m}$"
                    ],
                    "answer": 2,
                    "explanation": "$H = nI = \\dfrac{N}{l} \\times I = \\dfrac{1000}{0.50} \\times 2.0 = 4.0 \\times 10^3\\,\\text{A/m}$"
                },
                {
                    "type": "choice",
                    "question": "ソレノイド内部の磁束密度$B$はいくらか。",
                    "options": [
                        "$1.6\\pi \\times 10^{-3}\\,\\text{T}$",
                        "$3.2\\pi \\times 10^{-3}\\,\\text{T}$",
                        "$8.0\\pi \\times 10^{-3}\\,\\text{T}$",
                        "$1.6\\pi \\times 10^{-2}\\,\\text{T}$"
                    ],
                    "answer": 0,
                    "explanation": "$B = \\mu_0 H = 4\\pi \\times 10^{-7} \\times 4.0 \\times 10^3 = 1.6\\pi \\times 10^{-3}\\,\\text{T}$"
                },
                {
                    "type": "choice",
                    "question": "電流を$3.0\\,\\text{A}$に増やしたとき、磁場の強さ$H$はいくらか。",
                    "options": [
                        "$4.0 \\times 10^3\\,\\text{A/m}$",
                        "$5.0 \\times 10^3\\,\\text{A/m}$",
                        "$6.0 \\times 10^3\\,\\text{A/m}$",
                        "$8.0 \\times 10^3\\,\\text{A/m}$"
                    ],
                    "answer": 2,
                    "explanation": "$H = nI = 2000 \\times 3.0 = 6.0 \\times 10^3\\,\\text{A/m}$。磁場の強さは電流に比例します。"
                }
            ],
            "image_url": ""
        },

        // ─── 追加: 第4章 電磁誘導と電磁波 (523〜530) ───

        {
            "id": 523,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "ファラデーの電磁誘導の法則で、誘導起電力$V$の大きさを表す式はどれか。ただしコイルの巻数を$N$、磁束の時間変化を$\\dfrac{\\Delta\\Phi}{\\Delta t}$とする。",
            "options": [
                "$V = N\\dfrac{\\Delta\\Phi}{\\Delta t}$",
                "$V = \\dfrac{\\Delta\\Phi}{N\\Delta t}$",
                "$V = N\\Delta\\Phi \\cdot \\Delta t$",
                "$V = \\dfrac{N}{\\Delta\\Phi \\cdot \\Delta t}$"
            ],
            "answer": 0,
            "explanation": "ファラデーの法則より$V = N\\dfrac{\\Delta\\Phi}{\\Delta t}$です。誘導起電力は巻数と磁束の時間変化率に比例します。",
            "image_url": ""
        },
        {
            "id": 524,
            "category": "p4_c4",
            "difficulty": "A",
            "type": "ox",
            "classification": "自己誘導と相互誘導",
            "question": "コイルに流れる電流が変化するとき、その変化を妨げる向きに起電力が生じる現象を自己誘導という。",
            "options": ["〇", "✕"],
            "answer": 0,
            "explanation": "自己誘導とは、コイル自身に流れる電流の変化によって、その変化を妨げる向きに誘導起電力が生じる現象です。",
            "image_url": ""
        },
        {
            "id": 525,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "交流",
            "question": "交流の実効値$V_e$と最大値$V_0$の関係を正しく表す式はどれか。",
            "options": [
                "$V_e = V_0$",
                "$V_e = \\dfrac{V_0}{2}$",
                "$V_e = \\dfrac{V_0}{\\sqrt{2}}$",
                "$V_e = \\dfrac{V_0}{\\sqrt{3}}$"
            ],
            "answer": 2,
            "explanation": "交流の実効値は最大値の$\\dfrac{1}{\\sqrt{2}}$倍です。$V_e = \\dfrac{V_0}{\\sqrt{2}}$。",
            "image_url": ""
        },
        {
            "id": 526,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "交流",
            "question": "コイルのリアクタンス（誘導リアクタンス）$X_L$を表す式はどれか。ただし角周波数を$\\omega$、自己インダクタンスを$L$とする。",
            "options": [
                "$X_L = \\omega L$",
                "$X_L = \\dfrac{1}{\\omega L}$",
                "$X_L = \\omega^2 L$",
                "$X_L = \\dfrac{L}{\\omega}$"
            ],
            "answer": 0,
            "explanation": "誘導リアクタンスは$X_L = \\omega L = 2\\pi f L$です。周波数が高いほどリアクタンスは大きくなります。",
            "image_url": ""
        },
        {
            "id": 527,
            "category": "p4_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": "電磁波",
            "question": "電磁波の速さを$c$、周波数を$f$、波長を$\\lambda$としたとき、正しい関係式はどれか。",
            "options": [
                "$c = f + \\lambda$",
                "$c = f\\lambda$",
                "$c = \\dfrac{f}{\\lambda}$",
                "$c = f^2\\lambda$"
            ],
            "answer": 1,
            "explanation": "波の基本関係式$c = f\\lambda$が電磁波にも成り立ちます。真空中では$c = 3.0 \\times 10^8\\,\\text{m/s}$です。",
            "image_url": ""
        },
        {
            "id": 528,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "電磁誘導の法則",
            "question": "電磁誘導の計算問題について、以下の小問に答えよ。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "巻数$N = 200$回、面積$S = 5.0 \\times 10^{-3}\\,\\text{m}^2$の長方形コイルが磁束密度$B = 0.40\\,\\text{T}$の一様な磁場中に置かれている。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "コイルの面が磁場に垂直のとき、コイルを貫く磁束はいくらか。",
                    "options": [
                        "$1.0 \\times 10^{-3}\\,\\text{Wb}$",
                        "$2.0 \\times 10^{-3}\\,\\text{Wb}$",
                        "$4.0 \\times 10^{-3}\\,\\text{Wb}$",
                        "$8.0 \\times 10^{-3}\\,\\text{Wb}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Phi = BS = 0.40 \\times 5.0 \\times 10^{-3} = 2.0 \\times 10^{-3}\\,\\text{Wb}$"
                },
                {
                    "type": "choice",
                    "question": "コイルが磁場に垂直の状態から平行の状態に$0.10\\,\\text{s}$で回転したとき、誘導起電力の平均の大きさはいくらか。",
                    "options": [
                        "$2.0\\,\\text{V}$",
                        "$4.0\\,\\text{V}$",
                        "$8.0\\,\\text{V}$",
                        "$20\\,\\text{V}$"
                    ],
                    "answer": 1,
                    "explanation": "$|V| = N\\dfrac{\\Delta\\Phi}{\\Delta t} = 200 \\times \\dfrac{2.0 \\times 10^{-3}}{0.10} = 4.0\\,\\text{V}$"
                },
                {
                    "type": "choice",
                    "question": "コイルの抵抗が$R = 0.80\\,\\Omega$のとき、誘導電流の平均の大きさはいくらか。",
                    "options": [
                        "$2.5\\,\\text{A}$",
                        "$5.0\\,\\text{A}$",
                        "$10\\,\\text{A}$",
                        "$25\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$I = \\dfrac{V}{R} = \\dfrac{4.0}{0.80} = 5.0\\,\\text{A}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 529,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "交流",
            "question": "変圧器（トランス）について、以下の小問に答えよ。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "理想的な変圧器の一次コイルの巻数が$N_1 = 500$回、二次コイルの巻数が$N_2 = 100$回である。一次側に実効値$V_1 = 100\\,\\text{V}$の交流電圧を加えた。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "二次側の電圧$V_2$はいくらか。",
                    "options": [
                        "$10\\,\\text{V}$",
                        "$20\\,\\text{V}$",
                        "$50\\,\\text{V}$",
                        "$500\\,\\text{V}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\dfrac{V_2}{V_1} = \\dfrac{N_2}{N_1}$より$V_2 = 100 \\times \\dfrac{100}{500} = 20\\,\\text{V}$"
                },
                {
                    "type": "choice",
                    "question": "二次側に$R = 4.0\\,\\Omega$の抵抗を接続したとき、二次側の電流はいくらか。",
                    "options": [
                        "$2.0\\,\\text{A}$",
                        "$5.0\\,\\text{A}$",
                        "$10\\,\\text{A}$",
                        "$25\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$I_2 = \\dfrac{V_2}{R} = \\dfrac{20}{4.0} = 5.0\\,\\text{A}$"
                },
                {
                    "type": "choice",
                    "question": "理想的な変圧器では電力が保存される。このとき一次側の電流はいくらか。",
                    "options": [
                        "$0.50\\,\\text{A}$",
                        "$1.0\\,\\text{A}$",
                        "$2.5\\,\\text{A}$",
                        "$5.0\\,\\text{A}$"
                    ],
                    "answer": 1,
                    "explanation": "$V_1 I_1 = V_2 I_2$より$I_1 = \\dfrac{V_2 I_2}{V_1} = \\dfrac{20 \\times 5.0}{100} = 1.0\\,\\text{A}$"
                }
            ],
            "image_url": ""
        },
        {
            "id": 530,
            "category": "p4_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": "自己誘導と相互誘導",
            "question": "自己誘導について、以下の小問に答えよ。",
            "options": ["（小問形式）", "（小問形式）", "（小問形式）", "（小問形式）"],
            "answer": 0,
            "explanation": "",
            "common_text": "自己インダクタンス$L = 0.50\\,\\text{H}$のコイルに電流が流れている。",
            "sub_questions": [
                {
                    "type": "choice",
                    "question": "電流が$0.20\\,\\text{s}$間に$1.0\\,\\text{A}$から$3.0\\,\\text{A}$に一様に変化したとき、自己誘導起電力の大きさはいくらか。",
                    "options": [
                        "$1.0\\,\\text{V}$",
                        "$2.5\\,\\text{V}$",
                        "$5.0\\,\\text{V}$",
                        "$10\\,\\text{V}$"
                    ],
                    "answer": 2,
                    "explanation": "$|V| = L\\dfrac{\\Delta I}{\\Delta t} = 0.50 \\times \\dfrac{3.0 - 1.0}{0.20} = 0.50 \\times 10 = 5.0\\,\\text{V}$"
                },
                {
                    "type": "choice",
                    "question": "電流が$3.0\\,\\text{A}$のとき、コイルに蓄えられるエネルギーはいくらか。",
                    "options": [
                        "$0.75\\,\\text{J}$",
                        "$1.5\\,\\text{J}$",
                        "$2.25\\,\\text{J}$",
                        "$4.5\\,\\text{J}$"
                    ],
                    "answer": 2,
                    "explanation": "$U = \\dfrac{1}{2}LI^2 = \\dfrac{1}{2} \\times 0.50 \\times 3.0^2 = 2.25\\,\\text{J}$"
                },
                {
                    "type": "choice",
                    "question": "電流が$1.0\\,\\text{A}$のときのエネルギーと$3.0\\,\\text{A}$のときのエネルギーの差はいくらか。",
                    "options": [
                        "$1.0\\,\\text{J}$",
                        "$2.0\\,\\text{J}$",
                        "$3.0\\,\\text{J}$",
                        "$4.0\\,\\text{J}$"
                    ],
                    "answer": 1,
                    "explanation": "$\\Delta U = \\dfrac{1}{2}L(I_2^2 - I_1^2) = \\dfrac{1}{2} \\times 0.50 \\times (9.0 - 1.0) = 2.0\\,\\text{J}$"
                }
            ],
            "image_url": ""
        }
    ]
);
