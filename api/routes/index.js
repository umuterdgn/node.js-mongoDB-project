var express = require('express');
var router = express.Router();
const fs = require('fs');

let routes = fs.readdirSync(__dirname);


for (let route of routes) {
  if (route.includes(".js") && route !== "index.js") {

    try {
      router.use("/" +route.replace(".js", ""), require('./'+route));
      console.log("route", route);
    } catch (err) {
      console.error(`Failed to load route ${route}: ${err.message}`);
      }

}


};

module.exports = router;
