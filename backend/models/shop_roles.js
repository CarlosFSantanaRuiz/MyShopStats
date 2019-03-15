const mongoose = require('mongoose');

//  Schema
const ShopRolesSchema = mongoose.Schema({
    _id: {
        type: String
    },
    shops: [{
        _id: {
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
        
    }]

});

const ShopRoles = module.exports = mongoose.model('ShopRoles', ShopRolesSchema);

module.exports.addShopRole = function(newShopRole, callback) {
    try {
        if(newShopRole.role != "technician"){
            newShopRole.save(callback);
        }
        else {
            callback(null, "permissions denied")
        }
    } catch (eror) {
        throw error;
    }
};

module.exports.getShopsByUserId = function(userId, callback) {
    const query = {_id : userId.toString()}
    ShopRoles.findById(query, callback);
};