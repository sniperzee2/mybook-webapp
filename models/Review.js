const mongoose = require('mongoose')


const ReviewSchema = new mongoose.Schema({

name:{
    type:String,
    required: true
},
review: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  
  },
  story:{
    type: mongoose.Schema.Types.ObjectId,
      ref:'Story'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status:{
    type:String,
    default: 'publish',
    enum: ['publish','private']
  }

})

module.exports = mongoose.model('Review', ReviewSchema)
