let nombre = document.getElementById("from_name");
let precio = document.getElementById("from_price");
let descripcion = document.getElementById("description");
let btnAgregar = document.getElementById("btn");
let carrusel1 = document.getElementById("prueba");

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


function agregarProductoLocalStorage(producto, nombreVariable){

  let productosLocalStorage = localStorage.getItem(nombreVariable);
  let arrayProductos = JSON.parse(productosLocalStorage) // pasar un texto a un json

  arrayProductos.push(producto);

  localStorage.setItem(nombreVariable, JSON.stringify(arrayProductos)); // JSON.stringify pasa un json a un texto

}

btnAgregar.addEventListener("click", function(event){
    let nuevosProductos = [];
    event.preventDefault();
    let productoNuevo = {'name':`${nombre.value}`, 'img':"Fibravegetal.jpeg", 'description':`${descripcion.value}`, 'price':`${precio.value}`}

    nuevosProductos.push(productoNuevo)
    
    agregarProductoLocalStorage(productoNuevo, 'productosPrincipales')

    addItem(nuevosProductos, carrusel1)
    console.log(nuevosProductos);
})

