
let btnDism = document.querySelector('#btnDism');
let text = document.querySelector('#highlight_text');
let emailExp = localStorage.getItem('email');

text.innerHTML = emailExp;

btnDism.addEventListener('click',()=>{
    window.location.href = './index.html';
});