const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const router = express.Router();
const Signup = require('../models/Signup');

router.get('/register',(req,res)=>{
    // req.session.user = req.user;
    // let user = req.session.user;
    // res.locals.user = user;
    res.render('signupnew')
})
router.get('/account',(req,res)=>{
    req.session.user = req.user;
    let user = req.session.user;
    res.locals.user = user;
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


//Employee lists
router.get("/employeelist", async (req, res) => {
    req.session.user = req.user;
      let user = req.session.user;
      res.locals.user = user;

    try {
      if(req.session.user.userrole === "Manager" ||
      req.session.user.userrole === "Director"){
      const signup = await Signup.find();
      res.render("employeelist", { users: signup });}
      else{
        res.render("accounts")
      }
    } catch (err) {
      console.log(err);
      res.send("failed to get product data");
    }
  });
  
  router.get("/employeelist/update", async (req, res) => {
    req.session.user = req.user;
      let user = req.session.user;
      res.locals.user = user;
    try {
      const signup = await Signup.find();
      res.render("employeelistupdate", { users: signup });
    } catch (err) {
      console.log(err);
      res.send("failed to get product data");
    }
  });
  
  router.post("/employeelist/delete", async (req, res) => {
    req.session.user = req.user;
      let user = req.session.user;
      res.locals.user = user;
    try {
      await Signup.deleteOne({ _id: req.body.id });
      res.redirect("back");
    } catch (err) {
      res.status(400).send("Unable to delete item in the database");
    }
  });
  
  
  router.get('/employeelist/edit/:id', async (req, res)=>{
    req.session.user = req.user;
      let user = req.session.user;
      res.locals.user = user;
    try{
      const signup = await Signup.findOne({ _id:req.params.id});
      res.render('editemployee', {user:signup});
      } 
    catch (err) {
      res.status(400).send("Unable to delete item in the database");
    }   
   
  });
  
  router.post('/employeelist/edit', async (req, res)=>{
    try{
       await Signup.findOneAndUpdate({ _id:req.query.id},req.body);
      res.redirect("/employeelist");
      } 
    catch (err) {
      res.status(400).send("Unable to update item in the database");
    }   
   
  });




module.exports = router;