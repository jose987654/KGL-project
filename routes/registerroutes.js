const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const router = express.Router();
const Signup = require('../models/Signup');

router.get('/register',(req,res)=>{
    res.render('signup')
})
router.get('/account',(req,res)=>{
    res.render('accounts')
})

router.post('/register', async(req, res) => {
  const signup = new Signup(req.body);
  console.log(req.body)
  await Signup.register(signup, req.body.password, (err) => {
      if (err) {
          res.status(400).render('signup')
          console.log(err)
      } else {
          res.redirect('/login')
      }
  })

})




module.exports = router;