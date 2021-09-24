const connection=require('../database/connection')
const bcrypt=require('bcrypt');


module.exports.register=(req,res)=>{


    let userData={
        username:req.body.username,
        password:req.body.password,
    }
    connection.query("SELECT username,password FROM users WHERE username = '"+ req.body.username +"' AND password='"+ req.body.password +"'", function(err, result, field){
        if(result.length ==0){
            var sql = "INSERT INTO users SET ?";
            let query=connection.query(sql,userData,(err,result)=>{
            if(err) throw err;
            console.log("Signed up successfully!!!")
            res.send("Signed up successfully!!!")
            
            })
            


            
        }else{  
            console.log("User Already Exists!!")
            res.send("User is already exists!!!")
        }
           
    
            
        })
    
           
}

