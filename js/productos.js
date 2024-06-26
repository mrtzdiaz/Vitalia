
let mainContainer = document.getElementById("mainProducts");
let carrusel1 = document.getElementById("carruselUno");
let carrusel2 = document.getElementById("carruselDos");
let carrusel3 = document.getElementById("carruselTres");
let navPage = document.querySelectorAll(".nums-li a");
let controlPage = document.querySelectorAll(".control-li a");

// arreglo que se lla productos principales

//cada elemento del arrego es un OBJETO y cada objeto tiene 4 llaves (name, img, descripcion, price)
let productoPrincipales = [
    {'name':"Bebida de soya en polvo (500 gr)", 'img':"/public/img/bebida.webp", 'description':"Proteína aislada de soya, suero de leche deslactosada, dextrosa, lecitina de soya, Vitamina A (retinol), Vitamina D (calciferol), Vitamina C (ácido ascórbico), y sabor capuchino descafeinado.", 'price':"$350.00"},
    {'name':"Colágeno Hidrolizado (120 Tab.)", 'img':"/public/img/colageno.webp", 'description':"Dentro de los beneficios del colágeno hidrolizado se encuentra la función como agente reparador del tejido colectivo del cuerpo, es por ello que este fármaco ha sido utilizado como tratamiento de algunas enfermedades relacionadas, como en osteoartritis y osteoporosis, ambas estrechamente ligadas a los huesos.", 'price':"$360.00"},
    {'name':"Esencia Floral Calma (25 ml)", 'img':"/public/img/esenciales.webp", 'description':"Esencia natural extraída de la Flor de acebo, el castaño dulce y la genciana. Es una alternativa natural para acompañar tus estados de ánimo. Es seguro tanto para niños mayores de 7 años como para adultos.", 'price':"$180.00"},
    {'name':"Esencia Floral Echinacea (25 ml)", 'img':"/public/img/image011.webp", 'description':"Esencia natural extraída de flores silvestres, una alternativa natural para mejorar la calidad de vida.La planta se ha utilizado para curar heridas, abscesos, quemaduras, eczema y úlceras, para tratar el resfriado común y como carminativo, antiinflamatorio, antibacteriano, antifúngico, antiviral e inmunoestimulante.", 'price':"$80.00"}
];

let productosVarios = [
    {'name':"Castaño De Indias (60 Cap.)", 'img':"/public/img/indias.webp", 'description':"Auxiliar en problemas de varices, ulceras varicosas, trombosis y hemorroides", 'price':"$198.00"},
    {'name':"Jarabe Broncolin Etiqueta Azul Mezcla de Plantas (250 ml)", 'img':"/public/img/jarabe azul.webp", 'description':"Para el alivio de los sintomas del resfriado comun y tos.", 'price':"$214.00"},
    {'name':"Jarabe Eucalín Mezla de plantas y propóleo (240 ml)", 'img':"/public/img/jarabe.webp", 'description':"Auxiliar en el tratamiento de Tos, Flemas, Resfriado Común o Tos de Fumador.", 'price':"$100.00"},
    {'name':"Shampoo Anticaída Romero y Sábila Árbol Verde (500 ml)", 'img':"/public/img/shampoo.webp", 'description':"Shampoo natural Anticaída combate la caída y estimula el crecimiento de tu cabello con ingredientes naturales como la Sábila, espinosillo, ortiguilla, romero, coparche y cáscara de nogal; promoviendo un cabello sano y fuerte.", 'price':"$410.00"},
    {'name':"Eucalipto jarabe (140 ml)", 'img':"/public/img/Eucalipto.jpg", 'description':"Eucaliptine funciona como un auxiliar en el tratamiento de la tos seca y tos con flemas, así como en el alivio de la garganta irritada", 'price':"$410.00"},
    {'name':"Proteina vegetal (450 gr)", 'img':"/public/img/Fibravegetal.jpeg", 'description':"Proteína vegetal en polvo sabor chocolate a base de chícharo y arroz, adicionado con enzimas y probióticos que ayudan a una buena salud digestiva", 'price':"$300.00"},
    {'name':"Chia mia té negro (350 ml)", 'img':"/public/img/Chiatenegro.png", 'description':"Un té real para amantes de lo natural. Infusionado con hojas de té real, sin azúcares añadidos ni saborizantes y 100% natural.", 'price':"$80.00"},
    {'name':"Té Verde en polvo (300 gr)", 'img':"/public/img/te-verde.jpg", 'description':"#", 'price':"$220.00"},
    {'name':"Jarabe Eucalín Infantil Mezla de plantas y propóleo (240 ml)", 'img':"/public/img/jarabeniño.webp", 'description':"Auxiliar en el tratamiento de Tos y Flemas", 'price':"$80.00"}
  ];

navPage.forEach((item) => {
    item.addEventListener("click",function(){
        navPage.forEach((item) => {item.classList.remove("actived")});
        this.classList.add('actived');
    });
});

controlPage.forEach((item) => {
  item.addEventListener("click",function(){
      let activo = document.querySelector(".nums-li .actived");
      let pagActiva = parseInt(activo.textContent) - 1;
      let boton = item.textContent;
      activo.classList.remove("actived");
      if(boton == "Siguiente"){
        try{
          navPage.item(pagActiva+1).classList.add('actived');
        }
        catch(e){
          navPage.item(0).classList.add('actived');
        }
      }
      else{
        try{
          navPage.item(pagActiva-1).classList.add('actived');
        }
        catch(e){
          navPage.item(navPage.length-1).classList.add('actived');
        }
      }
  });
});

function addItem(item, container){
  item.forEach(element => {
      container.insertAdjacentHTML("beforeend",
          `<div class="col">
            <div class="card">
            <div class="card-img">
            <img src="${element.img}" class="mx-auto d-block" alt="Producto">
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

const arrayProductosPrincipales = JSON.parse(localStorage.getItem('productosPrincipales')); // pasar un texto a un json
// se lee de localstorage la variable productosprincipales y se convierte en formato JSON

addItem(productosVarios.slice(0,3), carrusel1);
addItem(productosVarios.slice(3,6), carrusel2);
addItem(productosVarios.slice(6,9), carrusel3);
addItem(arrayProductosPrincipales, mainContainer); // se va a cargar el arreglo de productos principales para construis cards 