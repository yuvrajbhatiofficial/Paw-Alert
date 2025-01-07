const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    petName: String,
    img: {
        data: Buffer,
        contentType: String,
    },
      
    description: String,
    currentLocationUrl: String,
    addressLineOne: String,
    addressLineSecond: String,
    landmark: String,
    zipcode: Number,
    city: String,
    state: String,
    contactInfo: String
});

const PetModel = mongoose.model('Pet', petSchema);

module.exports = PetModel;
