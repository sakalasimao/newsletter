let btnSign = document.querySelector('#btnSign');
let emailInput = document.querySelector('#email');
let errorMessage = document.querySelector('#error_message');

emailInput.focus();

btnSign.addEventListener('click',()=>{

    const regex = /\S+@\S+\.\S+/;
    const valido = regex.test(emailInput.value);
    
    if(emailInput.value == ""){
        errorMessage.style.display = 'block';
        emailInput.classList.add('erro');
        
    }else if (valido == true) {
        errorMessage.style.display = 'none';
        emailInput.classList.remove('erro');
        window.location.href = "./thanksPage.html";
        console.log("O e-mail é válido.");
    } else {
        errorMessage.style.display = 'block';
        emailInput.classList.add('erro');
        console.log("O e-mail não é válido.");
    }


});

