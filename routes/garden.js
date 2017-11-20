const Express = require("express");
const router = Express.Router();
const fs = require("fs");

//const garden = require('./views/garden.handlebars')

router.get("/", (req, res) => {
  res.render("garden", { gardens: "" });
});

module.exports = router;
