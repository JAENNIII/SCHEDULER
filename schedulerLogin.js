function loginCheckEvent() {
    var idValue = document.getElementById("id_value").value;
    var pwValue = document.getElementById("pw_value").value;
    
    if (!idValue) {
        alert ("아이디를 입력해주세요.");
        return false;
    }
    else if (!pwValue) {
        alert ("비밀번호를 입력해주세요.");
        return false;
    }
    else {
        return true;
    }
}