
let mainContainer = document.getElementById("mainProducts");
let carrusel1 = document.getElementById("carruselUno");
let carrusel2 = document.getElementById("carruselDos");
let carrusel3 = document.getElementById("carruselTres");
let navPage = document.querySelectorAll(".nums-li a");
let controlPage = document.querySelectorAll(".control-li a");

navPage.forEach((item) => {
  item.addEventListener("click", function () {
    navPage.forEach((item) => { item.classList.remove("actived") });
    this.classList.add('actived');
  });
});

controlPage.forEach((item) => {
  item.addEventListener("click", function () {
    let activo = document.querySelector(".nums-li .actived");
    let pagActiva = parseInt(activo.textContent) - 1;
    let boton = item.textContent;
    activo.classList.remove("actived");
    if (boton == "Siguiente") {
      try {
        navPage.item(pagActiva + 1).classList.add('actived');
      }
      catch (e) {
        navPage.item(0).classList.add('actived');
      }
    }
    else {
      try {
        navPage.item(pagActiva - 1).classList.add('actived');
      }
      catch (e) {
        navPage.item(navPage.length - 1).classList.add('actived');
      }
    }
  });
});

function agregarCarrito(index) {
  let productosCarrito = []
  let corazon = document.getElementById("corazon");
  let contador = document.getElementById("contador");

  if (localStorage.getItem('productosCarrito') != null) {
    productosCarrito = JSON.parse(localStorage.getItem('productosCarrito'));
  }
  const productosPrincipales = JSON.parse(localStorage.getItem('productosTodos'));
  
  productosCarrito.push(productosPrincipales.find((element) => element.id == index))
  
  
  localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito))
  if (localStorage.getItem('productosCarrito') != null) {
    productosCarrito = JSON.parse(localStorage.getItem('productosCarrito'));
    corazon.style.display = "block";
    if (productosCarrito.length <= 9) {
      if (productosCarrito.length == 1) {
        contador.style.margin = "5px 18px";
      }else{
        contador.style.margin = "5px 16px";
      }
      if (productosCarrito.length == 0) corazon.style.display = "none";
      contador.innerHTML = productosCarrito.length;
    }else {
      contador.innerHTML = "9+";
      contador.style.margin = "5px 13px";
      contador.style.fontSize = "11px";
  }
  }
}

function addItem(item, container) {
  //productos = JSON.stringify(item);
  item.forEach((element) => {
    container.insertAdjacentHTML("beforeend",
      `<div class="col">
            <div class="card">
            <div class="card-img">
            <img src="${element.imagen}" class="mx-auto d-block" alt="Producto">
            </div>
              <div class="card-body">
              <div class="card-title">
              <h5 class="title">${element.nombre}</h5>
              </div>
                <h5 id="rate">
                <strong>5.0</strong>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                <i class="bi bi-star-fill" style="color:#E5C900; margin:0; font-size: 20px;"></i>
                </h5>
                <h3>$${Number.parseFloat(element.precio).toFixed(2)}</h3>
                <button type="button" class="btn mx-auto d-block" onclick="agregarCarrito(${element.id})"><strong>¡Lo quiero!</button>
                </div>
            </div>
          </div>`)
  });
}

const arrayProductosTodos = JSON.parse(localStorage.getItem('productosTodos'));
// se lee de localstorage la variable productosprincipales y se convierte en formato JSON


const arrayProductosPrincipales = arrayProductosTodos.filter(element => element.tipo == 'principal')
const arrayProductosVarios = arrayProductosTodos.filter(element => element.tipo == 'varios')


addItem(arrayProductosTodos.slice(0, 3),carrusel1)
addItem(arrayProductosTodos.slice(3, 6),carrusel2)
addItem(arrayProductosTodos.slice(6, 9),carrusel3)
addItem(arrayProductosTodos.slice(9),mainContainer)


//addItem(arrayProductosPrincipales, mainContainer); // se va a cargar el arreglo de productos principales para construis cards  */

// function GETproductos(){

//   const requestOptions = {
//     method: "GET",
//     redirect: "follow"
//   };
  
//   fetch("http://52.14.158.52/ap, requestOptioni/productos/"s)
//     .then((response) => response.text())
//     .then((result) => {


      
//       addItem(JSON.parse(result).slice(0, 3),carrusel1)
//       addItem(JSON.parse(result).slice(3, 6),carrusel2)
//       addItem(JSON.parse(result).slice(6, 9),carrusel3)
//       addItem(JSON.parse(result).slice(9),mainContainer)
//     })
//     .catch((error) => console.error(error));
// }

// GETproductos();

