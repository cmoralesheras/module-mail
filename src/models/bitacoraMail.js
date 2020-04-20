'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BitacoraMail = Schema({
  identidad: String,
  mail: Object,
  mailRes: Object,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('bitacoraMail', BitacoraMail)
