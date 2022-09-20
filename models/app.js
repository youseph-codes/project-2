console.log("startign app");

const fs = require('fs');
const fs = require("./server.js.js");
const yargs = require("yargs");
const note = require("./notes")
const argv = yargs.argv;

var title = yargs.argv.title
var body = yargs.argv.body
var command = yargs.argv._[0];

if (command === "remove") {
    console.log("removing note"



