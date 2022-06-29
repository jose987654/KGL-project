const express = require('express');
const passport = require('passport');
const router = express.Router();
const Userlogin = require('../models/Userlogin');
router.get('/',(req,res)=>{
    res.render('userreg')
})

router.post('/', async(req, res) => {
    try{
      const userlogin = new Userlogin(req.body);
      await userlogin.save()
      console.log(req.body);
      res.render('userreg')
    }
    catch(err){
      res.status(404).render("userreg")
    }
  });


module.exports = router;