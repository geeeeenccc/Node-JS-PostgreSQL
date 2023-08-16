const express = require("express")
const UserRouter = require("./routes/user.routes")
const PostRouter = require("./routes/post.routes")
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', UserRouter)
app.use('/api', PostRouter)

app.listen(PORT, () => console.log(`server has been started on post ${PORT}`))