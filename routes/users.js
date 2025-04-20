var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", async (req, res, next) => {
  var id = 1;
  res.status(201);
  res.json({ id: id, message: "User created successfully" });
});

router.post("/:id/address", async (req, res, next) => {
  var userId = req.params.id;
  var address = req.body;
  res.status(200);
  res.json({ message: "Address added successfully." });
});

router.delete("/:id/address", async (req, res, next) => {
  var userId = req.params.id;
  var addressId = req.query.addressId.split(",");
  res.status(200);
  res.json({ message: `Address${addressId.length>1?'es':''} deleted successfully.` });
});

router.post("login/auth", (req, res) => {
  res.json(req.user.Auth({ username: req.body.username }));
});

router.post("login/refresh/auth", (req, res) => {
  var resData = req.user.AuthWithRefresh(req.body.refreshToken);
  res.status(201);
  res.json(resData);
});

router.post("logout",(req, res) => {
  var resData = req.user.AuthWithRefresh(req.body.refreshToken);
  res.json({message:'logouted successfully'});
})

module.exports = router;
