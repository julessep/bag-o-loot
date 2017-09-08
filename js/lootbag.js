'use strict';

const sqlite3  = require('sqlite3').verbose();
const { argv: [,, ...args] } = process;
const [action, toy, name, status] = args;
const db = new sqlite3.Database('loot.sqlite')

// db.run(`DROP TABLE IF EXISTS children`);
db.run("CREATE TABLE IF NOT EXISTS children (name TEXT, toy TEXT, status TEXT)");
    
function addChild (db, name, toy) {
	db.run(`INSERT INTO children VALUES("${name}", "${toy}", "false")`);
	console.log(`added ${name}!`);
};

function listChildren (db) {
	db.each('SELECT * FROM children', (err, {name}) => {
		if (err) {
			return console.log(err.toString());
		}
		console.log(`${name}`);
	});
};

function listToys (db, name) {
	db.each(`SELECT toy FROM children WHERE name = "${name}"`, (err, {toy}) => {
		if (err) {
			return console.log(err.toString());
		} else {
			console.log(`${name}'s toys: ${toy}`);
		}
	});
};

function removeChild (db, name, toy) {
	db.run(`DELETE FROM children WHERE name is "${name}" AND toy is "${toy}"`);
	console.log(`${name} was removed!`);
};

function deliver (db, name) {
	db.run(`update children SET status = "true" WHERE name is "${name}"`);
	console.log(`delivered!`);
};

if (action == "add") {
	addChild(db, toy, name, status);
} else if (action == "remove") {
	removeChild(db, toy, name, status);
} else if (action == "ls") {
	if (!toy) {
	listChildren(db);
	} else {
		listToys(db, toy);
	}
} else {
	deliver(db, name);
}

module.exports = { addChild, listChildren, listToys, removeChild, deliver};
