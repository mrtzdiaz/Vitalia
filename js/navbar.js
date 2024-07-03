let header = document.getElementsByTagName('header');

let usuario = JSON.parse(localStorage.getItem("usuario"));

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
            <a href="../html/carrito.html" class="d-flex align-items-center ms-lg-3" style="color: #fff;">
            <i class="bi bi-bag-heart" style="color:#ccdbdc; font-size:35px;"></i>
        </a>

        <div class="d-flex align-items-center ms-lg-3">
        <div class="dropdown">
            <button class="btn dropdown-toggle" style="color: #fff; padding: 0; border: none; background: none;" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle" style="color:#ccdbdc; font-size:35px;"></i>
                <span class="text-white ms-2 me-3">
                    ${usuario && usuario.login ? usuario.name.toUpperCase() : "Usuario"}
                </span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                ${usuario && usuario.login ?
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


