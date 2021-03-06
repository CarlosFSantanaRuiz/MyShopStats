const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const async = require("async");
const xoauth2 = require('xoauth2');
const crypto = require("crypto");
const bcrypt = require('bcryptjs');

// Config Files
const config = require('../config/database');
const configGmail = require('../config/gmail');
const configURI = require('../config/uri');

// Email
const nodemailer = require('nodemailer');


// Models
const User = require('../models/user');
const UserSettings = require('../models/user_settings');



// Register Route
router.post("/register",(req,res,next) =>{
  
    // Create a random temp password
    var password = Math.random().toString(36).slice(-8);

    // Create User
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: password,
        role: req.body.role
    });

    // Generate settings for owner or get settings form body
    let userSettings = function(){
      if(req.body.role === 'owner'){
        const settings = new UserSettings({
          canAddInvoices: true,
          canDeleteInvoices: true,
          canAddShops: true,
          canDeleteShops: true,
          canAddShopGoals: true,
          canAddTech: true,
          canAddTechGoals: true,
          canDeleteTechs: true,
          canAddUsers: true
        });
        return settings
      }else {
        const settings = new UserSettings({
          canAddInvoices: req.body.canAddInvoices,
          canDeleteInvoices: req.body.canDeleteInvoices,
          canAddShops: req.body.canAddShops,
          canDeleteShops: req.body.canDeleteShops,
          canAddShopGoals: req.body.canAddShopGoals,
          canAddTech: req.body.canAddTech,
          canAddTechGoals: req.body.canAddTechGoals,
          canDeleteTechs: req.body.canDeleteTechs,
          canAddUsers: req.body.canAddUsers
        });
        return settings
      }
    };
    
    User.addUser(newUser, userSettings(), (err, userSettings) => {
      async.waterfall([
        function(done) {
          crypto.randomBytes(20, function(err, buf) {
            var token = buf.toString('hex');
            done(err, token);
          });
        },
        function(token, done) {
          User.findById({ _id: userSettings._id }, function(err, user) {
            if (!user) {
              return res.json({
                  success: false,
                  msg: "No user found with this email"
              })
            }
            // Set password token         
            user.resetPasswordExpires = (Date.now() + 3600000) // 1 hour
            user.resetPasswordToken = token;
            user.save(function(err) {
              done(err, token, user);
            });
          });
        },
        function(token, user, done) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  type: 'OAuth2',
                  user: configGmail.user,
                  clientId: configGmail.clientId,
                  clientSecret: configGmail.clientSecret,
                  refreshToken: configGmail.refreshToken
                },
              });
            let mailOptions = function(){
              if( user.role === 'owner'){
                var mailOptions = {
                  from: 'Staff at MyShopStatistics<myshopstatistics@gmail.com>',
                  to: user.email,
                  subject: 'Email Verification',
                  text: 'Please click on the following link to proceed with your registration.\n\n' +
                  configURI.baseURI + 'user/reset/' + token + '\n\n' 
                  + 'My Shop Statistics \n\n' + 'Your Shop, Your Data, Your Stats.'
                };
                return mailOptions
              }else {
                var mailOptions = {
                  from: 'Staff at MyShopStatistics<myshopstatistics@gmail.com>',
                  to: user.email,
                  subject: 'My Shop Statistics Invite',
                  text:  'You are receiving this because you have been invited to My Shop Statistics.\n\n' +
                  'Please click on the following link to accept and proceed. \n\n' +
                  configURI.baseURI + 'user/reset/' + token + '\n\n' +
                  'If you did not request this, please ignore this email.\n'
                };
                return mailOptions
              }
            }

            transporter.sendMail(mailOptions(),function(err, callback){
                if(err) throw err;
                res.json({
                    success: true,
                    msg: 'Email sent to: ' + user.email
                });
                callback(null, 'Email sent.')
            });
        }
      ], function(err) {
        if (err) return next(err);
        res.json({
            success: false,
            msg: "Failed to send email."
        });
      });
    });
}); //END: Register Route


// User email & password Authentication 
router.post('/login',(req,res,next) =>{
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
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
        });
        } else {
                return res.json({success:false, msg: " Wrong Password"});
            }
        });
    });
});// END: User email & password Authentication 

// Forgot Password
router.post('/forgot', function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {
            return res.json({
                success: false,
                msg: "No user found with this email"
            })
          }          
          user.resetPasswordExpires = (Date.now() + 3600000) // 1 hour
          user.resetPasswordToken = token;
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
          const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                type: 'OAuth2',
                user: configGmail.user,
                clientId: configGmail.clientId,
                clientSecret: configGmail.clientSecret,
                refreshToken: configGmail.refreshToken
              },
            });
          var mailOptions = {
              from: 'Staff at MyShopStatistics<myshopstatistics@gmail.com>',
              to: user.email,
              subject: 'Password Reset Request',
              text:  'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              configURI.baseURI + 'user/reset/' + token + '\n\n' +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n'
          };
          transporter.sendMail(mailOptions,function(err, callback){
              if(err) throw err;
              res.json({
                  success: true,
                  msg: 'Email sent to: ' + user.email
              });
              callback(null, 'Email sent.')
          });
      }
    ], function(err) {
      if (err) return next(err);
      res.json({
          success: false,
          msg: "Failed to send email."
      });
    });
  });// END: Forgot Password
  
  // GET Reset Password
  router.get('/reset/:token', function(req, res) {
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
      if (!user) {
        return res.json({
            success: false,
            msg: "Password reset token is invalid or has expried."
        });
      }
      res.json({
        token: req.params.token,
        email: user.email
      });
    });
  });  // END: GET Reset Password

// POST Reset Password
  router.post('/reset/:token', function(req, res) {
    async.waterfall([
      function(done) {
        User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
          if (!user) {
            return res.json({
                success: false,
                msg: 'Password reset token is invalid or has expired.'
            });
          }
          if(req.body.password === req.body.confirm) {
            bcrypt.genSalt(10, (err, salt)=>{
              bcrypt.hash(req.body.password, salt, (err, hash)=>{
                  if(err) throw err;
                  user.password = hash;
                  user.resetPasswordToken = undefined;
                  user.resetPasswordExpires = undefined;
                  user.save(function(err) {
                      if(err) throw err;
                      done(err, user);
                  });
              });
          });
          } else {
              return res.json({
                  success: false,
                  msg: "Passwords do not match."
              });
          };
        });
      },
      function(user, done) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: configGmail.user,
              clientId: configGmail.clientId,
              clientSecret: configGmail.clientSecret,
              refreshToken: configGmail.refreshToken
            },
          });
        var mailOptions = {
            from: 'Staff at MyShopStatistics<myshopstatistics@gmail.com>',
            to: user.email,
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' +
            'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
        };
        transporter.sendMail(mailOptions,function(err, callback){
            if(err) throw err;
            res.json({
                success: true,
                msg: 'Email sent to: ' + user.email
            });
            callback(null, 'Email sent.')
        });
      }
    ], function(err) {
      res.json({
          success: false,
          msg: 'Failed to send email.'
      });
    });
  });// END: POST Reset Password




module.exports = router;