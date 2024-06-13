let footer = document.getElementsByTagName("footer");

let footerHTML = `<div class="contenedor-footer">
                <div class="container-fluid">
                    <div class="row footer-primera-fila">
                        <div class="col-12 col-md-6  footer-izquierda text-center text-md-start">
                            <!-- <i class="bi bi-facebook"></i> -->
                            <img class="logo-footer" src="../public/img/VITALIA LOGO.png" alt="Vitalia" width="200">
                            <div class="contenedor-iconos mt-3">
                               <a id="facebook" href="https://www.facebook.com" class="bi bi-facebook" target="_blank"></a> <!--Se modifican links-->
                                <a id="instagram" href="https://www.instagram.com" class="bi bi-instagram" target="_blank"></a>
                                <a id="linkedin" href="https://www.linkedin.com" class="bi bi-linkedin" target="_blank"></a>
                                <a id= "youtube" href="https://www.youtube.com" class="bi bi-youtube" target="_blank"></a>
                            </div>
                            <p>Contacto <br> vitalia.soporte@gmail.com</p>
                        </div>
                        <div class="col-12 col-md-6 mt-4 mt-md-0 text-center">
                            <p class="hablemos">Hablemos!</p>
                            <p class="parrafo-hablemos">Si tienes alguna pregunta específica sobre nosotros, nuestros
                                productos o nuestras ubicaciones, no dudes
                                en ponerte en contacto a través de nuestras redes sociales. También puedes
                                hacer clic en el siguiente <a href="../html/contactanos.html" style="color: #FF6B6B;">enlace</a> para enviarnos un correo electrónico. <br> Estamos aquí para ayudarte y esperamos con
                                interés escucharte pronto.</p>
                        </div>
                    </div>

                    <div class="row footer-segunda-fila mt-4">
                        <hr>
                        <div
                            class="col-12 col-md-7 nav-footer d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center">
                            <a href="../index.html">Inicio</a>
                            <a href="../html/productos.html">Productos</a>
                            <a href="../html/carrito.html">Carrito</a>
                            <a href="../html/nosotros.html">Nosotros</a>
                            <a href="../html/contactanos.html">Contactanos</a>
                        </div>
                        <div class="col-12 col-md-5 text-center text-md-end mt-4 mt-md-0">
                            <p>Únete a nuestra comunidad en redes sociales! Vitalia, siempre presente.</p>
                        </div>
                    </div>
                </div>
            </div>`

footer.item(0).insertAdjacentHTML("beforeend", footerHTML);