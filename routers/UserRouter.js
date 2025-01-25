import {Router} from 'express'

import {UserController} from '../controllers/UserController.js'
import {AuthenticationUser} from '../services/UserServices.js'
import {UserDb} from '../database/UserDB.js'

const userDatabase = new UserDb()
const userServices = new AuthenticationUser(userDatabase)
const userController = new UserController(userServices)

const routers = Router()

routers.get('/', async(req, res) => {
    return await userController.getAll(req, res)
})

routers.post('/registerUser', (req, res) => {
    const {status, body} = userController.register(req, res)
    res.status(status).json(body)
})

routers.post('/loginUser', (req, res) => {
    const {status, body} = userController.login(req, res)
    res.status(status).json(body)
})

routers.post('/updatePass', async(req, res) => {
    return await userController.updatePassword(req, res)
})

export {routers}