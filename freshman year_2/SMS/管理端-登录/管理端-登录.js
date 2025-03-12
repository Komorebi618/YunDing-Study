function generateCaptcha() {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let captcha = '';
            for (let i = 0; i < 6; i++) {
                captcha += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            document.getElementById('captchaCode').textContent = captcha;
            return captcha;
        }

        // 页面加载时生成验证码
        let currentCaptcha = generateCaptcha();

        // 表单提交事件处理
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const userCaptcha = document.getElementById('captchaInput').value;
            if (userCaptcha === currentCaptcha) {
                alert('验证码验证成功，登录成功！');
                // 这里可以添加实际的登录逻辑，如发送请求到服务器
            } else {
                alert('验证码输入错误，请重新输入！');
                currentCaptcha = generateCaptcha();
                document.getElementById('captchaInput').value = '';
            }
        });