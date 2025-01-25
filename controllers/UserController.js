export class UserController {
    constructor(service) {
        this.service = service
    }

    getAll(req, res) {
        try {
            const users = this.service.findAll()
            return res.status(200).body({users})
        }
        catch(error) {
            return res.status(400).body({message: error.message})
        }
    }

    register(req, res) {
        const {name, email, password} = req.body

        try {
            const user = this.service.register(name, email, password)
            return {
                status: 200,
                body: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            }
        }
        catch(error) {
            return res.status(400).body({message: error.message})
        }
    }

    login(req, res) {
        const {email, password} = req.body

        try {
            const {user} = this.service.login(email, password)

            return {
                status: 200,
                body: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            }
        }
        catch(error) {
            return res.status(400).body({message: error.message})
        }
    }

    updatePassword(req, res) {
        const {email, lastPassword, newPassword} = req.body

        try {
            this.service.updatePassword(email, lastPassword, newPassword)
            return res.status(200).body({message: 'Update Sucessfully'})
        }
        catch(error) {
            return res.status(400).body({message: error.message})
        }
    }
}