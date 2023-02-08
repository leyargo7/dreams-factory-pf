const { Router } = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isUserAuthenticated } = require("../middlewares/auth");
const User = require("../models/User");
const router = Router();

router.get("/auth/user", isUserAuthenticated, (req, res) => {
  res.json(req.user);
});


//obtener todos los usuarios que en la propiedad erased esten en false
router.get("/allusers", async (req, res) => {
  try{
    const users = await User.find({erased: false});
    res.send(users);

  }catch(error){
    res.status(400).json({ msg: err.message });
  }
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

//actualizar password usuario
router.put("/userpass/:id", async (req, res) => {
  const { id } = req.params;
  const { currentPass, password } = req.body;

  const user = await User.findOne({ _id: id });
  if(!user){
    return res.status(404).json({msg: 'User not found'});
  }else{
    bcrypt.compare(currentPass, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user.save((err) => {
            if (err) throw err;
            res.status(200).json({ msg: "Password updated" });
          });
        });
      } else {
        return res.status(400).json({ msg: "Current password is incorrect" });
      }
    });
  }

});

//eliminar usuario
router.delete("/user/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if(!user){
      return res.status(404).json({msg: 'User not found'});
    }else{
      const userUpdate = await User.updateOne({_id: id}, {erased: true});
      res.status(200).send(userUpdate);
    }

  }catch(err){
    res.status(400).json({ msg: err.message });
  }
});

//obtener los usuarios borrados
router.get("/dbusersdeleted", async (req, res) => {
  try{
    const users = await User.find({erased: true});
    res.send(users);

  }catch(error){
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;