const Express = require("express");
const router = Express.Router();
const fs = require("fs");

//const garden = require('./views/garden.handlebars')

router.get("/", (res, req) => {
  res.render('garden')
})

module.exports = router;
