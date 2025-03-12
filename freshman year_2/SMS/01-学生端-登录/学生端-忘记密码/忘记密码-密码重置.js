document.addEventListener('DOMContentLoaded', function () {
      const resetPasswordForm = document.getElementById('resetPasswordForm');

      resetPasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!passwordRegex.test(newPassword)) {
          alert('新密码至少6位,且需包含字母和数字');
          return;
        }

        if (newPassword === confirmPassword) {
          alert('密码重置成功！');
        } else {
          alert('两次输入的密码不一致，请重新输入。');
        }
      });
    });