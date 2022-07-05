const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Sale = require("../models/Sale");

router.get("/saleslist", async (req, res) => {
  try {
    const sale = await Sale.find();
    res.render("salesrecord", { users: sale });
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

module.exports = router;
