let nombre = document.getElementById("from_name");
let precio = document.getElementById("from_price");
let descripcion = document.getElementById("description")
let btnAgregar = document.getElementById("btn");
let carrusel1 = document.getElementById("prueba");
let alerta = document.getElementById("alertValidaciones");



function addItem(items, container){
  items.forEach(element => {
      container.insertAdjacentHTML("beforeend",
          `<div class="col">
            <div class="card">
            <div class="card-img">
            <img src="/public/img/${element.img}" class="mx-auto d-block" alt="Aceites esenciales">
            </div>
              <div class="card-body">
              <div class="card-title">
              <h5 class="title">${element.name}</h5>
              </div>
                <h5 id="rate">
                <strong>5.0</strong>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                </h5>
                <h3>${element.price}</h3>
                <button type="button" class="btn mx-auto d-block"><strong>¡Lo quiero!</button>
              </div>
            </div>
          </div>`)
      
  });
}


// funcion para agregar productos a localstorage
function agregarProductoLocalStorage(producto, nombreVariable){

  let productosLocalStorage = localStorage.getItem(nombreVariable);
  let arrayProductos = JSON.parse(productosLocalStorage) // pasar un texto a un json

  arrayProductos.push(producto);

  localStorage.setItem(nombreVariable, JSON.stringify(arrayProductos)); // JSON.stringify pasa un json a un texto

}


function validacionNombre(elemento) {

  let re = RegExp(/([^\s\d]\s?){3,40}/);
  if (!re.test(elemento.value)) {
      alerta.innerHTML += `El <strong>Nombre</strong> no es correcto.<br>`;
      alerta.style.display = "block";
      elemento.style.border = "solid red medium";
      return false
  }
  return true
};

function validacionDescripcion(elemento) {

  let re = RegExp(/([^\s\d]\s?){10,400}/);
  if (!re.test(elemento.value)) {
      alerta.innerHTML += `<strong>Descripcion</strong> No tiene descripcion.<br>`;
      alerta.style.display = "block";
      elemento.style.border = "solid red medium";
      return false
  }
  return true
};

function validacionPrecio(elemento) {
  let re = RegExp(/^\d+(\.\d{1,2})?$/);
  if (!re.test(elemento.value) || parseFloat(elemento.value) <= 0) {
      alerta.innerHTML += `<strong>Precio</strong> no es correcto. Debe ser un número positivo con hasta dos decimales.<br>`;
      alerta.style.display = "block";
      elemento.style.border = "solid red medium";
      return false;
  }
  return true;
};

btnAgregar.addEventListener("click", function(event){
    let nuevosProductos = [];
    event.preventDefault();
    alerta.innerHTML = ""

    const nombreCorrecto = validacionNombre(nombre)
    const descripcionCorrecta = validacionDescripcion(descripcion)
    const precioCorrecto = validacionPrecio(precio)
    
    
    if (nombreCorrecto)
      nombre.style.border = "solid #dee2e6 medium";

    if (descripcionCorrecta)
      descripcion.style.border = "solid #dee2e6 medium";

    if (precioCorrecto)
      precio.style.border = "solid #dee2e6 medium";

    if (nombreCorrecto && descripcionCorrecta && precioCorrecto){
      alerta.style.display = "none";


      let productoNuevo = {'name':`${nombre.value}`, 'img':"Fibravegetal.jpeg", 'description':`${descripcion.value}`, 'price':`${precio.value}`}
      nuevosProductos.push(productoNuevo)
      
      agregarProductoLocalStorage(productoNuevo, 'productosPrincipales')
      addItem(nuevosProductos, carrusel1)
      console.log(nuevosProductos);

      nombre.value = ""
      descripcion.value = ""
      precio.value = ""
    
    }
    
})

