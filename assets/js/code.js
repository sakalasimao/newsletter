let btnSign = document.querySelector('#btnSign');
let emailInput = document.querySelector('#email');
let errorMessage = document.querySelector('#error_message');



btnSign.addEventListener('click',()=>{

    const regex = /\S+@\S+\.\S+/;
    const valido = regex.test(emailInput.value);
    
    if(emailInput.value == ""){
        errorMessage.style.display = 'block';
        emailInput.classList.add('erro');

    }else if (valido == true) {
        errorMessage.style.display = 'none';
        emailInput.classList.remove('erro');
        localStorage.setItem('email', emailInput.value);
        window.location.href = "./thanksPage.html"; // valid
        
    } else {
        errorMessage.style.display = 'block';
        emailInput.classList.add('erro');  // not valid
       
    }

    
       

});




