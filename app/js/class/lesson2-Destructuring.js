// 数组解构赋值
{
	let a, b, rest;
	[a, b] = [1, 2];
	console.log(a, b)
}

{
	let a, b, rest;
	[a, b, ...rest] = [1, 2, 3, 4, 5];
	console.log(a, b, rest)
}



{
	let a, b, c, rest;
	[a, b, c=3] = [1, 2];
	console.log(a, b, c)
}

// 使用场景
{
	let a = 1;
	let b = 2;
	[a, b] = [b, a];
	console.log(a, b)
}

{
	function f() {
		return [1, 2]
	}
	let a, b;
	[a, b] = f()
	// 以前
	// var a = f()[0]
	// var b = f()[1]
	console.log(a, b)
}


{
	function f() {
		return [1, 2, 3, 4, 5]
	}
	let a, b, c;
	[a,,,b] = f();
	console.log(a, b)
}


{
	function f() {
		return [1, 2, 3, 4, 5]
	}
	let a, b, c;
	[a,,...b] = f();
	console.log(a, b)
}

// 对象解构赋值

{
	let a, b;
	({a, b} = {a:1, b:2})
	console.log(a, b)
}

{
	let obj = {p: 42, q: true};
	let {p, q} = obj;
	console.log(p, q)
}

{
	let {a = 10, b = 5} = { a : 3 };
	console.log(a, b)
}

// 使用场景
{
	let metaData = {
		title: 'abc',
		test: [{
			title: 'test',
			desc: 'des'
		}]
	}
	let { title:esTitle, test:[{title:cnTitle}] } = metaData
	console.log(esTitle, cnTitle)
}
