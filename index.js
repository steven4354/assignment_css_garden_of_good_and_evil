const app = require("express");
const hb = require("express-handlebars");
const garden = require("garden");

const port = 3000;
const host = "localhost";

const hbs = hb.create({
  partialsDir: "views/",
  defaultLayout: "main"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/", garden);

app.listen(port, host, () =>
  console.log(`Now listening on http://${host}:${port}/`)
);
