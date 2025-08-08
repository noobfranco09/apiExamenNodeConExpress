import db from '../../database/db.config.js'

export async function traerTodos() {

    const [rows] = await db.query("select * from productos order by desc");
    return rows;
    
}

export async function traerPorApellido(apellido) {

    const [rows] = await db.query("select * from productos where primerApellido = ? or segundoApellido = ?",[apellido,apellido]);
    return rows;
    
}

export async function actualizar(objec,codigo) {

    const [rows] = await db.query("update productos set ? where codigo  = ?",[objec,codigo]);
    return rows;

}

export async function crear(objec) {

    const [rows] = await db.query("insert into productos set ?", [objec]);
    return rows;
    
}

export async function eliminar(id) {

    const [rows] = await db.query("delete from productos where codigo = ?",[id]);
    return rows;
    
}