axios.defaults.baseURL = "https://3cc5-2409-8a0c-264-6720-5149-9ef4-d932-4f5b.ngrok-free.app"
axios.defaults.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

const fbMsg = document.querySelector(".fbMsg")
const fbInput = document.querySelector(".fbInput")
const submit = document.querySelector(".submit")
const fbText = document.querySelector(".fbText")
let flag = 0

fbInput.addEventListener("submit", function (e) {
    e.preventDefault();
    if (flag === 0) {
        fbMsg.innerHTML = ``
        flag = 1
    }
    axios.post('/idea/back', {
        content: fbText.value,
    }).then(result => {
        console.log('反馈成功:', result);

        fbMsg.innerHTML += `
        <div class="sentMsg">
            ${fbText.value}
        </div>
        `
    }).catch(err => {
        console.error('反馈提交出错:', err);
        alert("反馈提交出错！请稍后再试")
    })
})


// emjoy插入
// 获取元素
const emojiBtn = document.getElementById('emjoy');
const emojiPanel = document.getElementById('emoji-panel');

// 点击按钮显示/隐藏 Emoji 面板
emojiBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 阻止事件冒泡
    emojiPanel.style.display = emojiPanel.style.display === 'block' ? 'none' : 'block';

    // 定位面板到按钮下方
    const btnRect = emojiBtn.getBoundingClientRect();
    emojiPanel.style.top = `${e.clientX - 1000}px`;
    emojiPanel.style.left = `${e.clientY + 250}px`;
});

// 点击页面其他地方关闭面板
document.addEventListener('click', () => {
    emojiPanel.style.display = 'none';
});

// 点击 Emoji 插入到输入框
emojiPanel.querySelectorAll('.emoji-item').forEach(emoji => {
    emoji.addEventListener('click', (e) => {
        const emojiChar = e.target.textContent;
        insertEmoji(emojiChar);
        emojiPanel.style.display = 'none'; // 插入后关闭面板
    });
});

// 在光标位置插入 Emoji
function insertEmoji(emoji) {
    const start = fbText.selectionStart;
    const end = fbText.selectionEnd;

    // 插入表情并更新光标位置
    fbText.value =
        fbText.value.slice(0, start) +
        emoji +
        fbText.value.slice(end);

    // 移动光标到插入位置后
    fbText.selectionStart = fbText.selectionEnd = start + emoji.length;
    fbText.focus();
}