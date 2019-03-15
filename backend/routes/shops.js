const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
// Models
const Shop = require('../models/shop');

// Register Route
router.post("/shop-new", passport.authenticate('jwt', {session:false}),(req,res,next) =>{
    let user = {
        userId: req.body.user.userId,
        role: req.body.user.role
    }
    let newShop = new Shop({
        ShopName: req.body.shop.ShopName,
        shopAddress: req.body.shop.shopAddress,
        shopCity: req.body.shop.shopCity,
        shopState: req.body.shop.shopState,
        shopZip: req.body.shop.shopZip,
        shopRate: req.body.shop.shopRate,
        shopTax: req.body.shop.shopTax,
        hours_of_op: [
            {
                monday: req.body.shop.monday,
                tuesday: req.body.shop.tuesday,
                wednesday: req.body.shop.wednesday,
                thursday: req.body.shop.thursday,
                friday: req.body.shop.friday,
                saturday: req.body.shop.saturday,
                sunday: req.body.shop.sunday,
            }
        ]
    });


// Check permissions and respond with message
Shop.addShop(newShop, user,(err, permissions) => {
        if(err){
            res.json({success: false, msg: "something went wrong"})
        }else {
            if(permissions){                    
                res.json({success: true, msg: 'shop added'})
            } else {                
                res.json({success: false, msg: 'permissions denied'})
            }
        }
    });

});



module.exports = router;
