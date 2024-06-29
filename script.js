const displayHistory = document.querySelector('.display-history');
const displayMain = document.querySelector('.display-main');
const displayTemporary = document.querySelector('.display-temporary');

const buttonClearAll = document.querySelector('.clear-all');
const buttonClearLast = document.querySelector('.clear-last');
const buttonOperations = document.querySelectorAll('.operation');
const buttonNumbers = document.querySelectorAll('.number');
const buttonEqual = document.querySelector('.equal');

let numbAtas = "";
let numbTengah = "";
let numbBawah = "";
let lastOperation = "";
let havingDot = false;
let equal = 0;

buttonNumbers.forEach((nomor)=>{
    nomor.addEventListener('click', (tombol)=>{
        if(tombol.target.innerText === "." && !havingDot){
            if(!numbTengah){
                numbTengah = 0;
            };
            havingDot = true;
        }else if(tombol.target.innerText === "." && havingDot){
            return;
        }
        numbTengah += tombol.target.innerText;
        displayMain.innerText = pisahAngka(numbTengah);
        console.log(tombol.target.innerText);
    })
});
buttonOperations.forEach((operasi)=>{
    operasi.addEventListener('click', (mtk)=>{
        if(mtk.target.innerText === "=" || !numbTengah){
            return;
        }
        havingDot = false;
        const namaOperasi = mtk.target.innerText;
        if(numbAtas && numbTengah && lastOperation){
            fungsiMtk();
        }else{
            equal = parseFloat(numbTengah);
        }
        clearVariabel(namaOperasi);
        lastOperation = namaOperasi;

        console.log(mtk.target.innerText);
    })
});
function clearVariabel(name = ""){
    numbAtas += numbTengah + " " + name + " ";
    displayHistory.innerText = pisahAngka(numbAtas);
    displayMain.innerText = 0;
    numbTengah = "";
    displayTemporary.innerText = pisahAngka(equal);

};
function fungsiMtk(){
    if (lastOperation === "*") {
        equal = parseFloat(equal) * parseFloat(numbTengah);
    } else if(lastOperation === "+"){
        equal = parseFloat(equal) + parseFloat(numbTengah);
    } else if(lastOperation === "-"){
        equal = parseFloat(equal) - parseFloat(numbTengah);
    } else if(lastOperation === "/"){
        equal = parseFloat(equal) / parseFloat(numbTengah);
    } else if(lastOperation === "%"){
        equal = parseFloat(equal) % parseFloat(numbTengah);
    }
    console.log(equal)
};
buttonEqual.addEventListener('click', ()=>{
    if(!numbAtas || !numbTengah){
        return;
    }
    havingDot = false;
    fungsiMtk();
    clearVariabel();
    displayMain.innerText = pisahAngka(equal);
    displayTemporary.innerText = 0;
    numbTengah = "";
    numbAtas = "";
    numbBawah = 0;
});
buttonClearAll.addEventListener('click', ()=>{
    numbAtas = "";
    numbTengah = "";
    numbBawah = "";
    lastOperation = "";
    havingDot = false;
    equal = 0;
    displayHistory.innerText = 0;
    displayMain.innerText = 0;
    displayTemporary.innerText = 0;
});
buttonClearLast.addEventListener('click', ()=>{
    numbTengah = "";
    displayMain.innerText = 0;
});
function pisahAngka(angka){
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
};