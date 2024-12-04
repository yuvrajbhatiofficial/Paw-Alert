const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dbConnection = require('./config/db')
const adminRouter = require('./routes/admin.routes')
const userRouter = require('./routes/user.routes')
const multer = require('multer');

const app = express();
app.use(cors());
app.use(morgan('dev'))


app.set("view engine" , 'ejs')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use('/uploads', express.static('uploads'));



app.get('/', (req,res)=>{
    res.render('admin')
    console.log("admin panel started")
})



app.listen(8000,()=>{
    console.log('server running on 8000')
})