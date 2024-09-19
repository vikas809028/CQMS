const express = require("express");
const que = require("../models/querySchema");
const router2 = express.Router();

router2.get("/status/:status", async (req, res) => {
  try {
    const status = req.params.status;
  const Queries = await que.find({ status: status });
  return res.json({mag:"success",q:Queries})
  } catch (error) {
    return res.json({mag:"failed",error:error})
  }
 
});

router2.get("/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
  const Query = await que.findById();
  return res.send(Query);
  } catch (error) {
    return res.json({mag:"failed",error:error})
  }
 
});
router2.patch("/resolvequery/:id", async (req, res) => {
  try {
    const id = req.params.id;
  const Query = await que.findById(id);
  if(Query.status=="p"){
    Query.status="pro"
  }
  else if(Query.status="pro"){
    Query.status="c"
  }
  Query.save();
  return res.send(Query);
  } catch (error) {
    return res.json({mag:"failed",error:error})
  }
 
});



module.exports = router2;

