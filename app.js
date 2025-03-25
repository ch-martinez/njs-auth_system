/* eslint-disable import/first */
import express from 'express'
import path from 'path'
import env from './src/config/env.config.mjs'

const app = express()

import methodOverride from 'method-override'

app.use(methodOverride('_method'))

// Configuracion de __dirname
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuracion para la lectura de formularios y archivos json
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Se define la carpeta 'public' para archivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')))

// Config. de template engine: EJS
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'src/views'))

// Config. de motor de plantillas
import expressEjsLayouts from 'express-ejs-layouts'
app.use(expressEjsLayouts)

import router from './src/routes/routes.mjs'

app.use('/', router)

// Servidor
app.listen(env.PORT, () => {
    console.log(`>>> Server: http://localhost:${env.PORT}`)
})