const express =  require('express')
const router = express.Router();
const petModel = require('../models/animal.model')




router.post('/upload-pet-data',async (req,res)=>{
    const {petName, 
      description, 
      currentLocationUrl,
       addressLineOne, 
       addressLineSecond, 
      landmark,
      zipcode, 
      city,
      state,
      contactInfo }=req.body
    const newPet = await petModel.create({
     
      petName, 
      description, 
      currentLocationUrl,
       addressLineOne, 
       addressLineSecond, 
      landmark,
      zipcode, 
      city,
      state,
      contactInfo,
    })
   res.send('pet uploded')
 })
 


module.exports = router;