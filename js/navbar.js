let header = document.getElementsByTagName('header');

let usuario = JSON.parse(localStorage.getItem("usuario"));

let navbar = `<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #143027;">
<div class="container-fluid">
    <a class="navbar-brand mx-3" href="../index.html">
        <img src="../public/img/VITALIA LOGO.png" alt="VITALIA" width="200">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="col-6 col-md-8">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" style="color: white;" href="../index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " style="color: white;" href="../html/registro.html">Registro</a>
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
        <form class="d-none d-lg-flex ms-lg-5 mt-3 mt-lg-0">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Búsqueda..."
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                    style="color:white; border-color: #FF6B6B; background-color: #FF6B6B;">Buscar</button>
                <h3 class="mx-2" style="color: white;"> ${usuario != null ? 'Hola '+ usuario.name.toUpperCase() : ""} </h3>
        </form>
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
 navbarItems.forEach(function(item) {
     // Verificar si la URL de la página actual coincide con el enlace
     if (url.includes(item.getAttribute('href').replace("..",""))) {
         // Aplicar la clase 'active' al enlace
         item.classList.add('active');
     }
 });


