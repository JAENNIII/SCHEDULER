var idCheck = 0;

function idOverlapCheck() {
    idCheck = 1;
}

function signupCheckEvent() {
    var nameValue = document.getElementById("name_value").value;
    var idValue = document.getElementById("id_value").value;
    var passwordValue=document.getElementById("password_value").value;
    var passwordCheckValue=document.getElementById("password_check_value").value;
    var phoneValue = document.getElementById("phone_value").value;
    var emailValue = document.getElementById("email_value").value;
    var departmentValue = document.getElementsByClassName("department_value").value;
    var positionValue = document.getElementsByClassName("position_value").value;

    if (!nameValue) {
        alert("이름을 입력해주세요.");
        return false;
    }
    else if (!idValue) {
        alert("아이디를 입력해주세요.");
        return false;
    }
    else if (idCheck == 0) {
        alert("아이디 중복확인을 해주세요.");
        return false;
    }
    else if (!passwordValue) {
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    else if (passwordValue != passwordCheckValue) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }
    else if (!phoneValue) {
        alert("연락처를 입력해주세요.");
        return false;
    }
    else if (!emailValue) {
        alert("이메일을 입력해주세요.");
        return false;
    }
    else if (departmentValue == []) {
        alert("부서를 선택해주세요.");
        return false;
    }
    else if (positionValue == []) {
        alert("직급을 선택해주세요.");
        return false;
    }
    else {
        return true;
    }

    idCheck = 0;
}

