import { Router } from 'express';
import * as controller from './provedores.controller.js';
const router = Router();


router.get("/", controller.traerTodos);
router.get("/:apellido", controller.traerPorApellido);
router.put("/", controller.actualizarProducto);
router.post("/", controller.crearProducto);
router.delete("/:codigo",controller.eliminarProducto)


export default router;