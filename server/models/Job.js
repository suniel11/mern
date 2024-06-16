const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({

user:{type: mongoose.Schema.Types.ObjectId , ref: 'User'},
title : {type: String , required: true},
description : { type : String , required:true},
status : { type : String , default : 'pending'},
createdAt : { type : String , default : Date.now}

})

module.exports = mongoose.model('Job' , JobSchema)