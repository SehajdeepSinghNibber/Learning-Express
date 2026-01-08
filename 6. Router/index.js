import express from 'express'
import students from './routes/student.js'
import teachers from './routes/teacher.js'
const app = express()
const PORT = 8000

//1. CREATE ROUTES FOLDER AND PUT YOUR ROUTES IN A SEPERATE FILE
//2. CREATE INSTANCES OF express.router()
//3. INSTEAD OF app.method CHANGE THAT TO router.method
//4. Export router
//5. Import router
//6. use the app.use() built-in middleware & provide your routes


app.use('/students',students)
app.use('/teachers',students)

app.listen(PORT,()=>console.log("Server is UP!!"))