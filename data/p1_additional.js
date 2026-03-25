// ============================================================
// p1_additional.js — 第1編 追加問題（100問）
// ============================================================
// 【確認手順】
//   1. このファイルの問題を確認・修正してください
//   2. 確認が済んだら、この問題を p1.js に統合します
//   3. 統合はClaude に「p1_additional.js を p1.js に統合して」と依頼してください
// ============================================================
// 【難易度基準】
//   A: 教科書の確認レベル（用語・定義の理解）
//   B: 教科書の公式をそのまま使用して解けるレベル
//   C: ひと手間加えないと解けないレベル
// ============================================================

// このファイルは直接読み込まれません。確認用のファイルです。
// 統合後に削除してください。

window.P1_ADDITIONAL_QUESTIONS = [

    // ============================================================
    // 第1章 運動の表し方（20問）追加分
    // セクション: 速度 / 加速度 / 落体の運動
    // ============================================================

    // --- 速度 ---
    {
        "id": 20101,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "速度",
        "question": "変位と距離の違いについて正しいものはどれか。",
        "options": [
            "変位は向きを持ち、距離は向きを持たない",
            "変位と距離は常に等しい",
            "距離は負の値をとりうる",
            "変位は大きさを持たない"
        ],
        "answer": 0,
        "explanation": "変位はベクトル量で向きと大きさを持ち、距離はスカラー量で大きさのみを持ちます。直線運動で折り返しがない場合は変位の大きさと距離は等しくなります。",
        "image_url": ""
    },
    {
        "id": 20102,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "速度",
        "question": "等速直線運動とは、速さも向きも一定の運動のことである。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "等速直線運動は、速さが一定で一直線上を進む運動です。速さも向きも変わらないので、速度（ベクトル）が一定です。",
        "image_url": ""
    },
    {
        "id": 20103,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "速度",
        "question": "平均の速さの定義として正しいものはどれか。",
        "options": [
            "移動距離を経過時間で割ったもの",
            "変位を経過時間で割ったもの",
            "経過時間を移動距離で割ったもの",
            "移動距離と経過時間の積"
        ],
        "answer": 0,
        "explanation": "平均の速さ $= \\dfrac{\\text{移動距離}}{\\text{経過時間}}$ です。なお、平均の速度は $\\dfrac{\\text{変位}}{\\text{経過時間}}$ で定義されます。",
        "image_url": ""
    },

    // --- 加速度 ---
    {
        "id": 20104,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "加速度",
        "question": "加速度の単位として正しいものはどれか。",
        "options": [
            "$\\text{m/s}$",
            "$\\text{m/s}^2$",
            "$\\text{m}^2\\text{/s}$",
            "$\\text{kg}\\cdot\\text{m/s}^2$"
        ],
        "answer": 1,
        "explanation": "加速度は「速度の変化量÷時間」なので、単位は $\\text{m/s}^2$（メートル毎秒毎秒）です。",
        "image_url": ""
    },
    {
        "id": 20105,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "加速度",
        "question": "静止している物体が一定の加速度 $3.0\\text{ m/s}^2$ で動き出した。$4.0$ 秒後の速度はいくらか。",
        "options": [
            "$7.0\\text{ m/s}$",
            "$12\\text{ m/s}$",
            "$16\\text{ m/s}$",
            "$24\\text{ m/s}$"
        ],
        "answer": 1,
        "explanation": "$v = v_0 + at = 0 + 3.0 \\times 4.0 = 12\\text{ m/s}$ です。",
        "image_url": ""
    },
    {
        "id": 20106,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "加速度",
        "question": "速度 $20\\text{ m/s}$ で走る自動車がブレーキをかけ、一定の加速度で $5.0$ 秒後に停止した。加速度の大きさはいくらか。",
        "options": [
            "$2.0\\text{ m/s}^2$",
            "$4.0\\text{ m/s}^2$",
            "$5.0\\text{ m/s}^2$",
            "$10\\text{ m/s}^2$"
        ],
        "answer": 1,
        "explanation": "$a = \\dfrac{v - v_0}{t} = \\dfrac{0 - 20}{5.0} = -4.0\\text{ m/s}^2$ です。大きさは $4.0\\text{ m/s}^2$ です。",
        "image_url": ""
    },
    {
        "id": 20107,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "加速度",
        "question": "初速度 $5.0\\text{ m/s}$、加速度 $2.0\\text{ m/s}^2$ で等加速度直線運動する物体が $3.0$ 秒間に進む距離はいくらか。",
        "options": [
            "$15\\text{ m}$",
            "$24\\text{ m}$",
            "$33\\text{ m}$",
            "$42\\text{ m}$"
        ],
        "answer": 1,
        "explanation": "$x = v_0 t + \\dfrac{1}{2}at^2 = 5.0 \\times 3.0 + \\dfrac{1}{2} \\times 2.0 \\times 3.0^2 = 15 + 9.0 = 24\\text{ m}$ です。",
        "image_url": ""
    },

    // --- 落体の運動 ---
    {
        "id": 20108,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "落体の運動",
        "question": "真空中では、質量に関係なくすべての物体は同じ加速度で落下する。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "空気抵抗がなければ、質量に関係なくすべての物体は重力加速度 $g \\fallingdotseq 9.8\\text{ m/s}^2$ で落下します。",
        "image_url": ""
    },
    {
        "id": 20109,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "落体の運動",
        "question": "高さ $19.6\\text{ m}$ の建物の屋上から物体を静かに落とした。地面に達するまでの時間はいくらか。ただし重力加速度を $g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$1.0\\text{ s}$",
            "$2.0\\text{ s}$",
            "$3.0\\text{ s}$",
            "$4.0\\text{ s}$"
        ],
        "answer": 1,
        "explanation": "$h = \\dfrac{1}{2}gt^2$ より $19.6 = \\dfrac{1}{2} \\times 9.8 \\times t^2$ 、$t^2 = 4.0$ 、$t = 2.0\\text{ s}$ です。",
        "image_url": ""
    },
    {
        "id": 20110,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "落体の運動",
        "question": "地面から真上に $19.6\\text{ m/s}$ で投げ上げた物体が最高点に達するまでの時間と、最高点の高さの組み合わせとして正しいものはどれか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "時間 $1.0\\text{ s}$、高さ $9.8\\text{ m}$",
            "時間 $2.0\\text{ s}$、高さ $19.6\\text{ m}$",
            "時間 $2.0\\text{ s}$、高さ $9.8\\text{ m}$",
            "時間 $1.0\\text{ s}$、高さ $19.6\\text{ m}$"
        ],
        "answer": 1,
        "explanation": "最高点では速度 $= 0$ なので $0 = 19.6 - 9.8t$ より $t = 2.0\\text{ s}$ です。高さ $= 19.6 \\times 2.0 - \\dfrac{1}{2} \\times 9.8 \\times 2.0^2 = 39.2 - 19.6 = 19.6\\text{ m}$ です。",
        "image_url": ""
    },
    {
        "id": 20111,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "落体の運動",
        "question": "水平方向に $10\\text{ m/s}$ で投げ出された物体が、$1.0$ 秒後に水平方向からどれだけ下に変位しているか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$4.9\\text{ m}$",
            "$9.8\\text{ m}$",
            "$10\\text{ m}$",
            "$14.7\\text{ m}$"
        ],
        "answer": 0,
        "explanation": "鉛直方向は自由落下なので $y = \\dfrac{1}{2}gt^2 = \\dfrac{1}{2} \\times 9.8 \\times 1.0^2 = 4.9\\text{ m}$ です。水平方向の速度は鉛直方向の落下に影響しません。",
        "image_url": ""
    },
    {
        "id": 20112,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "速度",
        "question": "$v\\text{-}t$ グラフにおいて、グラフの線と時間軸で囲まれた面積は何を表すか。",
        "options": [
            "加速度",
            "変位（移動距離）",
            "力",
            "速さ"
        ],
        "answer": 1,
        "explanation": "$v\\text{-}t$ グラフの面積は変位を表します。グラフの傾きが加速度、面積が変位です。",
        "image_url": ""
    },
    {
        "id": 20113,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "落体の運動",
        "question": "自由落下する物体が $2.0$ 秒後に達する速さはいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$4.9\\text{ m/s}$",
            "$9.8\\text{ m/s}$",
            "$14.7\\text{ m/s}$",
            "$19.6\\text{ m/s}$"
        ],
        "answer": 3,
        "explanation": "$v = gt = 9.8 \\times 2.0 = 19.6\\text{ m/s}$ です。",
        "image_url": ""
    },
    {
        "id": 20114,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "加速度",
        "question": "初速度 $v_0$ で等加速度直線運動する物体が距離 $x$ 進んだときの速度 $v$ を求める公式はどれか。",
        "options": [
            "$v^2 = v_0^2 + 2ax$",
            "$v = v_0 + 2ax$",
            "$v^2 = v_0^2 + ax$",
            "$v = v_0^2 + 2ax$"
        ],
        "answer": 0,
        "explanation": "等加速度直線運動の公式 $v^2 - v_0^2 = 2ax$ より、$v^2 = v_0^2 + 2ax$ です。時間が与えられていない場合にこの公式を使います。",
        "image_url": ""
    },
    {
        "id": 20115,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "速度",
        "question": "$x\\text{-}t$ グラフ（位置-時間グラフ）の傾きは何を表すか。",
        "options": [
            "速度",
            "加速度",
            "力",
            "変位"
        ],
        "answer": 0,
        "explanation": "$x\\text{-}t$ グラフの傾きは $\\dfrac{\\Delta x}{\\Delta t}$ で、これは速度を表します。",
        "image_url": ""
    },
    {
        "id": 20116,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "加速度",
        "question": "初速度 $10\\text{ m/s}$、加速度 $-2.0\\text{ m/s}^2$ で運動する物体が停止するまでに進む距離はいくらか。",
        "options": [
            "$10\\text{ m}$",
            "$20\\text{ m}$",
            "$25\\text{ m}$",
            "$50\\text{ m}$"
        ],
        "answer": 2,
        "explanation": "$v^2 - v_0^2 = 2ax$ より $0 - 10^2 = 2 \\times (-2.0) \\times x$ 、$x = \\dfrac{100}{4.0} = 25\\text{ m}$ です。",
        "image_url": ""
    },
    {
        "id": 20117,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "choice",
        "classification": "落体の運動",
        "question": "重力加速度 $g$ の近似値として正しいものはどれか。",
        "options": [
            "$9.8\\text{ m/s}$",
            "$9.8\\text{ m/s}^2$",
            "$98\\text{ m/s}^2$",
            "$0.98\\text{ m/s}^2$"
        ],
        "answer": 1,
        "explanation": "地表付近での重力加速度は約 $9.8\\text{ m/s}^2$ です。単位に注意しましょう。",
        "image_url": ""
    },
    {
        "id": 20118,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "classification": "落体の運動",
        "question": "斜面に沿って $30°$ の角度で物体を投げ上げた。物体が斜面を $v_0 = 10\\text{ m/s}$ で上り始めたとき、最高到達点までの距離はいくらか。ただし斜面に沿った重力加速度の成分は $g\\sin 30° = 4.9\\text{ m/s}^2$ とする。",
        "options": [
            "$5.1\\text{ m}$",
            "$10.2\\text{ m}$",
            "$20.4\\text{ m}$",
            "$2.0\\text{ m}$"
        ],
        "answer": 1,
        "explanation": "斜面に沿った運動として $v^2 = v_0^2 - 2(g\\sin 30°)x$ で $v=0$ とすると、$x = \\dfrac{v_0^2}{2g\\sin 30°} = \\dfrac{100}{2 \\times 4.9} = 10.2\\text{ m}$ です。",
        "image_url": ""
    },
    {
        "id": 20119,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "classification": "速度",
        "question": "相対速度について、東に $60\\text{ km/h}$ で走る車Aから見た、東に $80\\text{ km/h}$ で走る車Bの速度はいくらか。",
        "options": [
            "東に $20\\text{ km/h}$",
            "西に $20\\text{ km/h}$",
            "東に $140\\text{ km/h}$",
            "西に $140\\text{ km/h}$"
        ],
        "answer": 0,
        "explanation": "AからBの相対速度 $= v_B - v_A = 80 - 60 = 20\\text{ km/h}$（東向き）です。Bの方が速いのでAから見るとBは東に遠ざかります。",
        "image_url": ""
    },
    {
        "id": 20120,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "ox",
        "classification": "加速度",
        "question": "等加速度直線運動では、速度は時間に比例して変化する。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "等加速度直線運動の速度の式 $v = v_0 + at$ より、速度は時間 $t$ に対して一次関数的に変化します。$v_0 = 0$ の場合は比例です。",
        "image_url": ""
    },

    // ============================================================
    // 第2章 運動の法則（20問）追加分
    // セクション: 力とそのはたらき / 力のつり合い / 運動の法則 /
    //             摩擦を受ける運動 / 液体や気体から受ける力 /
    //             剛体にはたらく力のつりあい
    // ============================================================

    // --- 力とそのはたらき ---
    {
        "id": 20201,
        "category": "p1_c2",
        "difficulty": "A",
        "type": "choice",
        "classification": "力とそのはたらき",
        "question": "次の力のうち、非接触力（離れていてもはたらく力）はどれか。",
        "options": [
            "垂直抗力",
            "摩擦力",
            "重力",
            "張力"
        ],
        "answer": 2,
        "explanation": "重力は物体が離れていてもはたらく非接触力（遠隔力）です。垂直抗力・摩擦力・張力は接触力です。",
        "image_url": ""
    },
    {
        "id": 20202,
        "category": "p1_c2",
        "difficulty": "A",
        "type": "choice",
        "classification": "力とそのはたらき",
        "question": "フックの法則の式として正しいものはどれか。ばね定数を $k$、ばねの伸びを $x$ とする。",
        "options": [
            "$F = kx$",
            "$F = \\dfrac{k}{x}$",
            "$F = kx^2$",
            "$F = \\dfrac{x}{k}$"
        ],
        "answer": 0,
        "explanation": "フックの法則は $F = kx$ です。ばねの弾性力はばねの変形量（伸びまたは縮み）に比例します。",
        "image_url": ""
    },

    // --- 力のつり合い ---
    {
        "id": 20203,
        "category": "p1_c2",
        "difficulty": "A",
        "type": "ox",
        "classification": "力のつり合い",
        "question": "机の上に置かれた物体にはたらく重力と垂直抗力は、作用・反作用の関係にある。",
        "options": ["〇", "✕"],
        "answer": 1,
        "explanation": "これはつり合いの関係であり、作用・反作用ではありません。作用・反作用は「異なる2物体間」にはたらく力の関係です。重力の反作用は物体が地球を引く力です。",
        "image_url": ""
    },
    {
        "id": 20204,
        "category": "p1_c2",
        "difficulty": "B",
        "type": "choice",
        "classification": "力のつり合い",
        "question": "質量 $2.0\\text{ kg}$ の物体を糸で天井からつるしたとき、糸の張力はいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$4.9\\text{ N}$",
            "$9.8\\text{ N}$",
            "$19.6\\text{ N}$",
            "$39.2\\text{ N}$"
        ],
        "answer": 2,
        "explanation": "力のつり合いより $T = mg = 2.0 \\times 9.8 = 19.6\\text{ N}$ です。",
        "image_url": ""
    },

    // --- 運動の法則 ---
    {
        "id": 20205,
        "category": "p1_c2",
        "difficulty": "A",
        "type": "choice",
        "classification": "運動の法則",
        "question": "運動方程式 $F = ma$ において、力の単位 $\\text{N}$（ニュートン）を基本単位で表すとどれか。",
        "options": [
            "$\\text{kg}\\cdot\\text{m/s}$",
            "$\\text{kg}\\cdot\\text{m/s}^2$",
            "$\\text{kg}\\cdot\\text{m}^2\\text{/s}^2$",
            "$\\text{kg/m}\\cdot\\text{s}^2$"
        ],
        "answer": 1,
        "explanation": "$1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$ です。$F = ma$ の単位から確認できます。",
        "image_url": ""
    },
    {
        "id": 20206,
        "category": "p1_c2",
        "difficulty": "B",
        "type": "choice",
        "classification": "運動の法則",
        "question": "質量 $3.0\\text{ kg}$ の物体に $12\\text{ N}$ の力を加えて水平面上で動かすとき、加速度はいくらか。ただし摩擦はないものとする。",
        "options": [
            "$2.0\\text{ m/s}^2$",
            "$4.0\\text{ m/s}^2$",
            "$6.0\\text{ m/s}^2$",
            "$36\\text{ m/s}^2$"
        ],
        "answer": 1,
        "explanation": "$a = \\dfrac{F}{m} = \\dfrac{12}{3.0} = 4.0\\text{ m/s}^2$ です。",
        "image_url": ""
    },
    {
        "id": 20207,
        "category": "p1_c2",
        "difficulty": "C",
        "type": "choice",
        "classification": "運動の法則",
        "question": "質量 $m$ の物体を角度 $\\theta$ の滑らかな（摩擦のない）斜面上に置いたとき、斜面に沿った加速度はどれか。",
        "options": [
            "$g$",
            "$g\\sin\\theta$",
            "$g\\cos\\theta$",
            "$g\\tan\\theta$"
        ],
        "answer": 1,
        "explanation": "斜面に沿った方向の運動方程式 $ma = mg\\sin\\theta$ より $a = g\\sin\\theta$ です。",
        "image_url": ""
    },

    // --- 摩擦を受ける運動 ---
    {
        "id": 20208,
        "category": "p1_c2",
        "difficulty": "A",
        "type": "choice",
        "classification": "摩擦を受ける運動",
        "question": "静止摩擦力と動摩擦力の関係について正しいものはどれか。",
        "options": [
            "最大静止摩擦力は動摩擦力より大きい",
            "最大静止摩擦力は動摩擦力より小さい",
            "静止摩擦力と動摩擦力は常に等しい",
            "静止摩擦力は物体が動くと0になる"
        ],
        "answer": 0,
        "explanation": "一般に最大静止摩擦力 $\\mu_0 N$ は動摩擦力 $\\mu' N$ より大きいです（$\\mu_0 > \\mu'$）。物体を動かし始めるのが最も力がいります。",
        "image_url": ""
    },
    {
        "id": 20209,
        "category": "p1_c2",
        "difficulty": "B",
        "type": "choice",
        "classification": "摩擦を受ける運動",
        "question": "水平面上に質量 $5.0\\text{ kg}$ の物体があり、動摩擦係数が $0.20$ である。この物体が滑っているときの動摩擦力はいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$1.0\\text{ N}$",
            "$4.9\\text{ N}$",
            "$9.8\\text{ N}$",
            "$49\\text{ N}$"
        ],
        "answer": 2,
        "explanation": "動摩擦力 $f' = \\mu' N = \\mu' mg = 0.20 \\times 5.0 \\times 9.8 = 9.8\\text{ N}$ です。",
        "image_url": ""
    },
    {
        "id": 20210,
        "category": "p1_c2",
        "difficulty": "C",
        "type": "choice",
        "classification": "摩擦を受ける運動",
        "question": "質量 $2.0\\text{ kg}$ の物体を水平面上で $15\\text{ N}$ の力で押す。動摩擦係数が $0.30$ のとき、物体の加速度はいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$2.6\\text{ m/s}^2$",
            "$4.6\\text{ m/s}^2$",
            "$7.5\\text{ m/s}^2$",
            "$10.4\\text{ m/s}^2$"
        ],
        "answer": 1,
        "explanation": "動摩擦力 $f' = 0.30 \\times 2.0 \\times 9.8 = 5.88\\text{ N}$ です。運動方程式 $ma = F - f'$ より $a = \\dfrac{15 - 5.88}{2.0} = \\dfrac{9.12}{2.0} \\fallingdotseq 4.6\\text{ m/s}^2$ です。",
        "image_url": ""
    },

    // --- 液体や気体から受ける力 ---
    {
        "id": 20211,
        "category": "p1_c2",
        "difficulty": "A",
        "type": "choice",
        "classification": "液体や気体から受ける力",
        "question": "浮力について正しいものはどれか。",
        "options": [
            "物体が排除した液体の重さに等しい",
            "物体の重さに等しい",
            "液体の深さに比例する",
            "物体の密度に比例する"
        ],
        "answer": 0,
        "explanation": "アルキメデスの原理より、浮力は物体が排除した流体の重さに等しいです。",
        "image_url": ""
    },
    {
        "id": 20212,
        "category": "p1_c2",
        "difficulty": "B",
        "type": "choice",
        "classification": "液体や気体から受ける力",
        "question": "体積 $0.010\\text{ m}^3$ の物体を水中に完全に沈めたとき、はたらく浮力はいくらか。水の密度を $1.0 \\times 10^3\\text{ kg/m}^3$、$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$9.8\\text{ N}$",
            "$49\\text{ N}$",
            "$98\\text{ N}$",
            "$980\\text{ N}$"
        ],
        "answer": 2,
        "explanation": "浮力 $= \\rho V g = 1.0 \\times 10^3 \\times 0.010 \\times 9.8 = 98\\text{ N}$ です。",
        "image_url": ""
    },

    // --- 剛体にはたらく力のつりあい ---
    {
        "id": 20213,
        "category": "p1_c2",
        "difficulty": "A",
        "type": "choice",
        "classification": "剛体にはたらく力のつりあい",
        "question": "力のモーメントの定義として正しいものはどれか。",
        "options": [
            "力の大きさ × 回転軸からの距離",
            "力の大きさ × 速度",
            "質量 × 加速度",
            "力の大きさ × 時間"
        ],
        "answer": 0,
        "explanation": "力のモーメント $M = F \\times d$（力の大きさ × うでの長さ）です。うでの長さとは回転軸から力の作用線までの垂直距離です。",
        "image_url": ""
    },
    {
        "id": 20214,
        "category": "p1_c2",
        "difficulty": "A",
        "type": "choice",
        "classification": "剛体にはたらく力のつりあい",
        "question": "力のモーメントの単位として正しいものはどれか。",
        "options": [
            "$\\text{N}$",
            "$\\text{N}\\cdot\\text{m}$",
            "$\\text{N/m}$",
            "$\\text{kg}\\cdot\\text{m}$"
        ],
        "answer": 1,
        "explanation": "力のモーメントの単位は $\\text{N}\\cdot\\text{m}$（ニュートンメートル）です。",
        "image_url": ""
    },
    {
        "id": 20215,
        "category": "p1_c2",
        "difficulty": "B",
        "type": "choice",
        "classification": "剛体にはたらく力のつりあい",
        "question": "長さ $2.0\\text{ m}$ の一様な棒の左端を支点として水平に保つ。棒の質量が $3.0\\text{ kg}$ のとき、右端にかける力はいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$7.35\\text{ N}$",
            "$14.7\\text{ N}$",
            "$29.4\\text{ N}$",
            "$9.8\\text{ N}$"
        ],
        "answer": 1,
        "explanation": "一様な棒の重心は中央（$1.0\\text{ m}$）にあります。モーメントのつり合いより $mg \\times 1.0 = F \\times 2.0$ 、$F = \\dfrac{3.0 \\times 9.8 \\times 1.0}{2.0} = 14.7\\text{ N}$ です。",
        "image_url": ""
    },
    {
        "id": 20216,
        "category": "p1_c2",
        "difficulty": "C",
        "type": "choice",
        "classification": "剛体にはたらく力のつりあい",
        "question": "長さ $L$ の一様な棒（質量 $M$）を壁にかけ、壁から距離 $\\dfrac{L}{4}$ の点を支点として水平に保つ。壁側の端に加える力の向きはどれか。",
        "options": [
            "上向き",
            "下向き",
            "壁に向かう方向",
            "力を加える必要はない"
        ],
        "answer": 1,
        "explanation": "重心は棒の中央（支点から $\\dfrac{L}{4}$）にあり、支点の右側にあります。つり合うためには支点の左側（壁側の端）に下向きの力を加える必要があります。",
        "image_url": ""
    },
    {
        "id": 20217,
        "category": "p1_c2",
        "difficulty": "C",
        "type": "choice",
        "classification": "運動の法則",
        "question": "質量 $m_1$ と $m_2$ の2つの物体を軽い糸で結び、滑らかな水平面上で $m_1$ 側から力 $F$ で引く。糸の張力はいくらか。",
        "options": [
            "$\\dfrac{m_2}{m_1 + m_2}F$",
            "$\\dfrac{m_1}{m_1 + m_2}F$",
            "$\\dfrac{F}{2}$",
            "$F$"
        ],
        "answer": 0,
        "explanation": "全体の加速度 $a = \\dfrac{F}{m_1 + m_2}$ です。$m_2$ の運動方程式 $m_2 a = T$ より $T = m_2 \\times \\dfrac{F}{m_1 + m_2} = \\dfrac{m_2}{m_1 + m_2}F$ です。",
        "image_url": ""
    },
    {
        "id": 20218,
        "category": "p1_c2",
        "difficulty": "B",
        "type": "choice",
        "classification": "力のつり合い",
        "question": "ばね定数 $100\\text{ N/m}$ のばねに質量 $0.50\\text{ kg}$ のおもりをつるしたとき、ばねの伸びはいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$0.049\\text{ m}$",
            "$0.098\\text{ m}$",
            "$0.50\\text{ m}$",
            "$4.9\\text{ m}$"
        ],
        "answer": 0,
        "explanation": "つり合いの条件 $kx = mg$ より $x = \\dfrac{mg}{k} = \\dfrac{0.50 \\times 9.8}{100} = 0.049\\text{ m}$ です。",
        "image_url": ""
    },
    {
        "id": 20219,
        "category": "p1_c2",
        "difficulty": "B",
        "type": "choice",
        "classification": "摩擦を受ける運動",
        "question": "水平面上の物体に水平方向の力を徐々に大きくしていく。静止摩擦係数が $0.40$、物体の質量が $10\\text{ kg}$ のとき、物体が動き出す最小の力はいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$3.92\\text{ N}$",
            "$19.6\\text{ N}$",
            "$39.2\\text{ N}$",
            "$98\\text{ N}$"
        ],
        "answer": 2,
        "explanation": "最大静止摩擦力 $f_0 = \\mu_0 mg = 0.40 \\times 10 \\times 9.8 = 39.2\\text{ N}$ です。これを超える力で物体は動き出します。",
        "image_url": ""
    },
    {
        "id": 20220,
        "category": "p1_c2",
        "difficulty": "C",
        "type": "choice",
        "classification": "剛体にはたらく力のつりあい",
        "question": "剛体のつり合いの条件として正しいものはどれか。",
        "options": [
            "力のつり合いのみ満たせばよい",
            "力のモーメントのつり合いのみ満たせばよい",
            "力のつり合いと力のモーメントのつり合いの両方を満たす必要がある",
            "重心が支点の真上にあればよい"
        ],
        "answer": 2,
        "explanation": "剛体のつり合いには「合力 = 0」と「任意の点まわりの力のモーメントの和 = 0」の2条件が必要です。",
        "image_url": ""
    },

    // ============================================================
    // 第3章 仕事と力学的エネルギー（20問）追加分
    // セクション: 仕事 / 運動エネルギー / 位置エネルギー /
    //             力学的エネルギーの保存
    // ============================================================

    // --- 仕事 ---
    {
        "id": 20301,
        "category": "p1_c3",
        "difficulty": "A",
        "type": "choice",
        "classification": "仕事",
        "question": "仕事の単位 $\\text{J}$（ジュール）を基本単位で表すとどれか。",
        "options": [
            "$\\text{kg}\\cdot\\text{m/s}^2$",
            "$\\text{kg}\\cdot\\text{m}^2\\text{/s}^2$",
            "$\\text{kg}\\cdot\\text{m}^2\\text{/s}$",
            "$\\text{N/m}$"
        ],
        "answer": 1,
        "explanation": "$1\\text{ J} = 1\\text{ N}\\cdot\\text{m} = 1\\text{ kg}\\cdot\\text{m}^2\\text{/s}^2$ です。",
        "image_url": ""
    },
    {
        "id": 20302,
        "category": "p1_c3",
        "difficulty": "A",
        "type": "ox",
        "classification": "仕事",
        "question": "物体を持ち上げたまま水平に移動させるとき、重力は仕事をしない。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "重力は鉛直下向きにはたらきますが、移動方向が水平なので、重力の方向と移動方向が垂直です。力と移動方向が直角のとき仕事は $0$ です。",
        "image_url": ""
    },
    {
        "id": 20303,
        "category": "p1_c3",
        "difficulty": "B",
        "type": "choice",
        "classification": "仕事",
        "question": "$10\\text{ N}$ の力で物体を力の方向に $5.0\\text{ m}$ 動かしたとき、力がした仕事はいくらか。",
        "options": [
            "$2.0\\text{ J}$",
            "$15\\text{ J}$",
            "$50\\text{ J}$",
            "$500\\text{ J}$"
        ],
        "answer": 2,
        "explanation": "$W = Fx = 10 \\times 5.0 = 50\\text{ J}$ です。",
        "image_url": ""
    },
    {
        "id": 20304,
        "category": "p1_c3",
        "difficulty": "B",
        "type": "choice",
        "classification": "仕事",
        "question": "$20\\text{ N}$ の力を水平方向から $60°$ の角度で物体に加え、$3.0\\text{ m}$ 水平に動かした。力がした仕事はいくらか。",
        "options": [
            "$30\\text{ J}$",
            "$60\\text{ J}$",
            "$30\\sqrt{3}\\text{ J}$",
            "$10\\text{ J}$"
        ],
        "answer": 0,
        "explanation": "$W = F\\cos\\theta \\times x = 20 \\times \\cos 60° \\times 3.0 = 20 \\times 0.50 \\times 3.0 = 30\\text{ J}$ です。",
        "image_url": ""
    },

    // --- 運動エネルギー ---
    {
        "id": 20305,
        "category": "p1_c3",
        "difficulty": "A",
        "type": "choice",
        "classification": "運動エネルギー",
        "question": "運動エネルギーの式として正しいものはどれか。",
        "options": [
            "$\\dfrac{1}{2}mv$",
            "$\\dfrac{1}{2}mv^2$",
            "$mv^2$",
            "$mgh$"
        ],
        "answer": 1,
        "explanation": "運動エネルギーは $K = \\dfrac{1}{2}mv^2$ です。質量と速さの2乗に比例します。",
        "image_url": ""
    },
    {
        "id": 20306,
        "category": "p1_c3",
        "difficulty": "B",
        "type": "choice",
        "classification": "運動エネルギー",
        "question": "質量 $2.0\\text{ kg}$ の物体が $6.0\\text{ m/s}$ で運動しているとき、運動エネルギーはいくらか。",
        "options": [
            "$6.0\\text{ J}$",
            "$12\\text{ J}$",
            "$36\\text{ J}$",
            "$72\\text{ J}$"
        ],
        "answer": 2,
        "explanation": "$K = \\dfrac{1}{2}mv^2 = \\dfrac{1}{2} \\times 2.0 \\times 6.0^2 = \\dfrac{1}{2} \\times 2.0 \\times 36 = 36\\text{ J}$ です。",
        "image_url": ""
    },
    {
        "id": 20307,
        "category": "p1_c3",
        "difficulty": "C",
        "type": "choice",
        "classification": "運動エネルギー",
        "question": "速さを2倍にすると運動エネルギーは何倍になるか。",
        "options": [
            "$2$ 倍",
            "$4$ 倍",
            "$8$ 倍",
            "$\\sqrt{2}$ 倍"
        ],
        "answer": 1,
        "explanation": "$K = \\dfrac{1}{2}mv^2$ より、$v$ を2倍にすると $K' = \\dfrac{1}{2}m(2v)^2 = 4 \\times \\dfrac{1}{2}mv^2 = 4K$ で4倍になります。",
        "image_url": ""
    },

    // --- 位置エネルギー ---
    {
        "id": 20308,
        "category": "p1_c3",
        "difficulty": "A",
        "type": "choice",
        "classification": "位置エネルギー",
        "question": "重力による位置エネルギーの基準面はどのように決めるか。",
        "options": [
            "必ず地面を基準にする",
            "自由に選ぶことができる",
            "必ず物体の初期位置を基準にする",
            "海面を基準にすると決まっている"
        ],
        "answer": 1,
        "explanation": "重力による位置エネルギーの基準面は自由に選ぶことができます。問題に応じて計算しやすい位置を基準にします。",
        "image_url": ""
    },
    {
        "id": 20309,
        "category": "p1_c3",
        "difficulty": "B",
        "type": "choice",
        "classification": "位置エネルギー",
        "question": "質量 $3.0\\text{ kg}$ の物体が地面から $5.0\\text{ m}$ の高さにある。地面を基準としたときの重力による位置エネルギーはいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$15\\text{ J}$",
            "$49\\text{ J}$",
            "$147\\text{ J}$",
            "$294\\text{ J}$"
        ],
        "answer": 2,
        "explanation": "$U = mgh = 3.0 \\times 9.8 \\times 5.0 = 147\\text{ J}$ です。",
        "image_url": ""
    },
    {
        "id": 20310,
        "category": "p1_c3",
        "difficulty": "B",
        "type": "choice",
        "classification": "位置エネルギー",
        "question": "ばね定数 $200\\text{ N/m}$ のばねを $0.10\\text{ m}$ 縮めたとき、蓄えられる弾性エネルギーはいくらか。",
        "options": [
            "$0.50\\text{ J}$",
            "$1.0\\text{ J}$",
            "$10\\text{ J}$",
            "$20\\text{ J}$"
        ],
        "answer": 1,
        "explanation": "$U = \\dfrac{1}{2}kx^2 = \\dfrac{1}{2} \\times 200 \\times 0.10^2 = \\dfrac{1}{2} \\times 200 \\times 0.010 = 1.0\\text{ J}$ です。",
        "image_url": ""
    },

    // --- 力学的エネルギーの保存 ---
    {
        "id": 20311,
        "category": "p1_c3",
        "difficulty": "A",
        "type": "ox",
        "classification": "力学的エネルギーの保存",
        "question": "摩擦のない斜面を物体が滑り降りるとき、力学的エネルギーは保存される。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "摩擦がなければ保存力（重力）のみがはたらくので、力学的エネルギー（運動エネルギー＋位置エネルギー）は保存されます。",
        "image_url": ""
    },
    {
        "id": 20312,
        "category": "p1_c3",
        "difficulty": "C",
        "type": "choice",
        "classification": "力学的エネルギーの保存",
        "question": "高さ $5.0\\text{ m}$ から静かに滑り降りた物体が底面に達したときの速さはいくらか。摩擦はないものとし、$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$7.0\\text{ m/s}$",
            "$9.9\\text{ m/s}$",
            "$49\\text{ m/s}$",
            "$98\\text{ m/s}$"
        ],
        "answer": 1,
        "explanation": "力学的エネルギー保存より $mgh = \\dfrac{1}{2}mv^2$ 、$v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 5.0} = \\sqrt{98} \\fallingdotseq 9.9\\text{ m/s}$ です。",
        "image_url": ""
    },
    {
        "id": 20313,
        "category": "p1_c3",
        "difficulty": "C",
        "type": "choice",
        "classification": "仕事",
        "question": "仕事率（パワー）の定義として正しいものはどれか。",
        "options": [
            "仕事 × 時間",
            "仕事 ÷ 時間",
            "力 × 距離",
            "力 × 質量"
        ],
        "answer": 1,
        "explanation": "仕事率 $P = \\dfrac{W}{t}$ で、単位時間あたりの仕事です。単位は $\\text{W}$（ワット）です。",
        "image_url": ""
    },
    {
        "id": 20314,
        "category": "p1_c3",
        "difficulty": "B",
        "type": "choice",
        "classification": "仕事",
        "question": "$100\\text{ J}$ の仕事を $5.0$ 秒で行ったときの仕事率はいくらか。",
        "options": [
            "$20\\text{ W}$",
            "$50\\text{ W}$",
            "$500\\text{ W}$",
            "$0.050\\text{ W}$"
        ],
        "answer": 0,
        "explanation": "$P = \\dfrac{W}{t} = \\dfrac{100}{5.0} = 20\\text{ W}$ です。",
        "image_url": ""
    },
    {
        "id": 20315,
        "category": "p1_c3",
        "difficulty": "C",
        "type": "choice",
        "classification": "力学的エネルギーの保存",
        "question": "質量 $0.50\\text{ kg}$ のボールを $14\\text{ m/s}$ で真上に投げた。最高点の高さはいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$5.0\\text{ m}$",
            "$10\\text{ m}$",
            "$14\\text{ m}$",
            "$20\\text{ m}$"
        ],
        "answer": 1,
        "explanation": "エネルギー保存 $\\dfrac{1}{2}mv^2 = mgh$ より $h = \\dfrac{v^2}{2g} = \\dfrac{14^2}{2 \\times 9.8} = \\dfrac{196}{19.6} = 10\\text{ m}$ です。",
        "image_url": ""
    },
    {
        "id": 20316,
        "category": "p1_c3",
        "difficulty": "A",
        "type": "choice",
        "classification": "仕事",
        "question": "摩擦力がする仕事は正・負・ゼロのどれか。",
        "options": [
            "常に正",
            "常に負",
            "常にゼロ",
            "状況による"
        ],
        "answer": 3,
        "explanation": "動摩擦力は運動の向きと逆向きなので負の仕事をしますが、静止摩擦力は物体と一緒に動く場合に正の仕事をすることがあります（例：ベルトコンベア上の物体）。",
        "image_url": ""
    },
    {
        "id": 20317,
        "category": "p1_c3",
        "difficulty": "C",
        "type": "choice",
        "classification": "力学的エネルギーの保存",
        "question": "高さ $h$ の位置から初速 $v_0$ で水平に投げ出した物体が地面に着くときの速さはどれか。空気抵抗は無視する。",
        "options": [
            "$\\sqrt{v_0^2 + 2gh}$",
            "$v_0 + \\sqrt{2gh}$",
            "$\\sqrt{v_0^2 + g^2h^2}$",
            "$\\sqrt{2gh}$"
        ],
        "answer": 0,
        "explanation": "エネルギー保存より $\\dfrac{1}{2}mv_0^2 + mgh = \\dfrac{1}{2}mv^2$ なので $v = \\sqrt{v_0^2 + 2gh}$ です。",
        "image_url": ""
    },
    {
        "id": 20318,
        "category": "p1_c3",
        "difficulty": "A",
        "type": "choice",
        "classification": "運動エネルギー",
        "question": "仕事とエネルギーの関係（仕事-エネルギーの定理）として正しいものはどれか。",
        "options": [
            "合力のした仕事 ＝ 運動エネルギーの変化",
            "合力のした仕事 ＝ 位置エネルギーの変化",
            "合力のした仕事 ＝ 力学的エネルギーの変化",
            "合力のした仕事 ＝ 運動量の変化"
        ],
        "answer": 0,
        "explanation": "仕事-エネルギーの定理は $W_{\\text{合力}} = \\Delta K = \\dfrac{1}{2}mv^2 - \\dfrac{1}{2}mv_0^2$ です。",
        "image_url": ""
    },
    {
        "id": 20319,
        "category": "p1_c3",
        "difficulty": "B",
        "type": "choice",
        "classification": "位置エネルギー",
        "question": "質量 $2.0\\text{ kg}$ の物体を $3.0\\text{ m}$ 持ち上げるのに必要な最小の仕事はいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$6.0\\text{ J}$",
            "$29.4\\text{ J}$",
            "$58.8\\text{ J}$",
            "$19.6\\text{ J}$"
        ],
        "answer": 2,
        "explanation": "重力に逆らってゆっくり持ち上げるので $W = mgh = 2.0 \\times 9.8 \\times 3.0 = 58.8\\text{ J}$ です。",
        "image_url": ""
    },
    {
        "id": 20320,
        "category": "p1_c3",
        "difficulty": "C",
        "type": "choice",
        "classification": "力学的エネルギーの保存",
        "question": "摩擦のある水平面上で物体が停止した。失われた運動エネルギーはどこへ行ったか。",
        "options": [
            "消滅した",
            "熱エネルギーに変換された",
            "位置エネルギーに変換された",
            "運動量に変換された"
        ],
        "answer": 1,
        "explanation": "摩擦力がした負の仕事により、運動エネルギーは熱エネルギー（内部エネルギー）に変換されます。エネルギー全体は保存されますが、力学的エネルギーは減少します。",
        "image_url": ""
    },

    // ============================================================
    // 第4章 運動量の保存（20問）追加分
    // セクション: 運動量と力積 / 運動量保存則 / 反発係数
    // ============================================================

    // --- 運動量と力積 ---
    {
        "id": 20401,
        "category": "p1_c4",
        "difficulty": "A",
        "type": "choice",
        "classification": "運動量と力積",
        "question": "運動量の式として正しいものはどれか。",
        "options": [
            "$p = mv$",
            "$p = ma$",
            "$p = \\dfrac{1}{2}mv^2$",
            "$p = Ft$"
        ],
        "answer": 0,
        "explanation": "運動量は $p = mv$（質量 × 速度）です。ベクトル量で、単位は $\\text{kg}\\cdot\\text{m/s}$ です。",
        "image_url": ""
    },
    {
        "id": 20402,
        "category": "p1_c4",
        "difficulty": "A",
        "type": "choice",
        "classification": "運動量と力積",
        "question": "力積の式として正しいものはどれか。",
        "options": [
            "$I = Ft$",
            "$I = Fx$",
            "$I = ma$",
            "$I = mv$"
        ],
        "answer": 0,
        "explanation": "力積 $I = Ft$（力 × 時間）で、単位は $\\text{N}\\cdot\\text{s}$ です。力積は運動量の変化に等しくなります。",
        "image_url": ""
    },
    {
        "id": 20403,
        "category": "p1_c4",
        "difficulty": "A",
        "type": "ox",
        "classification": "運動量と力積",
        "question": "力積と運動量の変化は等しい。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "運動量と力積の関係 $F\\Delta t = m\\Delta v = mv - mv_0$ が成り立ちます。これは運動方程式 $F = ma$ を時間で積分したものです。",
        "image_url": ""
    },
    {
        "id": 20404,
        "category": "p1_c4",
        "difficulty": "B",
        "type": "choice",
        "classification": "運動量と力積",
        "question": "質量 $0.50\\text{ kg}$ のボールが $10\\text{ m/s}$ で壁に当たり、$8.0\\text{ m/s}$ で跳ね返った。ボールが受けた力積の大きさはいくらか。",
        "options": [
            "$1.0\\text{ N}\\cdot\\text{s}$",
            "$5.0\\text{ N}\\cdot\\text{s}$",
            "$9.0\\text{ N}\\cdot\\text{s}$",
            "$4.0\\text{ N}\\cdot\\text{s}$"
        ],
        "answer": 2,
        "explanation": "壁に向かう方向を正とすると、力積 $= m(v' - v) = 0.50 \\times ((-8.0) - 10) = 0.50 \\times (-18) = -9.0\\text{ N}\\cdot\\text{s}$ です。大きさは $9.0\\text{ N}\\cdot\\text{s}$ です。",
        "image_url": ""
    },
    {
        "id": 20405,
        "category": "p1_c4",
        "difficulty": "B",
        "type": "choice",
        "classification": "運動量と力積",
        "question": "質量 $2.0\\text{ kg}$ の物体に $10\\text{ N}$ の力を $3.0$ 秒間加えた。物体が受けた力積はいくらか。",
        "options": [
            "$6.7\\text{ N}\\cdot\\text{s}$",
            "$15\\text{ N}\\cdot\\text{s}$",
            "$30\\text{ N}\\cdot\\text{s}$",
            "$60\\text{ N}\\cdot\\text{s}$"
        ],
        "answer": 2,
        "explanation": "$I = Ft = 10 \\times 3.0 = 30\\text{ N}\\cdot\\text{s}$ です。",
        "image_url": ""
    },

    // --- 運動量保存則 ---
    {
        "id": 20406,
        "category": "p1_c4",
        "difficulty": "A",
        "type": "choice",
        "classification": "運動量保存則",
        "question": "運動量保存則が成り立つ条件はどれか。",
        "options": [
            "外力がはたらかない（または外力の和が0）",
            "摩擦がない",
            "弾性衝突である",
            "質量が等しい"
        ],
        "answer": 0,
        "explanation": "運動量保存則は外力の合力が0のとき成り立ちます。内力（衝突時の力など）だけでは全体の運動量は変化しません。",
        "image_url": ""
    },
    {
        "id": 20407,
        "category": "p1_c4",
        "difficulty": "B",
        "type": "choice",
        "classification": "運動量保存則",
        "question": "質量 $3.0\\text{ kg}$ の物体Aが $4.0\\text{ m/s}$ で、静止している質量 $1.0\\text{ kg}$ の物体Bに衝突し一体となった。衝突後の速度はいくらか。",
        "options": [
            "$1.0\\text{ m/s}$",
            "$2.0\\text{ m/s}$",
            "$3.0\\text{ m/s}$",
            "$4.0\\text{ m/s}$"
        ],
        "answer": 2,
        "explanation": "運動量保存 $3.0 \\times 4.0 + 1.0 \\times 0 = (3.0 + 1.0) \\times V$ より $V = \\dfrac{12}{4.0} = 3.0\\text{ m/s}$ です。",
        "image_url": ""
    },
    {
        "id": 20408,
        "category": "p1_c4",
        "difficulty": "C",
        "type": "choice",
        "classification": "運動量保存則",
        "question": "質量 $m$ の物体Aが速度 $v$ で、質量 $2m$ の静止している物体Bに衝突し、Aが静止した。Bの速度はいくらか。",
        "options": [
            "$\\dfrac{v}{2}$",
            "$v$",
            "$2v$",
            "$\\dfrac{v}{3}$"
        ],
        "answer": 0,
        "explanation": "運動量保存 $mv + 0 = 0 + 2m \\times V_B$ より $V_B = \\dfrac{v}{2}$ です。",
        "image_url": ""
    },

    // --- 反発係数 ---
    {
        "id": 20409,
        "category": "p1_c4",
        "difficulty": "A",
        "type": "choice",
        "classification": "反発係数",
        "question": "反発係数 $e = 1$ の衝突を何というか。",
        "options": [
            "完全弾性衝突",
            "完全非弾性衝突",
            "塑性衝突",
            "慣性衝突"
        ],
        "answer": 0,
        "explanation": "$e = 1$ は完全弾性衝突で、運動エネルギーが保存されます。$e = 0$ は完全非弾性衝突（一体化）です。",
        "image_url": ""
    },
    {
        "id": 20410,
        "category": "p1_c4",
        "difficulty": "A",
        "type": "choice",
        "classification": "反発係数",
        "question": "反発係数の定義式として正しいものはどれか。$v_1, v_2$ は衝突前、$v_1', v_2'$ は衝突後の速度とする。",
        "options": [
            "$e = -\\dfrac{v_1' - v_2'}{v_1 - v_2}$",
            "$e = \\dfrac{v_1' - v_2'}{v_1 - v_2}$",
            "$e = \\dfrac{v_1' + v_2'}{v_1 + v_2}$",
            "$e = \\dfrac{v_1 v_2}{v_1' v_2'}$"
        ],
        "answer": 0,
        "explanation": "反発係数 $e = -\\dfrac{v_1' - v_2'}{v_1 - v_2} = \\dfrac{\\text{衝突後の相対速度の大きさ}}{\\text{衝突前の相対速度の大きさ}}$ です。",
        "image_url": ""
    },
    {
        "id": 20411,
        "category": "p1_c4",
        "difficulty": "B",
        "type": "choice",
        "classification": "反発係数",
        "question": "ボールを高さ $h$ から落として、跳ね返り高さが $\\dfrac{h}{4}$ だった。反発係数はいくらか。",
        "options": [
            "$0.25$",
            "$0.50$",
            "$0.75$",
            "$1.0$"
        ],
        "answer": 1,
        "explanation": "床との衝突の反発係数は $e = \\sqrt{\\dfrac{h'}{h}} = \\sqrt{\\dfrac{h/4}{h}} = \\sqrt{\\dfrac{1}{4}} = \\dfrac{1}{2} = 0.50$ です。",
        "image_url": ""
    },
    {
        "id": 20412,
        "category": "p1_c4",
        "difficulty": "C",
        "type": "choice",
        "classification": "反発係数",
        "question": "質量 $m$ の球Aが速度 $v$ で静止している同じ質量の球Bに正面衝突した。反発係数が $e = 0.50$ のとき、衝突後のAの速度はいくらか。",
        "options": [
            "$\\dfrac{v}{4}$",
            "$\\dfrac{v}{2}$",
            "$\\dfrac{3v}{4}$",
            "$0$"
        ],
        "answer": 0,
        "explanation": "運動量保存 $mv = mv_A' + mv_B'$ と反発係数 $e = -\\dfrac{v_A' - v_B'}{v - 0} = 0.50$ を連立します。$v_B' - v_A' = 0.50v$ と $v_A' + v_B' = v$ より $v_A' = \\dfrac{v}{4}$、$v_B' = \\dfrac{3v}{4}$ です。",
        "image_url": ""
    },
    {
        "id": 20413,
        "category": "p1_c4",
        "difficulty": "B",
        "type": "choice",
        "classification": "運動量保存則",
        "question": "静止している質量 $50\\text{ kg}$ の人が質量 $5.0\\text{ kg}$ のボールを $10\\text{ m/s}$ で投げた。人が受ける反動の速さはいくらか。摩擦はないものとする。",
        "options": [
            "$0.50\\text{ m/s}$",
            "$1.0\\text{ m/s}$",
            "$5.0\\text{ m/s}$",
            "$10\\text{ m/s}$"
        ],
        "answer": 1,
        "explanation": "運動量保存 $0 = 50 \\times V + 5.0 \\times 10$ より $V = -\\dfrac{50}{50} = -1.0\\text{ m/s}$ です。大きさは $1.0\\text{ m/s}$ です。",
        "image_url": ""
    },
    {
        "id": 20414,
        "category": "p1_c4",
        "difficulty": "C",
        "type": "choice",
        "classification": "運動量と力積",
        "question": "野球のバットでボール（質量 $0.15\\text{ kg}$）を打つ。ボールが $30\\text{ m/s}$ で飛んできて $40\\text{ m/s}$ で打ち返された。バットとボールの接触時間が $0.010$ 秒のとき、ボールが受けた平均の力はいくらか。",
        "options": [
            "$150\\text{ N}$",
            "$600\\text{ N}$",
            "$1050\\text{ N}$",
            "$1500\\text{ N}$"
        ],
        "answer": 2,
        "explanation": "力積 $= m \\Delta v = 0.15 \\times (40 - (-30)) = 0.15 \\times 70 = 10.5\\text{ N}\\cdot\\text{s}$ 。平均の力 $F = \\dfrac{10.5}{0.010} = 1050\\text{ N}$ です。",
        "image_url": ""
    },
    {
        "id": 20415,
        "category": "p1_c4",
        "difficulty": "A",
        "type": "ox",
        "classification": "運動量と力積",
        "question": "運動量はスカラー量である。",
        "options": ["〇", "✕"],
        "answer": 1,
        "explanation": "運動量 $\\vec{p} = m\\vec{v}$ はベクトル量です。速度の向きと同じ向きを持ちます。",
        "image_url": ""
    },
    {
        "id": 20416,
        "category": "p1_c4",
        "difficulty": "B",
        "type": "choice",
        "classification": "運動量保存則",
        "question": "質量 $2.0\\text{ kg}$ の物体Aが $5.0\\text{ m/s}$ で右に、質量 $3.0\\text{ kg}$ の物体Bが $2.0\\text{ m/s}$ で左に進んでいる。全体の運動量はいくらか（右を正とする）。",
        "options": [
            "$4.0\\text{ kg}\\cdot\\text{m/s}$（右向き）",
            "$16\\text{ kg}\\cdot\\text{m/s}$（右向き）",
            "$4.0\\text{ kg}\\cdot\\text{m/s}$（左向き）",
            "$16\\text{ kg}\\cdot\\text{m/s}$（左向き）"
        ],
        "answer": 0,
        "explanation": "全体の運動量 $= 2.0 \\times 5.0 + 3.0 \\times (-2.0) = 10 - 6.0 = 4.0\\text{ kg}\\cdot\\text{m/s}$（右向き）です。",
        "image_url": ""
    },
    {
        "id": 20417,
        "category": "p1_c4",
        "difficulty": "C",
        "type": "choice",
        "classification": "運動量保存則",
        "question": "質量 $M$ の台車の上に質量 $m$ の人が乗っている。人が台車に対して速さ $u$ で前方に歩き出したとき、地面に対する台車の速度はいくらか。初め全体は静止しているとする。",
        "options": [
            "$-\\dfrac{mu}{m+M}$",
            "$-\\dfrac{Mu}{m+M}$",
            "$-u$",
            "$-\\dfrac{mu}{M}$"
        ],
        "answer": 0,
        "explanation": "運動量保存 $0 = m(V + u) + MV$（$V$は台車の速度、台車に対する人の速度が$u$）を解くと $V = -\\dfrac{mu}{m+M}$ です。",
        "image_url": ""
    },
    {
        "id": 20418,
        "category": "p1_c4",
        "difficulty": "B",
        "type": "choice",
        "classification": "反発係数",
        "question": "反発係数の値の範囲として正しいものはどれか。",
        "options": [
            "$-1 \\leq e \\leq 1$",
            "$0 \\leq e \\leq 1$",
            "$0 < e < 1$",
            "$e > 0$"
        ],
        "answer": 1,
        "explanation": "反発係数は $0 \\leq e \\leq 1$ の範囲です。$e = 0$ は完全非弾性衝突、$e = 1$ は完全弾性衝突です。",
        "image_url": ""
    },
    {
        "id": 20419,
        "category": "p1_c4",
        "difficulty": "C",
        "type": "choice",
        "classification": "反発係数",
        "question": "完全弾性衝突（$e = 1$）において、等しい質量の2つの物体が正面衝突した場合、衝突後にどうなるか。一方は速度 $v$、もう一方は静止しているとする。",
        "options": [
            "2つとも静止する",
            "速度が入れ替わる",
            "2つとも $\\dfrac{v}{2}$ で動く",
            "2つとも $v$ で同じ方向に動く"
        ],
        "answer": 1,
        "explanation": "等質量の完全弾性衝突では速度が交換されます。運動量保存と$e=1$の2式を連立すると、$v_A' = 0$、$v_B' = v$ となります。",
        "image_url": ""
    },
    {
        "id": 20420,
        "category": "p1_c4",
        "difficulty": "A",
        "type": "choice",
        "classification": "運動量と力積",
        "question": "運動量の単位として正しいものはどれか。",
        "options": [
            "$\\text{kg}\\cdot\\text{m/s}^2$",
            "$\\text{kg}\\cdot\\text{m/s}$",
            "$\\text{kg}\\cdot\\text{m}^2\\text{/s}$",
            "$\\text{N}\\cdot\\text{m}$"
        ],
        "answer": 1,
        "explanation": "運動量 $p = mv$ の単位は $\\text{kg}\\cdot\\text{m/s}$ です。力積の単位 $\\text{N}\\cdot\\text{s}$ と同じ次元です。",
        "image_url": ""
    },

    // ============================================================
    // 第5章 円運動と万有引力（20問）追加分
    // セクション: 等速円運動 / 慣性力 / 単振動 / 万有引力
    // ============================================================

    // --- 等速円運動 ---
    {
        "id": 20501,
        "category": "p1_c5",
        "difficulty": "A",
        "type": "choice",
        "classification": "等速円運動",
        "question": "等速円運動している物体の速度について正しいものはどれか。",
        "options": [
            "速さも向きも一定",
            "速さは一定だが向きは変化する",
            "速さも向きも変化する",
            "速さは変化するが向きは一定"
        ],
        "answer": 1,
        "explanation": "等速円運動では速さ（速度の大きさ）は一定ですが、向きは常に変化しています。そのため加速度が存在します。",
        "image_url": ""
    },
    {
        "id": 20502,
        "category": "p1_c5",
        "difficulty": "A",
        "type": "choice",
        "classification": "等速円運動",
        "question": "等速円運動の加速度の向きはどちらか。",
        "options": [
            "運動の方向（接線方向）",
            "円の中心に向かう方向",
            "円の外側に向かう方向",
            "鉛直下向き"
        ],
        "answer": 1,
        "explanation": "等速円運動の加速度（向心加速度）は常に円の中心に向いています。",
        "image_url": ""
    },
    {
        "id": 20503,
        "category": "p1_c5",
        "difficulty": "B",
        "type": "choice",
        "classification": "等速円運動",
        "question": "半径 $2.0\\text{ m}$、速さ $4.0\\text{ m/s}$ で等速円運動する物体の向心加速度はいくらか。",
        "options": [
            "$2.0\\text{ m/s}^2$",
            "$4.0\\text{ m/s}^2$",
            "$8.0\\text{ m/s}^2$",
            "$16\\text{ m/s}^2$"
        ],
        "answer": 2,
        "explanation": "$a = \\dfrac{v^2}{r} = \\dfrac{4.0^2}{2.0} = \\dfrac{16}{2.0} = 8.0\\text{ m/s}^2$ です。",
        "image_url": ""
    },
    {
        "id": 20504,
        "category": "p1_c5",
        "difficulty": "B",
        "type": "choice",
        "classification": "等速円運動",
        "question": "周期 $T$ で等速円運動する物体の角速度 $\\omega$ はどれか。",
        "options": [
            "$\\dfrac{2\\pi}{T}$",
            "$\\dfrac{T}{2\\pi}$",
            "$2\\pi T$",
            "$\\dfrac{\\pi}{T}$"
        ],
        "answer": 0,
        "explanation": "角速度 $\\omega = \\dfrac{2\\pi}{T}$ です。1周（$2\\pi$ ラジアン）を周期 $T$ で割ったものです。",
        "image_url": ""
    },

    // --- 慣性力 ---
    {
        "id": 20505,
        "category": "p1_c5",
        "difficulty": "A",
        "type": "choice",
        "classification": "慣性力",
        "question": "慣性力について正しいものはどれか。",
        "options": [
            "加速している観測者の立場で考えたときに現れる見かけの力",
            "すべての運動で常にはたらく力",
            "重力と同じもの",
            "静止している物体にのみはたらく力"
        ],
        "answer": 0,
        "explanation": "慣性力は非慣性系（加速度運動している座標系）で観測したときに現れる見かけの力で、加速度と逆向きに $ma$ の大きさではたらきます。",
        "image_url": ""
    },
    {
        "id": 20506,
        "category": "p1_c5",
        "difficulty": "B",
        "type": "choice",
        "classification": "慣性力",
        "question": "加速度 $2.0\\text{ m/s}^2$ で上昇するエレベーター内の質量 $60\\text{ kg}$ の人が体重計に乗ったとき、体重計の示す値はいくらか。$g = 9.8\\text{ m/s}^2$ とする。",
        "options": [
            "$468\\text{ N}$",
            "$588\\text{ N}$",
            "$708\\text{ N}$",
            "$120\\text{ N}$"
        ],
        "answer": 2,
        "explanation": "上昇加速中は見かけの重さが増えます。$N = m(g + a) = 60 \\times (9.8 + 2.0) = 60 \\times 11.8 = 708\\text{ N}$ です。",
        "image_url": ""
    },
    {
        "id": 20507,
        "category": "p1_c5",
        "difficulty": "C",
        "type": "choice",
        "classification": "慣性力",
        "question": "等速円運動する物体に乗った観測者から見ると、物体には外向きの力がはたらいているように見える。この力を何というか。",
        "options": [
            "向心力",
            "遠心力",
            "重力",
            "張力"
        ],
        "answer": 1,
        "explanation": "回転座標系（非慣性系）から見ると、外向きの慣性力である遠心力がはたらいているように見えます。遠心力は見かけの力です。",
        "image_url": ""
    },

    // --- 単振動 ---
    {
        "id": 20508,
        "category": "p1_c5",
        "difficulty": "A",
        "type": "choice",
        "classification": "単振動",
        "question": "単振動の復元力の特徴として正しいものはどれか。",
        "options": [
            "変位に比例し、変位と逆向き",
            "変位に比例し、変位と同じ向き",
            "速度に比例し、速度と逆向き",
            "常に一定の大きさ"
        ],
        "answer": 0,
        "explanation": "単振動の復元力は $F = -kx$ で、変位の大きさに比例し、変位と逆向き（つり合いの位置に向かう方向）にはたらきます。",
        "image_url": ""
    },
    {
        "id": 20509,
        "category": "p1_c5",
        "difficulty": "B",
        "type": "choice",
        "classification": "単振動",
        "question": "ばね定数 $k$、質量 $m$ のばね振り子の周期はどれか。",
        "options": [
            "$T = 2\\pi\\sqrt{\\dfrac{m}{k}}$",
            "$T = 2\\pi\\sqrt{\\dfrac{k}{m}}$",
            "$T = \\dfrac{1}{2\\pi}\\sqrt{\\dfrac{m}{k}}$",
            "$T = 2\\pi\\dfrac{m}{k}$"
        ],
        "answer": 0,
        "explanation": "ばね振り子の周期 $T = 2\\pi\\sqrt{\\dfrac{m}{k}}$ です。振幅に依存しません。",
        "image_url": ""
    },
    {
        "id": 20510,
        "category": "p1_c5",
        "difficulty": "B",
        "type": "choice",
        "classification": "単振動",
        "question": "単振り子の周期の式として正しいものはどれか。糸の長さを $l$ とする。",
        "options": [
            "$T = 2\\pi\\sqrt{\\dfrac{l}{g}}$",
            "$T = 2\\pi\\sqrt{\\dfrac{g}{l}}$",
            "$T = 2\\pi\\sqrt{\\dfrac{m}{g}}$",
            "$T = 2\\pi\\sqrt{\\dfrac{l}{m}}$"
        ],
        "answer": 0,
        "explanation": "単振り子の周期は $T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ で、質量に依存せず、糸の長さと重力加速度で決まります。",
        "image_url": ""
    },
    {
        "id": 20511,
        "category": "p1_c5",
        "difficulty": "C",
        "type": "choice",
        "classification": "単振動",
        "question": "単振動する物体の速さが最大になるのはどこか。",
        "options": [
            "振幅の端（折り返し点）",
            "つり合いの位置",
            "振幅の中間点",
            "どこでも同じ"
        ],
        "answer": 1,
        "explanation": "つり合いの位置では位置エネルギーが最小で運動エネルギーが最大になるため、速さが最大になります。端点では速さは $0$ です。",
        "image_url": ""
    },

    // --- 万有引力 ---
    {
        "id": 20512,
        "category": "p1_c5",
        "difficulty": "A",
        "type": "choice",
        "classification": "万有引力",
        "question": "万有引力の法則の式として正しいものはどれか。質量 $M, m$、距離 $r$、万有引力定数 $G$ とする。",
        "options": [
            "$F = G\\dfrac{Mm}{r^2}$",
            "$F = G\\dfrac{Mm}{r}$",
            "$F = G\\dfrac{M+m}{r^2}$",
            "$F = G\\dfrac{Mm}{r^3}$"
        ],
        "answer": 0,
        "explanation": "万有引力 $F = G\\dfrac{Mm}{r^2}$ で、2つの質量の積に比例し、距離の2乗に反比例します。",
        "image_url": ""
    },
    {
        "id": 20513,
        "category": "p1_c5",
        "difficulty": "A",
        "type": "ox",
        "classification": "万有引力",
        "question": "万有引力は質量を持つすべての物体間にはたらく。",
        "options": ["〇", "✕"],
        "answer": 0,
        "explanation": "万有引力は質量を持つすべての物体間にはたらきます。「万有」とは「すべてに共通する」という意味です。",
        "image_url": ""
    },
    {
        "id": 20514,
        "category": "p1_c5",
        "difficulty": "B",
        "type": "choice",
        "classification": "万有引力",
        "question": "地球の表面での重力加速度 $g$ と万有引力の関係として正しいものはどれか。地球の質量を $M$、地球の半径を $R$ とする。",
        "options": [
            "$g = \\dfrac{GM}{R^2}$",
            "$g = \\dfrac{GM}{R}$",
            "$g = GMR$",
            "$g = \\dfrac{G}{MR^2}$"
        ],
        "answer": 0,
        "explanation": "万有引力 $= mg$ より $G\\dfrac{Mm}{R^2} = mg$ 、$g = \\dfrac{GM}{R^2}$ です。",
        "image_url": ""
    },
    {
        "id": 20515,
        "category": "p1_c5",
        "difficulty": "C",
        "type": "choice",
        "classification": "等速円運動",
        "question": "質量 $0.50\\text{ kg}$ の物体を長さ $1.0\\text{ m}$ の糸で水平面内で回転させた。糸の張力が $20\\text{ N}$ のとき、物体の速さはいくらか。",
        "options": [
            "$\\sqrt{10}\\text{ m/s}$",
            "$\\sqrt{20}\\text{ m/s}$",
            "$\\sqrt{40}\\text{ m/s}$",
            "$10\\text{ m/s}$"
        ],
        "answer": 2,
        "explanation": "向心力 $= T = \\dfrac{mv^2}{r}$ より $20 = \\dfrac{0.50 \\times v^2}{1.0}$、$v^2 = 40$、$v = \\sqrt{40}\\text{ m/s}$ です。",
        "image_url": ""
    },
    {
        "id": 20516,
        "category": "p1_c5",
        "difficulty": "C",
        "type": "choice",
        "classification": "万有引力",
        "question": "第一宇宙速度（地球表面すれすれを周回する速度）の式として正しいものはどれか。地球の半径を $R$、重力加速度を $g$ とする。",
        "options": [
            "$v = \\sqrt{gR}$",
            "$v = \\sqrt{2gR}$",
            "$v = gR$",
            "$v = \\sqrt{\\dfrac{g}{R}}$"
        ],
        "answer": 0,
        "explanation": "地表すれすれでの円運動の条件 $\\dfrac{mv^2}{R} = mg$ より $v = \\sqrt{gR}$ です。$v \\fallingdotseq 7.9\\text{ km/s}$ となります。",
        "image_url": ""
    },
    {
        "id": 20517,
        "category": "p1_c5",
        "difficulty": "C",
        "type": "choice",
        "classification": "万有引力",
        "question": "ケプラーの第三法則として正しいものはどれか。$T$ は公転周期、$a$ は軌道の半長軸とする。",
        "options": [
            "$T^2 \\propto a^3$",
            "$T \\propto a^2$",
            "$T^3 \\propto a^2$",
            "$T^2 \\propto a^2$"
        ],
        "answer": 0,
        "explanation": "ケプラーの第三法則は $\\dfrac{T^2}{a^3} = \\text{一定}$ 、つまり $T^2$ は $a^3$ に比例します。",
        "image_url": ""
    },
    {
        "id": 20518,
        "category": "p1_c5",
        "difficulty": "B",
        "type": "choice",
        "classification": "等速円運動",
        "question": "角速度 $\\omega$ で半径 $r$ の等速円運動をする物体の速さ $v$ はどれか。",
        "options": [
            "$v = \\omega r$",
            "$v = \\dfrac{\\omega}{r}$",
            "$v = \\omega r^2$",
            "$v = \\dfrac{r}{\\omega}$"
        ],
        "answer": 0,
        "explanation": "$v = \\omega r$ です。1周の距離 $2\\pi r$ を周期 $T$ で割ると $v = \\dfrac{2\\pi r}{T} = \\omega r$ となります。",
        "image_url": ""
    },
    {
        "id": 20519,
        "category": "p1_c5",
        "difficulty": "C",
        "type": "choice",
        "classification": "単振動",
        "question": "単振り子の糸の長さを4倍にすると周期はどうなるか。",
        "options": [
            "$2$ 倍",
            "$4$ 倍",
            "$\\dfrac{1}{2}$ 倍",
            "$\\sqrt{2}$ 倍"
        ],
        "answer": 0,
        "explanation": "$T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ より、$l$ を4倍にすると $T' = 2\\pi\\sqrt{\\dfrac{4l}{g}} = 2 \\times 2\\pi\\sqrt{\\dfrac{l}{g}} = 2T$ で2倍になります。",
        "image_url": ""
    },
    {
        "id": 20520,
        "category": "p1_c5",
        "difficulty": "A",
        "type": "choice",
        "classification": "等速円運動",
        "question": "等速円運動に必要な向心力がなくなると、物体はどのように運動するか。",
        "options": [
            "接線方向に等速直線運動する",
            "円の中心に向かって落ちる",
            "その場に停止する",
            "外側に飛んでいく"
        ],
        "answer": 0,
        "explanation": "向心力がなくなると、物体はその瞬間の速度の向き（接線方向）に等速直線運動します。慣性の法則によるものです。",
        "image_url": ""
    }
];

// ============================================================
// 以上、全100問（各章20問 × 5章）
// ============================================================
