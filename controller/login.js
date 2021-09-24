
const connection=require('../database/connection')
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const {tokenData }=require('../middleware/createToken')


module.exports.login= (req, res) => {
    var username=req.body.username;
    var password=req.body.password;
    connection.query("SELECT username,password FROM users WHERE username = '"+ username +"' AND password='"+ password +"'", function(err, result, field){

        console.log(result)
        
        if(result.length >0){
            
                console.log("Login succesfully!!")
                res.send({
                    "code":200,
                    "success":"login sucessfully"
                })
                const Data = { username: req.body.username ,password:req.body.password}
                const accessToken = tokenData(Data, process.env.SECRETKEY)
                console.log("Token =",accessToken)
                // res.cookie("key=", accessToken);
            }
        else{
            console.log("Email and password does not match")
            res.send({
                "code":204,
                "success":"Email and password does not match"
            })
        }
                
    })
    
}

