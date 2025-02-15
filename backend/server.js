const express= require('express')
const dotenv= require('dotenv')
const { chats } = require('./data')

dotenv.config()

const app= express()

app.get('/',(req,res)=>{
    res.send("API is running successfully")
})

app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find((c)=>{return c._id===req.params.id})
    res.send(singleChat)
})

app.get('/api/chat',(req,res)=>{
    res.send(chats)
})

const PORT= process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`)
})

