let footer = document.getElementsByTagName("footer");

let footerHTML = `<div class="contenedor-footer mt-5">
                <div class="container-fluid">
                    <div class="row footer-primera-fila">
                        <div class="col-12 col-md-6  footer-izquierda text-center text-md-start">
                            <!-- <i class="bi bi-facebook"></i> -->
                            <img class="logo-footer" src="../public/img/VITALIALOGO.svg" alt="Vitalia" width="200">
                            <div class="contenedor-iconos mt-3">
                                <a id="facebook" href=""><i class="bi bi-facebook"></i></a>
                                <a id="instagram" href=""><i class="bi bi-instagram"></i></a>
                                <a id="linkedin" href=""><i class="bi bi-linkedin"></i></a>
                                <a href=""><i class="bi bi-youtube"></i></a>
                            </div>
                            <p>Contacto <br> vitalia.soporte@gmail.com</p>
                        </div>
                        <div class="col-12 col-md-6 mt-4 mt-md-0 text-center">
                            <p class="hablemos">Hablemos!</p>
                            <p class="parrafo-hablemos">Si tienes alguna pregunta específica sobre nosotros, nuestros
                                productos o nuestras ubicaciones, no dudes
                                en ponerte en contacto con nosotros a través de nuestras redes sociales. También puedes
                                hacer clic en el siguiente <a href="../contactanos/contactanos.html" style="color: #FF6B6B;">enlace</a> para enviarnos un correo electrónico. <br> Estamos aquí para ayudarte y esperamos con
                                interés escucharte pronto.</p>
                        </div>
                    </div>

                    <div class="row footer-segunda-fila mt-4">
                        <hr>
                        <div
                            class="col-12 col-md-7 nav-footer d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center">
                            <a href="../index.html">Inicio</a>
                            <a href="../productos/productos.html">Productos</a>
                            <a href="../carrito/carrito.html">Carrito</a>
                            <a href="../nosotros/nosotros.html">Nosotros</a>
                            <a href="../contactanos/contactanos.html">Contactanos</a>
                        </div>
                        <div class="col-12 col-md-5 text-center text-md-end mt-4 mt-md-0">
                            <p>Únete a nuestra comunidad en redes sociales! Vitalia, siempre presente.</p>
                        </div>
                    </div>
                </div>
            </div>`

footer.item(0).insertAdjacentHTML("beforeend", footerHTML);