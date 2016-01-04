#!/usr/bin/env node

var program = require('commander');
var exec = require('sync-exec');
var util = require('util');
var uuid = require('node-uuid');

program.parse(process.argv);

// generate a uuid for this operation
var id = uuid.v4();

// first, realize java version
var javaVersionOutput = exec('java -version');
var firstQuotesIndex = javaVersionOutput.stderr.indexOf('"');
var SecondQuotesIndex = javaVersionOutput.stderr.indexOf('"',firstQuotesIndex + 1);
var javaVersion = javaVersionOutput.stderr.substr(firstQuotesIndex + 1,SecondQuotesIndex - firstQuotesIndex - 1);

// second, realize maven version
var mavenVersionOutput = exec('mvn -v');
var mavenVersion = mavenVersionOutput.stderr.substr(13,mavenVersionOutput.stderr.indexOf(' ') - 13).trim();

// if we dont have a .git2 directory, create it
try{
	fs.mkdirSync('.git2');
	// now also copy .git => .git2 ???
}catch(e){
	// ignore. it means it already exists
}

// now commit the current changes to .git2

exec('git --git-dir=.git2 commit -m "' + id + '"');



console.log(javaVersion);
