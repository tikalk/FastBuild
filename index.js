#!/usr/bin/env node

var program = require('commander');
var exec = require('sync-exec');
var util = require('util');

program.parse(process.argv);

var javaVersionOutput = exec('java -version');
var firstQuotesIndex = javaVersionOutput.stderr.indexOf('"');
var SecondQuotesIndex = javaVersionOutput.stderr.indexOf('"',firstQuotesIndex + 1);
var javaVersion = javaVersionOutput.stderr.substr(firstQuotesIndex + 1,SecondQuotesIndex - firstQuotesIndex - 1);

console.log(javaVersion);
