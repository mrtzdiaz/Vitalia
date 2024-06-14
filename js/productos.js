
let mainContainer = document.getElementById("mainProducts");
let carrusel1 = document.getElementById("carruselUno");
let carrusel2 = document.getElementById("carruselDos");
let carrusel3 = document.getElementById("carruselTres");
let navPage = document.querySelectorAll(".nums-li a");

// arreglo que se lla productos principales

//cada elemento del arrego es un OBJETO y cada objeto tiene 4 llaves (name, img, descripcion, price)


let productosVarios = [
    {'name':"Castaño De Indias (60 Cap.)", 'img':"indias.webp", 'description':"Auxiliar en problemas de varices, ulceras varicosas, trombosis y hemorroides", 'price':"$198.00"},
    {'name':"Jarabe Broncolin Etiqueta Azul Mezcla de Plantas (250 ml)", 'img':"jarabe azul.webp", 'description':"Para el alivio de los sintomas del resfriado comun y tos.", 'price':"$214.00"},
    {'name':"Jarabe Eucalín Mezla de plantas y propóleo (240 ml)", 'img':"jarabe.webp", 'description':"Auxiliar en el tratamiento de Tos, Flemas, Resfriado Común o Tos de Fumador.", 'price':"$100.00"},
    {'name':"Shampoo Anticaída Romero y Sábila Árbol Verde (500 ml)", 'img':"shampoo.webp", 'description':"Shampoo natural Anticaída combate la caída y estimula el crecimiento de tu cabello con ingredientes naturales como la Sábila, espinosillo, ortiguilla, romero, coparche y cáscara de nogal; promoviendo un cabello sano y fuerte.", 'price':"$410.00"},
    {'name':"Eucalipto jarabe (140 ml)", 'img':"Eucalipto.jpg", 'description':"Eucaliptine funciona como un auxiliar en el tratamiento de la tos seca y tos con flemas, así como en el alivio de la garganta irritada", 'price':"$410.00"},
    {'name':"Proteina vegetal (450 gr)", 'img':"Fibravegetal.jpeg", 'description':"Proteína vegetal en polvo sabor chocolate a base de chícharo y arroz, adicionado con enzimas y probióticos que ayudan a una buena salud digestiva", 'price':"$300.00"},
    {'name':"Chia mia té negro (350 ml)", 'img':"Chiatenegro.png", 'description':"Un té real para amantes de lo natural. Infusionado con hojas de té real, sin azúcares añadidos ni saborizantes y 100% natural.", 'price':"$80.00"},
    {'name':"Té Verde en polvo (300 gr)", 'img':"te-verde.jpg", 'description':"#", 'price':"$220.00"},
    {'name':"Jarabe Eucalín Infantil Mezla de plantas y propóleo (240 ml)", 'img':"jarabeniño.webp", 'description':"Auxiliar en el tratamiento de Tos y Flemas", 'price':"$80.00"}
  ];
// la funciona recibe el arreglo y el contenedor donde se van a insertar el codigo html

// la funcion tiene un foreach donde se itera o recorre cada uno de los elementos del arraglo (que son objetos) y se toman el name img y price para mostrarlos 
function addItem(item, continer){
  
    item.forEach(element => {
        continer.insertAdjacentHTML("beforeend",
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

navPage.forEach((item) => {
    item.addEventListener("click",function(){
        navPage.forEach((item) => {item.classList.remove("actived")});
        this.classList.add('actived');
    })
})

function addItem(item, container){
  item.forEach(element => {
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

// se lee de localstorage la variable productosprincipales y se convierte en formato JSON
const arrayProductosPrincipales = JSON.parse(localStorage.getItem('productosPrincipales')) // pasar un texto a un json


addItem(arrayProductosPrincipales, mainContainer); // se va a cargar el arreglo de productos principales para construis cards 
addItem(productosVarios.slice(0,3), carrusel1);
addItem(productosVarios.slice(3,6), carrusel2);
addItem(productosVarios.slice(6,9), carrusel3);