const express = require('express')
const router = express.Router()
const allfileController = require('../controller/allfile')




router.post('/uploadfile/:id',allfileController.fileUpload.single('file'), allfileController.allfile)
router.get('/getuploadfile/:id',allfileController.fileUpload.single('file'), allfileController.view_file)
router.delete('/deletefile/:id',allfileController.fileUpload.single('file'), allfileController.delete_file)
router.get('/downloadfile/:id',allfileController.fileDownload.single('file'),allfileController.DownloadFile)




module.exports = router