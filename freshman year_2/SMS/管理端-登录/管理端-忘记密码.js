function login() {
    const yanzheng = document.querySelector('.yanzheng')
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    if (username === "tr" && phone === "123") {
        alert('验证成功，您可以进行密码重置操作。');
        // 页面切换，进入忘记密码-重置密码阶段
        yanzheng.innerHTML = `
        <img src="https://star-tomato.oss-cn-beijing.aliyuncs.com/YunDing_Academy/Freshman_year_2/student-management-system/%E7%AE%A1%E7%90%86%E7%AB%AF-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE.png" alt="">
        <input type="password" id="newPassword" name="newPassword" class="newPassword" placeholder="新密码" required>
        <input type="password" id="confirmPassword" name="confirmPassword" class="confirmPassword" placeholder="确认密码" required>
        <button type="submit" class="submit" onclick="resetPw()">完成</button>
        <!-- 页面转换，点击切换到学生端 -->
        <a href="../01-学生端-登录/学生端-登录.html" class="xuesheng" style="width: 222px; height: 74px;"> </a>
        `
    } else {
        alert('用户名或手机号不正确，请重新输入。');
    }
    // document.addEventListener('DOMContentLoaded'/* why? */, function () {
    //     const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    //     forgotPasswordForm.addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         const username = document.getElementById('username').value;
    //         const phone = document.getElementById('phone').value;
    //         console.log(username, phone)
    //         if (username === "tr" && phone === "123") {
    //             alert('验证成功，您可以进行密码重置操作。');
                
    //         } else {
    //             alert('用户名或手机号不正确，请重新输入。');
    //         }
    //     });

        
    // });
}

function resetPw() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    console.log(newPassword, confirmPassword)
    if (!passwordRegex.test(newPassword)) {
        alert('新密码至少6位，需包含字母和数字，不支持除字母、数字以外的字符');
        return;
    }
    if (newPassword === confirmPassword) {
        alert('密码重置成功！');
    } else {
        alert('两次输入的密码不一致，请重新输入');
    }
}