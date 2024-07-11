const cloudName = "duzdr4eb6";
const uploadPreset = "xq6aopl7";
const myWidget = cloudinary.createUploadWidget(
  { cloudName: cloudName, uploadPreset: uploadPreset, folder: "productos" },
  (error, result) => {
    if (!error && result && result.event === "success") {
      imagen.value = result.info.secure_url;
    }
  }
);

// se seleccionan los inputs del producto 
let nombre = document.getElementById("from_name");
let precio = document.getElementById("from_price");
let descripcion = document.getElementById("description")
let btnAgregar = document.getElementById("agregar_producto");
let carrusel1 = document.getElementById("prueba");
let imagen = document.getElementById("selectedFile");
let btnCarga = document.getElementById("upload_widget");
let alerta = document.getElementById("alertValidaciones");


// Función para agregar productos a localstorage
function agregarProductoLocalStorage(producto, nombreVariable) {

  let productosLocalStorage = localStorage.getItem(nombreVariable);
  let arrayProductos = JSON.parse(productosLocalStorage) // pasar un texto a un json

  arrayProductos.push(producto);

  localStorage.setItem(nombreVariable, JSON.stringify(arrayProductos)); // JSON.stringify pasa un json a un texto

}
//Funcion alert
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

//----------Validaciones-----//
function validacionNombre(elemento) {
  elemento.value = elemento.value.trim();
  let re = RegExp(/([^\s]\s?){5,40}/);
  if (!re.test(elemento.value)) {
    alerta.innerHTML += `El <strong>nombre</strong> del producto no es correcto.<br>`;
    alerta.style.display = "block";
    elemento.style.border = "solid red medium";
    return false
  }
  return true
};

function validacionPrecio(elemento) {
  elemento.value = elemento.value.trim();
  let re = RegExp(/^\d+(\.\d{1,2})?$/);
  if (!re.test(elemento.value) || parseFloat(elemento.value) <= 0) {
    alerta.innerHTML += `El <strong>precio</strong> no es correcto. Debe ser un número positivo con hasta dos decimales.<br>`;
    alerta.style.display = "block";
    elemento.style.border = "solid red medium";
    return false;
  }
  return true;
};

function validacionDescripcion(elemento) {
  elemento.value = elemento.value.trim();
  let re = RegExp(/([^\s]\s?){20,200}/);
  if (!re.test(elemento.value)) {
    alerta.innerHTML += `La <strong>descripción</strong> del producto debe contener entre 20 y 200 caracteres.<br>`;
    alerta.style.display = "block";
    elemento.style.border = "solid red medium";
    return false
  }
  return true
};

function validacionImagen(elemento) {
  let re = RegExp(/[\.png|\.jpg|\.jpeg|\.webp|\.svg]$/);
  console.log(elemento.value);
  if (!re.test(elemento.value)) {
    alerta.innerHTML += `El <strong>archivo</strong> debe ser una imagen (png, jpg, jpeg, webp o svg).<br>`;
    alerta.style.display = "block";
    elemento.style.border = "solid red medium";
    return false
  }
  return true
};
//-------- Evento Boton---------//
btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  alerta.innerHTML = ""


  const nombreCorrecto = validacionNombre(nombre);
  const descripcionCorrecta = validacionDescripcion(descripcion);
  const precioCorrecto = validacionPrecio(precio);
  const imagenCorrecta = validacionImagen(imagen);


  if (nombreCorrecto)
    nombre.style.border = "solid #dee2e6 medium";

  if (precioCorrecto)
    precio.style.border = "solid #dee2e6 medium";

  if (descripcionCorrecta)
    descripcion.style.border = "solid #dee2e6 medium";

  if (imagenCorrecta)
    imagen.style.border = "solid #dee2e6 medium";

  if (nombreCorrecto && descripcionCorrecta && precioCorrecto && imagenCorrecta) {
    alerta.style.display = "none"; // si pasa la validacion se oculta la alerta
    if (token != null) {
      POSTproductos(nombre.value, descripcion.value, imagen.value, precio.value, 1);
      mostrarAlerta("¡Producto Agregado!", "success"); // se muestra la alerta de exitos
    } else {
      alerta.innerHTML += `No tienes el permiso para agregar productos`;
      alerta.style.display = "block";
    }

    // se limpia el formulario para que se puede ingresar un nuevo producto 
    nombre.value = ""
    descripcion.value = ""
    precio.value = ""
    imagen.value = ""

  }

});

btnCarga.addEventListener("click", function (event) {
  event.preventDefault();
  myWidget.open();
},
  false
);

function POSTproductos(nombre, descripcion, imagen, precio, categoria) {
  const myHeaders = new Headers();
  let token = JSON.parse(sessionStorage.getItem("usuario"));

  myHeaders.append("Authorization", `Bearer: ${token.accessToken}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "nombre": `${nombre}`,
    "descripcion": `${descripcion}`,
    "imagen": `${imagen}`,
    "precio": precio,
    "categoria_id": categoria
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://52.14.158.52/api/productos/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
