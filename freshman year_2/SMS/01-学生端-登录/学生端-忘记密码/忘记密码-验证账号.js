function login() {
    document.addEventListener('DOMContentLoaded', function () {
        const forgotPasswordForm = document.getElementById('forgotPasswordForm');

        forgotPasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const phone = document.getElementById('phone').value;

            if (username === "trueUsername" && phone === "12345678912") {
                alert('验证成功，您可以进行密码重置操作。');
                window.location.href="忘记密码-密码重置.html";
            } else {
                alert('用户名或手机号不正确，请重新输入。');
            }
        });
    });
}