const express = require('express');
const router = express.Router();
const multer = require('multer');
const petModel = require('../models/animal.model');

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload-pet-data', upload.single('image'), async (req, res) => {
  const {
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
  } = req.body;

  const newPet = await petModel.create({
    petName,
    img: req.file
      ? {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        }
      : null, // Add the image if provided
    description,
    currentLocationUrl,
    addressLineOne,
    addressLineSecond,
    landmark,
    zipcode,
    city,
    state,
    contactInfo,
  });

  res.send('Pet uploaded successfully');
});

module.exports = router;
