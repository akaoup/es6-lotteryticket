{
	// 参数默认值
	function test(x, y = 'world'){
		console.log(x, y )
	}
	test('hello') //hello world
	test('hello', 'vue') //hello vue
}

{
	let x = 'test'
	function test(y=x){
		console.log(x, y) 
	}
	test() // test test 调用的时候没有参数，所以x没有值，y也没有值
	test('test2') //test test2 调用的时候有参数，参数里没定义x， x是全局作用域的x，y是参数test2

	
}

{
	let x = 'test'
	function test(x, y=x){
		console.log(x, y) 
	}
	test() // undefined undefined 调用的时候没有参数，所以x没有值，y也没有值
	test('test2') //test2 test2

}
// 参数
{
	function test(...arg){
		let sum = 0
		for(let value of arg){
			sum += value
		}
		console.log(sum) // 10
	}
	test(1,2,3,4)
}

{
	console.log(...[1, 2, 4])
}

{
	let fn = v => v+2
	//let fn = funtion(v){return v+2}
	console.log(fn(2))  // 4
}



// 尾调用
{
	function fn(x){
		console.log(x)
	}
	function test(x){
		return fn(x)
	}
	test(3)  // 3
}

