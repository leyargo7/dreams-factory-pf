const { Router } = require("express");
const passport = require("passport");
const { isUserAuthenticated } = require("../middlewares/auth");
const User = require("../models/User");
const router = Router();

router.get("/auth/user", isUserAuthenticated, (req, res) => {
  res.json(req.user);
});

//obtener usuario por id
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  res.json(user);
});

//actualizar usuario
router.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { address } = req.body;

    const user = await User.findOne({ _id: id });
    if(!user){
      return res.status(404).json({msg: 'User not found'});
    }else{
        const actUser = await User.updateOne({_id: id}, {address});
        res.status(200).send({msg: "User updated", actUser});
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;