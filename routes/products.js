var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/address/:id',(req,res,next)=>{
  var userId = req.params.id;
  var address=req.body;
  res.json({message:'Address added successfully.'});
})

module.exports = router;
