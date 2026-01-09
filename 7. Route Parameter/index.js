import express from 'express'

const app = express()
const PORT = 8000

//Route Params or Route Parameters
//ecom/products/iphone/: this : is used to get the id

app.get('/product/:category/:id',(req,res)=>{
    const {category,id} =req.params
    res.send(`Product Category (${category}) and id (${id})`)
})

app.get('/product/order/:date/:month/:year',(req,res)=>{
    const {date,month,year} =req.params
    res.send(`Product was ordered on: (${date}/${month}/${year})`)
})

//app.param()

app.param("id",(req,res,next,id)=>{
    console.log(`id: {id}`)
    next()
})

app.get('user/:id',(req,res)=>{
    console.log('Tis is user ID Path')
    res.send('Response OK')
})

app.listen(PORT,()=>console.log("Server is Up!!"))