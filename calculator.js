let newInput = "";
let result = "";
let toEval = "";
let forSign = "";
let forPercent = "";

function numPress(num){
    newInput += num;
    document.getElementById("calculatorDisplay").innerHTML = newInput;
    document.getElementById("clearBtn").innerHTML = "C";
};

function operatorPress(op){
    if (result != ""){
        toEval = result + op;
    } else {
        toEval = newInput + op;
    }
    newInput = "";
};

function calculateEqual(){
    result = eval(toEval+newInput);
    document.getElementById("calculatorDisplay").innerHTML = result;
    newInput = "";
};

function clearDisplay(){
    if (newInput == "") {
        toEval = "";
        result = "";
        document.getElementById("calculatorDisplay").innerHTML = "0";
    } else {
        newInput = "";
        document.getElementById("clearBtn").innerHTML = "AC";
        document.getElementById("calculatorDisplay").innerHTML = "0";
    }
};

function changeSign(){
    forSign = document.getElementById("calculatorDisplay").innerHTML;
    forSign += "*(-1)";
    document.getElementById("calculatorDisplay").innerHTML = eval(forSign);
};

function percent(){
    forPercent = document.getElementById("calculatorDisplay").innerHTML;
    forPercent += "/100";
    document.getElementById("calculatorDisplay").innerHTML = eval(forPercent);
}