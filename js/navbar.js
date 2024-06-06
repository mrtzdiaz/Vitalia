let header = document.getElementsByTagName('header');



let navbar = `<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #143027;">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="/img/VITALIALOGO.svg" alt="VITALIA" width="200">
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
                    <a class="nav-link" style="color: white;" href="../productos/productos.html">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style="color: white;" href="../carrito/carrito.html">Carrito</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " style="color: white;" href="../nosotros/nosotros.html">Nosotros</a>
                </li>
            </ul>
        </div>
        <form class="d-none d-lg-flex ms-lg-5 mt-3 mt-lg-0">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Busqueda..."
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                    style="color:white; border-color: #FF6B6B; background-color: #FF6B6B;">Buscar</button>
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
         console.log(item);
         console.log("Hello");
     }
     console.log(url);
     console.log(item.getAttribute('href'));
 });


