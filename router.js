const express = require("express");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const session = require("express-session");

const request = require("./main/extern");


/* Reading global variables from config file */
dotenv.config();
let PORT = process.env.PORT;

/*
 * Express setup
*/
urlencodedParser = bodyParser.urlencoded({extended: false});

app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: "asdf98asdasdlk$§ZASHJDHSA",
    cookie: {maxAge: 3600000},
    resave: true,
    saveUninitialized: true
}));

//turn on serving static files (required for delivering css to client)
app.use(express.static("./public"));


//configure template engine
app.set("views", "views");
app.set("view engine", "pug");

app.listen(PORT, function () {
    console.log(`Zeltlager running and listening on port ${PORT}`);
});



app.get('/', (req, res) => {
//renders the menu page
    res.render("menu");
});

app.get('/team', (req, res) => {
//renders the menu page
    res.render("team");
});

app.get('/anmeldung', (req, res) => {
//renders the anmeldung page
    res.render("anmeldung");
});
app.get('/impressum', (req, res) => {
//renders the impressum page
    res.render("impressum");
});
app.get('/intern', (req, res) => {
//renders the intern page
    res.render("intern");
});
app.get("/*" ,(req, res) =>
{
    res.render("menu");
});
