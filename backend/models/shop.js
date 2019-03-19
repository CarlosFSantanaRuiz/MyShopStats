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
    hoursOfOp:
        {
            monday: {
                start: {type: Date, required: true},
                end: {type: Date, required: true}
            },
            tuesday: {
                start: {type: Date, required: true},
                end: {type: Date, required: true}
            },
            wednesday: {
                start: {type: Date, required: true},
                end: {type: Date, required: true}
            },
            thursday: {
                start: {type: Date, required: true},
                end: {type: Date, required: true}
            },
            friday: {
                start: {type: Date, required: true},
                end: {type: Date, required: true}
            },
            saturday: {
                start: {type: Date, required: true},
                end: {type: Date, required: true}
            },
            sunday: {
                start: {type: Date, required: true},
                end: {type: Date, required: true}
            }
        }
});

const Shop = module.exports = mongoose.model('Shop', ShopSchema);


module.exports.addShop = function(newShop, user, callback) {
        if(newShop.role === "admin" || newShop.role === "owner");
            // Save shop and create the role
            newShop.save(function(err,shop) {
            try {
                // Get the id from the created shop and add to roles
                const shopRole = new ShopRoles({
                    _id: user.userId,
                    shops: [{
                        _id: shop.id,
                        name: newShop.shopName,
                        role: user.role
                    }]
                });                                 
                shopRole.save(callback); 
            } catch (err) {
                throw err;
            }
        });
};

