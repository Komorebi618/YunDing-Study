// 头像预览功能
const avatarInput = document.getElementById('avatar');
const avatarPreview = document.getElementById('avatar-preview');

avatarInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      avatarPreview.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// 模拟保存信息功能，这里只是简单打印，实际应发送到服务器
const saveInfo = () => {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const avatar = avatarPreview.src;
  console.log('保存的姓名:', name);
  console.log('保存的联系电话:', phone);
  console.log('保存的头像:', avatar);
  // 实际应用中，这里应使用fetch或ajax等方式将数据发送到服务器
};

// 假设页面有一个保存按钮，这里模拟按钮点击事件
document.addEventListener('DOMContentLoaded', function () {
  const saveButton = document.createElement('button');
  saveButton.textContent = '保存';
  saveButton.addEventListener('click', saveInfo);
  const infoSection = document.querySelector('.info-section');
  infoSection.appendChild(saveButton);
});