function findPwCheckEvent() {
    var nameValue = document.getElementById("name_value").value;
    var phoneValue = document.getElementById("phone_value").value;
    var idValue = document.getElementById("id_value").value;

    if (!nameValue) {
        alert ("이름을 입력해주세요.");
        return false;
    }
    else if (!phoneValue) {
        alert ("연락처를 입력해주세요.");
        return false;
    }
    else if (!idValue) {
        alert ("아이디를 입력해주세요.");
        return false;
    }
    else {
        return true;
    }
}