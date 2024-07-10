let header = document.getElementsByTagName('header');


let usuariolog = JSON.parse(sessionStorage.getItem("usuario"));
let usuario = null
let logeado = null
if(usuariolog != null){
    logeado = true;
}
     
let navbar = `<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #143027;">
    <div class="container-fluid">

        <a class="navbar-brand" href="../index.html">
            <img src="../public/img/VITALIA LOGO.png" alt="VITALIA" width="200">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <div class="collapse navbar-collapse justify-content-aling-end" id="navbarSupportedContent">    
        <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" style="color: white;" href="../index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style="color: white;" href="../html/productos.html">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style="color: white;" href="../html/nosotros.html">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style="color: white;" href="../html/contactanos.html">Contáctanos</a>
                </li>
            </ul>
            </div>  
            
        <div class="d-flex align-items-center ms-lg-3">
            <button class="btn d-flex align-items-center" style="color: #fff; padding: 0; border: none; background: none;" type="button">
                <a href="../html/carrito.html" class="d-flex align-items-center ms-lg-3" style="color: #fff; text-decoration: none;">
                    <div class="position-relative">
                        <div class="position-absolute" style="margin:20px 10px; display:none;" id="corazon">
                            <div class="position-absolute" style="margin:5px 16px; font-size:12px;" id="contador">
                            0
                            </div>
                            <i class="bi bi-heart-fill" style="color:#ff6b6b; font-size:20px;"></i>
                        </div>
                        <i class="bi bi-bag-heart" style="color:#ccdbdc; font-size:40px;"></i>
                    </div>
                    <span class="text-white ms-2 me-3">
                    Carrito
                    </span>
                </a>
            </button> 
        <div class="dropdown">
            <button class="btn dropdown-toggle d-flex align-items-center" style="color: #fff; padding: 0; border: none; background: none;" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle" style="color:#ccdbdc; font-size:40px;"></i>
                <span class="text-white ms-2 me-3">
                    ${logeado ? usuariolog.username.toUpperCase() : "Usuario"}
                </span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                ${logeado ?
                    `<li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>` :
                    `<li><a class="dropdown-item" href="../html/iniciar_sesion.html">Iniciar Sesión</a></li>
                    <li><a class="dropdown-item" href="../html/registro.html">Registro</a></li>`}
            </ul>
        </div>
    </div>
    

               
            </div>
        </div>
    </div>
</nav>`;

// Obtener la URL de la página actual
let url = window.location.href;

// Obtener los elementos <a> dentro del navbar
let navbarItems = document.querySelectorAll('.nav-item a');

// Iterar sobre los elementos <a>
navbarItems.forEach(function (item) {
    // Verificar si la URL de la página actual coincide con el enlace
    if (url.includes(item.getAttribute('href').replace("..", ""))) {
        // Aplicar la clase 'active' al enlace
        item.classList.add('active');
    }
});

function cerrarSesion(){
        sessionStorage.removeItem("usuario");
        window.location.href= "http://127.0.0.1:3003/index.html";
}

function insertNav() {
    header.item(0).insertAdjacentHTML('beforeend', navbar);
    let corazon = document.getElementById("corazon");
    let contador = document.getElementById("contador");
    if (localStorage.getItem('productosCarrito') != null) {
        productosCarrito = JSON.parse(localStorage.getItem('productosCarrito'));
        corazon.style.display = "block";
        if (productosCarrito.length <= 9) {
            if (productosCarrito.length == 1) {
                contador.style.margin = "5px 18px";
            } else {
                contador.style.margin = "5px 16px";
            }
            if (productosCarrito.length == 0) corazon.style.display = "none";
            contador.innerHTML = productosCarrito.length;
        } else {
            contador.innerHTML = "9+";
            contador.style.margin = "5px 13px";
            contador.style.fontSize = "11px";
        }
    }
}

insertNav();

