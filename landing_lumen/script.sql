-- =============================================
-- DATOS: TIENDA FUTBOL
-- =============================================

-- ligas (id_liga, nombre, pais)
INSERT INTO ligas (id_liga, nombre, pais) VALUES
(1, 'LaLiga Santander', 'España'),
(2, 'Premier League', 'Inglaterra'),
(3, 'Serie A', 'Italia');

-- materiales (id_material, nombre, descripcion)
INSERT INTO materiales (id_material, nombre, descripcion) VALUES
(1, 'Poliéster', 'Tela sintética común en uniformes deportivos.'),
(2, 'Algodón', 'Material natural para ropa casual o de entrenamiento.');

-- categorias (id_categoria, nombre, descripcion)
INSERT INTO categorias (id_categoria, nombre, descripcion) VALUES
(1, 'Uniformes', 'Camisetas, pantalones, medias de juego.'),
(2, 'Calzado', 'Botas de fútbol, zapatillas deportivas.'),
(3, 'Accesorios', 'Balones, guantes, espinilleras.');

-- categorias_especificas (id_categoria_especifica, nombre, descripcion, id_categoria)
INSERT INTO categorias_especificas (id_categoria_especifica, nombre, descripcion, id_categoria) VALUES
(101, 'Camiseta de Juego', 'Camisetas oficiales de partidos', 1),
(102, 'Pantalón Corto', 'Pantalones de uniformes', 1),
(201, 'Botas Césped Natural', 'Calzado para hierba natural', 2);

-- roles_empleados (id_rol, nombre, descripcion)
INSERT INTO roles_empleados (id_rol, nombre, descripcion) VALUES
(1, 'Administrador', 'Control total del sistema.'),
(2, 'Vendedor', 'Manejo de ventas y clientes.');

-- estados_envio (id_estado_envio, nombre, descripcion)
INSERT INTO estados_envio (id_estado_envio, nombre, descripcion) VALUES
(1, 'Pendiente de Pago', 'Esperando confirmación de pago.'),
(2, 'En Almacén', 'Pago confirmado, preparando pedido.'),
(3, 'Enviado', 'Pedido recogido por el transportista.');

-- metodos_pago (id_metodo_pago, nombre, descripcion)
INSERT INTO metodos_pago (id_metodo_pago, nombre, descripcion) VALUES
(1, 'Tarjeta de Crédito', 'Pago con tarjeta (Visa/Mastercard).'),
(2, 'PayPal', 'Pago a través de plataforma PayPal.');

-- temporadas (id_temporada, anio_inicio, anio_fin)
INSERT INTO temporadas (id_temporada, anio_inicio, anio_fin) VALUES
(1, 2024, 2025),
(2, 2023, 2024);

-- sponsors (id_sponsor, nombre, pais)
INSERT INTO sponsors (id_sponsor, nombre, pais) VALUES
(1, 'Nike', 'EE. UU.'),
(2, 'Adidas', 'Alemania');

-- depositos (id_deposito, nombre, direccion)
INSERT INTO depositos (id_deposito, nombre, direccion) VALUES
(1, 'Depósito Central', 'Av. Principal 123');

-- equipos (id_equipo, nombre, ciudad, id_liga)
INSERT INTO equipos (id_equipo, nombre, ciudad, id_liga) VALUES
(10, 'Real Madrid', 'Madrid', 1),
(20, 'Manchester City', 'Manchester', 2);

-- productos (id_producto, nombre, descripcion, precio, id_categoria, id_categoria_especifica, id_material)
INSERT INTO productos (id_producto, nombre, descripcion, precio, id_categoria, id_categoria_especifica, id_material) VALUES
(1001, 'Camiseta Real Madrid 24/25', 'Primera equipación temporada 24/25 Real Madrid', 109.99, 1, 101, 1),
(1002, 'Botas Predator', 'Botas de alta gama para césped natural', 250.00, 2, 201, 2);

-- proveedores (id_proveedor, nombre, email, direccion)
INSERT INTO proveedores (id_proveedor, nombre, email, direccion) VALUES
(1, 'Deportes S.A.', 'contacto@deportes.com', 'Calle de las Telas 456');

-- empleados (id_empleado, nombre, apellido, email, fecha_ingreso, id_rol)
INSERT INTO empleados (id_empleado, nombre, apellido, email, fecha_ingreso, id_rol) VALUES
(1, 'Fabio', 'Ambrogio', 'fambrogio@gmail.com', '2023-01-15', 1);
(2, 'Valentin', 'Ambrogio', 'vambrogio@gmail.com', '2023-01-16', 1);


-- clientes (id_cliente, nombre, apellido, email, telefono, fecha_registro)
INSERT INTO clientes (id_cliente, nombre, apellido, email, telefono, fecha_registro) VALUES
(1, 'María', 'Gómez', 'maria.gomez@mail.com', '555123456', '2024-05-01');
(2, 'Carlos', 'Perez', 'carlos.perez@mail.com', '555456456', '2024-05-02');
(3, 'Juan', 'Gonzalez', 'juan.gonzalez@mail.com', '555789456', '2024-05-03');


-- direcciones_envio (id_direccion, id_cliente, calle, ciudad, codigo_postal, pais)
INSERT INTO direcciones_envio (id_direccion, id_cliente, calle, ciudad, codigo_postal, pais) VALUES
(1, 1, 'Av. Libertador 789', 'Buenos Aires', '1000', 'Argentina');

-- producto_variantes (id_variante, id_producto, talla, codigo_sku)
INSERT INTO producto_variantes (id_variante, id_producto, talla, codigo_sku) VALUES
(1, 1001, 'M', 'RM24-M-001'),
(2, 1001, 'L', 'RM24-L-002'),
(3, 1002, '42', 'BP-42-001');

-- imagenes_producto (id_imagen, id_producto, url_imagen)
INSERT INTO imagenes_producto (id_imagen, id_producto, url_imagen) VALUES
(1, 1001, 'http://imagenes.com/rm24-frente.jpg'),
(2, 1001, 'http://imagenes.com/rm24-espalda.jpg');

-- movimientos_inventario (id_movimiento, id_deposito, tipo_movimiento, cantidad, id_variante, fecha_movimiento, motivo)
-- Solo un ejemplo. Este se insertará después de inventario si fuese un egreso. Para un ingreso inicial:
INSERT INTO movimientos_inventario (id_movimiento, id_deposito, tipo_movimiento, cantidad, id_variante, fecha_movimiento, motivo) VALUES
(1, 1, 'INGRESO', 50, 1, '2024-11-04 10:00:00', 'Stock inicial');

-- inventario (id_inventario, id_variante, stock_actual, stock_minimo)
-- Se asume un stock inicial ingresado por el movimiento anterior.
INSERT INTO inventario (id_inventario, id_variante, stock_actual, stock_minimo) VALUES
(1, 1, 50, 10),
(2, 2, 30, 10),
(3, 1002, 20, 5); -- Ejemplo para la variante 1002 (Botas talla 42)

-- compras_stock (id_compra, id_proveedor, id_empleado, total, fecha_compra)
INSERT INTO compras_stock (id_compra, id_proveedor, id_empleado, total, fecha_compra) VALUES
(1, 1, 1, 5000.00, '2024-11-01');

-- facturas (id_factura, id_venta, id_pago, id_cliente, fecha_emision, total)
-- Se insertarán al final, ya que dependen de las ventas y pagos.

-- ventas (id_venta, id_cliente, id_direccion, total)
INSERT INTO ventas (id_venta, id_cliente, id_direccion, total) VALUES
(1, 1, 1, 109.99);

-- detalles_ventas (id_detalle, id_venta, id_variante, cantidad, precio_unitario, subtotal)
INSERT INTO detalles_ventas (id_detalle, id_venta, id_variante, cantidad, precio_unitario, subtotal) VALUES
(1, 1, 1, 1, 109.99, 109.99);

-- pagos (id_pago, id_venta, id_metodo_pago, fecha_pago)
INSERT INTO pagos (id_pago, id_venta, id_metodo_pago, fecha_pago) VALUES
(1, 1, 1, '2024-11-05 15:30:00');

-- facturas (id_factura, id_venta, id_pago, id_cliente, fecha_emision, total)
INSERT INTO facturas (id_factura, id_venta, id_pago, id_cliente, fecha_emision, total) VALUES
(1, 1, 1, 1, '2024-11-05 15:35:00', 109.99);