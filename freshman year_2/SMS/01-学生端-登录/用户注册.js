function login() {
    document.addEventListener('DOMContentLoaded', function () {
        const registerForm = document.getElementById('registerForm');
    })
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const againpassword = document.getElementById('againpassword').value;
        const number = document.getElementById('number').value;

        if (password !== againpassword) {
            alert('两次输入的密码不一致，请重新输入');
            return;
        }
        const data = {
            username: username,
            password: password,
            number: number
        };
        fetch('http://test-cn.your-api-server.com/stu/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    alert('注册成功');
                } else {
                    alert('注册失败：' + result.message);
                }
            })
            .catch(error => {
                console.error('注册请求出错:', error);
                alert('注册请求出错，请稍后重试');
            });
    })
}