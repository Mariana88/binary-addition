
let binaryAdditionHandler = function(){
    let num = document.getElementById("decimal").value;
    let binary = convertToBinaryStr(num);
    let display = document.getElementById("binary");
    display.innerHTML = binary
}

let BTconvertToBinary =document.getElementById('BTconvertToBinary');
BTconvertToBinary.addEventListener('click', binaryAdditionHandler);