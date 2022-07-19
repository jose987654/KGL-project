const express = require('express');
const passport = require('passport');
const router = express.Router();
const mongoose = require('mongoose');

const Purchase = require("../models/Purchase");
const Sale = require("../models/Sale");
const Creditsale = require('../models/Creditsale');

router.get('/home',async (req,res)=>{
  req.session.user = req.user;
    let user = req.session.user;
    res.locals.user = user;
    try{
      
    let totalSales = await Sale.aggregate([
      {'$group': {_id:'$all',
      totalsells : {$sum:'$total'}}}  
])
    let creditSales = await Creditsale.aggregate([
      {'$group': {_id:'$all',
      creditsells : {$sum:'$total'}     
    }}  
])
    let purchases = await Purchase.aggregate([
      {'$group': {_id:'$all',
      totalpurchases : {$sum:'$total'}
    }}  
])
  res.render('home', {sale:totalSales[0], credit:creditSales[0],purchase:purchases[0]} )
}
catch (err) {
  console.log(err);
  res.send("failed to get product data");
}})

router.get('/login',(req,res)=>{
    res.render('index')
})

router.post('/login', passport.authenticate('local',
    {failureRedirect: '/login'}),
    (req,res)=>{
        //giving a session to the user when successfully logged in. 
        req.session.user = req.user;
        let user = req.session.user;
        res.locals.user = user;
               //redirect user to car registration page after logging in. 
        res.redirect("/home")
        //  res.render('salesinput');
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