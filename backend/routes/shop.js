const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
// Models
const Shop = require('../models/shop');
const ShopRoles = require('../models/shop_roles');

// Register Route
router.post("/shop-new", passport.authenticate('jwt', {session:false}),(req,res,next) =>{
    let user = {
        userId: req.body.user.userId,
        role: req.body.user.role
    }
    let newShop = new Shop({
        shopName: req.body.shop.shopName,
        shopAddress: req.body.shop.shopAddress,
        shopCity: req.body.shop.shopCity,
        shopState: req.body.shop.shopState,
        shopZip: req.body.shop.shopZip,
        shopRate: req.body.shop.shopRate,
        shopTax: req.body.shop.shopTax,
        hoursOfOp: 
            {
                monday: {
                    start: req.body.shop.hoursOfOp.monday.start,
                    end: req.body.shop.hoursOfOp.monday.end
                },
                tuesday: {
                    start: req.body.shop.hoursOfOp.tuesday.start,
                    end: req.body.shop.hoursOfOp.tuesday.end
                },
                wednesday: {
                    start: req.body.shop.hoursOfOp.wednesday.start,
                    end: req.body.shop.hoursOfOp.wednesday.end
                },
                thursday: {
                    start: req.body.shop.hoursOfOp.thursday.start,
                    end: req.body.shop.hoursOfOp.thursday.end
                },
                friday: {
                    start: req.body.shop.hoursOfOp.friday.start,
                    end: req.body.shop.hoursOfOp.friday.end
                },
                saturday: {
                    start: req.body.shop.hoursOfOp.saturday.start,
                    end: req.body.shop.hoursOfOp.saturday.end
                },
                sunday: {
                    start: req.body.shop.hoursOfOp.sunday.start,
                    end: req.body.shop.hoursOfOp.sunday.end
                },
            }
        
});
console.log(newShop);

// ADD SHOP : Messages
Shop.addShop(newShop, user,(err, permissions) => {
        if(err){
            res.json({success: false, msg: "Something went wrong."})
        }else {
            if(permissions){                    
                res.json({success: true, msg: 'Shop added.'})
            } else {                
                res.json({success: false, msg: 'Permissions denied.'})
            }
        }
    });

});


router.get("/shop-list", passport.authenticate('jwt', {session:false}),(req,res,next) =>{
    const userId = req.user._id;
    ShopRoles.getShopsByUserId(userId,(err,shopList)=>{
        if(err) throw err;
        if(!shopList){
            return res.json({success: false, msg: "No shops found"});
        }
        res.json({
            shop_list: shopList.shops
        })
    });

});


/*
TODO: IMPLEMENT
// UPDATE SHOP : Messages
Shop.editShop(updateShop, user,(err, permissions) => {
    if(err){
        res.json({success: false, msg: "something went wrong"})
    }else {
        if(permissions){                    
            res.json({success: true, msg: 'shop updated'})
        } else {                
            res.json({success: false, msg: 'permissions denied'})
        }
    }
});

*/


module.exports = router;
