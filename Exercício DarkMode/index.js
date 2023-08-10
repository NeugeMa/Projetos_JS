//Validação do primeiro nome no form
const inputNome = document.querySelector("input[id='idNome']");

inputNome.addEventListener("focus", ()=>{
    if(inputNome.value.length < 5){
        inputNome.setAttribute("style","outline-color:#801020;font-weight:700;");
    } else {
        inputNome.setAttribute("style","outline-color:#28a428;font-weight:700;");
    }
});

inputNome.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idNome']");
    if(inputNome.value.length < 5){
        lblUser.innerHTML = "<span style='color:#801020;font-weight:700;'>Primeiro Nome: </span>";
        inputNome.setAttribute("style","outline-color:#801020;font-weight:700;");
    }else {
        lblUser.innerHTML = "<span style='color:#28a428;font-weight:700;'>Primeiro Nome: </span>";
        inputNome.setAttribute("style","outline-color:#28a428; font-weight:700;");
    }
});

inputNome.addEventListener("blur", ()=>{
    const lblUser = document.querySelector("label[for='idNome']");
    if (inputNome.value.length <= 5){
        lblUser.innerHTML = "<span style='color:#000000;'>Primeiro Nome: </span>";
    }
});

//Validação do sobrenome no form
const inputSobrenome = document.querySelector("input[id='idSobrenome']");

inputSobrenome.addEventListener("focus", ()=>{
    if(inputSobrenome.value.length < 5){
        inputSobrenome.setAttribute("style","outline-color:#801020;font-weight:700;");
    } else {
        inputSobrenome.setAttribute("style","outline-color:#28a428;font-weight:700;");
    }
});

inputSobrenome.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idSobrenome']");
    if(inputSobrenome.value.length < 5){
        lblUser.innerHTML = "<span style='color:#801020;font-weight:700;'>Segundo Nome: </span>";
        inputSobrenome.setAttribute("style","outline-color:#801020;font-weight:700;");
    }else {
        lblUser.innerHTML = "<span style='color:#28a428;font-weight:700;'>Segundo Nome: </span>";
        inputSobrenome.setAttribute("style","outline-color:#28a428;font-weight:700;");
    }
});

inputSobrenome.addEventListener("blur", ()=>{
    const lblUser = document.querySelector("label[for='idSobrenome']");
    if (inputSobrenome.value.length <= 5){
        lblUser.innerHTML = "<span style='color:#000000;'>Segundo Nome: </span>";
    }
});

//Validação do e-mail no form
const inputEmail = document.querySelector("input[id='idEmail']");

inputEmail.addEventListener("focus", ()=>{
    if(inputEmail.value.length < 5){
        inputEmail.setAttribute("style","outline-color:#801020;font-weight:700;");
    } else {
        inputEmail.setAttribute("style","outline-color:#28a428;font-weight:700;");
    }
});

inputEmail.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idEmail']");
    var padraoValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputEmail.value.length >= 5 && (inputEmail.value.match(padraoValido))){
        lblUser.innerHTML = "<span style='color:#28a428;font-weight:700;'>E-mail: </span>";
        inputEmail.setAttribute("style","outline-color:#28a428;font-weight:700;");
    }else {
        lblUser.innerHTML = "<span style='color:#801020;font-weight:700;'>E-mail: </span>";
        inputEmail.setAttribute("style","outline-color:#801020;font-weight:700;");
    }
});

inputEmail.addEventListener("blur", ()=>{
    const lblUser = document.querySelector("label[for='idEmail']");
    if (inputEmail.value.length <= 5){
        lblUser.innerHTML = "<span style='color:#000000;'>E-mail: </span>";
    }
});

//Validação da senha no form
const inputSenha = document.querySelector("input[id='idSenha']");

inputSenha.addEventListener("focus", ()=>{
    if(inputSenha.value.length < 6){
        inputSenha.setAttribute("style","outline-color:#801020;font-weight:700;");
    }  
    if (inputSenha.value.length > 8) {
        inputSenha.setAttribute("style","outline-color:#801020;font-weight:700;");
    } else{
        inputSenha.setAttribute("style","outline-color:#28a428;font-weight:700;"); 
    }
});

inputSenha.addEventListener("keyup", ()=>{
    const lblUser = document.querySelector("label[for='idSenha']");
    if(inputSenha.value.length < 6 && inputSenha.value.length > 8){
        lblUser.innerHTML = "<span style='color: blue;font-weight:700;'>Segundo Nome: </span>";
        inputSenha.setAttribute("style","outline-color:blue;font-weight:700;");
    }else {
        lblUser.innerHTML = "<span style='color:purple;font-weight:700;'>Segundo Nome: </span>";
        inputSenha.setAttribute("style","outline-color:purple;font-weight:700;");
    }
});

inputSenha.addEventListener("blur", ()=>{
    const lblUser = document.querySelector("label[for='idSenha']");
    if (inputSenha.value.length <= 5){
        lblUser.innerHTML = "<span style='color:#000000;'>Segundo Nome: </span>";
    }
});

//Configuração do DarkMode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");    
}