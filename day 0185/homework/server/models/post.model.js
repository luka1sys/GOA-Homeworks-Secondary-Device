const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title:{
        type:String
    },
    author:{
        type:String
    },
    discription:{
        type:String
    },
    likesCount:{
        type:Number,
        default:0
    }
})
postSchema.index({ author: 1, likesCount: -1 });
module.exports=mongoose.model('posts',postSchema)
