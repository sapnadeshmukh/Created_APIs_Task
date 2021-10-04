require('dotenv').config()

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

  
const cors=require('cors')
app.use(cors())

app.use('',require('./route/index'))
const PORT=process.env.PORT;


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})




