import pool from '../configs/db.config.mjs'

export const createUserDB = async (user) => {
  const connection = await pool.getConnection()
  console.log(user)
  const query = 'INSERT INTO users (name, password) VALUES (?,?);'
  const params = [user.name, user.password]

  try {
    const [result] = await connection.query(query, params)
    return { id: result.insertId }

  } catch (error) {
    console.error('[-] MODEL: Error createUserDB: ', error)
  } finally {
    if (connection) connection.release()
  }
}

export const existUserNameDB = async (name) => {
  const connection = await pool.getConnection()

  const query = 'SELECT name FROM users WHERE name = ?;'

  try {
    const [[result]] = await connection.query(query, name)
    return (result !== undefined)

  } catch (error) {
    console.error('[-] MODEL: Error existUserNameDB: ', error)
  } finally {
    if (connection) connection.release()
  }

}

export const getUserPasswordDB = async (name) => {
  const connection = await pool.getConnection()

  const query = 'SELECT passowrd FROM users WHERE name = ?;'

  try {
    const [[result]] = await connection.query(query, name)
    return result.password

  } catch (error) {
    console.error('[-] MODEL: Error getUserPasswordDB: ', error)
  } finally {
    if (connection) connection.release()
  }

}

export const getUserDB = async (name) => {
  const connection = await pool.getConnection()

  const query = 'SELECT * FROM users WHERE name = ?;'

  try {
    const [[result]] = await connection.query(query, name)
    return result

  } catch (error) {
    console.error('[-] MODEL: Error getUserDB: ', error)
  } finally {
    if (connection) connection.release()
  }
}
