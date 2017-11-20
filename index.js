const Express = require("express");
const hb = require("express-handlebars");
const router = Express.Router();
const garden = require("./routes/garden");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require('express-flash-messages');
const cookieSession = require('cookie-session');


const port = 3000;
const host = "localhost";

const app = Express();

const hbs = hb.create({
  partialsDir: "views/",
  defaultLayout: "main"
});

app.use(cookieSession({
  name: 'session',
  keys: ['asdf1234567890qwer']
}));

app.use(Express.static(`${__dirname}/public`))

app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash());

app.use(cookieParser());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/", garden);

app.listen(port, host, () =>
  console.log(`Now listening on http://${host}:${port}/`)
);
