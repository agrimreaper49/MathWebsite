var num1;
var num2;
var guess;
var answer;
var response;

$(document).ready( function() {
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    guess = document.getElementById("inputfield");
    response = document.getElementById("reponse");
    
    $("#submitbutton").click(function() {
        checkAnswers();
    })
    setNumbers();
})

function setNumbers () {
    num1.innerHTML = Math.floor(Math.random() * 10) + 1;
    num2.innerHTML = Math.floor(Math.random() * 10) + 1;
}
function checkAnswers () {
    var n1  = parseInt(num1.innerHTML);
    var n2  = parseInt(num2.innerHTML);
    
    answer = n1 * n2;
    
    if ( parseInt(guess.value) == answer ){
        response.innerHTML = "yes!"; 
    }else{
        response.innerHTML = "no!"
    }
}
