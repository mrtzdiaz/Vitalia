let header = document.getElementsByTagName('header');

let usuario = JSON.parse(localStorage.getItem("usuario"));

let navbar = `<nav class="navbar navbar-expand-lg navbar-dark position-relative" style="background-color: #143027;">
<div class="container-fluid">
    <a class="navbar-brand mx-3" href="../index.html">
        <img src="../public/img/VITALIA LOGO.png" alt="VITALIA" width="200">
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="col-6 col-md-8">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
    <a class="nav-link" style="color: white;" href="../index.html">Inicio</a>
    </li>
                <li class="nav-item">
                <a class="nav-link" style="color: white;" href="../html/productos.html">Productos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" style="color: white;" href="../html/carrito.html">Carrito</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " style="color: white;" href="../html/nosotros.html">Nosotros</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " style="color: white;" href="../html/contactanos.html">Contáctanos</a>
                </li>
                </ul>
                </div>
                </div>
    </div>

    <div class="d-flex align-items-center position-absolute top-0 end-0" style="margin: 0px 14px">
        <div class="dropdown d-flex align-items-center" style="margin: 0px 25px 0px 0px;">
        <i class="bi bi-person-circle" style="color:#ccdbdc; font-size:35px;"></i>
        <p class="accordion" style="color: #fff; margin:0px;">${usuario != null && usuario.login == true ? usuario.name.toUpperCase() : "Usuario"}</p>
        <button class="btn dropdown-toggle" style="color: #fff; margin:0px; padding: 0px; border:none;" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        </button>
        <ul class="dropdown-menu">
        ${usuario != null && usuario.login == true? `<a class="dropdown-item" onclick="cerrarSesion()" style="cursor:pointer;">Cerrar Sesión</a>` : 
        `<li><a class="dropdown-item" href="../html/iniciar_sesion.html">Iniciar Sesión</a></li>
        <li><a class="dropdown-item" href="../html/registro.html">Registro</a></li>`}
        </ul>
        </div>


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        </div>
    </div>
</nav>`;

header.item(0).insertAdjacentHTML('beforeend', navbar);

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
        usuario.login = false;
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href= "http://127.0.0.1:3003/index.html";
}


