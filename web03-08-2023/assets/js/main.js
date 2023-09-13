const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTURVWXYZ";
const lowerLetters = "abcdefghijklmnopqrsturvwxyz";
const number = "0123456789";
const symbol = "!@#$¨%¨&*()_";

function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumberCase(){
    return number[Math.floor(Math.random() * number.length)];
}
function getSymbolCase(){
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword(){
    const len = lenEl.value;
    let password = "";
    for(i=0; i<len;i++){
        const x = generateX();
        password += x;
    }
    pwEl.innerText = password;
}
function generateX(){
    
    const xs = [];

    if(upperEl.checked){
        xs.push(getUpperCase());
    }

    if(lowerEl.checked){
        xs.push(getLowerCase());
    }
    if(numbersEl.checked){
        xs.push(getNumberCase());
    }
    if(symbolsEl.checked){
        xs.push(getSymbolCase());
    }
    if(xs.length === 0){ return "";}
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click",generatePassword);
copyEl.addEventListener("click",()=>{
    const textarea = document.createElement("textarea");
    const password = pwEl.innerHTML;
    if(!password){
        return
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("senha copiada para a área de transferência");
})