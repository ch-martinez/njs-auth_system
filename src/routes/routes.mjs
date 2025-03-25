import { Router } from 'express'

import { authLogin } from '../controller/auth.mjs'
import { forgotPasswordScreen } from '../controllers/view.controller.mjs'
const router = Router()

router.get('/', loginScreen)
router.get('/forgot-password', forgotPasswordScreen)
router.get('/register', registerScreen)
router.get('/panel', panelScreen)

router.post('/auth', authLogin)

export default router
