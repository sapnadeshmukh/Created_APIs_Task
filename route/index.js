const express=require("express")
const router=express.Router()

router.use('/register',require('./registerRoute'))
router.use('/login',require('./loginRoute'))
router.use('/',require('./allfileRoute'))



module.exports=router