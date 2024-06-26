let inputs = document.querySelectorAll("form input");
let nombre = document.getElementById("from_name");
let apellido = document.getElementById("from_lastname");
let email = document.getElementById("from_email");
let contrasena = document.getElementById("from_password");
let confirmaContrasena = document.getElementById("from_confirm_password");
let alerta = document.getElementById("alertValidaciones");
let btn = document.getElementById("btn");
let isValid;


// VALIDACIONES NOMBRE
function validacionNombre() {
    let re = RegExp(/([^\s\d]\s?){3,40}/);
    if (!re.test(nombre.value)) {
        alerta.innerHTML += `El <strong>Nombre</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        nombre.style.border = "solid red medium";
        return false
    }
    return true
};

// VALIDACIONES APELLIDO
function validacionApellido() {
    let re = RegExp(/^[A-Za-zÁÉÍÓÚÑáéíóúñ]+(?:[\s'-][A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$/);
    if (!re.test(apellido.value)) {
        alerta.innerHTML += `El <strong>Apellido</strong> no es correcto.<br>`;
        alerta.style.display = "block";
        apellido.style.border = "solid red medium";
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

//VALIDACIONES CONTRASEÑA
function validacionContrasenas() {
    // Validar que la contraseña tiene una letra mayúscula, miníscula, un número y una longitud de 8 caracteres. 
    let re = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]){8,15}/);
    if (!re.test(contrasena.value)) {
        alerta.innerHTML += `La <strong>contraseña</strong> debe tener entre 8 y 15 caracteres, incluyendo una letra mayúscula, una letra minúscula, un numero y un caracter especial ($@$!%*?&)<br>`;
        alerta.style.display = "block";
        document.getElementById("from_password").style.border = "solid red medium";
        return false;
    };
    return true;
};

function compararContrasenas() {
    if (contrasena.value !== confirmaContrasena.value) {
        alerta.innerHTML += `Las <strong>contraseñas</strong> no coinciden.<br>`;
        alerta.style.display = "block";
        document.getElementById("from_password").style.border = "solid red medium";
        document.getElementById("from_confirm_password").style.border = "solid red medium";
        return false;
    };
    return true;
}

// funcion para agregar productos a localstorage
function agregarUsuarioLocalStorage(usuario, nombreVariable) {

    localStorage.setItem(nombreVariable, JSON.stringify(usuario)); // JSON.stringify pasa un json a un texto
}

/* ----------- EVENTOS DE LOS INPUTS Y BOTONES DE FORMULARIO ----------- */
// EVENTO BOTON
btn.addEventListener("click", function (event) {
    event.preventDefault();
    limpiarAlarma();
    isValid = true;

    if (!validacionNombre()) {
        isValid = false;
    }
    if (!validacionApellido()) {
        isValid = false;
    }
    if (!validacionEmail()) {
        isValid = false;
    }
    if (!validacionContrasenas()) {
        isValid = false;
    }
    if (!compararContrasenas()) {
        isValid = false;
    }

    if (isValid) {
        let usuarioNuevo = { 'name': `${nombre.value}`, 'lastName': `${apellido.value}`, 'email': `${email.value}`, 'password': `${contrasena.value}`, 'login': false}
        agregarUsuarioLocalStorage(usuarioNuevo, 'usuario')
        mostrarAlerta("¡Registro creado exitosamente!", "success");
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        contrasena.value = "";
        confirmaContrasena.value = "";
    }
});

// EVENTOS INPUTS 
inputs.forEach((item) => {
    item.addEventListener("focus", function (event) {
        event.preventDefault();
        limpiarAlarma();
        item.value = item.value.trim();
        if (nombre.value.length > 0) {
            validacionNombre();
        }
        if (apellido.value.length > 0) {
            validacionApellido();
        }
        if (email.value.length > 0) {
            validacionEmail();
        }
        if (contrasena.value.length > 0) {
            validacionContrasenas();
        }
        if (confirmaContrasena.value.length > 0) {
            validacionContrasenas();
        }
    })
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
function limpiarAlarma() {
    alerta.style.display = "none";
    alerta.innerHTML = "";
    nombre.style.border = "";
    apellido.style.border = "";
    email.style.border = "";
    contrasena.style.border = "";
    confirmaContrasena.style.border = "";
};