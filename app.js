const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config/database");
const registerroutes = require("./routes/registerroutes");
const loginroutes = require("./routes/loginroutes");
const purchasesroutes = require("./routes/purchaseroutes");
const salesroutes = require("./routes/saleroutes");
const salelistroutes = require("./routes/saleslistroute");
const purchaselistroute = require("./routes/purchaselistroute");
// instantiating server
const app = express();
const passport = require("passport");
const Signup = require("./models/Signup");

// setting up mongoose
require("dotenv").config({ path: "./config/config.env" });
//connect mongoose
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});
// Check for db errors
db.on("error", function (err) {
  console.error(err);
});

//express sesssion
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  //cookie:{ maxAge:60*60*1000},
});

// views settings or configurations
app.set("view engine", "pug");
app.set("views", "./views");

// middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());
passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());

// const loginchecker = function(req, res, next){
//     if(req.path != '/login' && req.path != '/' && !req.session.user){
//       res.redirect ('/')
//     }
//     next()
//   }

// app.use(loginchecker)
// routes

app.use("/", registerroutes);
app.use("/", loginroutes);
app.use("/", salesroutes);
app.use("/", purchasesroutes);
app.use("/", salelistroutes);
app.use("/", purchaselistroute);
// handling non existing routes
app.get("*", (req, res) => {
  res.status(404).send("OOPS! WRONG ADDRESS");
});

// server
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`server listen on port ${port}`));
