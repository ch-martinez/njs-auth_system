import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST || '"localhost"',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || 'auth_system',
  JWT_SECRET: process.env.JWT_SECRET || 'clave_secreta',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h'
}
