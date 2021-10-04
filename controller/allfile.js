const express = require('express');
const connection=require('../database/connection')
const {authenticateToken}=require('../middleware/createToken')
const multer = require('multer');
const path = require('path');
const router = express.Router()

// File Upload
const fileStorage = multer.diskStorage({
    destination: 'download', // Destination to store image 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});

const fileUpload = multer({
    storage: fileStorage,
    limits: {
        fileSize: 20000000   // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|mp4|MPEG-4|pdf)$/)) {     
            return cb(new Error('Please upload a File'))
        }
        cb(undefined, true)
    }
})  
    module.exports.fileUpload=fileUpload
    
    // To store  image in Database
    module.exports.allfile=(req, res) => {

    var token = req.headers.authorization
    
    console.log("token",token);

        console.log(req.file.filename)
        if(token!=undefined){
            const data=authenticateToken(token,process.env.SECRETKEY)
            let code=Math.floor(100000 + Math.random() * 900000);
            var query = 'UPDATE users SET files = ?, code =? WHERE id=?';

                connection.query(query,[req.file.filename,code,req.params.id], function (error, result, rows, fields) {
                    if(error) throw error

                    console.log("file added successfully in DB!!")
                   
                    res.send("file added suceefully in DB!!!")
                
            })
        }else{
            console.log("No use found")
        }

}


// To view Image
module.exports.view_file=(req,res)=> {
    let sql = "SELECT files FROM users WHERE id=" + req.params.id;
    var query = connection.query(sql,(err,data)=>{
        if(err) throw e
        const result = Object.values(JSON.parse(JSON.stringify(data[0])));
        console.log(result[0])
        res.sendFile(`/home/sapna/Desktop/Created_APIs_Task/download/${result[0]}`)


        
    })
}



// To delete File
module.exports.delete_file=(req,res)=> {
   

    let sql =`update users set files=null where id=?`;


    connection.query(sql, req.params.id , (error, results, fields) => {
    if (error)
        return console.error(error.message);
    else{
        console.log("data has deleted!!")
        res.send("data has deleted!")
    }
        
})
}

// To download file

const fileStore = multer.diskStorage({
    destination: 'download', // Destination to store image 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});

const fileDownload= multer({
    storage: fileStore,
    limits: {
        fileSize: 20000000   // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|mp4|MPEG-4|pdf)$/)) {     
            return cb(new Error('Please upload a File'))
        }
        cb(undefined, true)
    }
})  
    module.exports.fileDownload=fileDownload
    
module.exports.DownloadFile=(req, res) => {

        let code=req.body.code
        let file=req.body.file
        let sql = "SELECT files,code FROM users WHERE id=" + req.params.id;
        var query = connection.query(sql,(err,data)=>{
        if(err) throw err
            const result = Object.values(JSON.parse(JSON.stringify(data[0])));
            if (code ==result[1] && file==result[0]){
                console.log("File downloded!!")
                res.sendFile(`/home/sapna/Desktop/Created_APIs_Task/download/${result[0]}`)


            }else{
                console.log("NO file to download...")
                res.send("No file to download or incorrect code")
                
            }
        })
}



