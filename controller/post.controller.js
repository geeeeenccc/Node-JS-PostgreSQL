const db = require("../db")
class PostController {
    async createPost(req, res) {
        const {title, content, user_id} = req.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, user_id])
        res.json(newPost.rows[0])
    }

    async getPost(req, res) {
        const user_id = req.query.id
        const post = await db.query(`SELECT * FROM post WHERE user_id = $1`, [user_id])
        res.json(post.rows)
    }
}

module.exports = new PostController()