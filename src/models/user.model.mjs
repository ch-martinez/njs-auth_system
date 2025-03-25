import pool from '../configs/db.config.mjs'

export const createUser = async (user) => {
  const connection = await pool.getConnection()

  try {
    console.log(connection)
  } catch (error) {

  } finally {

  }
}
