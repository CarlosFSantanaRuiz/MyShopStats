const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
// Models
const User = require('../models/user');


// Register Route
router.post("/register",(req,res,next) =>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'})
        }else {
            res.json({success: true, msg: 'User registered'})
        }
    });
});




// Login Route
router.post('/authenticate',(req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: "User not found"});
        }
        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 86400
                });

            res.json({
                success: true, 
                token: 'JWT '+ token, 
                user: {
                id: user._id,
                email: user.email,
                role: user.role
            }
        });
        } else {
                return res.json({success:false, msg: " Wrong Password"});
            }
        });
    });
});

// User Profile
router.get('/profile', passport.authenticate('jwt', {session:false}),(req,res,next) =>{
    res.json({
        _id:req.user._id,
        name:req.user.name,
        email: req.user.email,
        role: req.user.role
    })
});

module.exports = router;