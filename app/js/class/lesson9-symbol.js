{
	// 声明,独一无二
	let a1 = Symbol()
	let a2 = Symbol()
	console.log(a1===a2) //false

	// 声明，注册一个key值
	let a3 = Symbol.for('akey')
	let a4 = Symbol.for('akey')
	console.log(a3===a4) //true

}

{
	let a1 = Symbol.for('abc')
	let obj = {
		[a1]: 123,
		'a': 345,
		'b': 567
	}
	console.log(obj) //{ a: 345, b: 567, Symbol(abc): 123}

	// let of 拿不到Symbol的值
	for (let [key,value] of Object.entries(obj)){
		console.log(key, value) // a 345 b 567
	}

	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(item, obj[item])  // Symbol(abc), 123
	})
	
}

{

}