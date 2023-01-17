const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://computer-components-api.p.rapidapi.com/case_fan',
    params: {limit: '30', offset: '0'},
    headers: {
      'X-RapidAPI-Key': '318d70f77cmshe81299698056892p1ab477jsn129d1b208fe2',
      'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com'
    }
  };
  try {
    const rawApiPowerSuppliers = await axios.request(options);
    res.status(200).json(rawApiPowerSuppliers.data);
  } catch (error) {
    res.status(300).json({ error: error.message });
  }
})

module.exports = router;