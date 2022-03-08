const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    required: true,
}

const reqNumber = {
    type: Number,
    required: true,
}


const productoSchema = new Schema({
    serie: reqString,
    nombre: reqString,
    valor: reqNumber,
    stock: reqNumber
})

const model = mongoose.model('Producto', productoSchema)
module.exports = model