function askUserForName(){
    var userName = prompt("What is your name?");
    var header1 = document.getElementById("header1");
    header1.innerHTML = userName;
}