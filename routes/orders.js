var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', async (req, res, next) =>{
  var id=1;
  
  res.status(201);
  res.json({id:id,message:'Order created successfully'});
});

router.delete('/:id',async (req, res, next)=>{
    var userId = req.params.id;
    var addressId=req.query.addressId.split(',');
    res.status(200);
    res.json({message:'Order cancelled successfully.'});
  })

module.exports = router;
