import express from 'express'

const allStudents = (req,res)=>{
    res.send("All Students")
}

const newStudent = (req,res)=>{
    res.send("Add new Student")
}

const updateStudent = (req,res)=>{
    res.send("Update the Student")
}

const deleteStudent = (req,res)=>{
    res.send("Remove the Student")
}

export {allStudents, newStudent, updateStudent, deleteStudent}