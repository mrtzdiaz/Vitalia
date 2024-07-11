let inputEmail = document.getElementById("from_email");
let inputContrasena = document.getElementById("from_password");
let alerta = document.getElementById("alertValidaciones");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

//VALIDACION EMAIL
function validacionEmail() {
    let registroUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    let registroActual = registroUsuarios.find(user=> user.email == inputEmail.value);

    if(registroActual.email == inputEmail.value && registroActual.password ==  contrasena.value ){
        registroActual.login = true;
        localStorage.setItem("usuarios", JSON.stringify(registroUsuarios));
        window.location.href= "http://52.14.158.52/index.html";
    }else {
        alerta.innerHTML += `No hemos podido validar tu usuario y/o contraseña, favor de verificar tus datos`;
        alerta.style.display = "block";
        inputEmail.style.border = "solid red medium";
        contrasena.style.border = "solid red medium";

    }

};

btn.addEventListener("click", function (event) {
    event.preventDefault();
    alerta.style.display = "none";
    alerta.innerHTML = "";
    inputEmail.style.border = "";
    inputContrasena.style.border = "";
    isValid = true;

    if(inputEmail.value.length == 0 || inputContrasena.value.length == 0 ){
        isValid = false;
        alerta.innerHTML += `Verifica los campos`;
        alerta.style.display = "block";
        inputEmail.style.border = "solid red medium";
        inputContrasena.style.border = "solid red medium";
    }
    if(isValid) {
        POSTlogin(inputEmail.value, inputContrasena.value);
    }
});

function POSTlogin(correo, contrasena){
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "correo": `${correo}`,
  "contrasena": `${contrasena}`
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://52.14.158.52/api/login/", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    let respuesta = JSON.parse(result);
    if(respuesta.accessToken == null){
        alerta.innerHTML += "No hemos podido validar tu usuario y/o contraseña, favor de verificar tus datos";
        alerta.style.display = "block";
        inputEmail.style.border = "solid red medium";
        inputContrasena.style.border = "solid red medium";
    }else{
        sessionStorage.setItem("usuario", JSON.stringify(respuesta));
        window.location.href= "http://52.14.158.52/index.html";
    }
})
}
