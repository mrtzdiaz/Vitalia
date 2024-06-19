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
  let nuevosProductos = [];
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


    // se crea un objeto con los datos del producto 
    let productoNuevo = { 'name': `${nombre.value}`, 'img': `${imagen.value}`, 'description': `${descripcion.value}`, 'price': `$${precio.value}` }
    nuevosProductos.push(productoNuevo) // se agrega el producto al arraglo de nuevos productos 

    agregarProductoLocalStorage(productoNuevo, 'productosPrincipales') // se creo una funcion para agregar el producto al local storage
    mostrarAlerta("¡Producto Agregado!","success"); // se muestra la alerta de exitos


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
