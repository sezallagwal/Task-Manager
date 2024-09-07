
const mongoose= require('mongoose');

const connectDB= (url) => {
    return mongoose.connect(url);
    // return mongoose.connect(url, {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //     useUnifiedTopology: true,
        
    // }) // you dont need to write all this in the newer version of mongoose after 6.0
}

module.exports = connectDB



