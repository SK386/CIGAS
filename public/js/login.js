// Form login configuration
    var url = document.URL;
    var urlLogin = ("http://localhost:5500/CIGAS/views/login.html#form__login");
    var urlRegister = ("http://localhost:5500/CIGAS/views/login.html#form__register");
    

/* LINK QUE MOSTRA A TELA DE LOGIN */
function showLogin(){
    let formr = document.getElementById("form__register");
    let forml = document.getElementById("form__login");
    forml.style.display="flex";
    formr.style.display="none";
}
// Register section 
function showRegister(){
    let formr = document.getElementById("form__register");
    let forml = document.getElementById("form__login");
    forml.style.display="none";
    formr.style.display="flex";
    
}