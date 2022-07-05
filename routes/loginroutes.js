const express = require('express');
const passport = require('passport');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/login',(req,res)=>{
    res.render('index')
})

router.post('/login', passport.authenticate('local',
    {failureRedirect: '/login'}),
    (req,res)=>{
        //giving a session to the user when successfully logged in. 
        req.session.user=req.user;
        //redirect user to car registration page after logging in. 
        res.redirect("/dashboard")
        // res.render('new');
})

router.get('/logout', (req, res) => {
    req.session.destroy(()=>{
      res.redirect("/login")
    })
  });

// router.post('/login',passport.authenticate('local',{failureRedirect:'/login?alert=error'}),(req,res)=>{
//     res.redirect("/user")?alert=error
//     console.log(req.body)
// })

module.exports = router;