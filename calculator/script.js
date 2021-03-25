let buttons = document.getElementsByClassName('button');
let displays = document.getElementById('display');

let operand1 = 0;
let operand2 = null;
let operator = null;



for(let i = 0; i < buttons.length; ++i){
    buttons[i].addEventListener('click', function () {

    var value = this.getAttribute('data-value');
    var text = displays.textContent.trim();

    if(value == '+' || value == '-' || value == '*' || value == '/' || value == '%'){
        operand1 = parseFloat(text);
        operator = value;
        displays.textContent = " ";

    } else if(value == 'ac'){
        displays.textContent = " ";
        

    } else if(value == '='){
        operand2 = parseFloat(text);
        var result = eval(operand1 + ' ' + operator + ' ' + operand2);
        
        if(result){
            display.textContent = result;
            operand1 = result;
            operator = null;
            operand2 = null;
        }


    } else {
        
        display.textContent += value;
    }
    });
}


