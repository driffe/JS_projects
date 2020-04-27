function openQuiz(evt, quiz) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(quiz).style.display = "block";
  evt.currentTarget.className += " active";
}
function check01() {
  var finalAns = 4;
  var tempAns;
  element01 = document.getElementById("ansBox01");
  
  if(element01 != null) {
    tempAns = element01.value;
  } else {
    tempAns = 0;
  }
  if(tempAns == finalAns) {
    console.log(tempAns);
    //block the message and check the answer. 
    document.getElementById("ansBox01").disabled = true;
  } else {
    alert("Try again!");
  }
}
// (bigger one) / (small one) = (rest) ex) 19 ? 64 = 7
function hintCheck01() {
  var value01, value02;
  element01 = document.getElementById("textbox01-1");
  element02 = document.getElementById("textbox02-1");

  if(element01 != null && element02 != null) {
    value01 = element01.value;
    value02 = element02.value;
  }else {
    value01 = 0;
    value02 = 0;
  }
  if(value01 == 5 && value02 == 14) {
    alert("You cannot get hint with this");
  } else if(value01 == 14 && value02 == 5) {
    alert("You cannot get hint with this");
  }
  console.log(value01, value02);
  var ans;
  if(parseInt(value01) < parseInt(value02)) {
    console.log("first");
    console.log(value01, value02);
    ans = value02 % value01;
  } else {
    console.log("second");
    console.log(value01, value02);
    ans = value01 % value02;
  }
  document.getElementById("result01").value = ans;
}
function check02() {
  var finalAns = 9;
  var tempAns;
  element01 = document.getElementById("ansBox02");
  
  if(element01 != null) {
    tempAns = element01.value;
  } else {
    tempAns = 0;
  }
  if(tempAns == finalAns) {
    console.log(tempAns);
    //block the message and check the answer. 
    document.getElementById("ansBox02").disabled = true;
  } else {
    alert("Try again!");
  }
}
//sum of time ex) 15 + 3 = 6
function hintCheck02() {
  var value01, value02;
  element01 = document.getElementById("textbox01-2");
  element02 = document.getElementById("textbox02-2"); 

  if(element01 != null && element02 != null) {
    value01 = element01.value;
    value02 = element02.value;
  }else {
    value01 = 0;
    value02 = 0;
  }
  var ans;
  while(true) {
    if(value01 > 12) {
      value01 = value01 - 12;
    }
    if(value02 > 12) {
      value02 = value02 - 12;
    }
    if(value01 <= 12 && value02 <= 12) {
      ans = parseInt(value01) + parseInt(value02);
      break;
    }
  }
  while(true) {
    if(ans > 12) {
      ans = ans - 12;
    } else if(ans <= 12) {
      break;
    }
  }
  document.getElementById("result02").value= ans;
}
function check03() {
 var finalAns = 277;

 var tempAns;
  element01 = document.getElementById("ansBox03");
  
  if(element01 != null) {
    tempAns = element01.value;
  } else {
    tempAns = 0;
  }
  if(tempAns == finalAns) {
    console.log(tempAns);
    //block the message and check the answer. 
    document.getElementById("ansBox03").disabled = true;
  } else {
    alert("Try again!");
  }
}
function hintCheck03() {
  var value01, value02, result01, result02;
  element01 = document.getElementById("textbox01-3");
  element02 = document.getElementById("textbox02-3");

  if(element01 != null && element02 != null) {
    value01 = element01.value;
    value02 = element02.value;
  }else {
    value01 = 0;
    value02 = 0;
  }
  var ans, str1, str2;
  result01 = (parseInt(value01) + parseInt(value02));
  result02 = Math.abs(value01 - value02);
  
  str1 = result01.toString();
  str2 = result02.toString();
  ans = str1 + str2;

  document.getElementById("result03").value = ans;
}