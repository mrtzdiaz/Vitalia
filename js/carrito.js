function addItem(item, container) {
    console.log('hola')
    item.forEach((element) => {
        container.insertAdjacentHTML("beforeend",
            `
            <div class="col-4">
                <img src="${element.img}" class="mx-auto d-block" alt="Producto" width ="100px">   
            </div>
            <div class="col-8">
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
            <button type="button" class="btn btn-danger mx-auto d-block" onclick="eliminarCarrito(${element.id})"><i class="bi bi-trash-fill"></i></button>
          </div>
            </div>
            `)

    });
}


let productosCarrito = []

 if (localStorage.getItem('productosCarrito') != null) {
    productosCarrito = JSON.parse(localStorage.getItem('productosCarrito'));
 }
let mainContainer = document.getElementById("productosCarrito");
addItem(productosCarrito, mainContainer);


function eliminarPrimerElementoConId(array, id) {
  const indexToRemove = array.findIndex(item => item.id === id);
  if (indexToRemove !== -1) {
      // Crear una nueva copia del array excluyendo el primer elemento que coincide
      return [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)];
  }
  return array; // Si no se encuentra ningún elemento, devolver el array original
}


function eliminarCarrito(index) {

    const productosCarrito = JSON.parse(localStorage.getItem('productosCarrito'));

    const nuevosProductosCarrito = eliminarPrimerElementoConId(productosCarrito, index)

    localStorage.setItem('productosCarrito', JSON.stringify(nuevosProductosCarrito))

    location.reload();
}