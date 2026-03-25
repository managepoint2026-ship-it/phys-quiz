/**
 * Question Editor Logic 
 */

let currentPartId = "";
let currentQuestions = [];
let activeQIndex = -1;

// Elements
const partSelector = document.getElementById('part-selector');
const qListContainer = document.getElementById('q-list');
const editForm = document.getElementById('edit-form');
const addQBtn = document.getElementById('add-q-btn');
const exportBtn = document.getElementById('export-js-btn');
const deleteBtn = document.getElementById('delete-q-btn');
const categoryFilter = document.getElementById('category-filter');
const difficultyFilter = document.getElementById('difficulty-filter');

const optInputs = document.querySelectorAll('.opt-input');
const fSubSec = document.getElementById('sub-questions-section');
const fSubList = document.getElementById('sub-questions-list');
const fAddSubBtn = document.getElementById('add-sub-q-btn');

// Form Fields
const fId = document.getElementById('q-id');
const fDiff = document.getElementById('q-difficulty');
const fType = document.getElementById('q-type');
const fCat = document.getElementById('q-category');
const fText = document.getElementById('q-text');
const fAns = document.getElementById('q-answer');
const fImg = document.getElementById('q-image');
const fExp = document.getElementById('q-explanation');
const fClass = document.getElementById('q-classification');
const fCMode = document.getElementById('q-c-mode');
const fCModeGroup = document.getElementById('c-type-group');

// Preview Elements
const prevText = document.getElementById('prev-question-text');
const prevImgContainer = document.getElementById('prev-image-container');
const prevImg = document.getElementById('prev-question-image');
const prevOpts = document.getElementById('prev-options-container');
const prevFbMsg = document.getElementById('prev-feedback-msg');
const prevFbAns = document.getElementById('prev-feedback-answer');
const prevFbExp = document.getElementById('prev-explanation-text');

/**
 * Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    // Override window.loadQuizData to capture data
    window.loadQuizData = (partId, data) => {
        currentPartId = partId;
        currentQuestions = data;
        updateCategoryFilter(); // Populates unique chapters
        renderQuestionList();
        if (currentQuestions.length > 0) {
            selectQuestion(0);
        }
        addQBtn.disabled = false;
        exportBtn.disabled = false;
        categoryFilter.disabled = false;
        difficultyFilter.disabled = false;
    };

    // Part Selection
    partSelector.addEventListener('change', (e) => {
        const val = e.target.value;
        if (!val) return;

        // Reset state
        currentQuestions = [];
        activeQIndex = -1;
        qListContainer.innerHTML = '<p class="loading">読み込み中...</p>';

        // Dynamic script loading
        const script = document.createElement('script');
        script.src = `data/${val}.js?t=${Date.now()}`;
        document.body.appendChild(script);
    });

    // Form Change Auto-Save & Preview
    editForm.addEventListener('input', () => {
        updateActiveQuestionFromForm();
        renderPreview();
    });

    // Category Filter Change
    categoryFilter.addEventListener('change', () => {
        renderQuestionList();
    });

    // Difficulty Filter Change
    difficultyFilter.addEventListener('change', () => {
        renderQuestionList();
    });

    // Difficulty Change handled in updateActiveQuestionFromForm for immediate sync
    fDiff.addEventListener('change', () => {
        const q = currentQuestions[activeQIndex];
        if (fDiff.value === 'C') {
            fCModeGroup.style.display = 'block';
            // Default to big for existing/new C if sub_questions exist
            if (q.sub_questions && q.sub_questions.length > 0) {
                fCMode.value = 'big';
            } else {
                fCMode.value = 'normal';
            }
        } else {
            fCModeGroup.style.display = 'none';
        }
        updateDifficultyLayout();
        updateActiveQuestionFromForm();
        renderPreview();
    });

    fCMode.addEventListener('change', () => {
        const q = currentQuestions[activeQIndex];
        if (fCMode.value === 'big' && (!q.sub_questions || q.sub_questions.length === 0)) {
            q.sub_questions = [{
                type: "choice",
                question: "設問(1)",
                options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
                answer: 0,
                explanation: ""
            }];
        }
        updateDifficultyLayout();
        updateActiveQuestionFromForm();
        renderPreview();
    });

    // Add Sub Question
    fAddSubBtn.addEventListener('click', () => {
        const q = currentQuestions[activeQIndex];
        if (!q.sub_questions) q.sub_questions = [];
        q.sub_questions.push({
            type: "choice",
            question: `設問(${q.sub_questions.length + 1})`,
            options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
            answer: 0,
            explanation: ""
        });
        renderSubQuestionsList();
        renderPreview();
    });

    // Option Toggle (Choice / OX)
    fType.addEventListener('change', (e) => {
        if (e.target.value === 'ox') {
            optInputs[0].value = "〇";
            optInputs[1].value = "✕";
            optInputs[2].value = "";
            optInputs[3].value = "";
            optInputs[2].disabled = true;
            optInputs[3].disabled = true;
        } else {
            optInputs[2].disabled = false;
            optInputs[3].disabled = false;
        }
        updateActiveQuestionFromForm();
        renderPreview();
    });

    // Add Question
    addQBtn.addEventListener('click', () => {
        const nextId = currentQuestions.length > 0
            ? Math.max(...currentQuestions.map(q => q.id)) + 1
            : 101;

        const newQ = {
            id: nextId,
            category: currentQuestions[0]?.category || "",
            difficulty: "A",
            type: "choice",
            question: "新しい問題文",
            options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
            answer: 0,
            explanation: "解説文",
            image_url: ""
        };
        currentQuestions.push(newQ);
        categoryFilter.value = 'all'; // Show all to see the new item
        difficultyFilter.value = 'all';
        updateCategoryFilter();
        renderQuestionList();
        selectQuestion(currentQuestions.length - 1);
    });

    // Delete Question
    deleteBtn.addEventListener('click', () => {
        if (activeQIndex === -1) return;
        if (!confirm('本当にこの問題を削除しますか？')) return;

        currentQuestions.splice(activeQIndex, 1);
        renderQuestionList();

        if (currentQuestions.length > 0) {
            selectQuestion(Math.max(0, activeQIndex - 1));
        } else {
            resetForm();
        }
    });

    // Export Logic
    exportBtn.addEventListener('click', () => {
        const overlay = document.getElementById('export-overlay');
        const textArea = document.getElementById('export-textarea');

        // Generate JS string
        const jsonStr = JSON.stringify(currentQuestions, null, 4);
        // Fix LaTeX double backslashes for output
        const fixedStr = jsonStr.replace(/\\/g, '\\\\');

        // Wrap with function call
        const output = `window.loadQuizData("${currentPartId}", ${jsonStr});`;

        textArea.value = output;
        overlay.classList.remove('hidden');
    });

    document.getElementById('close-export-btn').addEventListener('click', () => {
        document.getElementById('export-overlay').classList.add('hidden');
    });

    document.getElementById('copy-btn').addEventListener('click', () => {
        const textArea = document.getElementById('export-textarea');
        textArea.select();
        document.execCommand('copy');
        alert('クリップボードにコピーしました！');
    });

    // Preview Mode Toggle
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mode = btn.dataset.mode;
            if (mode === 'q') {
                document.getElementById('preview-q-view').classList.remove('hidden');
                document.getElementById('preview-a-view').classList.add('hidden');
            } else {
                document.getElementById('preview-q-view').classList.add('hidden');
                document.getElementById('preview-a-view').classList.remove('hidden');
            }
        });
    });
});

/**
 * UI Rendering
 */

function renderQuestionList() {
    qListContainer.innerHTML = "";

    const filterVal = categoryFilter.value;
    const diffFilterVal = difficultyFilter.value;

    currentQuestions.forEach((q, index) => {
        // Apply filter
        if (filterVal !== 'all' && q.category !== filterVal) {
            return;
        }
        if (diffFilterVal !== 'all' && q.difficulty !== diffFilterVal) {
            return;
        }

        const item = document.createElement('div');
        item.className = `q-item ${index === activeQIndex ? 'active' : ''}`;
        item.innerHTML = `
            <div class="q-meta">
                <span>ID: ${q.id}</span>
                <span style="color: #1976D2;">${q.category}</span>
                <span>[${q.difficulty}]</span>
            </div>
            <div class="q-text-prev">${q.question || "(無題)"}</div>
        `;
        item.onclick = () => selectQuestion(index);
        qListContainer.appendChild(item);
    });
}

function updateCategoryFilter() {
    const cats = [...new Set(currentQuestions.map(q => q.category).filter(c => c))].sort();

    // Maintain current selection if possible
    const currentVal = categoryFilter.value;

    categoryFilter.innerHTML = '<option value="all">全てのカテゴリー</option>';
    cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        categoryFilter.appendChild(opt);
    });

    if (cats.includes(currentVal)) {
        categoryFilter.value = currentVal;
    }
}

function selectQuestion(index) {
    activeQIndex = index;
    const q = currentQuestions[index];
    if (!q) return;

    // Fill Form
    fId.value = q.id;
    fDiff.value = q.difficulty;
    fType.value = q.type || "choice";
    fCat.value = q.category;
    fText.value = q.question;
    fAns.value = q.answer;
    fImg.value = q.image_url || "";
    fExp.value = q.explanation;
    fClass.value = q.classification || "";

    if (q.difficulty === 'C') {
        fCMode.value = (q.sub_questions && q.sub_questions.length > 0) ? 'big' : 'normal';
    }

    optInputs.forEach((input, i) => {
        input.value = (q.options && q.options[i]) || "";
    });

    updateDifficultyLayout();

    // UI Updates
    renderSubQuestionsList();
    renderQuestionList();
    renderPreview();
    deleteBtn.classList.remove('hidden');
}

function updateDifficultyLayout() {
    const q = currentQuestions[activeQIndex];
    if (!q) return;

    const diff = fDiff.value;
    const isC = diff === 'C';
    fCModeGroup.style.display = isC ? 'block' : 'none';

    // In edit mode C, we use fCMode to decide big vs normal
    const isBigC = isC && fCMode.value === 'big';

    const stdFieldsGroup = [
        fType.closest('.form-group'),
        document.getElementById('options-group'),
        fAns.closest('.form-group'),
        fExp.closest('.form-group')
    ];

    stdFieldsGroup.forEach(el => {
        if (el) isBigC ? el.classList.add('hidden') : el.classList.remove('hidden');
    });

    const textLabel = document.querySelector('label[for="q-text"]');
    if (textLabel) {
        textLabel.textContent = isBigC ? "共通リード文 (Latex可)" : "問題文 (Latex可)";
    }

    if (isC) {
        // Sync fCMode value from presence of sub_questions if not manually toggled?
        // Actually best to keep manually toggled or set on selectQuestion
        if (!isBigC) {
            fSubSec.classList.add('hidden');
        } else {
            fSubSec.classList.remove('hidden');
        }
    } else {
        fSubSec.classList.add('hidden');
    }
}

function renderSubQuestionsList() {
    if (activeQIndex === -1) return;
    const q = currentQuestions[activeQIndex];
    const isBig = fDiff.value === 'C';

    if (!isBig) {
        fSubSec.classList.add('hidden');
        return;
    }

    fSubSec.classList.remove('hidden');
    fSubList.innerHTML = "";

    const subQs = q.sub_questions || [];
    subQs.forEach((sq, i) => {
        const card = document.createElement('div');
        card.className = 'sub-q-item-card';
        card.innerHTML = `
            <div class="card-header">
                <span>設問 (${i + 1})</span>
                <button type="button" class="delete-btn mini" onclick="deleteSubQuestion(${i})">削除</button>
            </div>
            <div class="sub-q-inputs">
                <input type="text" placeholder="設問文" class="sub-q-text-input" value="${sq.question}" oninput="updateSubQuestion(${i}, 'question', this.value)">
                <div class="sub-q-row">
                    <select onchange="updateSubQuestion(${i}, 'type', this.value)">
                        <option value="choice" ${sq.type === 'choice' ? 'selected' : ''}>4択</option>
                        <option value="ox" ${sq.type === 'ox' ? 'selected' : ''}>〇×</option>
                    </select>
                    <input type="number" placeholder="正解Index" value="${sq.answer}" oninput="updateSubQuestion(${i}, 'answer', parseInt(this.value))">
                </div>
                <div class="opt-grid-mini">
                    ${[0, 1, 2, 3].map(oi => {
            const isExtra = oi >= 2 && sq.type === 'ox';
            return `<input type="text" placeholder="選択肢${oi + 1}" class="mini-input" value="${sq.options[oi] || ''}" ${isExtra ? 'disabled style="background:#eee; opacity:0.6;"' : ''} oninput="updateSubOpt(${i}, ${oi}, this.value)">`;
        }).join('')}
                </div>
                <textarea placeholder="個別の修正・解説 (空欄可)" class="mini-input" oninput="updateSubQuestion(${i}, 'explanation', this.value)">${sq.explanation || ""}</textarea>
            </div>
        `;
        fSubList.appendChild(card);
    });
}

function deleteSubQuestion(subIdx) {
    const q = currentQuestions[activeQIndex];
    q.sub_questions.splice(subIdx, 1);
    renderSubQuestionsList();
    renderPreview();
}

function updateSubQuestion(subIdx, field, value) {
    const q = currentQuestions[activeQIndex];
    const sq = q.sub_questions[subIdx];
    sq[field] = value;

    // Auto-adjust options if type changed to ox
    if (field === 'type' && value === 'ox') {
        sq.options[0] = "〇";
        sq.options[1] = "✕";
        sq.options[2] = "";
        sq.options[3] = "";
        renderSubQuestionsList(); // Re-render to apply disabled state
    } else if (field === 'type' && value === 'choice') {
        renderSubQuestionsList();
    }

    renderPreview();
}

function updateSubOpt(subIdx, optIdx, value) {
    const q = currentQuestions[activeQIndex];
    q.sub_questions[subIdx].options[optIdx] = value;
    renderPreview();
}

function resetForm() {
    editForm.reset();
    activeQIndex = -1;
    deleteBtn.classList.add('hidden');
    prevText.textContent = "";
    prevOpts.innerHTML = "";
}

function updateActiveQuestionFromForm() {
    if (activeQIndex === -1) return;
    const q = currentQuestions[activeQIndex];
    const isBig = fDiff.value === 'C';

    q.id = parseInt(fId.value, 10) || q.id; // Update ID
    q.difficulty = fDiff.value;
    q.category = fCat.value;
    q.image_url = fImg.value;
    q.classification = fClass.value;

    if (isBig) {
        if (fCMode.value === 'big') {
            q.common_text = fText.value;
            q.question = fText.value; // Sync for list view
            // sub_questions are updated via their own listeners
        } else {
            // C but normal
            q.type = fType.value;
            q.question = fText.value;
            q.answer = parseInt(fAns.value, 10);
            q.explanation = fExp.value;
            q.sub_questions = []; // Important: Clear sub_questions if normal
            const newOpts = [];
            optInputs.forEach(input => {
                if (!input.disabled && input.value.trim()) {
                    newOpts.push(input.value);
                }
            });
            q.options = newOpts;
        }
    } else {
        q.type = fType.value;
        q.question = fText.value;
        q.answer = parseInt(fAns.value, 10);
        q.explanation = fExp.value;

        const newOpts = [];
        optInputs.forEach(input => {
            if (!input.disabled && input.value.trim()) {
                newOpts.push(input.value);
            }
        });
        q.options = newOpts;
    }

    // Refresh filter options (in case category changed)
    updateCategoryFilter();

    // Fast update sidebar item text and ID
    const items = qListContainer.querySelectorAll('.q-item');
    if (items[activeQIndex]) {
        items[activeQIndex].querySelector('.q-text-prev').textContent = q.question;
        const metaSpan = items[activeQIndex].querySelector('.q-meta span:first-child');
        if (metaSpan) metaSpan.textContent = `ID: ${q.id}`;
    }
}

function renderPreview() {
    if (activeQIndex === -1) return;
    const q = currentQuestions[activeQIndex];
    const isBig = fDiff.value === 'C';

    // Top Lead Text
    prevText.textContent = isBig ? (q.common_text || q.question) : q.question;

    // Options Container (Standard View)
    prevOpts.innerHTML = "";
    if (!isBig) {
        q.options.forEach((opt, i) => {
            const btn = document.createElement('div');
            btn.className = 'mock-opt-btn';
            if (i === q.answer) btn.style.borderColor = 'var(--secondary-color)';
            btn.textContent = opt;
            prevOpts.appendChild(btn);
        });
    }

    // Image
    const displayImg = isBig ? (q.image_url) : q.image_url;
    if (displayImg) {
        prevImg.src = displayImg;
        prevImgContainer.classList.remove('hidden');
    } else {
        prevImgContainer.classList.add('hidden');
    }

    // Feedback Area Logic
    const qPrevArea = document.getElementById('preview-q-view');
    const aPrevArea = document.getElementById('preview-a-view');
    const summaryContainer = document.getElementById('sub-q-summary-prev') || document.createElement('div');
    if (!document.getElementById('sub-q-summary-prev')) {
        summaryContainer.id = 'sub-q-summary-prev';
        summaryContainer.className = 'sub-q-summary';
        prevFbExp.parentElement.insertBefore(summaryContainer, prevFbExp);
    }

    if (isBig) {
        prevFbAns.classList.add('hidden');
        summaryContainer.innerHTML = "";
        summaryContainer.classList.remove('hidden');
        (q.sub_questions || []).forEach((sq, i) => {
            const item = document.createElement('div');
            item.className = `summary-item correct`; // Mock as correct for preview
            item.innerHTML = `
                <div class="summary-status">○</div>
                <div class="summary-text">
                    <strong>(${i + 1})</strong> ${sq.question}<br>
                    <small>正解: ${sq.options[sq.answer]}</small>
                </div>
            `;
            summaryContainer.appendChild(item);
        });
        prevFbExp.textContent = "大問形式のまとめ表示例です。実際のアプリでは全問回答後に表示されます。";
    } else {
        prevFbAns.classList.remove('hidden');
        summaryContainer.classList.add('hidden');
        prevFbAns.textContent = `答え．${q.options[q.answer] || ""}`;
        prevFbExp.textContent = q.explanation;
    }

    // Math Rendering
    renderMath();
}

function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('preview-area'), {
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
