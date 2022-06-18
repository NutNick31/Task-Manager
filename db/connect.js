const mongoose = require('mongoose');

const connectionString = '';

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
}

module.exports = connectDB
