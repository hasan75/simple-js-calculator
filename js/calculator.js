const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResult = document.querySelector('.temp-result');

const numbersElement = document.querySelectorAll('.number');

const operationElement = document.querySelectorAll('.operation');

const equalElement = document.querySelector('.equal');

const clearAllElement = document.querySelector('.all-clear');
const clearLastElement = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';

let haveDot = false;

numbersElement.forEach(number => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true
        }
        else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
})

operationElement.forEach(operation => {
    operation.addEventListener('click',(e)=>{
        if (!dis2Num) {
          return;  
        } 
        haveDot = false
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation){
            mathOperation();
        }
        else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName; 
        console.log(result);
    })
})

function clearVar(name = ''){
    dis1Num += dis2Num + '' + name + '' ;
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '' ;
    tempResult.innerText = result
}

function mathOperation(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }
    else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }
    else if(lastOperation === '%'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    
}

equalElement.addEventListener('click',(e)=>{
    if(!dis2Num || !dis1Num){
        return;
    }
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResult.innerText = '';
    dis2Num = result;
    dis1Num = ''

})

clearAllElement.addEventListener('click', (e) => {
    display1El.innerText = '0'
    display2El.innerText = '0'
    dis1Num = ''
    dis2Num = ''
    result = ''
    tempResult.innerText = '0'
})

clearLastElement.addEventListener('click', (e) => {
    display2El.innerText = ''
    dis2Num = ''
})

window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      clickButtonEl(e.key);
      // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
      clickOperation(e.key);
    } else if (e.key === "*") {
      clickOperation("x");
      // console.log(e.key)
    } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
    // console.log(e.key)
  });

  function clickButtonEl(key) {
    numbersElement.forEach((button) => {
      if (button.innerText === key) {
        button.click();
      }
    });
  }

  function clickOperation(key) {
    operationElement.forEach((operation) => {
      if (operation.innerText === key) {
        operation.click();
      }
    });
  }


  function clickEqual() {
    equalElement.click();
  }