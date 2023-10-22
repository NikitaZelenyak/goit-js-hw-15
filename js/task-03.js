
const form = document.querySelector('.login-form');
form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
   
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const dataForm = {};

    if (email === '' || password === '') {
        alert('All input must be filling')
    };
    dataForm.email=email;
    dataForm.password=password;
    console.table(dataForm);
    
    form.reset()


}