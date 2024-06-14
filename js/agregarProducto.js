let nombre = document.getElementById("from_name");
let precio = document.getElementById("from_price");
let descripcion = document.getElementById("description");
let btnAgregar = document.getElementById("btn");
let carrusel1 = document.getElementById("prueba");

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


btnAgregar.addEventListener("click", function(event){
    let nuevosProductos = [];
    event.preventDefault();
    nuevosProductos.push({'name':`${nombre.value}`, 'img':"Fibravegetal.jpeg", 'description':`${descripcion.value}`, 'price':`${precio.value}`})
    
    addItem(nuevosProductos, carrusel1)
    console.log(nuevosProductos);
})