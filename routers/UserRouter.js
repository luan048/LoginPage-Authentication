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

routers.post('/registerUser', async (req, res) => {
    return await userController.register(req, res)
})

routers.post('/loginUser', async (req, res) => {
    return await userController.login(req, res)
})

routers.post('/updatePass', async(req, res) => {
    return await userController.updatePassword(req, res)
})

export {routers}