var menuClickTimes = 0;
var departmentDevelopmentClickTimes = 0;
var departmentEducationClickTimes = 0;
var departmentMarketingClickTimes = 0;
var plusClickTimes = 0;
var yearValue = 2022;
var monthValue = 9;


function clickEvent(num) {
    var clickTimes;

    if ( num == 0 ) {
        menuClickTimes = menuClickTimes + 1;
        clickTimes = menuClickTimes;
    }
    else if ( num == 1 ) {
        departmentDevelopmentClickTimes = departmentDevelopmentClickTimes + 1;
        clickTimes = departmentDevelopmentClickTimes;
    }
    else if ( num == 2 ){
        departmentEducationClickTimes = departmentEducationClickTimes + 1;
        clickTimes = departmentEducationClickTimes;
    }
    else if ( num == 3 ){
        departmentMarketingClickTimes = departmentMarketingClickTimes + 1;
        clickTimes = departmentMarketingClickTimes;
    }
    else {
        plusClickTimes = plusClickTimes + 1;
        clickTimes = plusClickTimes;
    }

    if ( clickTimes % 2 == 0) {
        document.getElementsByClassName("click_box")[num].style.display = "none";
        if ( num == 0 ) {
            document.getElementById("main").style.marginLeft = "";

            departmentDevelopmentClickTimes = 0;
            departmentEducationClickTimes = 0;
            departmentMarketingClickTimes = 0;

            for ( var i=1; i<4; i++ ) {
                document.getElementsByClassName("click_box")[i].style.display = "none";
            }
        }
    }
    else {
        document.getElementsByClassName("click_box")[num].style.display = "";    
        if ( num == 0 ) {
            document.getElementById("main").style.marginLeft = "300px";
        }
    }
}

function arrowEvent(num) {
    if ( num == 0 ) {
        monthValue = monthValue - 1;
        if ( monthValue == 0) {
            monthValue = 12;
            yearValue = yearValue - 1;
        }
    }
    else if ( num == 1 ) {
        monthValue = monthValue + 1;
        if ( monthValue == 13 ) {
            monthValue = 1;
            yearValue = yearValue + 1;
        }
    }

    document.getElementById("year_value").innerHTML = yearValue;
    document.getElementById("month_value").innerHTML = monthValue;
}

function completionEvent() {
    plusClickTimes = plusClickTimes + 1;

    document.getElementById("plus_window").style.display = "none";
}

function changeEvent(num) {
    var planContentsValue = document.getElementsByClassName("plan_contents")[num].innerHTML;
    var change = document.getElementsByClassName("change");

    document.getElementsByClassName("plan_contents")[num].innerHTML = "<input id='plan_change' type='text'>";
    document.getElementById("plan_change").placeholder = planContentsValue;
    change.onclick = 'changeCompletionEvent()';
    
    console.log("안녕");

    // document.getElementsByClassName("plan_contents")[num].innerHTML = "<input id='plan_change' type='text'>";
    // document.getElementById("plan_change").placeholder = planContentsValue;
    // document.getElementsByClassName("change")[num]."<input id='change_completion' type='button' value='완료'>"
     
}

function deleteEvent() {
    alert("정말 삭제하시겠습니까?");
}

function changeCompletionEvent() {
    var planChangeValue = document.getElementById("plan_change").value;

    console.log(planChangeValue);

    document.getElementsByClassName("plan_change")[num].innerHTML = "<div class='plan_contents'>planChangeValue</div>"
}

window.onload = function () {
    for ( var i=0; i<5; i++ ) {
        document.getElementsByClassName("click_box")[i].style.display = "none";
    }
}