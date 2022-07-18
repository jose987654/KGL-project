const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');

const router = express.Router();

const Sale = require('../models/Sale');
const Signup = require('../models/Signup');
const Creditsale = require('../models/Creditsale');
const Price = require('../models/Price');



router.get('/sales',(req,res)=>{
    req.session.user = req.user;
    let user = req.session.user;
    res.locals.user = user;
   
    res.render('salesinput',{title:"KGL SALES"})
})


router.post('/sales', async(req,res)=>{
   
    try{
        const sale = new Sale(req.body);
        await sale.save()
        res.redirect('/sales')
        console.log(req.body)
    }
    catch(err){
        res.render('salesinput')
      
    }
})

router.get('/creditsales',(req,res)=>{
    req.session.user = req.user;
    let user = req.session.user;
    res.locals.user = user;
    res.render('creditsales',{title:"KGL CREDIT SALES"})
})

router.post('/creditsales', async(req,res)=>{
   
    try{
        const creditsale = new Creditsale(req.body);
        await creditsale.save()
        res.redirect('/creditsales')
        console.log(req.body)
    }
    catch(err){
        res.render('creditsales')
      
    }
})











module.exports=router;