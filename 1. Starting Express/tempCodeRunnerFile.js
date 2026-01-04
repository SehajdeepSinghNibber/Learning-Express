import express from 'express'
import http from 'http'

const app = express()

app.get('/',(req,res)=>{
    return res.send('<h1>Hello from home page</h1>')
})

app.get('/about',(req,res)=>{
    return res.send('<h1>Hello from about page</h1>')
})

const server= http.createServer(app)

server.listen(8000,()=>console.log("Server Started!!"))
