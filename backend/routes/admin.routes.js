const express = require('express');
const router = express.Router();
const petModel = require('../models/animal.model');

// Serve image route in your Express app
// Serve image route in your Express app
router.get('/img/:id', async (req, res) => {
   try {
       const pet = await petModel.findById(req.params.id);
       if (pet && pet.img && pet.img.data) {
           res.contentType(pet.img.contentType);
           res.send(pet.img.data); // Send the image binary data
       } else {
           res.status(404).send('Image not found');
       }
   } catch (err) {
       res.status(500).send('Error fetching image');
       console.error(err);
   }
});


// Get pet data and render it on admin page
router.get('/get-pet-data', async (req, res) => {
    const dataEntry = await petModel.find();
    res.render('admin', { data: dataEntry });
    console.log('data retrieved from backend');
});

// Delete pet data
router.post('/delete-pet-data', async (req, res) => {
    const { petId } = req.body; // Get petId from the request body
    console.log(petId); // Log petId to verify it's being sent correctly
    await petModel.findByIdAndDelete(petId);
    console.log('Pet deleted from database');
    res.redirect('/admin/get-pet-data?deleted=true');
});

module.exports = router;
