// main.js
//
console.log("top");

// 1) Create a Promise object (runs immediately)
const p = new Promise((resolve, reject) => {
	console.log("inside promise executor");
	resolve("done");
});

console.log("after promise creation");

// 2) Observe the Promise (reaction runs later)
p.then((value) => {
	console.log("then:", value);
});

console.log("bottom");
