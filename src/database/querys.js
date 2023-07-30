export const queries = {
    //VENTAS
    getVentas: 'SELECT * FROM VENTAS',
    insertVenta: 'INSERT INTO VENTAS (CLIENTE, FECHA_EMISION) VALUES (@cliente, @fecha_emision)',
    insertDetalleVenta: 'INSERT INTO DETALLE_VENTA (PRECIO_UNITARIO, CANTIDAD, TOTAL_LINEA) VALUES (@precio, @cantidad, @total)',

    //DETALLE VENTAS
    getDetalleVentaByID: 'SELECT * FROM DETALLE_VENTA WHERE ID_VENTA = @idVenta',

    //PRODUCTOS
    getProductos: "SELECT * FROM PRODUCTOS WHERE ESTADO = '1'",
    getProductoPorID: "SELECT * FROM PRODUCTOS WHERE ESTADO = '1' and ID = @idProducto",
    guardaProducto: 'INSERT INTO PRODUCTOS (NOMBRE, DESCRIPCION, PRECIO) VALUES (@nombre, @descripcion, @precio)',
    eliminaProducto: "UPDATE PRODUCTOS SET ESTADO = '0' WHERE ID = @idProducto",
    actualizaProducto: "UPDATE PRODUCTOS SET NOMBRE = @nombre, DESCRIPCION = @descripcion, PRECIO = @precio WHERE ID = @idProducto",
    buscarProductos: "SELECT * FROM PRODUCTOS WHERE NOMBRE LIKE @texto AND ESTADO = '1'"
}