const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('login')
})

router.post('/', passport.authenticate('local',
    {failureRedirect: '/login?alert=error'}),
    (req,res)=>{
        //giving a session to the user when successfully logged in. 
        req.session.user=req.user
        //redirect user to car registration page after logging in. 
        res.redirect('/dashboard');
})


module.exports = router;