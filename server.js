const express=require('express')
const app=express()
app.use(express.json())
require('dotenv').config()

const cors=require('cors')
app.use(cors())

app.use('',require('./route/index'))
const PORT=process.env.PORT;


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})




