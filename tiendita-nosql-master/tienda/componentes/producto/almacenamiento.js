const model = require('./modelo')

function agregarProducto( producto ) {
    const objeto = new model( producto )
    objeto.save()
}

function obtenerProductos( filtroProducto ) {
    let filtro = {}
    if (filtroProducto) {
        filtro = { codigo: filtroProducto }
    }
    const objeto = model.find( filtro )
    return objeto
}

async function actualizarProducto( producto ) {
    const objeto = await model.findOne( {serie: producto.serie} )
    objeto.serie = producto.serie
    objeto.nombre = producto.nombre
    objeto.valor = producto.valor
    objeto.stock = producto.stock
    const resultado = await objeto.save()
    return resultado
}

async function eliminarProducto( serie ) {
    return await model.deleteOne({serie: serie})
}

module.exports = {
    agregar: agregarProducto,
    obtener: obtenerProductos,
    actualizar: actualizarProducto,
    eliminar: eliminarProducto,
}