const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{
        type:String
    },
    programdescription:{
        type:String
    },
    duration:{
        type:String
    },
    financialassistance:{
        type:String
    },

});
module.exports = User = mongoose.model('user',user)