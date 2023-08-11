let userInput= document.getElementById("input")
let expression=""

function btn(num){
    expression=expression+num
    userInput.value=expression
}
function equal(){
    userInput.value=eval(expression)
    expression=userInput.value
}
function erase(){
    expression=""
    userInput.value=expression
}