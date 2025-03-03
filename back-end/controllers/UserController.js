export class UserController {
    constructor(service) {
        this.service = service
    }

    getAll(req, res) {
        try {
            const users = this.service.findAll()
            return res.status(200).json({users})
        }
        catch(error) {
            return res.status(400).json({message: error.message})
        }
    }

    register(req, res) {
        const {name, email, password} = req.body

        try {
            const user = this.service.register(name, email, password)
            return res.status(200).json({
                name: user.name,
                email: user.email
            })
        }
        catch(error) {
            return res.status(400).json({message: error.message})
        }
    }

    login(req, res) {
        const {email, password} = req.body

        try {
            const {user} = this.service.login(email, password)

            return res.status(200).json({
                id: user.id,
                name: user.name,
                email: user.email
            })
        }
        catch(error) {
            return res.status(400).json({message: error.message})
        }
    }

    updatePassword(req, res) {
        const {email, lastPassword, newPassword} = req.body

        try {
            this.service.updatePassword(email, lastPassword, newPassword)
            return res.status(200).json({message: 'Update Sucessfully'})
        }
        catch(error) {
            return res.status(400).json({message: error.message})
        }
    }
}