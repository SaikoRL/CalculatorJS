const displayHistory = document.querySelector('.display-history');
const displayMain = document.querySelector('.display-main');
const displayTemporary = document.querySelector('.display-temporary');
const buttonNumbers = document.querySelectorAll('.number');
const buttonOperations = document.querySelectorAll('.operation');

let displayAtas = "";
let displayTengah = "";
let displayBawah = "";
let lastOperation = "";
let havingDot = false;
let equal = null;

buttonNumbers.forEach((number) =>{
    number.addEventListener("click", (e)=>{
        if(e.target.innerText === "." && !havingDot){
            if(!displayTengah){
                displayTengah = "0";
            }
            havingDot = true;
        } else if(e.target.innerText === "." && havingDot){
            return;
        }
        console.log(e.target.innerText);
        displayTengah += e.target.innerText;
        displayMain.innerHTML = displayTengah;
    })
})
buttonOperations.forEach((operation) => {
    operation.addEventListener("click", (o) => {
        if(!displayTengah){
            return;
        };
        if(o.target.innerText === "="){
            return;
        };
        havingDot = false;
        const operationName = o.target.innerText;
        lastOperation = operationName;
        if(displayAtas && displayTengah && lastOperation){
            mathFuntion();
        }else{
            equal = parseFloat(displayTengah);
        }
        clearVar(operationName);
        console.log(o.target.innerText);
    })
})
buttonOperations.forEach((samaDengan)=> {
    samaDengan.addEventListener("click", (sd)=>{
        if(sd.target.innerText === "="){
            displayHistory.innerText = "0";
            displayTemporary.innerText = "0";
            displayAtas = "";
            displayBawah = "";
            displayTengah = "";
            displayMain.innerText = mathFuntion();
        }else {
            return;
        }
    })
})
function clearVar(name = ""){
    displayAtas += displayTengah + " " + name + " ";
    displayHistory.innerText = displayAtas;
    displayMain.innerText = "0";
    displayTengah ="";
    displayTemporary.innerText = equal;
}
function mathFuntion(){
    if(lastOperation === "*"){
        equal = parseFloat(equal) * parseFloat(displayTengah);
    }else if(lastOperation === "/"){
        equal = parseFloat(equal) / parseFloat(displayTengah);
    }else if(lastOperation === "+"){
        equal = parseFloat(equal) + parseFloat(displayTengah);
    }else if(lastOperation === "-"){
        equal = parseFloat(equal) - parseFloat(displayTengah);
    }else if(lastOperation === "%"){
        equal = parseFloat(equal) % parseFloat(displayTengah);
    }
}