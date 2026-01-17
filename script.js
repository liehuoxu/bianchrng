// 任务数据
const tasks = {
    '洗水壶': { time: 1, name: '洗水壶' },
    '接水': { time: 1, name: '接水' },
    '烧水': { time: 8, name: '烧水' },
    '找茶叶': { time: 1, name: '找茶叶' },
    '洗茶杯': { time: 2, name: '洗茶杯' },
    '沏茶': { time: 1, name: '沏茶' }
};

// 获取任务图标SVG - 生动卡通风格
function getTaskIcon(taskName) {
    const icons = {
        '洗水壶': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- 水壶主体 -->
            <ellipse cx="50" cy="65" rx="22" ry="18" fill="#E8F4F8" stroke="#4A90E2" stroke-width="2.5"/>
            <path d="M28 65 Q28 55 35 50 L35 30 Q35 20 45 20 L55 20 Q65 20 65 30 L65 50 Q72 55 72 65" fill="#E8F4F8" stroke="#4A90E2" stroke-width="2.5"/>
            <!-- 壶嘴 -->
            <path d="M72 60 Q80 55 85 50" stroke="#4A90E2" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- 壶把手 -->
            <path d="M28 50 Q20 45 20 35 Q20 25 28 30" stroke="#4A90E2" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- 水滴效果 -->
            <circle cx="40" cy="45" r="3" fill="#87CEEB" opacity="0.8">
                <animate attributeName="cy" values="45;50;45" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="50" r="2.5" fill="#87CEEB" opacity="0.7">
                <animate attributeName="cy" values="50;55;50" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="55" r="2" fill="#87CEEB" opacity="0.6">
                <animate attributeName="cy" values="55;60;55" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <!-- 可爱表情 -->
            <circle cx="45" cy="42" r="2" fill="#4A90E2"/>
            <circle cx="55" cy="42" r="2" fill="#4A90E2"/>
            <path d="M45 48 Q50 52 55 48" stroke="#4A90E2" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>`,
        '接水': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- 水龙头 -->
            <rect x="45" y="5" width="10" height="15" rx="2" fill="#C0C0C0" stroke="#808080" stroke-width="1.5"/>
            <rect x="47" y="20" width="6" height="8" fill="#C0C0C0" stroke="#808080" stroke-width="1"/>
            <path d="M50 28 Q50 35 45 40" stroke="#C0C0C0" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- 水壶 -->
            <ellipse cx="50" cy="70" rx="22" ry="18" fill="#E8F4F8" stroke="#4A90E2" stroke-width="2.5"/>
            <path d="M28 70 Q28 60 35 55 L35 35 Q35 25 45 25 L55 25 Q65 25 65 35 L65 55 Q72 60 72 70" fill="#E8F4F8" stroke="#4A90E2" stroke-width="2.5"/>
            <path d="M28 55 Q20 50 20 40 Q20 30 28 35" stroke="#4A90E2" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- 水流效果 -->
            <path d="M45 40 Q45 50 42 55 Q45 60 45 70" stroke="#87CEEB" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M45 40 Q45 50 42 55 Q45 60 45 70;M45 40 Q47 50 44 55 Q47 60 45 70;M45 40 Q45 50 42 55 Q45 60 45 70" dur="0.5s" repeatCount="indefinite"/>
            </path>
            <path d="M50 40 Q50 50 50 55 Q50 60 50 70" stroke="#87CEEB" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M50 40 Q50 50 50 55 Q50 60 50 70;M50 40 Q52 50 50 55 Q52 60 50 70;M50 40 Q50 50 50 55 Q50 60 50 70" dur="0.5s" repeatCount="indefinite"/>
            </path>
            <path d="M55 40 Q55 50 58 55 Q55 60 55 70" stroke="#87CEEB" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M55 40 Q55 50 58 55 Q55 60 55 70;M55 40 Q53 50 56 55 Q53 60 55 70;M55 40 Q55 50 58 55 Q55 60 55 70" dur="0.5s" repeatCount="indefinite"/>
            </path>
            <!-- 水花 -->
            <circle cx="42" cy="60" r="2" fill="#87CEEB" opacity="0.6">
                <animate attributeName="cy" values="60;65;60" dur="0.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="58" cy="62" r="2" fill="#87CEEB" opacity="0.6">
                <animate attributeName="cy" values="62;67;62" dur="0.6s" repeatCount="indefinite"/>
            </circle>
        </svg>`,
        '烧水': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- 水壶 -->
            <ellipse cx="50" cy="70" rx="22" ry="18" fill="#FFF8DC" stroke="#FF8C00" stroke-width="2.5"/>
            <path d="M28 70 Q28 60 35 55 L35 35 Q35 25 45 25 L55 25 Q65 25 65 35 L65 55 Q72 60 72 70" fill="#FFF8DC" stroke="#FF8C00" stroke-width="2.5"/>
            <path d="M72 65 Q80 60 85 55" stroke="#FF8C00" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M28 55 Q20 50 20 40 Q20 30 28 35" stroke="#FF8C00" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- 蒸汽 -->
            <path d="M40 30 Q38 20 40 15 Q42 20 40 30" stroke="#E0E0E0" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M40 30 Q38 20 40 15 Q42 20 40 30;M40 30 Q42 20 40 10 Q38 20 40 30;M40 30 Q38 20 40 15 Q42 20 40 30" dur="1.5s" repeatCount="indefinite"/>
            </path>
            <path d="M50 30 Q48 20 50 15 Q52 20 50 30" stroke="#E0E0E0" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M50 30 Q48 20 50 15 Q52 20 50 30;M50 30 Q52 20 50 10 Q48 20 50 30;M50 30 Q48 20 50 15 Q52 20 50 30" dur="1.5s" repeatCount="indefinite"/>
            </path>
            <path d="M60 30 Q58 20 60 15 Q62 20 60 30" stroke="#E0E0E0" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M60 30 Q58 20 60 15 Q62 20 60 30;M60 30 Q62 20 60 10 Q58 20 60 30;M60 30 Q58 20 60 15 Q62 20 60 30" dur="1.5s" repeatCount="indefinite"/>
            </path>
            <!-- 火焰 -->
            <ellipse cx="50" cy="85" rx="18" ry="8" fill="#FF6B6B" opacity="0.6"/>
            <path d="M35 85 Q40 75 45 80 Q50 75 55 80 Q60 75 65 85" stroke="#FF4500" stroke-width="3" fill="#FF6B6B" opacity="0.8"/>
            <path d="M40 85 Q45 78 50 82 Q55 78 60 85" stroke="#FF8C00" stroke-width="2" fill="#FFA500" opacity="0.9"/>
            <circle cx="45" cy="82" r="2" fill="#FFFF00"/>
            <circle cx="55" cy="82" r="2" fill="#FFFF00"/>
            <!-- 温度计效果 -->
            <circle cx="50" cy="45" r="3" fill="#FF4500">
                <animate attributeName="r" values="3;4;3" dur="1s" repeatCount="indefinite"/>
            </circle>
        </svg>`,
        '找茶叶': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- 茶叶罐 -->
            <rect x="35" y="25" width="30" height="45" rx="4" fill="#8B4513" stroke="#654321" stroke-width="2.5"/>
            <rect x="38" y="28" width="24" height="39" rx="2" fill="#A0522D" opacity="0.5"/>
            <!-- 盖子 -->
            <ellipse cx="50" cy="25" rx="18" ry="6" fill="#D2691E" stroke="#8B4513" stroke-width="2"/>
            <circle cx="50" cy="25" r="4" fill="#8B4513"/>
            <!-- 标签 -->
            <rect x="40" y="40" width="20" height="15" rx="2" fill="#FFD700" stroke="#FFA500" stroke-width="1.5"/>
            <text x="50" y="51" font-family="Arial" font-size="8" fill="#8B4513" text-anchor="middle" font-weight="bold">茶</text>
            <!-- 茶叶图案 -->
            <ellipse cx="45" cy="35" rx="3" ry="5" fill="#228B22" opacity="0.8" transform="rotate(-20 45 35)"/>
            <ellipse cx="55" cy="35" rx="3" ry="5" fill="#228B22" opacity="0.8" transform="rotate(20 55 35)"/>
            <ellipse cx="50" cy="58" rx="2.5" ry="4" fill="#228B22" opacity="0.7" transform="rotate(0 50 58)"/>
            <!-- 问号表情（表示寻找） -->
            <circle cx="50" cy="15" r="8" fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
            <text x="50" y="19" font-family="Arial" font-size="12" fill="#8B4513" text-anchor="middle" font-weight="bold">?</text>
            <!-- 搜索光线 -->
            <path d="M50 15 L65 5" stroke="#FFD700" stroke-width="2" stroke-linecap="round" opacity="0.6" stroke-dasharray="2,2">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite"/>
            </path>
        </svg>`,
        '洗茶杯': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- 茶杯 -->
            <path d="M35 30 Q35 25 40 25 L60 25 Q65 25 65 30 L65 55 Q65 60 60 60 L40 60 Q35 60 35 55 Z" fill="#F0F8FF" stroke="#4169E1" stroke-width="2.5"/>
            <path d="M40 60 L40 65 Q40 70 45 70 L55 70 Q60 70 60 65 L60 60" stroke="#4169E1" stroke-width="2.5" fill="none"/>
            <path d="M50 25 L50 20" stroke="#4169E1" stroke-width="2.5" stroke-linecap="round"/>
            <!-- 茶杯把手 -->
            <path d="M65 35 Q75 35 75 45 Q75 50 70 50" stroke="#4169E1" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- 水 -->
            <ellipse cx="50" cy="42" rx="12" ry="8" fill="#87CEEB" opacity="0.6"/>
            <!-- 水滴效果 -->
            <circle cx="30" cy="30" r="3" fill="#87CEEB" opacity="0.8">
                <animate attributeName="cy" values="30;35;30" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="70" cy="32" r="2.5" fill="#87CEEB" opacity="0.7">
                <animate attributeName="cy" values="32;37;32" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="40" r="2" fill="#87CEEB" opacity="0.6">
                <animate attributeName="cy" values="40;45;40" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="75" cy="38" r="2" fill="#87CEEB" opacity="0.6">
                <animate attributeName="cy" values="38;43;38" dur="1.3s" repeatCount="indefinite"/>
            </circle>
            <!-- 泡沫 -->
            <circle cx="45" cy="38" r="2" fill="white" opacity="0.8">
                <animate attributeName="r" values="2;2.5;2" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="55" cy="40" r="1.5" fill="white" opacity="0.7">
                <animate attributeName="r" values="1.5;2;1.5" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <!-- 可爱表情 -->
            <circle cx="45" cy="35" r="2" fill="#4169E1"/>
            <circle cx="55" cy="35" r="2" fill="#4169E1"/>
            <path d="M45 45 Q50 50 55 45" stroke="#4169E1" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>`,
        '沏茶': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- 茶杯 -->
            <path d="M35 30 Q35 25 40 25 L60 25 Q65 25 65 30 L65 55 Q65 60 60 60 L40 60 Q35 60 35 55 Z" fill="#FFF8DC" stroke="#8B4513" stroke-width="2.5"/>
            <path d="M40 60 L40 65 Q40 70 45 70 L55 70 Q60 70 60 65 L60 60" stroke="#8B4513" stroke-width="2.5" fill="none"/>
            <path d="M50 25 L50 20" stroke="#8B4513" stroke-width="2.5" stroke-linecap="round"/>
            <!-- 茶杯把手 -->
            <path d="M65 35 Q75 35 75 45 Q75 50 70 50" stroke="#8B4513" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- 茶水 -->
            <ellipse cx="50" cy="42" rx="12" ry="8" fill="#8B4513" opacity="0.7"/>
            <!-- 茶叶 -->
            <ellipse cx="45" cy="40" rx="2" ry="3" fill="#228B22" opacity="0.8" transform="rotate(-15 45 40)"/>
            <ellipse cx="52" cy="42" rx="1.5" ry="2.5" fill="#228B22" opacity="0.7" transform="rotate(20 52 42)"/>
            <ellipse cx="55" cy="38" rx="1.5" ry="2.5" fill="#228B22" opacity="0.7" transform="rotate(-10 55 38)"/>
            <!-- 热气 -->
            <path d="M45 25 Q43 15 45 10 Q47 15 45 25" stroke="#E0E0E0" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M45 25 Q43 15 45 10 Q47 15 45 25;M45 25 Q47 15 45 5 Q43 15 45 25;M45 25 Q43 15 45 10 Q47 15 45 25" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M50 25 Q48 15 50 10 Q52 15 50 25" stroke="#E0E0E0" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M50 25 Q48 15 50 10 Q52 15 50 25;M50 25 Q52 15 50 5 Q48 15 50 25;M50 25 Q48 15 50 10 Q52 15 50 25" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M55 25 Q53 15 55 10 Q57 15 55 25" stroke="#E0E0E0" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8">
                <animate attributeName="d" values="M55 25 Q53 15 55 10 Q57 15 55 25;M55 25 Q57 15 55 5 Q53 15 55 25;M55 25 Q53 15 55 10 Q57 15 55 25" dur="2s" repeatCount="indefinite"/>
            </path>
            <!-- 爱心装饰 -->
            <path d="M50 15 Q48 13 46 13 Q44 13 44 15 Q44 17 50 20 Q56 17 56 15 Q56 13 54 13 Q52 13 50 15" fill="#FF69B4" opacity="0.6"/>
        </svg>`
    };
    return icons[taskName] || '';
}

// 存储流程图中的任务（动态数组）
let flowchartTasks = [];
let stepCounter = 0; // 步骤计数器

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeIcons();
    initializeDragAndDrop();
    // 创建初始的3个步骤
    addFlowchartStep();
    addFlowchartStep();
    addFlowchartStep();
    updateDisplay();
});

// 初始化图标
function initializeIcons() {
    Object.keys(tasks).forEach(taskName => {
        const iconElement = document.getElementById(`icon-${taskName}`);
        if (iconElement) {
            iconElement.innerHTML = getTaskIcon(taskName);
        }
    });
}

// 初始化拖拽功能
function initializeDragAndDrop() {
    const taskCards = document.querySelectorAll('#taskPool .task-card');
    
    taskCards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
    });
}

// 拖拽开始
function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
    e.dataTransfer.setData('text/plain', e.target.dataset.task);
    e.target.classList.add('dragging');
}

// 拖拽结束
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// 允许放置
function allowDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

// 移除拖拽悬停效果
document.addEventListener('dragover', function(e) {
    if (e.target.classList.contains('row-tasks')) {
        e.preventDefault();
    }
});

document.addEventListener('dragleave', function(e) {
    if (e.target.classList.contains('row-tasks')) {
        e.target.classList.remove('drag-over');
    }
});

// 放置任务
function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const taskName = e.dataTransfer.getData('text/plain');
    const rowIndex = parseInt(e.currentTarget.closest('.flowchart-row').dataset.row);
    
    // 检查任务是否已经在流程图中
    if (isTaskInFlowchart(taskName)) {
        showFeedback('warning', `"${taskName}" 已经在流程图中了！每个任务只能使用一次。`);
        return;
    }
    
    // 添加任务到对应行
    addTaskToRow(rowIndex, taskName);
    updateDisplay();
}

// 添加流程图步骤
function addFlowchartStep() {
    const stepIndex = flowchartTasks.length;
    flowchartTasks.push([]);
    
    const flowchart = document.getElementById('flowchart');
    const row = document.createElement('div');
    row.className = 'flowchart-row';
    row.dataset.row = stepIndex;
    
    const label = document.createElement('div');
    label.className = 'row-label';
    const labelText = document.createTextNode(`步骤 ${stepIndex + 1} `);
    label.appendChild(labelText);
    
    // 添加删除步骤按钮
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-row-btn';
    deleteBtn.innerHTML = '×';
    deleteBtn.onclick = (function(idx) {
        return function(e) {
            e.stopPropagation();
            deleteFlowchartStep(idx);
        };
    })(stepIndex);
    label.appendChild(deleteBtn);
    
    const tasksDiv = document.createElement('div');
    tasksDiv.className = 'row-tasks';
    tasksDiv.setAttribute('ondrop', 'drop(event)');
    tasksDiv.setAttribute('ondragover', 'allowDrop(event)');
    
    row.appendChild(label);
    row.appendChild(tasksDiv);
    flowchart.appendChild(row);
    
    stepCounter++;
    updateDisplay();
}

// 删除流程图步骤
function deleteFlowchartStep(stepIndex) {
    if (flowchartTasks.length <= 1) {
        showFeedback('warning', '至少需要保留一个步骤！');
        return;
    }
    
    if (confirm(`确定要删除步骤 ${stepIndex + 1} 吗？该步骤中的所有任务将被移除。`)) {
        flowchartTasks.splice(stepIndex, 1);
        
        // 重新渲染所有步骤
        const flowchart = document.getElementById('flowchart');
        flowchart.innerHTML = '';
        
        flowchartTasks.forEach((tasks, index) => {
            const row = document.createElement('div');
            row.className = 'flowchart-row';
            row.dataset.row = index;
            
            const label = document.createElement('div');
            label.className = 'row-label';
            const labelText = document.createTextNode(`步骤 ${index + 1} `);
            label.appendChild(labelText);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-row-btn';
            deleteBtn.innerHTML = '×';
            deleteBtn.onclick = (function(idx) {
                return function(e) {
                    e.stopPropagation();
                    deleteFlowchartStep(idx);
                };
            })(index);
            label.appendChild(deleteBtn);
            
            const tasksDiv = document.createElement('div');
            tasksDiv.className = 'row-tasks';
            tasksDiv.setAttribute('ondrop', 'drop(event)');
            tasksDiv.setAttribute('ondragover', 'allowDrop(event)');
            
            // 恢复该步骤中的任务
            tasks.forEach(taskName => {
                const taskCard = createTaskCard(taskName, true);
                tasksDiv.appendChild(taskCard);
            });
            
            row.appendChild(label);
            row.appendChild(tasksDiv);
            flowchart.appendChild(row);
        });
        
        updateDisplay();
    }
}

// 检查任务是否已在流程图中
function isTaskInFlowchart(taskName) {
    for (let i = 0; i < flowchartTasks.length; i++) {
        if (flowchartTasks[i].includes(taskName)) {
            return true;
        }
    }
    return false;
}

// 添加任务到指定行
function addTaskToRow(rowIndex, taskName) {
    if (rowIndex >= 0 && rowIndex < flowchartTasks.length) {
        flowchartTasks[rowIndex].push(taskName);
        
        const rowTasks = document.querySelectorAll('.flowchart-row')[rowIndex].querySelector('.row-tasks');
        const taskCard = createTaskCard(taskName, true);
        rowTasks.appendChild(taskCard);
    }
}

// 创建任务卡片
function createTaskCard(taskName, isInFlowchart) {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.dataset.task = taskName;
    card.dataset.time = tasks[taskName].time;
    
    if (isInFlowchart) {
        card.draggable = false;
        card.style.cursor = 'default';
        
        // 添加删除按钮
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '×';
        deleteBtn.style.cssText = 'position: absolute; top: -8px; right: -8px; background: red; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 18px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2); z-index: 10;';
        deleteBtn.onclick = function(e) {
            e.stopPropagation();
            removeTaskFromFlowchart(taskName);
        };
        card.style.position = 'relative';
        card.appendChild(deleteBtn);
    }
    
    // 添加图标
    const iconDiv = document.createElement('div');
    iconDiv.className = 'task-icon';
    iconDiv.innerHTML = getTaskIcon(taskName);
    card.appendChild(iconDiv);
    
    const taskNameSpan = document.createElement('span');
    taskNameSpan.className = 'task-name';
    taskNameSpan.textContent = taskName;
    
    const taskTimeSpan = document.createElement('span');
    taskTimeSpan.className = 'task-time';
    taskTimeSpan.textContent = tasks[taskName].time + '分钟';
    
    card.appendChild(taskNameSpan);
    card.appendChild(taskTimeSpan);
    
    return card;
}

// 从流程图中移除任务
function removeTaskFromFlowchart(taskName) {
    for (let i = 0; i < flowchartTasks.length; i++) {
        const index = flowchartTasks[i].indexOf(taskName);
        if (index !== -1) {
            flowchartTasks[i].splice(index, 1);
            break;
        }
    }
    updateDisplay();
}

// 更新显示
function updateDisplay() {
    // 更新所有步骤的标签（保留删除按钮）
    document.querySelectorAll('.flowchart-row').forEach((row, index) => {
        const label = row.querySelector('.row-label');
        if (label) {
            const deleteBtn = label.querySelector('.delete-row-btn');
            const labelText = label.childNodes[0];
            if (labelText && labelText.nodeType === Node.TEXT_NODE) {
                labelText.textContent = `步骤 ${index + 1} `;
            } else {
                // 如果没有文本节点，创建新的
                const newText = document.createTextNode(`步骤 ${index + 1} `);
                label.insertBefore(newText, deleteBtn);
            }
            row.dataset.row = index;
        }
    });
    
    // 计算总时间
    const totalTime = calculateTotalTime();
    document.getElementById('totalTime').textContent = totalTime;
    
    // 显示反馈
    showFeedbackMessage();
}

// 计算总时间
function calculateTotalTime() {
    let totalTime = 0;
    
    for (let i = 0; i < flowchartTasks.length; i++) {
        const rowTasks = flowchartTasks[i];
        if (rowTasks.length > 0) {
            // 计算这一行的最大时间（并行任务）
            let rowMaxTime = 0;
            rowTasks.forEach(taskName => {
                rowMaxTime = Math.max(rowMaxTime, tasks[taskName].time);
            });
            totalTime += rowMaxTime;
        }
    }
    
    return totalTime;
}

// 显示反馈消息
function showFeedbackMessage() {
    const feedbackDiv = document.getElementById('feedback');
    const allTasks = getAllTasksInFlowchart();
    const totalTasks = Object.keys(tasks).length;
    
    // 检查是否所有任务都已放置
    if (allTasks.length < totalTasks) {
        const missingTasks = Object.keys(tasks).filter(task => !allTasks.includes(task));
        showFeedback('info', `还有 ${totalTasks - allTasks.length} 个任务未放置：${missingTasks.join('、')}`);
        return;
    }
    
    // 检查任务顺序是否正确
    const optimalOrder = checkOptimalOrder();
    
    if (optimalOrder.isOptimal) {
        showFeedback('success', 
            `🎉 太棒了！你找到了最优方案！<br>` +
            `总时间：${optimalOrder.totalTime}分钟<br>` +
            `✅ 正确的顺序：${optimalOrder.explanation}`
        );
    } else {
        showFeedback('warning', 
            `当前总时间：${optimalOrder.totalTime}分钟<br>` +
            `💡 ${optimalOrder.suggestion}`
        );
    }
}

// 获取流程图中所有任务
function getAllTasksInFlowchart() {
    let allTasks = [];
    for (let i = 0; i < flowchartTasks.length; i++) {
        allTasks = allTasks.concat(flowchartTasks[i]);
    }
    return allTasks;
}

// 检查是否为最优顺序
function checkOptimalOrder() {
    const allTasks = getAllTasksInFlowchart();
    
    // 最优方案：洗水壶(1) -> 接水(1) -> [烧水(8) + 找茶叶(1) + 洗茶杯(2)] -> 沏茶(1)
    // 总时间 = 1 + 1 + max(8, 1, 2) + 1 = 1 + 1 + 8 + 1 = 11分钟
    
    const optimalTotalTime = 11;
    const currentTotalTime = calculateTotalTime();
    
    // 动态检查关键路径
    let washKettleRow = -1;
    let fillWaterRow = -1;
    let boilWaterRow = -1;
    let findTeaRow = -1;
    let washCupRow = -1;
    let makeTeaRow = -1;
    
    // 查找每个任务所在的行
    for (let i = 0; i < flowchartTasks.length; i++) {
        if (flowchartTasks[i].includes('洗水壶')) washKettleRow = i;
        if (flowchartTasks[i].includes('接水')) fillWaterRow = i;
        if (flowchartTasks[i].includes('烧水')) boilWaterRow = i;
        if (flowchartTasks[i].includes('找茶叶')) findTeaRow = i;
        if (flowchartTasks[i].includes('洗茶杯')) washCupRow = i;
        if (flowchartTasks[i].includes('沏茶')) makeTeaRow = i;
    }
    
    // 检查最优方案的条件
    const hasWashKettleFirst = washKettleRow === 0;
    const hasFillWater = fillWaterRow === 1;
    const hasBoilWater = boilWaterRow === 2;
    const hasFindTeaInRow2 = findTeaRow === 2;
    const hasWashCupInRow2 = washCupRow === 2;
    const hasMakeTea = makeTeaRow === 3;
    const boilAfterFill = boilWaterRow > fillWaterRow;
    const teaDuringBoil = findTeaRow === boilWaterRow || findTeaRow > fillWaterRow;
    const cupDuringBoil = washCupRow === boilWaterRow || washCupRow > fillWaterRow;
    
    // 最优方案：洗水壶(步骤1) -> 接水(步骤2) -> [烧水+找茶叶+洗茶杯](步骤3) -> 沏茶(步骤4)
    if (currentTotalTime === optimalTotalTime && 
        hasWashKettleFirst && 
        hasFillWater && 
        hasBoilWater && 
        hasFindTeaInRow2 && 
        hasWashCupInRow2 && 
        hasMakeTea &&
        boilAfterFill) {
        return {
            isOptimal: true,
            totalTime: currentTotalTime,
            explanation: '洗水壶 → 接水 → [烧水 + 找茶叶 + 洗茶杯] → 沏茶'
        };
    }
    
    // 给出建议
    let suggestion = '';
    if (washKettleRow === -1) {
        suggestion += '需要添加"洗水壶"任务；';
    } else if (washKettleRow !== 0) {
        suggestion += '建议将"洗水壶"放在第一步；';
    }
    
    if (fillWaterRow === -1) {
        suggestion += '需要添加"接水"任务；';
    } else if (fillWaterRow !== 1) {
        suggestion += '建议将"接水"放在第二步；';
    }
    
    if (boilWaterRow === -1) {
        suggestion += '需要添加"烧水"任务；';
    } else if (!boilAfterFill) {
        suggestion += '建议"烧水"在"接水"之后进行；';
    }
    
    if (findTeaRow === -1 || washCupRow === -1) {
        suggestion += '需要添加"找茶叶"和"洗茶杯"任务；';
    } else if (!teaDuringBoil || !cupDuringBoil) {
        suggestion += '建议在"烧水"的同一行同时进行"找茶叶"和"洗茶杯"，这样可以节省时间；';
    }
    
    if (makeTeaRow === -1) {
        suggestion += '需要添加"沏茶"任务；';
    } else if (makeTeaRow <= boilWaterRow) {
        suggestion += '建议"沏茶"放在最后一步；';
    }
    
    if (!suggestion) {
        suggestion = '尝试调整任务顺序，让可以同时进行的任务放在同一行，这样可以节省时间！最优方案需要11分钟。';
    }
    
    return {
        isOptimal: false,
        totalTime: currentTotalTime,
        suggestion: suggestion || '当前方案可以进一步优化，最优方案需要11分钟。'
    };
}

// 显示反馈
function showFeedback(type, message) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.className = 'feedback ' + type;
    feedbackDiv.innerHTML = message;
}

// 重置流程图
function resetFlowchart() {
    if (confirm('确定要重新开始吗？这将清空所有已放置的任务。')) {
        flowchartTasks = [];
        stepCounter = 0;
        const flowchart = document.getElementById('flowchart');
        flowchart.innerHTML = '';
        
        // 重新创建3个初始步骤
        addFlowchartStep();
        addFlowchartStep();
        addFlowchartStep();
        
        showFeedback('info', '已重置，请重新拖拽任务到流程图中。');
    }
}

