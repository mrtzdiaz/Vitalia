// VARIABLES
let nombre = document.getElementById("from_name");
let email = document.getElementById("user_email");
let telefono = document.getElementById("user_cel");
let mensaje = document.getElementById("message");
let alerta = document.getElementById("alertValidaciones");
let isValid;
let btn = document.getElementById("btn");
let form = document.getElementById("form");
const btnCorreo = document.getElementById('button');


// VALIDACIONES NOMBRE
function validacionNombre() {
    if (nombre.value.length < 3) {
        alerta.innerHTML += `El <strong>Nombre</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        nombre.style.border = "solid red medium";
        isValid = false;
        return false
    }
    return true
};
// VALIDACIONES EMAIL
function validacionEmail() {
    if (!email.value.includes("@")) {
        alerta.innerHTML += `El <strong>Correo Electrónico</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        email.style.border = "solid red medium";
        isValid = false;
        return false
    }
    return true
};

// VALIDACIONES TELEFONO
function validacionTelefono() {
    if (telefono.value.length != 10 || isNaN(telefono.value) || telefono.value.includes(".")) {
        alerta.innerHTML += `El <strong>Número telefónico</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        telefono.style.border = "solid red medium";
        isValid = false;
        return false
    }
    return true
}
// VALIDACIONES CARACTERES MENSAJE
function validacionMensaje() {
    if (mensaje.value.length >= 200) {
        alerta.innerHTML += `El <strong>Mensaje</strong> no debe exceder 200 caracteres.<br>`;
        alerta.style.display = "block";
        mensaje.style.border = "solid red medium";
        isValid = false;
        return false
    }
    return true
};

// FUNCION BOTON
btn.addEventListener("click", function (event) {
    event.preventDefault();
    alerta.style.display = "none";
    alerta.innerHTML = "";
    nombre.style.border = "";
    email.style.border = "";
    telefono.style.border = "";
    mensaje.style.border = "";
    isValid = true;

    if(!validacionNombre()){
        isValid = false;
    }
    if(!validacionEmail()){
        isValid = false;
    }
    if(!validacionTelefono()){
        isValid = false;
    }
    if(!validacionMensaje()){
        isValid = false;
    }

    if(isValid){
        enviarCorreo();
    }
});

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

function enviarCorreo() {
    btn.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_ynzt6oh';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            btn.value = 'Enviar';
            mostrarAlerta('Enviado!', 'success');
        }, (err) => {
            btn.value = 'Enviar';
            mostrarAlerta('Error: ' + JSON.stringify(err), 'danger');
        });
};