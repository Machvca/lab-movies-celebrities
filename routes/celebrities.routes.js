const router = require("express").Router();

/* GET celebrities page */
router.get("/celebrities", (req, res, next) => {
  res.render("celebrities");
});

module.exports = router;
