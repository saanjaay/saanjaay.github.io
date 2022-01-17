const mongoose = require('mongoose')

const URI = "mongodb+srv://mykctapp:mykctappy@myfreecluster.gwk3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async()=>{
    mongoose.connect(URI ,{useUnifiedTopology:true, useNewUrlParser:true})
    console.log('db connected')
}

module.exports = connectDB