const express =  require('express')
const router = express.Router();

router.get('/get-pet-data',(req,res)=>{
    console.log('ok so ')
    res.json('hello this is admin panel')
    
})
module.exports = router;