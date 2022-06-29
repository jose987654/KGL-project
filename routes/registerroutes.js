const express = require('express');
const mongoose = require('mongoose');
// const Washer = require('../models/Washer')

const router = express.Router();

router.get('/trial',(req,res)=>{
    res.render('register',{title:"Register Car Washer"})
})
router.get('/register',(req,res)=>{
    res.render('new',{title:"new"})
})



module.exports=router;