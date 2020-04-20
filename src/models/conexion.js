'use strict'

const debug = require('debug')('module-mail:conection')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const conexion = {}

conexion.conectar = async function () {
  debug('FUNCION DE CONEXION')
  const urlConexion = process.env.MONGODB_URI_BITACORAMAIL
  mongoose.set('debug', true)
  const conexionMongo = await mongoose.connect(urlConexion, { useNewUrlParser: true })
  return conexionMongo
}

module.exports = conexion
