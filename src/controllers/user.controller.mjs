import { createUserDB, existUserNameDB, getUserDB } from "../models/user.model.mjs"
import bc from 'bcrypt'

export const createUser = async (req, res) => {
  const { name, password } = req.body

  if (await existUserNameDB(name)) return (res.json({ creation: false, message: "Ya existe el nombre de usuario" }))


  const user = {
    name: name,
    password: await bc.hash(password, 10)
  }

  const result = await createUserDB(user)

  res.json({ creation: true, ...user, ...result })
}

export const loginUser = async (req, res) => {
  const { name, password } = req.body

  const user_db = await getUserDB(name)
  if (user_db == undefined) return (res.json({ login: false, message: "Usuario/Contraseña incorrectos" }))

  const isValid = await bc.compare(password, user_db.password)

  isValid ? res.json({ login: true, ...{ name: user_db.name, id: user_db.id } }) : (res.json({ login: false, message: "Usuario/Contraseña incorrectos" }))
}