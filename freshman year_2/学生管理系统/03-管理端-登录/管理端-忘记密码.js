document.addEventListener('DOMContentLoaded', function () {
            const forgotPasswordForm = document.getElementById('forgotPasswordForm');

            forgotPasswordForm.addEventListener('submit', function (event) {
                event.preventDefault(); 

                const username = document.getElementById('username').value;
                const phone = document.getElementById('phone').value;

                if (!username && !phone) {
                    alert('请输入用户名或手机号。');
                    return;
                }

                verifyAccount(username, phone);
            });

            function verifyAccount(username, phone) {
                const serverUrl = ' https://3cc5-2409-8a0c-264-6720-5149-9ef4-d932-4f5b.ngrok-free.app/manage/password/forget'; 
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, phone })
                };
                fetch(serverUrl, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('网络响应错误');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('验证成功:', data);
                        alert('验证成功，将进行密码重置');
                        rwPage();
                    })
                    .catch(error => {
                        console.error('验证失败:', error);
                        alert('验证失败，请重试。');
                    });
            }
        });

// 2.忘记密码-密码重置
// 2.1该函数用于替换页面为“重置密码页面”
function rwPage() {
    forgotPasswordForm.style.display = "none";
    resetPasswordForm.style.display = "block";
}

 document.addEventListener('DOMContentLoaded', function () {
                const resetPasswordForm = document.getElementById('resetPasswordForm');

                resetPasswordForm.addEventListener('submit', function (event) {
                    event.preventDefault(); 
                    
                    const newPassword = document.getElementById('newPassword').value;
                    const confirmPassword = document.getElementById('confirmPassword').value;

                    if (newPassword !== confirmPassword) {
                        alert('两次输入的密码不一致，请重新输入。');
                        return;
                    }
                    //创建 URLSearchParams 对象
                    const params = new URLSearchParams();
                    //使用append方法添加键值对
                    params.append('newPassword', newPassword);
                    params.append('confirmPassword', confirmPassword);
                    fetch('https://3cc5-2409-8a0c-264-6720-5149-9ef4-d932-4f5b.ngrok-free.app/manage/password/reset', { 
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: params
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('网络响应错误');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('密码重置成功:', data);
                            alert('密码重置成功，请使用新密码登录。');
                            window.location.href = "../03-管理端-登录/管理端.-登录.html";
                        })
                        .catch(error => {
                            console.error('密码重置失败:', error);
                            alert('密码重置失败，请重试。');
                        });
                });
        });

// function resetPw() {
//     const newPassword = document.getElementById('newPassword').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
//     console.log(newPassword, confirmPassword)
//     if (!passwordRegex.test(newPassword)) {
//         alert('新密码至少6位，需包含字母和数字，不支持除字母、数字以外的字符');
//         return;
//     }
//     if (newPassword === confirmPassword) {
//         alert('密码重置成功！');
//     } else {
//         alert('两次输入的密码不一致，请重新输入');
//     }
// }