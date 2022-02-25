let screen = document.getElementById('cal');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText=='del')
        {
            buttonText='';
            screenValue=screenValue.substr(0,screenValue.length -1 );
        }
        if(buttonText=='Clear')
        {
            buttonText='';
            screenValue='';
        }
        console.log('Button text is ', buttonText);
       if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}

