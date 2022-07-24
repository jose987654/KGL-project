const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const router = express.Router();
const Purchase = require('../models/Purchase');
const Farm = require('../models/Farm');

router.get('/purchases',(req,res)=>{
    req.session.user = req.user;
    let user = req.session.user;
    res.locals.user = user;
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
    res.render('purchases')}
    else{
        res.render("home")
    }
})


router.post('/purchases', async(req,res)=>{
    //console.log(req.body)    
        const purchase = new Purchase(req.body);
        await purchase.save()
        res.redirect('/purchaselist')
        console.log(req.body)
    
    // catch(err){
    //     res.render('accounts')
    //     // res.status(400).redirect('/login', {title:"Products ", routeName:"Products"})
    // }
})

router.get('/farm',(req,res)=>{
    req.session.user = req.user;
    let user = req.session.user;
    res.locals.user = user;
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
    res.render('farm')}
    else{
        res.render('home') 
    }
})

router.post('/farm', async(req,res)=>{
    //console.log(req.body)    
        const farm = new Farm(req.body);
        await farm.save()
        res.redirect('/farmlist')
        console.log(req.body)
    
    // catch(err){
    //     res.render('accounts')
    //     // res.status(400).redirect('/login', {title:"Products ", routeName:"Products"})
    // }
})




module.exports=router;