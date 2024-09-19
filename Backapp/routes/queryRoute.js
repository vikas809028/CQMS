const express = require("express");
const que = require('../models/querySchema');
const user = require('../models/userModel');
const Router =express.Router();
const Qrouter =express.Router();
// routing

Router.get('/pq/:id',async (req,res)=>{
    const id = req.params.id;
    const a=await que.find({uid:id,status:'p'});
    return res.send(a)
})
Router.get('/pro/:id',async (req,res)=>{
    const id=req.params.id;
    const a=await que.find({uid:id,status:'pro'});
    return res.send(a)
})
Router.get('/com/:id',async (req,res)=>{
    const id=req.params.id;
    const a=await que.find({uid:id,status:'c'});
    return res.send(a)
})




Router.post("/addquery",async (req,res)=>{
    console.log(req.body);
    const {department,subject,query,id} =req.body;
    const r = await que.create({
        department:department,
        subject:subject,
        query:query,
        uid:id,
        status:'p'
    });
    return res.send({msg : "success"})
})




module.exports=Router;