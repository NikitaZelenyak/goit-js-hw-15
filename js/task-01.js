const inputEl = document.querySelector('#validation-input');




function onCheckValid(event) {


    if (event.currentTarget.value.length !== +inputEl.getAttribute('data-length')) {
        
        inputEl.classList.add('invalid');
        return
    }
    
    inputEl.classList.add('valid');
     inputEl.classList.remove('invalid');
 
}

 
inputEl.addEventListener('blur', onCheckValid)
    