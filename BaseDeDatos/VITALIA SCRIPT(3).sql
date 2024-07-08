-- CATEGORIA
INSERT INTO Vitalia.Categorias ( tipodeproducto, nombre) VALUES ( 'Shampoo' , 'Cuidado personal');
INSERT INTO Vitalia.Categorias ( tipodeproducto, nombre) VALUES ( 'Bebida', 'Suplementos alimenticios');
INSERT INTO Vitalia.Categorias ( tipodeproducto, nombre) VALUES ( 'Jarabe', 'Medicamento Homeópata');
INSERT INTO Vitalia.Categorias ( tipodeproducto, nombre) VALUES ( 'Esencia', 'Esencia');
INSERT INTO Vitalia.Categorias ( tipodeproducto, nombre) VALUES ( 'Otros', 'Otros');

-- PRODUCTOS
INSERT INTO Vitalia.Productos ( descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Proteína aislada de soya, suero de leche deslactosada, dextrosa, lecitina de soya, Vitamina A (retinol), Vitamina D (calciferol), Vitamina C (ácido ascórbico), y sabor capuchino descafeinado.', 350.00 , 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719516891/productos/qcrgdzzhwte7pwy1ncf3.webp', 'Bebida de soya en polvo (500 gr)', 2);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Este fármaco ha sido utilizado como tratamiento de algunas enfermedades relacionadas, como en osteoartritis y osteoporosis, ambas estrechamente ligadas a los huesos', 360, 
'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719516937/productos/cbhb8bkwzv0saobzchul.webp', 'Colágeno Hidrolizado (120 Tab.)', 3);
INSERT INTO Vitalia.Productos ( descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Shampoo natural Anticaída combate la caída y estimula el crecimiento de tu cabello con ingredientes naturales como la Sábila, espinosillo, ortiguilla, romero, coparche y cáscara de nogal; promoviendo un cabello sano y fuerte. ', 410.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719517036/productos/rvy4fjtnhlttjgl54k89.webp', 'Shampoo Anticaída Romero y Sábila Árbol Verde (500 ml)', 1);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Auxiliar en el tratamiento de Tos, Flemas, Resfriado Común o Tos de Fumador', 100.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719517072/productos/te38c3ybfpkmuq7ec1qv.webp', 'Eucalipto jarabe (140 ml)', 3);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Esencia natural extraída de la Flor de acebo, el castaño dulce y la genciana. Es una alternativa natural para acompañar tus estados de ánimo. Es seguro tanto para niños mayores de 7 años como para adultos.', 180.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1719516997/productos/a1p1vn8im71ksrjxmncb.webp', 'Esencia Floral Calma (25 ml)', 4);

-- USUARIO
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Jesús', 'Hernández Salinas', 'jesus@gmail.com', '7228581747', 'Puerta123456$');
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Daniel', 'Martínez Díaz', 'mrtzdiazdaniel@gmail.com', '3320861076', 'Dani2001$');
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Diego', 'Hernández Rodríguez', 'diegohrnz12@gmail.com', '3131479859', 'Pa$$word');
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Veronica', 'Bedolla Carrillo', 'vero@gmail.com' ,'2221114943', 'Aa12356@');
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Sofia', 'Rojas', 'sofiacarolinarojasflores@gmail.com', '5529726050', 'Sofiar123$');

-- PEDIDO
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fechaentrega, forma_de_pago, Usuario_id) VALUES ( 'Pendiente', now() , '2024-06-29' , 'Tarjeta de crédito', 3);
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fechaentrega, forma_de_pago, Usuario_id) VALUES ( 'Entregado', '2024-06-20', '2024-06-27', 'Tarjeta de crédito', 2);
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fechaentrega, forma_de_pago, Usuario_id) VALUES ( 'Pendiente', now(), '2024-07-22', 'Débito', 1);
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fechaentrega, forma_de_pago, Usuario_id) VALUES ( 'Entregado', '2024-06-27', '2024-06-27', 'Tarjeta de crédito', 4);
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fechaentrega, forma_de_pago, Usuario_id) VALUES ('Cancelado', '2024-06-15', '2024-07-15', 'Tarjeta de crédito', 3);

-- DETALLE DE PEDIDO
INSERT INTO Vitalia.DetallesPedido (total, cantidadOrdenada, precio, id_producto, id_pedido) VALUES (350.00, 1, 350.00, 1, 3);
INSERT INTO Vitalia.DetallesPedido (total, cantidadOrdenada, precio, id_producto, id_pedido) VALUES (1640.00, 4, 410.00, 3, 3);
INSERT INTO Vitalia.DetallesPedido (total, cantidadOrdenada, precio, id_producto, id_pedido) VALUES (500.00, 3, 410.00, 3, 4);
INSERT INTO Vitalia.DetallesPedido (total, cantidadOrdenada, precio, id_producto, id_pedido) VALUES (720.00, 2, 360.00, 2, 1);
INSERT INTO Vitalia.DetallesPedido (total, cantidadOrdenada, precio, id_producto, id_pedido) VALUES (2520.00, 7, 360.0, 2,7);