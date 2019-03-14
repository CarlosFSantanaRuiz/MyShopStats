const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
// Models
const Shop = require('../models/shop');

// Register Route
router.post("/shop-new",(req,res,next) =>{
    let newShop = new Shop({
        ShopName: req.body.ShopName,
        shopAddress: req.body.shopAddress,
        shopCity: req.body.shopCity,
        shopState: req.body.shopState,
        shopZip: req.body.shopZip,
        shopRate: req.body.shopRate,
        shopTax: req.body.shopTax,
        users: [
            {
                userId : req.body.userId,
                role: req.body.role
            }
        ]

    });

Shop.addShop(newShop,(err, shop) => {
        if(err){
            res.json({success: false, msg:'Failed to add Shop'})
        }else {
            res.json({success: true, msg: 'Shop added'})
        }
    });
});

module.exports = router;
