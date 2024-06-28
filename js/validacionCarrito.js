// VARIABLES
let nombre = document.getElementById("name");
let direccion = document.getElementById("address");
let codigoPostal = document.getElementById("cp");
let nombreTarjeta = document.getElementById("tarjeta-name");
let numeroTarjeta = document.getElementById("tarjeta-numero");
let cvv = document.getElementById("tarjeta-cvv");
let btn = document.getElementById("btn");
let inputs = document.querySelectorAll("form input");
let alerta = document.getElementById("alertValidaciones");
let isValid;

/* ----------- FUNCIONES PARA VALIDACION DE DATOS EN LOS INPUTS ----------- */

// VALIDACIONES NOMBRE
function validacionNombre() {
  let re = RegExp(/([^\s\d]\s?){3,40}/);
  if (!re.test(nombre.value)) {
    alerta.innerHTML += `El <strong>Nombre</strong> no es correcto.<br>`;
    alerta.style.display = "block";
    nombre.style.border = "solid red medium";
    return false;
  }
  return true;
}

// VALIDACION DIRECCIÓN
function validacionDireccion() {
  let re = RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/);
  if (!re.test(direccion.value)) {
    alerta.innerHTML += `La <strong>Dirección</strong> no es correcta.<br>`;
    alerta.style.display = "block";
    direccion.style.border = "solid red medium";
    return false;
  }
  return true;
}

// VALIDACION CÓDIGO POSTAL
function validacionCodigoPostal() {
  let re = RegExp(/^\d{5}(-\d{4})?$/);
  if (!re.test(codigoPostal.value)) {
    alerta.innerHTML += `El <strong>Código Postal</strong> no es correcto.<br>`;
    alerta.style.display = "block";
    codigoPostal.style.border = "solid red medium";
    return false;
  }
  return true;
}

// VALIDACIÓN NUMERO TARJETA
function validacionNumeroTarjeta() {
  let re = RegExp(
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/
  );
  if (!re.test(numeroTarjeta.value)) {
    alerta.innerHTML += `El <strong>Número de Tarjeta</strong> no es correcto.<br>`;
    alerta.style.display = "block";
    numeroTarjeta.style.border = "solid red medium";
    return false;
  }
  return true;
}

// VALIDACION NOMBRE TARJETA
function validacionNombreTarjeta() {
  let re = RegExp(/^[a-zA-Z\s]+$/);
  if (!re.test(nombreTarjeta.value)) {
    alerta.innerHTML += `El <strong>Nombre en la Tarjeta</strong> no es correcto.<br>`;
    alerta.style.display = "block";
    nombreTarjeta.style.border = "solid red medium";
    return false;
  }
  return true;
}

// VALIDACIÓN CVV
function validacionCVV() {
  let re = RegExp(/^[0-9]{3,4}$/);
  if (!re.test(cvv.value)) {
    alerta.innerHTML += `El <strong>CVV</strong> no es correcto.<br>`;
    alerta.style.display = "block";
    cvv.style.border = "solid red medium";
    return false;
  }
  return true;
}

// EVENTOS INPUT
inputs.forEach((item) => {
  item.addEventListener("blur", function (event) {
    event.preventDefault();
    limpiarAlarma();
    item.value = item.value.trim();
    if (nombre.value.length > 0) {
      validacionNombre();
    }
    if (direccion.value.length > 0) {
      validacionDireccion();
    }
    if (codigoPostal.value.length > 0) {
      validacionCodigoPostal();
    }
    if (nombreTarjeta.value.length > 0) {
      validacionNombreTarjeta();
    }
    if (numeroTarjeta.value.length > 0) {
      validacionNumeroTarjeta();
    }
    if (cvv.value.length > 0) {
      validacionCVV();
    }
  });
});

//LIMPIAR ALARMA
function limpiarAlarma() {
  alerta.style.display = "none";
  alerta.innerHTML = "";
  nombre.style.border = "";
  direccion.style.border = "";
  codigoPostal.style.border = "";
  nombreTarjeta.style.border = "";
  numeroTarjeta.style.border = "";
  cvv.style.border = "";
}
