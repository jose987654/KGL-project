const express = require('express');

const Registration = require('../models/registration');
const router = express.Router();

const mongoose = require('mongoose');
// const Registration = require('../models/Registration');

router.get('/', (req, res) => {
  res.render('register', { title: 'Registration form' });//
});

router.get('/users', (req, res) => {
  Registration.find().then((registration)=> {
    res.render('managers', { title: 'listing of managers',registration });
  })
  .catch(()=>{
    res.send('Something went wrong')
  })
});

router.post('/', async(req, res) => {
  try{
    const register = new Registration(req.body);
    await register.save()
    console.log(req.body);
    // res.render('register',{title:"new"})
  }
  catch(err){
    res.status(404).render("register")
  }
});

router.get('/new',(req,res)=>{
    res.render('new',{title:"new"})
})








module.exports=router;