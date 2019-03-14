const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Shop Schema
const ShopSchema = mongoose.Schema({
    shopName: {
        type: String
    },
    shopAddress: {
        type: String,
    },
    shopCity: {
        type: String,
    },
    shopState: {
        type: String,
    },
    shopZip: {
        type: String
    },
    shopRate: {
        type: Number,
        required: true
    },
    shopTax: {
        type: Number,
        requried: true
    },
    users: [
        {
            userId: String,
            role: String
        }
    ]
});

const Shop = module.exports = mongoose.model('Shop', ShopSchema);

module.exports.getShopByUserId = function(user_id, callback) {
    const query = {_id : user_id}
    Shop.findById(query, callback);
}

module.exports.addShop = function(newShop, callback) {
    try {
        newShop.save(callback);
    } catch (error) {
        throw error;
    }
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null, isMatch);
    });
};