// let,  const
function test () {
	for (let i=1; i<3; i++) {
		console.log(i);
	}
	// console.log(i) //i is not defined
}

let a = 1;
// let a = 3; Duplicate declaration "a"
test();