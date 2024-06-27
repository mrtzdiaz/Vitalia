-- CATEGORIA
INSERT INTO `Vitalia`.`Categoria` ( `tipodeproducto`, `nombre`) VALUES ( 'Shampoo' , 'Cuidado personal');
INSERT INTO `Vitalia`.`Categoria` ( `tipodeproducto`, `nombre`) VALUES ( 'Bebida', 'Suplementos alimenticios');
INSERT INTO `Vitalia`.`Categoria` ( `tipodeproducto`, `nombre`) VALUES ( 'Jarabe', 'Medicamento Homeópata');
INSERT INTO `Vitalia`.`Categoria` ( `tipodeproducto`, `nombre`) VALUES ( 'Esencia', 'Esencia');
INSERT INTO `Vitalia`.`Categoria` ( `tipodeproducto`, `nombre`) VALUES ( 'Otros', 'Otros');

-- PRODUCTOS
INSERT INTO `Vitalia`.`Productos` ( `descripcion`, `precio`, `imagen`, `nombre`, `Categoria_idCategoria`) VALUES ('Proteína aislada de soya, suero de leche deslactosada, dextrosa, lecitina de soya, Vitamina A (retinol), Vitamina D (calciferol), Vitamina C (ácido ascórbico), y sabor capuchino descafeinado.', 350.00 , 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719516891/productos/qcrgdzzhwte7pwy1ncf3.webp', 'Bebida de soya en polvo (500 gr)', 2);
INSERT INTO `Vitalia`.`Productos` (`descripcion`, `precio`, `imagen`, `nombre`, `Categoria_idCategoria`) VALUES ('Dentro de los beneficios del colágeno hidrolizado se encuentra la función como agente reparador del tejido colectivo del cuerpo, es por ello que este fármaco ha sido utilizado como tratamiento de algunas enfermedades relacionadas, como en osteoartritis y osteoporosis, ambas estrechamente ligadas a los huesos', 360, 
'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719516937/productos/cbhb8bkwzv0saobzchul.webp', 'Colágeno Hidrolizado (120 Tab.)', 3);
INSERT INTO `Vitalia`.`Productos` ( `descripcion`, `precio`, `imagen`, `nombre`, `Categoria_idCategoria`) VALUES ('Shampoo natural Anticaída combate la caída y estimula el crecimiento de tu cabello con ingredientes naturales como la Sábila, espinosillo, ortiguilla, romero, coparche y cáscara de nogal; promoviendo un cabello sano y fuerte. ', 410.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719517036/productos/rvy4fjtnhlttjgl54k89.webp', 'Shampoo Anticaída Romero y Sábila Árbol Verde (500 ml)', 1);
INSERT INTO `Vitalia`.`Productos` (`descripcion`, `precio`, `imagen`, `nombre`, `Categoria_idCategoria`) VALUES ('Auxiliar en el tratamiento de Tos, Flemas, Resfriado Común o Tos de Fumador', 100.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719517072/productos/te38c3ybfpkmuq7ec1qv.webp', 'Eucalipto jarabe (140 ml)', 3);
INSERT INTO `Vitalia`.`Productos` (`descripcion`, `precio`, `imagen`, `nombre`, `Categoria_idCategoria`) VALUES ('Esencia natural extraída de la Flor de acebo, el castaño dulce y la genciana. Es una alternativa natural para acompañar tus estados de ánimo. Es seguro tanto para niños mayores de 7 años como para adultos.', 180.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719516997/productos/a1p1vn8im71ksrjxmncb.webp', 'Esencia Floral Calma (25 ml)', 4);

-- USUARIO
INSERT INTO `Vitalia`.`Usuario` (`nombre`, `correo`, `telefono`, `contraseña`, `administrador`) VALUES ('Jesús Hernández Salinas', 'jesus@gmail.com', '7228581747', 'Puerta123456$', 1);
INSERT INTO `Vitalia`.`Usuario` (`nombre`, `correo`, `telefono`, `contraseña`, `administrador`) VALUES ('Daniel Martínez Díaz', 'mrtzdiazdaniel@gmail.com', '3320861076', 'Dani2001$', 1);
INSERT INTO `Vitalia`.`Usuario` (`nombre`, `correo`, `telefono`, `contraseña`, `administrador`) VALUES ('Diego Hernández Rodríguez', 'diegohrnz12@gmail.com', '3131479859', 'Pa$$word', 1);
INSERT INTO `Vitalia`.`Usuario` (`nombre`, `correo`, `telefono`, `contraseña`, `administrador`) VALUES ('Veronica Bedolla Carrillo', 'vero@gmail.com' ,'2221114943', 'Aa12356@', 1);
INSERT INTO `Vitalia`.`Usuario` (`nombre`, `correo`, `telefono`, `contraseña`, `administrador`) VALUES ('Sofia Rojas', 'sofiacarolinarojasflores@gmail.com', '5529726050', 'Sofiar123$', 1);

-- PEDIDO
INSERT INTO `Vitalia`.`Pedido` (`status`, `fechapedido`, `fechaentrega`, `formadepago`, `Usuario_idUsuario`) VALUES ( 'Pendiente', now() , '2024-06-29' , 'Tarjeta de crédito', 3);
INSERT INTO `Vitalia`.`Pedido` (`status`, `fechapedido`, `fechaentrega`, `formadepago`, `Usuario_idUsuario`) VALUES ( 'Entregado', '2024-06-20', '2024-06-27', 'Tarjeta de crédito', 2);
INSERT INTO `Vitalia`.`Pedido` (`status`, `fechapedido`, `fechaentrega`, `formadepago`, `Usuario_idUsuario`) VALUES ( 'Pendiente', now(), '2024-07-22', 'Débito', 1);
INSERT INTO `Vitalia`.`Pedido` (`status`, `fechapedido`, `fechaentrega`, `formadepago`, `Usuario_idUsuario`) VALUES ( 'Entregado', '2024-06-27', '2024-06-27', 'Tarjeta de crédito', 4);
INSERT INTO `Vitalia`.`Pedido` (`status`, `fechapedido`, `fechaentrega`, `formadepago`, `Usuario_idUsuario`) VALUES ('Cancelado', '2024-06-15', '2024-07-15', 'Tarjeta de crédito', 3);

-- DETALLE DE PEDIDO
INSERT INTO `Vitalia`.`DetallePedido` (`total`, `cantidadOrdenada`, `precio`, `Productos_idProductos`, `Pedido_idPedido`) VALUES (350.00, 1, 350.00, 1, 3);
INSERT INTO `Vitalia`.`DetallePedido` (`total`, `cantidadOrdenada`, `precio`, `Productos_idProductos`, `Pedido_idPedido`) VALUES (1640.00, 4, 410.00, 3, 3);
INSERT INTO `Vitalia`.`DetallePedido` (`total`, `cantidadOrdenada`, `precio`, `Productos_idProductos`, `Pedido_idPedido`) VALUES (500.00, 3, 410.00, 3, 4);
INSERT INTO `Vitalia`.`DetallePedido` (`total`, `cantidadOrdenada`, `precio`, `Productos_idProductos`, `Pedido_idPedido`) VALUES (720.00, 2, 360.00, 2, 1);
INSERT INTO `Vitalia`.`DetallePedido` (`total`, `cantidadOrdenada`, `precio`, `Productos_idProductos`, `Pedido_idPedido`) VALUES (2520.00, 7, 360.0, 2,7);