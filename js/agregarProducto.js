const cloudName = "duzdr4eb6";
const uploadPreset = "xq6aopl7";
const myWidget = cloudinary.createUploadWidget(
  {cloudName: cloudName, uploadPreset: uploadPreset, folder: "productos"},
  (error, result) => {
    if (!error && result && result.event === "success") {
      imagen.value = result.info.secure_url;
    }
  }
);

let nombre = document.getElementById("from_name");
let precio = document.getElementById("from_price");
let descripcion = document.getElementById("description");
let btnAgregar = document.getElementById("btn");
let carrusel1 = document.getElementById("prueba");
let imagen = document.getElementById("selectedFile");
let btnCarga = document.getElementById("upload_widget");


function agregarProductoLocalStorage(producto, nombreVariable) {

  let productosLocalStorage = localStorage.getItem(nombreVariable);
  let arrayProductos = JSON.parse(productosLocalStorage) // pasar un texto a un json

  arrayProductos.push(producto);

  localStorage.setItem(nombreVariable, JSON.stringify(arrayProductos)); // JSON.stringify pasa un json a un texto

}

btnAgregar.addEventListener("click", function (event) {
  let nuevosProductos = [];
  event.preventDefault();
  let productoNuevo = { 'name': `${nombre.value}`, 'img': `${imagen.value}`, 'description': `${descripcion.value}`, 'price': `$${precio.value}` }
  nuevosProductos.push(productoNuevo)
  agregarProductoLocalStorage(productoNuevo, 'productosPrincipales')
})

btnCarga.addEventListener("click", function (event) {
  event.preventDefault();
  myWidget.open();
},
  false
);
