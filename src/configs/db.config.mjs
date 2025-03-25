import { createPool } from "mysql2/promise"
import env from "./env.config.mjs"

const pool =  createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    charset: 'utf8mb4'  // Establecer el collation global
})

// Prueba que la conexion a la DB sea correcta
pool.getConnection()
    .then(connection => {
        console.log('>>> DB: Conexion OK')
        connection.release()
    })
    .catch(err => {
        console.log(`>>> DB: Error al obtener la conexion, ${err}`)
    })

export default pool