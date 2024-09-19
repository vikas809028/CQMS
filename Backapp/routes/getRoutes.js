const express = require("express");
const que = require("../models/querySchema");
const user = require("../models/userModel");
const router3 = express.Router();


router3.get('/getall',async (req,res)=>{
    try{
        allque=await que.find();
        pque=await que.find({status:'p'});
        proque=await que.find({status:'pro'});
        cque=await que.find({status:'c'});
        u=await user.find();
        res.json({msg:"Success",allque:allque,pque:pque,cque:cque,proque:proque,user:u});
    }
    catch(e){
        res.json({msg:e})
    }
})


module.exports = router3;
