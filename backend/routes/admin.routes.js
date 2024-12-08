const express =  require('express')
const router = express.Router();
const petModel = require('../models/animal.model')



router.get('/get-pet-data',async(req,res)=>{
   const dataEntry = await petModel.find();
   
   res.render('admin', { data: dataEntry });
   console.log('data retrived from backend to json')
})




router.post('/delete-pet-data', async (req, res) => {
   const { petId } = req.body;  // Get petId from the request body
   console.log(petId);  // Log petId to verify it's being sent correctly
   await petModel.findByIdAndDelete(petId);
   console.log('Pet deleted from database');
   res.redirect('/admin/get-pet-data?deleted=true');
});


module.exports = router;