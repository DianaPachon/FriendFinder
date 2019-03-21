// Dependencies
var express = require("express");
var path = require("path");

// express app and port for heroku
var app = express();
var PORT = process.env.PORT || 7070;

// express app handling data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("app"));

// Routes
require("./app/routing/apiRoutes.js")(app);

require("./app/routing/htmlRoutes.js")(app);

// start listening... 
app.listen(PORT, function() {
    console.log("listening on port ", PORT);
});
