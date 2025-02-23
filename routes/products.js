var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next)=> {
  var product={};
  res.status(200);
  res.json(product);
});

router.post('/',async (req, res, next)=>{
  var products=req.body;
  var id=0;
  res.status(201);
  res.json({id:id,message:'Products added successfully.'});
})

router.patch('/:id',async (req, res, next)=>{
  res.status(201);
  res.json({message:"updated successfully."});
})

module.exports = router;
