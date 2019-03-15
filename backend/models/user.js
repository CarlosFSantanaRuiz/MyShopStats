const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: String,
    role: {type: String, required: true},
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByEmail = function(email,callback){
    const query = {email: email}
    User.findOne(query, callback);
};

// Generate salt when saving adding user
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null, isMatch);
    });
};