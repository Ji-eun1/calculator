// 플러스마이너스 버튼, 퍼센트 버튼 disabled.

const numberBtn = document.querySelectorAll('.numberBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const resetBtn = document.querySelector('.resetBtn');
const multiply = document.querySelector('.multiply');
const formula = document.querySelector('.formula');
const equalBtn = document.querySelector('.equalBtn');
const result = document.querySelector('.result');
const eraseBtn = document.querySelector('.eraseBtn');
const plusMinusBtn = document.querySelector('.plusMinusBtn');

let formulaArr = ['0'];
let operatorBtnClick = false;
let initalBtnClick = false;

numberBtn.forEach((btn)=>{
    btn.addEventListener('click', (e) => {
        let keypadValue = e.target.value;
        if(!initalBtnClick){
            formula.innerHTML = '';
            formulaArr.pop();
        } 
        formula.innerHTML += keypadValue;
        formulaArr.push(keypadValue);
        operatorBtnClick = false;
        initalBtnClick = true;
       
        console.log(formulaArr);
    });
});

operatorBtn.forEach((btn)=>{
    btn.addEventListener('click', (e) => {
        let keypadValue = e.target.value;
        if (!operatorBtnClick){
            operatorBtnClick = true;
        } else{
            let str = formula.innerHTML;
            str = str.slice(0, -1);
            formula.innerHTML = str;
            formulaArr.pop();
        }
        formula.innerHTML += keypadValue;
        formulaArr.push(keypadValue);
        initalBtnClick = true;

        console.log(formulaArr);
    });
});

resetBtn.addEventListener('click', () => {
    formulaArr = ['0'];
    formula.innerHTML = '0';
    result.innerHTML = '0';
    operatorBtnClick = false;
    initalBtnClick = false;
    console.log(formulaArr);
});

eraseBtn.addEventListener('click', () => {
    let str = formula.innerHTML;
    str = str.slice(0, -1);
    formula.innerHTML = str;
    formulaArr = [...str];

    if(formula.innerText === ''){
        result.innerHTML = '0';
        formula.innerText = '0';
        formulaArr = ['0'];
        operatorBtnClick = false;
        initalBtnClick = false;
    }
    if(formula.innerText === '0'){
        initalBtnClick = false;
    }

    console.log(formulaArr);
});

equalBtn.addEventListener('click', () => {
    const sum = formulaArr.reduce((a,b) => a+b);
    const answer = Math.ceil(eval(sum) * 10000000000)/10000000000;

    formula.innerHTML = answer;
    result.innerHTML = answer;
    formulaArr = [answer];
    if(answer === 0){
        initalBtnClick = false;
    }

    console.log(formulaArr);
});

/*
plusMinusBtn.addEventListener('click', () => {
    const sum = formulaArr.reduce((a,b) => a+b);
    const answer = eval(sum);

    if(operatorBtnClick){
        formula.innerHTML = answer*(-1);
        result.innerHTML = answer*(-1);
        formulaArr = [answer*(-1)];
    } else{
        operatorBtnClick = false;
        formulaArr.push('-');
        formula.innerHTML = formula.innerHTML + '-';
    }

    if(formula.innerText === '0'){
        initalBtnClick = false;
    }
    
    console.log(answer);
});
*/


