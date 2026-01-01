async function example() {
	await Promise.resolve("done");
	console.log("after");
}

example();
console.log("outside");
