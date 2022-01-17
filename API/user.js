const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/user');
const route = express.Router();

route.post('/',async(req,res)=>{
    const{name,programdescription,duration,financialassistance} = req.body;
    let user = {};
    user.name = name;
    user.programdescription = programdescription;
    user.duration = duration;
    user.financialassistance = financialassistance;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})
module.exports = route;