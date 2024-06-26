const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const authRouter = require('./Routers/AuthRouter/AuthRouter')
const adminRouter = require('./Routers/AdminRouter/AdminRouter')
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
}))

app.use('/auth', authRouter)
app.use('/admin-controll', adminRouter)

app.listen(PORT, () => {
    console.log(`Server started on : http://localhost:${PORT}`)
})