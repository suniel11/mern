const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async () => {
 try{
await mongoose.connect("_" , {
    useNewUrlParser: true,
    // useUnifiedToplogy:true
})
console.log('MONGO CONNECTED')
}
catch (err){
console.log(err.message)
process.exit(1)
}
}
module.exports = connectDB
