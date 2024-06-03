// VARIABLES
let nombre = document.getElementById("inputNombre");
let email = document.getElementById("inputEmail");
let telefono = document.getElementById("inputNumber");
let mensaje = document.getElementById("inputMensaje");
let alerta = document.getElementById("alertValidaciones");
let isValid;
let btn = document.getElementById("btn");

// VALIDACIONES NOMBRE
function validacionNombre () {
    if (nombre.value.length < 3) {
        alerta.innerHTML += `El <strong>Nombre</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        nombre.style.border = "solid red medium";
        isValid = false;
    }; // if length 
};
// VALIDACIONES EMAIL
function validacionEmail () {
 if(!email.value.includes("@")){
    alerta.innerHTML += `El <strong>Correo Electrónico</strong> no es correcto.<br>`;
    alerta.style.display = "block";
    email.style.border = "solid red medium";
    isValid = false;
 }
};

// VALIDACIONES TELEFONO
function validacionTelefono () {
    if (telefono.value.length != 10 || isNaN(telefono.value) || telefono.value.includes(".")) {
        alerta.innerHTML += `El <strong>Número telefónico</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        telefono.style.border = "solid red medium";
        isValid = false;
    }
}
// VALIDACIONES CARACTERES MENSAJE
function validacionMensaje () {
    if (mensaje.value.length >= 200) {
        alerta.innerHTML += `El <strong>Mensaje</strong> no debe exceder 200 caracteres.<br>`;
        alerta.style.display = "block";
        mensaje.style.border = "solid red medium";
        isValid = false;
    }; // if length 
};

// FUNCION BUTON
btn.addEventListener("click", function (event) {
    event.preventDefault();
    alerta.style.display = "none";
    alerta.innerHTML = "";
    nombre.style.border = "";
    email.style.border = "";
    telefono.style.border = "";
    mensaje.style.border = "";
    isValid = true;

    validacionNombre();
    validacionEmail();
    validacionTelefono();
    validacionMensaje();
});
