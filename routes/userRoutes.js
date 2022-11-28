const express = require('express');
const router= express.Router();
const {registration,login}=require('../controller/users');
router.get("/",(req,res)=>{
    res.render("user")
})
router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/register",(req,res)=>{
    res.render("regis")
})
router.post('/postdata',registration);
router.post('/postlogin',login);
module.exports=router;