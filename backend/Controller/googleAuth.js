const userSchema = require("../models/userModel.js")
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const google = async (req, res, next) => {
    const {email , profilePicture , name} = req.body;
    console.log(email)
    try {
      const user = await userSchema.findOne({ email: req.body.email });
      if (user) {
        const token = jwt.sign({ id: user._id , name:req.body.name , profilePicture:req.body.profilePicture , email:req.body.email }, process.env.secret);
        console.log(token)
  
        const { password: pass, ...rest } = user._doc;
        res
          .cookie('token', token, {
               // Prevents JavaScript from accessing the cookie
           sameSite:"Lax"   
        })
          .status(200)
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
        const newUser = new userSchema({
          name:
            req.body.name.split(' ').join('').toLowerCase() +
            Math.random().toString(36).slice(-4),
          email: req.body.email,
          password: hashedPassword,
          profilePicture: req.body.profilePicture,
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.secret);
        console.log(token)
  
        const { password: pass, ...rest } = newUser._doc;
        res
          .cookie('token', token, { httpOnly: true })
          .status(200)
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = {google}