'use strict'

const debug = require('debug')('module-mail:service:mail')
const mailerService = require('./mailer')
const BitacoraModel = require('../models/bitacoraMail')
const conexion = require('../models/conexion')
const btoa = require('btoa')
const service = {}

service.enviar = async function (data) {
  if (!data.identidad) {
    debug('No se ingreso una identidad')
    throw new Error('No tiene identidad')
  }

  const info = Object.assign({}, data)
  delete info.identidad
  info.html = btoa(info.html)
  const bitacora = new BitacoraModel()
  bitacora.identidad = data.identidad
  bitacora.mail = info

  try {
    await conexion.conectar()

    const respuesta = await mailerService.sendMail(data)
    bitacora.mailRes = respuesta
    await bitacora.save()
    return {
      msj: 'MENSAJE ENVIADO CORRECTAMENTE'
    }
  } catch (error) {
    debug(error)
    bitacora.mailRes = error
    await bitacora.save()
    throw error
  }
}

module.exports = service
