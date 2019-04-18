const express = require("express");

const router = express.Router();

//This route will serve json when called from the server.js file
//Tests profile route
//@access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Profile works!" });
});

module.exports = router;
