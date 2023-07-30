import { getConnection, queries, sql } from "../database"

export const getAllProductos = async (req, res) => {
    try {

        const pool = await getConnection();
        const result = await pool.request().query(queries.getProductos);

        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductoPorID = async (req, res) => {

    const { idProducto } = req.params;
    console.log("entro a getProductoPorID: " + idProducto);

    try {

        const pool = await getConnection();

        const result = await pool.request()
            .input('idProducto', sql.Int, idProducto)
            .query(queries.getProductoPorID);

        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const guardaProducto = async (req, res) => {

    const { nombre, descripcion, precio } = req.body;

    if (nombre == null) {
        return res.status(400).json({ msg: 'Bad Request. Por favor llene todos los campos' });
    }

    try {

        const pool = await getConnection();

        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('descripcion', sql.VarChar, descripcion)
            .input('precio', sql.Int, precio)
            .query(queries.guardaProducto);

        res.json({ nombre, descripcion, precio });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const eliminaProducto = async (req, res) => {

    const { idProducto } = req.params;

    if (idProducto == null) {
        return res.status(400).json({ msg: 'Bad Request. Por favor indica ID de producto a eliminar' });
    }

    try {

        const pool = await getConnection();

        await pool.request()
            .input('idProducto', sql.Int, idProducto)
            .query(queries.eliminaProducto);
        res.status(200);
        res.send('Concepto Modificado.');

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const actualizaProducto = async (req, res) => {

    const { idProductox } = req.params;

    if (idProductox == null) {
        return res.status(400).json({ msg: 'Bad Request. Por favor indica ID de producto a eliminar' });
    }

    const { nombre, descripcion, precio } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('idProducto', sql.Int, idProductox)
            .input('nombre', sql.VarChar, nombre)
            .input('descripcion', sql.VarChar, descripcion)
            .input('precio', sql.Int, precio)
            .query(queries.actualizaProducto);
        res.status(200);
        res.send('Producto Modificado.');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

    //const sql = `UPDATE CONCEPTOS SET concepto = '${concepto}', descripcion = '${descripcion}', estado = '${estado}' where ID_CONCEPTO = ${id}`;

    //     connection.query(sql, error => {

    //         if(error) throw error;
    //         res.send('Concepto Modificado.');

    // })


}

export const buscarProductos = async (req, res) => {
    try {

        const { texto } = req.params;

        console.log("texto a buscar: "+texto);



        const pool = await getConnection();
        const result = await pool.request()
        .input('texto', sql.VarChar, '%'+texto+'%')
        .query(queries.buscarProductos);

        console.log(queries.buscarProductos)

        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}