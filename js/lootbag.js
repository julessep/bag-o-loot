'use strict';

const sqlite3  = require('sqlite3').verbose();
const { argv: [,, ...args] } = process;
const [action, toy, name, status] = args;
const db = new sqlite3.Database('loot.sqlite')

db.run(`DROP TABLE IF EXISTS children`);
db.run("CREATE TABLE IF NOT EXISTS children (name TEXT, toy TEXT, status TEXT)");
    
function addChild (db, name, toy) {

};

function listChildren (db) {

};

function listToys (db, name) {

};

function removeChild (db, name, toy) {

};

function deliver (db, name) {

};



module.exports = { addChild, listChildren, listToys, removeChild, deliver };
