const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');

const router = express.Router();

const Sale = require('../models/Sale');

const Creditsale = require('../models/Creditsale');
const Price = require('../models/Price');

 

router.get('/sales',async(req,res)=>{
    req.session.user = req.user;
    let user = req.session.user;
    res.locals.user = user;
    
   
    res.render('salesinput')
})


router.post('/sales', async(req,res)=>{
   
    try{
        const sale = new Sale(req.body);
        await sale.save()
        console.log(req.body)
        if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
        res.redirect('/saleslist')}
        else{res.redirect('/sales')}
        
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
        
        console.log(req.body)
        if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
        res.redirect('/creditsaleslist')
    }
    else{res.redirect('/creditsales')}
    }
    catch(err){
        res.render('creditsales')
      
    }
})











module.exports=router;