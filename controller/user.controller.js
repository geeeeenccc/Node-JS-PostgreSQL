const db = require("../db")
class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newUser = await db.query(`INSERT INTO person(name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newUser.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const singleUser = await db.query(`SELECT * FROM person WHERE id = $1`, [id])
        res.json(singleUser.rows[0])
    }
    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const updateUser = await db.query(`Update person SET name = $1, surname = $2 WHERE id = $3 RETURNING *`, [name, surname, id])
        res.json(updateUser.rows[0])
    }
    async deleteUser(req, res) {
        const {id} = req.body
        const newPerson = await db.query(`DELETE FROM person WHERE id = $1 RETURNING *`, [id])
        res.json(newPerson.rows[0])
    }
}

module.exports = new UserController()