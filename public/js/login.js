// Form login configuration
    var url = document.URL;
    var urlLogin = ("http://localhost:5500/CIGAS/views/login.html#form__login");
    var urlRegister = ("http://localhost:5500/CIGAS/views/login.html#form__register");
    if(url == urlRegister){
        let formr = document.getElementById("form__register");
        let forml = document.getElementById("form__login");
        forml.style.display="none";
        formr.style.display="flex";
    }
    else{
        console.log("nothing");
    }

function login(){

    let formLogin = {
         userPassword:document.getElementById("user__password--login").value,
         userEmail:document.getElementById("user__email--login").value   
    }
    
    let forml = document.getElementById("form__login");
    forml.submit();
    //  if(formLogin.userPassword.length < 8){
    //      alert("ERROR: The password need have 8 characters or more");
    //  }
}
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

function register(){
    let formRegister = {
        userEmail:document.getElementById("user__email--register").value,
        userPassword:document.getElementById("user__password--register").value
    }
    let form =  document.getElementById("form__register");
    form.submit()
}
