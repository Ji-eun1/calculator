const btn = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.resetBtn');
const multiply = document.querySelector('.multiply');
const formula = document.querySelector('.formula');
const equalBtn = document.querySelector('.equalBtn');
const result = document.querySelector('.result');
const returnBtn = document.querySelector('.returnBtn');
const plusMinusBtn = document.querySelector('.plusMinusBtn');
const operator = document.querySelector('.operator').value;

[].forEach.call(btn, function(btn){
    btn.addEventListener("click", printFormula, false); 
});

let arr = [];
function printFormula(e){
    let keypadValue = e.target.value;
    formula.innerHTML += keypadValue;
    let testValue = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g
    arr.push(keypadValue)

    formula.innerHTML = formula.innerHTML.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{2}/g, arr[arr.length-1])
    if(testValue.test(arr[arr.length-1]) && testValue.test(arr[arr.length-2])){
        arr.splice(arr.length-2, 1);
    }
    console.log(arr)
}

resetBtn.addEventListener('click', function(){
    arr = [];
    formula.innerHTML = '';
    result.innerHTML = '';
})

equalBtn.addEventListener('click', function(){
    const sum = arr.reduce((a,b) => (a+b));
    const answer = Math.ceil(eval(sum) * 100000000000)/100000000000;

    formula.innerHTML = answer;
    result.innerHTML = answer;
    arr = [answer];
})

returnBtn.addEventListener('click', function(){
    let str = formula.innerHTML;
    str = str.slice(0, -1);
    formula.innerHTML = str;
    arr = [...str];

    if(formula.innerText === ''){
        result.innerHTML = '';
        arr = [];
    }
})

/*
plusMinusBtn.addEventListener('click', function(){
    let str = formula.innerHTML;
    formula.innerHTML = str * (-1);
    result.innerHTML = str * (-1);
    arr.unshift('*')
    arr.unshift('-1')
    console.log(arr)
})
*/
