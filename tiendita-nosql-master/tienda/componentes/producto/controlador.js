const storage = require('./almacenamiento')

function agregarProducto( producto ) {
    return new Promise((resolve, reject) => {
        storage.agregar( producto )
        resolve( producto )
    })
}

function obtenerProductos( filtroProducto ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroProducto ) )
    })
}

function actualizarProducto( serie, nombre, valor, stock ) {
    return new Promise((resolve, reject) => {
        let producto = {
            serie: serie,
            nombre: nombre,
            valor: valor,
            stock: stock
        }
        storage.actualizar( producto )
        resolve( producto )
    })
}

function eliminarProducto( codigo ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( codigo )
        resolve( codigo )
    })
}

module.exports = {
    agregarProducto,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto,
}