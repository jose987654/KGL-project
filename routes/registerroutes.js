const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const router = express.Router();
const Manager = require('../models/Manager');

router.get('/register',(req,res)=>{
    res.render('fa_m_reg',{title:"Farm register"})
})


router.post('/register', async(req, res) => {
  const manager = new Manager(req.body);
  await Manager.register(manager, req.body.password, (err) => {
      if (err) {
          res.status(400).render('fa_m_reg', {
              title: "Farm register"
          })
          console.log(err)
      } else {
          res.redirect('/login')
      }
  })

})




module.exports = router;