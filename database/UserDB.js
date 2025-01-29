export class UserDb {
    constructor() {
        this.users = []
    }

    findAll() {
        return this.users
    }

    findById(id) {
        return this.users.find((user) => user.id === id)
    }

    findByEmail(email) {
        return this.users.find((user) => user.email === email)
    }

    save(user) {
        this.users.push(user)
    }

    updatePassword(email, newPassword) {
        const userIndex = this.users.findIndex((user) => user.email === email)
        if(userIndex === -1) throw new Error('Usuário não encontrado')

        this.users[userIndex].password = newPassword

        return this.users[userIndex]
    }
}