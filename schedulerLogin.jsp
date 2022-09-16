<%@ page language="java" contentType="text/html" pageEncoding="utf-8"%>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SCHEDULER</title>
</head>
<body>
    <div id="login_box">
        <form action="schedulerMain.html" onsubmit="return loginCheckEvent()">
            <a id="scheduler" href="schedulerLogin.html">SCHEDULER</a>
            <div id="login">
            <input class="value" id="id_value" name="id_value" type="text" placeholder="ID">
            <input class="value" id="pw_value" name="password_value" type="password" placeholder="PASSWORD">
            <input id="login_button" type="submit" value="로그인">
            </div>
        </form>
        <div id="find">
            <a id="sign_up" href="schedulerSignup.html">회원가입</a>
            <a id="find_id" href="schedulerFindID.html">ID찾기</a>
            <a id="find_pw" href="schedulerFindPW.html">PW찾기</a>
        </div>
    </div>

    <style>
        body{
            background-color: #F8F9D7;
        }

        a {
            text-decoration:none; 
        }

        #login_box{
            margin: 200px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #C4D7E0;
            width: 500px;
            height: 500px;
            border-radius: 10px;
            padding-top: 50px;
        }

        #scheduler{
            color: black;
            text-align: center;
            font-size: 70px;
        }

        #login{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .value{
            width: 300px;
            height: 35px;
            border: #ffffff;
            margin: 5px 0px;
            font-size: 18px;
            border-radius: 5px;
        }

        #login_button{
            width: 306px;
            height: 40px;
            margin: 10px 0px;
            background-color: #6E85B7;
            border: #6E85B7;
            font-size: 18px;
            border-radius: 5px;
        }

        #find{
            width: 308px;
            display: flex;
            justify-content: space-around;
        }

        #sign_up{
            color: black;
        }

        #find_id{
            color: black;
        }

        #find_pw{
            color: black;
        }
    </style>

    <script>
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
    </script>
    
</body>