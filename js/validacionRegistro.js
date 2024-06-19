let nombre = document.getElementById("from_name");
let apellido = document.getElementById("from_lastname");
let email = document.getElementById("from_email");
let contrasena = document.getElementById("from_password");
let confirmaContrasena = document.getElementById("from_confirm_password");
let alerta = document.getElementById("alertValidaciones");
let isValid;
let btn = document.getElementById("btn");
let form = document.getElementById("form");


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
    let re = RegExp( /^[A-Za-zÁÉÍÓÚÑáéíóúñ]+(?:[\s'-][A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$/);
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
        alerta.innerHTML += `La <strong>contraseña</strong> debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un numero y un caracter especial ($@$!%*?&)<br>`;
        alerta.style.display = "block";
        document.getElementById("from_password").style.border = "solid red medium";
        return false;
    };
    return true;
};

function compararContrasenas(){
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
    alerta.style.display = "none";
    alerta.innerHTML = "";
    nombre.style.border = "";
    apellido.style.border = "";
    email.style.border = "";
    contrasena.style.border = "";
    confirmaContrasena.style.border = "";
    isValid = true;

    if(!validacionNombre()){
        isValid = false; 
    }
    if(!validacionApellido()){
        isValid = false;
    }
    if(!validacionEmail()){
        isValid = false;
    }
    if(!validacionContrasenas()){
        isValid = false;
    }
    if(!compararContrasenas()){
        isValid = false;
    }

    console.log(
        "validacionNombre", validacionNombre(), 
        "validacionApellido", validacionApellido(), 
        "validacionEmail", validacionEmail(), 
        "validacionContrasenas", validacionContrasenas(), 
        "compararContrasenas", compararContrasenas()
    ) 
    console.log("texto antes del if", isValid);
    if(isValid){
        console.log("dentro del if");
      //  enviarCorreo();
        console.log("desues de enviar correo");

        let usuarioNuevo = { 'name': `${nombre.value}`, 'lastName': `${apellido.value}`, 'email': `${email.value}`, 'password': `$${contrasena.value}`}
        console.log(usuarioNuevo);
        agregarUsuarioLocalStorage(usuarioNuevo, 'usuario')
        mostrarAlerta("¡Registro creado exitosamente!","success");
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

// EVENTO INPUT APELLIDO
apellido.addEventListener("blur", function (event){
    event.preventDefault();
    apellido.value = apellido.value.trim();
    limpiarAlarma()
    if(apellido.value.length > 0){
        validacionApellido();
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

// EVENTO INPUT CONTRASEÑA
contrasena.addEventListener("blur", function (event){
    event.preventDefault();
    contrasena.value = contrasena.value.trim();
    limpiarAlarma()
    if(contrasena.value.length > 0){
        validacionContrasenas();
    }
});

// EVENTO INPUT CONFIRMA CONTRASEÑA
confirmaContrasena.addEventListener("blur", function (event){
    event.preventDefault();
    confirmaContrasena.value = confirmaContrasena.value.trim();
    limpiarAlarma()
    if(confirmaContrasena.value.length > 0){
        validacionContrasenas();
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
    apellido.style.border = "";
    email.style.border = "";
    contrasena.style.border = "";
    confirmaContrasena.style.border = "";
};

//REGISTRO
function enviarCorreo() {
    btn.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_ynzt6oh';

    email.sendForm(serviceID, templateID, form)
        .then(() => {
            btn.value = 'Enviar';
            mostrarAlerta('Tu registro ha sido exitoso!', 'success');
        }, (err) => {
            btn.value = 'Enviar';
            mostrarAlerta('Error: ' + JSON.stringify(err), 'danger');
        });
};