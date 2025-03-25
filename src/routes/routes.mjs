import { Router } from 'express'
import { loginScreen } from '../controllers/view.controller.mjs'


const router = Router()

router.get('/', loginScreen)

export default router
