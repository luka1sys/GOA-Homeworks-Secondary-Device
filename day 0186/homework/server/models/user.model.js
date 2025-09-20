const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    role: {
        enum: ['user', 'admin', 'moderator'],
        default: 'user',
        type: String
    }
});
userSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next();
    this.password =await bcrypt.hash(this.password,12)
})
// Password checking
userSchema.methods.comparePassword = async (candidate, password) => {
    return await bcrypt.compare(candidate, password);
};


const User = mongoose.model('users', userSchema);
module.exports = User;

