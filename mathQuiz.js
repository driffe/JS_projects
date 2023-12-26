// Function to switch between quizzes
function openQuiz(evt, quiz) {
    // Hide all quiz contents and deactivate all buttons
    const tabcontents = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
        tablinks[i].classList.remove("active");
    }

    // Show the selected quiz content and mark the button as active
    document.getElementById(quiz).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Function to check Quiz 01 answer
function check01() {
    var finalAns = 4;
    var element01 = document.getElementById("ansBox01");
    var tempAns = element01 ? element01.value : 0;

    if (parseInt(tempAns) === finalAns) {
        // Block the input and provide feedback
        alert("Answer!");
        element01.disabled = true;
    } else {
        alert("Try again!");
    }
}

// Function to provide a hint for Quiz 01
function hintCheck01() {
    var value01 = parseInt(document.getElementById("textbox01-1").value) || 0;
    var value02 = parseInt(document.getElementById("textbox02-1").value) || 0;

    var ans;
    if (value01 < value02) {
        ans = value02 % value01;
    } else {
        ans = value01 % value02;
    }

    document.getElementById("result01").value = ans;
}

// Function to check Quiz 02 answer
function check02() {
    var finalAns = 9;
    var element02 = document.getElementById("ansBox02");
    var tempAns = element02 ? element02.value : 0;

    if (parseInt(tempAns) === finalAns) {
        // Block the input and provide feedback
        element02.disabled = true;
    } else {
        alert("Try again!");
    }
}

// Function to provide a hint for Quiz 02
function hintCheck02() {
    var value01 = parseInt(document.getElementById("textbox01-2").value) || 0;
    var value02 = parseInt(document.getElementById("textbox02-2").value) || 0;

    var temp = value01 + value02;
    while(true) {
        if(temp > 12) {
            break;
        } else {
            temp = temp % 12;
        }
    }
    var ans = temp;

    document.getElementById("result02").value = ans;
}

// Function to check Quiz 03 answer
function check03() {
    var finalAns = 277;
    var element03 = document.getElementById("ansBox03");
    var tempAns = element03 ? element03.value : 0;

    if (parseInt(tempAns) === finalAns) {
        // Block the input and provide feedback
        element03.disabled = true;
    } else {
        alert("Try again!");
    }
}

// Function to provide a hint for Quiz 03 (17 ? 10 = 277) 
function hintCheck03() {
    var value01 = parseInt(document.getElementById("textbox01-3").value) || 0;
    var value02 = parseInt(document.getElementById("textbox02-3").value) || 0;

    var result01 = value01 + value02;
    var result02 = Math.abs(value01 - value02);
    var ans = result01.toString() + result02.toString();

    document.getElementById("result03").value = ans;
}

// Function to check Quiz 04 answer
function check04() {
    var finalAns = 37;
    var element04 = document.getElementById("ansBox04");
    var tempAns = element04 ? element04.value : 0;

    if (parseInt(tempAns) === finalAns) {
        element04.disabled = true;
    } else {
        alert("Try again!");
    }
}

// Function to provide a hint for Quiz 04
function hintCheck04() {
    var value01 = parseInt(document.getElementById("textbox01-4").value) || 0;
    var value02 = parseInt(document.getElementById("textbox02-4").value) || 0;
    var ans = 0;

    if(value01 > value02) {
        ans = value01 * 2 - value02;
    } else {
        ans = value02 * 2 - value01;
    }

    document.getElementById("result04").value = ans;
}