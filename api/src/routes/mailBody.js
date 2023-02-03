const { Router } = require('express');

const router = Router();

router.get('/mailBody',(req, res) =>{
  try {
    console.log("mailBody listening...")
    res.status(200).json("<h2>Respuesta del back</h2>")
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

module.exports = router;