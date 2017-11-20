const Express = require("express");
const hb = require("express-handlebars");
const router = Express.Router();
const garden = require("./routes/garden");

const port = 3000;
const host = "localhost";

const app = Express();

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
