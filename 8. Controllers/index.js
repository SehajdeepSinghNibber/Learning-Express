import express from 'express'
import students from './routes/student.js'

const app = express()
const PORT = 8000

app.use('/students',students)

app.listen(PORT,()=>console.log("Server is UP!!"))