import express from 'express'
import {routers} from './routers/UserRouter.js'
import cors from 'cors'

const server = express()
const port = 8000

server.use(cors())
server.use(express.json())
server.use(routers)

server.listen(port, () => {
    console.log(`Running on port: http://localhost:${port}`)
})