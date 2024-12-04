const express =  require('express')
const router = express.Router();
const petModel = require('../models/animal.model')


router.post('/upload-pet-data',async (req,res)=>{
    const {petName}=req.body
    const newProduct = await petModel.create({
     
       petName:petName
    })
   res.send('pet uploded')
})






module.exports = router;