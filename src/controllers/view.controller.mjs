import { createUser } from "../model/user.model.mjs"

const permissions = [
    "Rango 5",
    "Rango 4",
    "Rango 3",
    "Rango 2",
    "Rango 1"
]
export const loginScreen = (req, res) => {

    const page = {
        title: 'Login',

    }
createUser()
    res.render('login', {layout: 'layout', page})
}

export const forgorPasswordScreen = (req, res) => {

    const page = {
        title: 'Recuperar contraseña',

    }

    res.render('forgot_password', {layout: 'layout', page})
}

export const registerScreen = (req, res) => {

    const page = {
        title: 'Registrar usuario',

    }

    res.render('register', {layout: 'layout', page})
}

export const panelScreen = (req, res) => {

    const page = {
        title: 'LogPanel',

    }

    const user = {
        user: 'ch-martinez',
        email: 'admin@email.com',
        role: 'admin',
        permissions: permissions
    }

    res.render('panel', {layout: 'layout', page, user})
}