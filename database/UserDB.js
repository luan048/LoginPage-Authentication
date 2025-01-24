export class UserDb {
    constructor() {
        this.users = []
    }

    findAll() {
        return this.users
    }

    findByEmail(email) {
        return this.users.find((user) => user.email === email)
    }

    save(user) {
        this.users.push(user)
    }

    update(email, lastPassword, newPassword) {
        const userIndex = this.users.findIndex((user) => user.email === email && user.password === lastPassword)

        if(userIndex === -1) throw new Error('Usuário não encontrado')

        this.users[userIndex] = {
            ...this.users[userIndex],
            password: newPassword
        }

        return this.users[userIndex]
    }
}