const express = require('express');
const morgan = require('morgan');
const adminRouter = require('./routes/admin.routes')

const app = express();
app.use(morgan('dev'))
app.set("view engine" , 'ejs')
app.use('/admin',adminRouter)


app.get('/', (req,res)=>{
    res.render('admin')
    console.log("admin panel started")
})



app.listen(8000,()=>{
    console.log('server running on 8000')
})