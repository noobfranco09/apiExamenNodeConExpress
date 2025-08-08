import * as db from './provedores.models.js';


export const traerTodos = async (req, res) => {

    try {
        const resultado = await db.traerTodos();
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            throw new error;
        }
    } catch (error) {
        console.log("Error al traer todos los provedores en provedores.controller");
        res.status(500).json({ error: "Error interno del servidor " });
    }
}

export const traerPorApellido = async (req, res) => {

    try {
        const id = req.params.apellido;
        const resultado = await db.traerPorApellido(id);
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            throw new error;
        }
    } catch (error) {
        console.log("Error al traer todos los provedores en provedores.controller");
        res.status(500).json({ error: "Error interno del servidor " });
    }
}

export const actualizarProducto = async (req, res) => {

    try {
        const codigo = req.body.codigo ;
        const objec = {
            
            primerNombre :req.body.primerNombre,
            segundoNombre: req.body.segundoNombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            carrera: req.body.carrera,
            calle: req.body.calle,
            email: req.body.email,
            telefono: req.body.telefono,
            ciudad: req.body.ciudad,
            estado: req.body.estado,
        };
        const resultado = await db.actualizar(objec,codigo);
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            throw new error;
        }
    } catch (error) {
        console.log("Error al actualizar");
        res.status(500).json({ error: "Error interno del servidor " +error});
    }
}

export const crearProducto = async (req, res) => {

    try {
        const objec = {
            codigo: req.body.codigo,
            primerNombre :req.body.primerNombre,
            segundoNombre: req.body.segundoNombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            carrera: req.body.carrera,
            calle: req.body.calle,
            email: req.body.email,
            telefono: req.body.telefono,
            ciudad: req.body.ciudad,
            estado: req.body.estado,
        };
        const resultado = await db.crear(objec);
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            throw new error;
        }
    } catch (error) {
        console.log("Error al crear producto");
        res.status(500).json({ error: "Error interno del servidor "});
    }
}

export const eliminarProducto = async (req, res) => {

    try {
        const codigo = req.params.codigo;
        const resultado = await db.eliminar(codigo);
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            throw new error;
        }
    } catch (error) {
        console.log("Error al crear producto");
        res.status(500).json({ error: "Error interno del servidor "});
    }
}