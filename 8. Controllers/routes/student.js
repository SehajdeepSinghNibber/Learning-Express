import express from 'express'
import {
    allStudents,
    newStudent,
    updateStudent,
    deleteStudent
} from '../controllers/student.js'

const router = express.Router()

router.get('/all',allStudents)

router.post('/Add',newStudent)  

router.put('/update',updateStudent)

router.delete('/remove',deleteStudent)

export default router