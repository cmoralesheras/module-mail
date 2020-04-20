'use strict'
require('dotenv-flow').config()
const mailService = require('./src/services/mail')
// const conexion = require('./src/models/conexion')

// module.exports = function () {
//   conexion.conectar().then(() => {
//     return mailService
//   })
// }
// module.exports = (async function () {
//   await conexion.conectar()
//   return { mailService }
// })()

module.exports = mailService
