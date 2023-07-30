import { getConnection, queries, sql } from "../database"

export const getVentas = async(req, res) => {
    try {
        
        const pool = await getConnection();
        const result = await pool.request().query(queries.getVentas);

        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getDetalleVenta = async(req, res) => {

    const {idVenta} = req.params;

    try {
        
        const pool = await getConnection();



        const result = await pool.request()
            .input('idVenta', sql.Int, idVenta)    
            .query(queries.getDetalleVentaByID);

        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const realizaVenta = async(req, res) => {

    const {cliente, fecha_emision, detalle} = req.body;

    //console.log(req.body)
    console.log(detalle);

    try {
        const pool = await getConnection();

        await pool.request()
            .input('cliente', sql.VarChar, cliente)
            .input('fecha_emision', sql.VarChar, fecha_emision)
            .query(queries.insertVenta);

        console.log("Cantidad de detalles: "+detalle.length);

        for(let i = 0; i < detalle.length; i++){
            await pool.request()
            .input('precio', sql.Int, detalle[i].precio)
            .input('cantidad', sql.Int, detalle[i].cantidad)
            .input('total', sql.Int, detalle[i].precio * detalle[i].cantidad)
            .query(queries.insertDetalleVenta);
        }
       

        res.status(200);
        res.send('Venta Realizada.');
        // res.json({ nombre, descripcion, precio });

        // await pool.request().query(queries.insertVenta);
        // await pool.request().query(queries.insertDetalleVenta);

    } catch (error) {
        console.log("Error al realizar venta: " + error);
    }

    return true;
    // res.json({fechaEmision, total, detalleVenta});

}