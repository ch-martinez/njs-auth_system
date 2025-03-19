import express from 'express'
import path from 'path'

const app = express()
const PORT = 3000

import methodOverride from 'method-override'

app.use(methodOverride('_method'))

//Configuracion de __dirname
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuracion para la lectura de formularios y archivos json
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Se define la carpeta 'public' para archivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')))

// Configuracion dotenv
import {config} from 'dotenv'
config()

// Config. de template engine: EJS
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'src/views'))

// Config. de motor de plantillas
import expressEjsLayouts from 'express-ejs-layouts'
app.use(expressEjsLayouts)

import router from './src/routes/main.mjs'

app.use('/', router)

// Servidor
app.listen(PORT, () => {
    console.log(`>>> Server: http://localhost:${PORT}`)
});