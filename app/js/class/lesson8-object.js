{
	//简洁表示法
	let o = 1;
	let k = 2;
	let es5 = {
		o:o,
		k:k,
		fn: function(){
			return o+k
		}
	}
	let es6 = {
		o, 
		k,
		fn(){
			return o+k
		}
	}
	console.log(es5.fn(), es6.fn()) // 3 3
}

{
	//属性表达式
	let a = 'b';
	let es5 = {
		a: 'c'
	}

	let es6 = {
		[a]: 'c'
	}

	console.log(es5, es6) // {a:"c"} {b:"c"}
}


{
	console.log(Object.is('abc', 'abc')) // true
	console.log(Object.is([], [])) // false 数组是引用类型 地址不一致 
}

// 浅拷贝
{
	console.log(Object.assign({a:'a'},{b:'b'}))  // {a:'a', b:'b'}
}

{
	let obj = {o:123, k:456}
	for(let [key, value] of Object.entries(obj)){
		console.log(key, value)
	}
}

