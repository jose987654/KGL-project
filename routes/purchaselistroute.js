const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Purchase = require("../models/Purchase");

router.get("/purchaselist", async (req, res) => {
  
    try {
      const purchase = await Purchase.find();
      res.render("purchasesrecord", { users:purchase});
    } catch (err) {
      console.log(err);
      res.send("failed to get product data");
    }
   
});

router.get("/purchaselist/update", async (req, res) => {
  try {
    const purchase = await Purchase.find();
    res.render("purchasesrecordupdate", { users: purchase });
  } catch (err) {
    console.log(err);
    res.send("failed to get product data");
  }
});

router.post("/purchaselist/delete", async (req, res) => {
  try {
    await Purchase.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
});


router.get('/purchaselist/edit/:id', async (req, res)=>{
  try{
    const purchase = await Purchase.findOne({ _id:req.params.id});
    res.render('editpurchases', {user:purchase});
    } 
  catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }   
 
});

router.post('/purchaselist/edit', async (req, res)=>{
  try{
     await Purchase.findOneAndUpdate({ _id:req.query.id},req.body);
    res.redirect("/purchaselist");
    } 
  catch (err) {
    res.status(400).send("Unable to update item in the database");
  }   
 
});



module.exports = router;
