
let convertToBinaryHandler = function(){
    let num = document.getElementById("decimal").value;
    let binary = convertToBinaryStr(num);
    let display = document.getElementById("binary");
    display.value = binary
}

let BTconvertToBinary =document.getElementById('BTconvertToBinary');
BTconvertToBinary.addEventListener('click', convertToBinaryHandler);

let binaryAdditionHandler = function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = binaryAddition(num1, num2);
    let display = document.getElementById("sum");
    display.value = sum;
}

let BTbinaryAddition = document.getElementById('BTbinaryAddition');
BTbinaryAddition.addEventListener('click', binaryAdditionHandler);