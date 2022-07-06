const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Sale = require("../models/Sale");
const Signup = require('../models/Signup');
const Creditsale = require('../models/Creditsale');
const Price = require('../models/Price');
router.get("/saleslist", async (req, res) => {

  try {
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
    const sale = await Sale.find();
    res.render("salesrecord", { users: sale });}
    else{
      res.redirect("/sales")
    }
  } catch (err) {
    console.log(err);
    res.send("failed to get product data");
  }
});

router.get("/saleslist/update", async (req, res) => {
  try {
    const sale = await Sale.find();
    res.render("salesrecordupdate", { users: sale });
  } catch (err) {
    console.log(err);
    res.send("failed to get product data");
  }
});

router.post("/saleslist/delete", async (req, res) => {
  try {
    await Sale.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
});


router.get('/saleslist/edit/:id', async (req, res)=>{
  try{
    const sale = await Sale.findOne({ _id:req.params.id});
    res.render('editsales', {user:sale});
    } 
  catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }   
 
});

router.post('/saleslist/edit', async (req, res)=>{
  try{
     await Sale.findOneAndUpdate({ _id:req.query.id},req.body);
    res.redirect("/saleslist");
    } 
  catch (err) {
    res.status(400).send("Unable to update item in the database");
  }   
 
});


// credit sales information
router.get("/creditsaleslist", async (req, res) => {

  try {
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
    const creditsale = await Creditsale.find();
    res.render("creditrecord", { users: creditsale });}
    else{
      res.redirect("/creditsales")
    }
  } catch (err) {
    console.log(err);
    res.send("failed to get product data");
  }
});

router.get("/creditsaleslist/update", async (req, res) => {
  try {
    const creditsale = await Creditsale.find();
    res.render("creditrecordupdate", { users: creditsale });
  } catch (err) {
    console.log(err);
    res.send("failed to get product data");
  }
});

router.post("/creditsaleslist/delete", async (req, res) => {
  try {
    await Creditsale.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
});


router.get('/creditsaleslist/edit/:id', async (req, res)=>{
  try{
    const creditsale = await Creditsale.findOne({ _id:req.params.id});
    res.render('editcreditsales', {user:creditsale});
    } 
  catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }   
 
});

router.post('/creditsaleslist/edit', async (req, res)=>{
  try{
     await Creditsale.findOneAndUpdate({ _id:req.query.id},req.body);
    res.redirect("/creditsaleslist");
    } 
  catch (err) {
    res.status(400).send("Unable to update item in the database");
  }   
 
});


//price information

router.get('/pricelist',(req,res)=>{
  if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
  res.render('prices',{title:"KGL Prices"});}
  else{
    res.redirect("/prices")
  }
})

router.post('/pricelist', async(req,res)=>{ 
  try{
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
      const price = new Price(req.body);
      await price.save()
      res.redirect('/prices')
      console.log(req.body)}
  }
  catch(err){
      res.render('prices')
     }
})



router.get("/prices", async (req, res) => {

  try {
    
    const price = await Price.find();
    res.render("pricelist", { users:price });
  } catch (err) {
    console.log(err);
    res.send("failed to get product data");
  }
});

router.get("/prices/update", async (req, res) => {
  try {
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
    const price = await Price.find();
    res.render("pricelistupdate", { users: price });}
    else{
      res.redirect("/prices")
    }
  } catch (err) {
    console.log(err);
    res.send("failed to get product data");
  }
});

router.post("/prices/delete", async (req, res) => {
  try {
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
    await Price.deleteOne({ _id: req.body.id });
    res.redirect("back");}
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
});


router.get('/prices/edit/:id', async (req, res)=>{
  try{
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
    const price = await Price.findOne({ _id:req.params.id});
    res.render('editprice', {user:price});}
    } 
  catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }   
 
});

router.post('/prices/edit', async (req, res)=>{
  try{
    if(req.session.user.userrole === "Manager" ||
    req.session.user.userrole === "Director"){
     await Price.findOneAndUpdate({ _id:req.query.id},req.body);
    res.redirect("/prices");}
    } 
  catch (err) {
    res.status(400).send("Unable to update item in the database");
  }   
 
});





module.exports = router;
