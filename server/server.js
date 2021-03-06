const path = require('path')
const express = require('express')
// const hbs = require('express-handlebars')

const routes = require('../routes/routes')
const server = express()

// Middleware
// server.engine('hbs', hbs({ extname: 'hbs' }))
// server.set('view engine', 'hbs')
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/map', routes)

module.exports = server
