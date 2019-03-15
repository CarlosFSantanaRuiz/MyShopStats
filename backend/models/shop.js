const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const ShopRoles = require('./shop_roles');

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
    hours_of_op: [
        {
            monday: {
                type: Number,
                required: true
            },
            tuesday: {
                type: Number,
                required: true
            },
            wednesday: {
                type: Number,
                required: true
            },
            thursday: {
                type: Number,
                required: true
            },
            friday: {
                type: Number,
                required: true
            },
            saturday: {
                type: Number,
                required: true
            },
            sunday: {
                type: Number,
                required: true
            }
        }
    ]
});

const Shop = module.exports = mongoose.model('Shop', ShopSchema);

module.exports.getShopByUserId = function(shopId, callback) {
    const query = {_id : shopId}
    Shop.findById(query, callback);
}


module.exports.addShop = function(newShop, user, callback) {
        if(newShop.role === "admin" || newShop.role == "owner");
            // Save shop and create the role
            newShop.save(function(err,shop) {
            try {
                // Get the id from the created shop and add to roles
                const shopRole = new ShopRoles({
                    _id: user.userId,
                    shops: [{
                        _id: shop.id,
                        role: user.role
                    }]
                }); 
                shopRole.save(callback); 
            } catch (err) {
                throw err;
            }
        });
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null, isMatch);
    });
};