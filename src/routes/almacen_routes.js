import { Router } from "express";
import { actualizaProducto, buscarProductos, eliminaProducto, getAllProductos, getProductoPorID, guardaProducto } from "../controllers/productos_controller";
import { getDetalleVenta, getVentas, realizaVenta } from "../controllers/ventas_controller";

const router = Router();

//VENTAS
router.get("/ventas", getVentas);
router.post("/ventas", realizaVenta);

//DETALLE VENTA
router.get("/detalleVenta/:idVenta", getDetalleVenta);

//PRODUCTOS
router.get("/productos", getAllProductos);
router.get("/productos/:idProducto", getProductoPorID);
router.get("/searchProductos/:texto", buscarProductos);
router.post("/productos", guardaProducto);
router.put("/productoDel/:idProducto", eliminaProducto);
router.put("/producto/:idProductox", actualizaProducto);




export default router;