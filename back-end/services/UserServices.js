import bcrypt from 'bcrypt'
import {User} from '../models/UserModel.js'

export class AuthenticationUser {
    constructor(database) {
        this.database = database
    }

    findAll() {
        return this.database.findAll()
    }

    register(name, email, password) {
        const userExistis = this.database.findByEmail(email)
        if(userExistis) throw new Error("E-mail já cadastrado!")

        const newUser = new User({name, email, password})
        newUser.password = bcrypt.hashSync(newUser.password, 10)

        this.database.save(newUser)
        return newUser
    }

    login(email, password) {
        const user = this.database.findByEmail(email)
        if(!user) throw new Error("Email não encontrado!")

        if(!bcrypt.compareSync(password, user.password)) throw new Error("Senha incorreta!")
        
        return {
            message: "Login realizado com sucesso",
            user: {...user, password: undefined}
        }
    }

    updatePassword(email, lastPassword, newPassword) {
        const userExistis = this.database.findByEmail(email)
        if(!userExistis) throw new Error("Email não cadastrado!")

        if(!bcrypt.compareSync(lastPassword, userExistis.password)) throw new Error("Senha Incorreta!")
        
        userExistis.password = bcrypt.hashSync(newPassword, 10)

        this.database.updatePassword(email, userExistis.password)
        return {...userExistis, password: undefined}
    }
}