const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSettings = require('../models/user_settings');
// User Schema
const UserSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
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
module.exports.addUser = function(newUser, settings, callback) {
    if(settings.canAddUsers){
        newUser.save(function(err, user){
            try {
                const userSettings = new UserSettings({
                    _id: user._id,
                    canAddInvoices: settings.canAddInvoices,
                    canDeleteInvoices: settings.canDeleteInvoices,
                    canAddShops: settings.canAddShops,
                    canDeleteShops: settings.canDeleteShops,
                    canAddShopGoals: settings.canAddShopGoals,
                    canAddTechs: settings.canAddTechs,
                    canAddTechGoals: settings.canAddTechGoals,
                    canDeleteTechs: settings.canDeleteTechs,
                    canAddUsers: settings.canAddUsers
                });
                userSettings.save(callback);
            } catch (err) {
                console.log(err);
                
            }
        });
    }
};

// Generate salt when saving adding user
module.exports.updateUser = function(newPassword, updateUser, callback) {
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newPassword, salt, (err, hash)=>{
            if(err) throw err;
            updateUser.password = hash;
            updateUser.resetPasswordToken = undefined;
            updateUser.resetPasswordExpires = undefined;
            updateUser.updateOne(callback);
        });
    });
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null, isMatch);
    });
};