// 字符串扩展 
{
	console.log('a', `\u0061`);
	console.log('s', `\u20BB7`);
	console.log('s', `\u{20BB7}`)
}

{
	let s = '𠮷';
	console.log(s, s.length);
	// es5
	console.log(s.charAt(0));
	console.log(s.charAt(1));
	console.log(s.charCodeAt(0));
	console.log(s.charCodeAt(1));

	// es6
	let str = '𠮷a';
	console.log(str.length);
	console.log(str.codePointAt(0));
	console.log(str.codePointAt(0).toString(16));
}


// 字符遍历器接口
{
	let str1 = 'pig';
	console.log(str1.length)
	for (let i=0; i<str1.length; i++){

		console.log('es5', str1[i])
	}
  // es6
	for (let letter of str1){
		console.log('es6', letter)
	}
}

 // 常见方法
{
	let str = 'string';
	console.log('includes', str.includes("c"));  //false
	console.log('startWith', str.startsWith('str'));  //true
	console.log('endWith', str.endsWith('g'));  //true
	console.log(str.repeat(2)); // stringstring
}

// 模板字符串
{
	let name = "connie";
	let str = `i am ${name}`;
	console.log(str)
}

// 标签模板???
{
	let user = {
		name: "zhangsan",
		age: 18
	}
	console.log(info`who is a man named ${user.name}, his is ${user.age} years old`);
	function info(s, v1, v2){
		console.log(s, v1, v2)
		return s + v1 + v2
	}
}

// 补白 适用于日期或数字场景补白
{
	console.log('1'.padStart(2, '0'))
	console.log('1'.padEnd(2, '0'))
}

// raw对\转译
{
	console.log(String.raw`hi\n${1+3}`);
	console.log(`hi\n${1+3}`)
}
