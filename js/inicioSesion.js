let inputEmail = document.getElementById("from_email");
let contrasena = document.getElementById("from_password");
let alerta = document.getElementById("alertValidaciones");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

//VALIDACION EMAIL
function validacionEmail() {
    let registroUsuario = JSON.parse(localStorage.getItem("usuario"));

    if(registroUsuario.email == inputEmail.value && registroUsuario.password ==  contrasena.value ){
        registroUsuario.login = true;
        localStorage.setItem("usuario", JSON.stringify(registroUsuario));
        window.location.href= "http://127.0.0.1:3003/index.html";
    }else {
        alerta.innerHTML += `No hemos podido validar tu usuario y/o contraseña, favor de verificar tus datos`;
        alerta.style.display = "block";
        inputEmail.style.border = "solid red medium";
        contrasena.style.border = "solid red medium";

    }

};


function mostrarAlerta(mensaje, tipo) {
    const alerta = document.getElementById('alert-container');
    const alertaDiv = document.createElement('div');
    alertaDiv.className = `alert alert-${tipo} alert-dismissible fade show`;
    alertaDiv.role = 'alert';
    alertaDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alerta.appendChild(alertaDiv);
};

btn.addEventListener("click", function (event) {
    event.preventDefault();
    alerta.style.display = "none";
    alerta.innerHTML = "";
    inputEmail.style.border = "";
    contrasena.style.border = "";
    isValid = true;

    validacionEmail();
    
});
