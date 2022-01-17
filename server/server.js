const express = require('express');
const connectDb = require('../DB/connection')
const app = express();

connectDb();
app.use(express.json({externded:false}));
app.use('/usermodel',require('../API/user'));
const Port = process.env.pro || 3000;   

app.listen(Port,()=>console.log('server started')) 