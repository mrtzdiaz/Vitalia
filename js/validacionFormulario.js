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

/* ----------- FUNCIONES PARA VALIDACION DE DATOS EN LOS INPUTS ----------- */

// VALIDACIONES NOMBRE
function validacionNombre() {
    let re = RegExp(/([^\s]\s?){3,40}/);
    if (!re.test(nombre.value)) {
        alerta.innerHTML += `El <strong>Nombre</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        nombre.style.border = "solid red medium";
        return false
    }
    return true
};

// VALIDACIONES EMAIL
function validacionEmail() {
    let re = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (!re.test(email.value)) {
        alerta.innerHTML += `El <strong>Correo Electrónico</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        email.style.border = "solid red medium";
        return false
    }
    return true
};

// VALIDACIONES TELEFONO
function validacionTelefono() {
    let re = RegExp(/\d{10}/);
    if (!re.test(telefono.value)) {
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
    } else if (mensaje.value.length < 15) {
        alerta.innerHTML += `El <strong>Mensaje</strong> no debe ser menor a 20 caracteres.<br>`;
        alerta.style.display = "block";
        mensaje.style.border = "solid red medium";
        isValid = false;
        return false
    }
    return true
};

/* ----------- EVENTOS DE LOS INPUTS Y BOTONES DE FORMULARIO ----------- */

// EVENTO BOTON
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

// EVENTO INPUT NOMBRE
nombre.addEventListener("blur", function (event){
    event.preventDefault();
    nombre.value = nombre.value.trim();
    limpiarAlarma()
    if(nombre.value.length > 0){
        validacionNombre();
    }
});

// EVENTO INPUT EMAIL
email.addEventListener("blur", function (event){
    event.preventDefault();
    email.value = email.value.trim();
    limpiarAlarma()
    if(email.value.length > 0){
        validacionEmail();
    }
});

// EVENTO INPUT TELEFONO
telefono.addEventListener("blur", function (event){
    event.preventDefault();
    telefono.value = telefono.value.trim();
    limpiarAlarma()
    if(telefono.value.length > 0){
        validacionTelefono();
    }
});

// EVENTO INPUT MENSAJE
mensaje.addEventListener("blur", function (event){
    event.preventDefault();
    mensaje.value = mensaje.value.trim();
    limpiarAlarma()
    if(mensaje.value.length > 0){
        validacionMensaje();
    }
});

/* ----------- FUNCIONES ----------- */

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

//LIMPIAR ALARMA
function limpiarAlarma(){
    alerta.style.display = "none";
    alerta.innerHTML = "";
    nombre.style.border = "";
    email.style.border = "";
    telefono.style.border = "";
    mensaje.style.border = "";
};

//ENVIO DE CORREO
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