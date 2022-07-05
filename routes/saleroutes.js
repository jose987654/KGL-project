const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const router = express.Router();
const Sale = require('../models/Sale');

router.get('/sales',(req,res)=>{
    res.render('salesinput',{title:"KGL SALES"})
})


router.post('/sales', async(req,res)=>{
    //console.log(req.body)
    
        const sale = new Sale(req.body);
        await sale.save()
        res.redirect('/sales')
        console.log(req.body)
    
    // catch(err){
    //     res.render('accounts')
    //     // res.status(400).redirect('/login', {title:"Products ", routeName:"Products"})
    // }
})








module.exports=router;