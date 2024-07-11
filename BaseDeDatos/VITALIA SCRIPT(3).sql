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
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Dentro de los beneficios del colágeno hidrolizado se encuentra la función como agente reparador del tejido colectivo del cuerpo, es por ello que este fármaco ha sido utilizado como tratamiento de algunas enfermedades relacionadas, como en osteoartritis y osteoporosis, ambas estrechamente ligadas a los huesos.', 360.00, '/public/img/colageno.webp', 'Colágeno Hidrolizado (120 Tab.)', 3);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Esencia natural extraída de flores silvestres, una alternativa natural para mejorar la calidad de vida.', 80.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1720671065/productos/y5xc7w1kpywlfvio85g1.webp', 'Esencia Floral Echinacea (25 ml)', 4);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Auxiliar en problemas de varices, ulceras varicosas, trombosis y hemorroides.', 198.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1720671114/productos/cl5eppkk8jsdrseci4zn.webp', 'Castaño De Indias (60 Cap.)', 3);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Para el alivio de los sintomas del resfriado comun y tos.', 214.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1720671145/productos/vac48mq6ip2w9rqckeei.webp', 'Jarabe Broncolin Etiqueta Azul Mezcla de Plantas (250 ml)', 3);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Eucaliptine funciona como un auxiliar en el tratamiento de la tos seca y tos con flemas, así como en el alivio de la garganta irritada.', 410.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1720671176/productos/vuea6st2iqycvtazgs7i.jpg', 'Eucalipto jarabe (140 ml)', 3);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Proteína vegetal en polvo sabor chocolate a base de chícharo y arroz, adicionado con enzimas y probióticos que ayudan a una buena salud digestiva.', 300.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1720671240/productos/klurpc0kdzbkinhh4uws.jpg', 'Proteina vegetal (450 gr)', 2);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Un té real para amantes de lo natural. Infusionado con hojas de té real, sin azúcares añadidos ni saborizantes y 100% natural.', 80.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1720671268/productos/g3rlybdd54xbctlso734.png', 'Chia mia té negro (350 ml)', 1);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('El té verde es una variedad de té verde japonés que aportan interesantes beneficios y propiedades medicinales, es un antioxidante, mejora la digestión, es antidepresivo y energizante.', 220.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1720671295/productos/zqloiy4vcaaduftmclfa.jpg', 'Té Verde en polvo (300 gr)', 1);
INSERT INTO Vitalia.Productos (descripcion, precio, imagen, nombre, Categoria_id) VALUES ('Auxiliar en el tratamiento de Tos y Flemas.', 80.00, 'https://res.cloudinary.com/duzdr4eb6/image/upload/v1720671323/productos/pftvvvsiawdtrm6fvqwj.webp', 'Jarabe Eucalín Infantil Mezla de plantas y propóleo (240 ml)', 3);


-- USUARIO
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Jesús', 'Hernández Salinas', 'jesus@gmail.com', '7228581747', 'Puerta123456$');
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Daniel', 'Martínez Díaz', 'mrtzdiazdaniel@gmail.com', '3320861076', 'Dani2001$');
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Diego', 'Hernández Rodríguez', 'diegohrnz12@gmail.com', '3131479859', 'Pa$$word');
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Veronica', 'Bedolla Carrillo', 'vero@gmail.com' ,'2221114943', 'Aa12356@');
INSERT INTO Vitalia.usuarios (nombre, apellido, correo, telefono, contrasena) VALUES ('Sofia', 'Rojas', 'sofiacarolinarojasflores@gmail.com', '5529726050', 'Sofiar123$');

-- PEDIDO
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fecha_entrega, forma_de_pago, Usuario_id) VALUES ( 'Pendiente', now() , '2024-06-29' , 'Tarjeta de crédito', 3);
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fecha_entrega, forma_de_pago, Usuario_id) VALUES ( 'Entregado', '2024-06-20', '2024-06-27', 'Tarjeta de crédito', 2);
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fecha_entrega, forma_de_pago, Usuario_id) VALUES ( 'Pendiente', now(), '2024-07-22', 'Débito', 1);
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fecha_entrega, forma_de_pago, Usuario_id) VALUES ( 'Entregado', '2024-06-27', '2024-06-27', 'Tarjeta de crédito', 4);
INSERT INTO Vitalia.Pedidos (status, fecha_pedido, fecha_entrega, forma_de_pago, Usuario_id) VALUES ('Cancelado', '2024-06-15', '2024-07-15', 'Tarjeta de crédito', 3);

-- DETALLE DE PEDIDO
INSERT INTO Vitalia.DetallesPedido (total, cantidad_ordenada, precio, id_producto, id_pedido) VALUES (350.00, 1, 350.00, 1, 3);
INSERT INTO Vitalia.DetallesPedido (total, cantidad_ordenada, precio, id_producto, id_pedido) VALUES (1640.00, 4, 410.00, 3, 3);
INSERT INTO Vitalia.DetallesPedido (total, cantidad_ordenada, precio, id_producto, id_pedido) VALUES (500.00, 3, 410.00, 3, 4);
INSERT INTO Vitalia.DetallesPedido (total, cantidad_ordenada, precio, id_producto, id_pedido) VALUES (720.00, 2, 360.00, 2, 1);
INSERT INTO Vitalia.DetallesPedido (total, cantidad_ordenada, precio, id_producto, id_pedido) VALUES (2520.00, 7, 360.0, 2,4);