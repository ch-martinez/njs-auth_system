import { Router } from "express";
const router = Router()

import { loginScreen, forgorPasswordScreen, registerScreen, panelScreen } from "../controller/renders.mjs";
import { authLogin } from "../controller/auth.mjs";


router.get('/', loginScreen)
router.get('/forgot-password', forgorPasswordScreen)
router.get('/register', registerScreen)
router.get('/panel', panelScreen)

router.post('/auth', authLogin)

export default router