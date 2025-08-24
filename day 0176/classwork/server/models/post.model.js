const mongosee = require('mongoose');
const postchema = new mongosee.Schema({
    title:string,
    content:String,
    likesCount:Number
});
const post  = mongosee.model('post', postchema);
module.exports = post;
