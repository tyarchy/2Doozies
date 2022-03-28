const express = require("express");
const routes = require("./controllers/api");
// Just added two below 3-26
const session = require("express-session");
const exphbs = require("express-handlebars");
// const schedule = require('node-schedule');

const app = express();
const PORT = process.env.PORT || 3001;

// just added two below 3-26
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// just added two below 3-26
const sess = {
  secret: "Its a secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const auth = require("./utils/auth");

//not sure we need below.  Module only uses helpers and we don't have that.
const hbs = exphbs.create({ auth });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
