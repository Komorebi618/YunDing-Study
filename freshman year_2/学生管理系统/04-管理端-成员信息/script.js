// 1.方向选择
const viewChartBtn = document.getElementById('viewChartBtn');
const choose = document.getElementById("choose")
const chartContainer = document.getElementById("chartContainer")
const members = document.getElementById("members")
const profileContainer = document.getElementById("profileContainer")

    // 1.1点击按钮后跳转到图表
viewChartBtn.addEventListener('click', () => {
    removeDisplay();
    chartContainer.style.display = "block";
});


// 2.成员列表
const directionItems = document.querySelectorAll('.direction-item');
directionItems.forEach(item => {
    item.addEventListener('click', () => {
        const direction = item.querySelector('h1').textContent;
        let pageName = '';
        switch (direction) {
            case '全栈':
                pageName = '页面.html';
                break;
            case '数据科学':
                pageName = '页面.html';
                break;
            case 'Java':
                pageName = '页面.html';
                break;
            case 'CPU':
                pageName = '页面.html';
                break;
            case '全媒体':
                pageName = '页面.html';
                break;
            case '点击添加方向':
                pageName = '页面.html';
                break;
            default:
                break;
        }
        if (pageName) {
            removeDisplay();
            members.style.display = "block";
        }
    });
});
function goMembers() {
    removeDisplay();
    members.style.display = "block";
}

// 3.信息修改
// 为所有修改按钮添加点击事件监听器
const changeMsg = document.querySelectorAll("#changeMsg")
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('action-btn')) {
        removeDisplay();
        profileContainer.style.display = "block";
    }
});

// 清空页面
function removeDisplay() {
    choose.style.display = "none";
    chartContainer.style.display = "none";
    members.style.display = "none";
    profileContainer.style.display = "none";
}


    // 2.1成员列表翻页
// 用于随机生成数据，测试用，正式项目可删除
let data = Mock.mock({
    "data|12": [{
        "id": 1,
        "name": '@cname',
        "password": /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "gender|1-2": 1,
        "phonenumber": /^1[\d]{10}$/,
        "time": '@datetime("yyyy-MM-dd")',
        "college": '软件',
        "className": 'java',
    }]
})

// 前后翻页功能
let page = 1; //当前页，默认第一页
const listPrePage = 7; //每页最多显示成员个数
let listSum = data.data.length;//总成员个数

// let getStuData = axios.create({})

const userInfoHeader = document.querySelector(".user-info-header")
const userInfoList = document.querySelector(".user-info-list")
const addMemberBtn = document.querySelector(".add-member-btn")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const tip = document.getElementById("tip")

// 显示提示信息
prev.addEventListener("mouseover", (e) => {
    if (page === 1) {
        tip.style.display = "block";
        tip.textContent = "已经到第一页了!";
        tip.style.left = `${e.clientX - 30}px`;
        tip.style.top = `${e.clientY - 30}px`;
    }
})
prev.addEventListener("mouseout", () => {
    tip.style.display = "none";
});
next.addEventListener("mouseover", (e) => {
    if (page >= Math.ceil(listSum / 7)) {
        tip.style.display = "block";
        tip.textContent = "已经到最后一页了!";
        tip.style.left = `${e.clientX - 30}px`;
        tip.style.top = `${e.clientY - 30}px`;
    }
})
next.addEventListener("mouseout", () => {
    tip.style.display = "none";
});

//前后页面互换“按钮”
function prevPage() {
    // 判断是否已经在第一页
    if (page === 1) { }
    else {
        // getStuData()
        page--
        printList()
        console.log(page)
    }
}
function nextPage() {
    // 判断是否到了最后一页
    if (page >= Math.ceil(listSum / 7)) { }
    else {
        page++
        printList()
        console.log(page)
    }
    // 剩余成员个数不多于7，显示“添加成员”按钮
    if (listSum - (page * 7) <= 0) {
        addMemberBtn.style.display = 'block'
    }
}

// 页面加载时先刷新一遍成员列表
function tableHeader() {
    userInfoHeader.innerHTML = `
    <span>头像</span>
    <span>姓名</span>
    <span>方向</span>
    <span>学院</span>
    <span>密码</span>
    <span>联系电话</span>
    <span>注册时间</span>
    <span>操作</span>
    `
}

// 刷新页面内容
function printList() {
    tableHeader()
    userInfoList.innerHTML = ``
    for (let i = 7 * (page - 1); i < 7 * page && i < listSum; i++) {
        userInfoList.innerHTML += `
            <div class="user-info-item">
                <span></span>
                <span>${data.data[i].name}</span>
                <span>${data.data[i].className}</span>
                <span>${data.data[i].college}</span>
                <span>${data.data[i].password}</span>
                <span>${data.data[i].phonenumber}</span>
                <span>${data.data[i].time}</span>
                <button class="action-btn" id="changeMsg">修改</button>
            </div>
            `
    }
    // 剩余成员个数不多于7，显示“添加成员”按钮
    if (page >= Math.ceil(listSum / 7)) {
        addMemberBtn.style.display = 'block'
    }
    else {
        addMemberBtn.style.display = 'none'
    }
}





const opinions = [
    {
        user: '某某某',
        content: '意见意见意见意见。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。'
    },
    {
        user: '某某某',
        content: '意见意见意见意见。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。'
    },
    {
        user: '某某某',
        content: '意见意见意见意见。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。'
    }
];

// 渲染函数
function renderOpinions() {
    const container = document.getElementById('opinionList');
    opinions.forEach(opinion => {
        const card = document.createElement('div');
        card.className = 'opinion-card';

        const header = document.createElement('span');
        header.className = 'card-header';
        header.textContent = `来自${opinion.user}的意见`;

        const content = document.createElement('div');
        content.className = 'card-content';
        content.textContent = opinion.content;

        const replyBtn = document.createElement('button');
        replyBtn.className = 'reply-btn';
        replyBtn.textContent = '回复';

        card.appendChild(header);
        card.appendChild(content);
        card.appendChild(replyBtn);
        container.appendChild(card);
    });
}

// 执行渲染
renderOpinions();


const approvalData = [
    { id: 1, name: '张三', reason: '原因原因原因原因原因 原因原因原因原因原因', time: '时间时间时间时间时间时间', canApprove: true },
    { id: 2, name: '张三', reason: '原因原因原因原因原因 原因原因原因原因原因', time: '时间时间时间时间时间时间', canApprove: false },
    { id: 3, name: '张三', reason: '原因原因原因原因原因 原因原因原因原因原因', time: '时间时间时间时间时间时间', canApprove: true },
    { id: 4, name: '张三', reason: '原因原因原因原因原因 原因原因原因原因原因', time: '时间时间时间时间时间时间', canApprove: false },
    { id: 5, name: '张三', reason: '原因原因原因原因原因 原因原因原因原因原因', time: '时间时间时间时间时间时间', canApprove: true },
    { id: 6, name: '张三', reason: '原因原因原因原因原因 原因原因原因原因原因', time: '时间时间时间时间时间时间', canApprove: false },
    { id: 7, name: '张三', reason: '原因原因原因原因原因 原因原因原因原因原因', time: '时间时间时间时间时间时间', canApprove: false }
];

function renderList() {
    const container = document.getElementById('listContainer');
    approvalData.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';

        // 单选框
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.className = 'radio-box';

        // 姓名
        const nameText = document.createElement('span');
        nameText.className = 'item-text';
        nameText.textContent = item.name;

        // 原因
        const reasonText = document.createElement('span');
        reasonText.className = 'item-text';
        reasonText.textContent = `原因：${item.reason}`;

        // 时间
        const timeText = document.createElement('span');
        timeText.className = 'item-text';
        timeText.textContent = `时间：${item.time}`;

        // 批准按钮
        const approveBtn = document.createElement('button');
        approveBtn.className = 'approve-btn';
        approveBtn.textContent = '批准';
        approveBtn.disabled = !item.canApprove;

        // 打回按钮
        const rejectBtn = document.createElement('button');
        rejectBtn.className = 'reject-btn';
        rejectBtn.textContent = '打回';
        rejectBtn.disabled = !item.canApprove;

        listItem.append(radio, nameText, reasonText, timeText, approveBtn, rejectBtn);
        container.appendChild(listItem);
    });
}

renderList();