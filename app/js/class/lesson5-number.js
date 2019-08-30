{
	// 二进制 0b
	console.log(0b111110111)
	// 八进制 0o
	console.log(0o767)
}

// 判断一个数有尽
{
	console.log('15', Number.isFinite(15)); // true
	console.log(Number.isFinite(NaN)); //false
	console.log(Number.isNaN(NaN)); //true
}

// 判断一个数是不是整数,参数必须是一个数值
{
	console.log(Number.isInteger(15)); // true
	console.log(Number.isInteger(25.0)); //true
	console.log(Number.isInteger(25.1)); // false
	console.log(Number.isInteger('25')); // false
}

// 判断一个数是不是在-2的53次方和2的53次方之间，除了两个端点本身
{
	console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
	console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
	// 是否在上面两个常量之间
	console.log(Number.isSafeInteger(10));  // true
	console.log(Number.isSafeInteger('10'));
}

// 判断带小数数字的整数部分，并返回
// es5里Math.floor Math. 向上向下取整
{
	console.log(Math.trunc(4.1)) // 4
	console.log(Math.trunc(4.9)) // 4
}

// 判断一个数是正数，负数还是0
{
	console.log(Math.sign('aaa')); //NaN
	console.log(Math.sign('50')); // 1 会把字符转成Number类型
	console.log(Math.sign(5));  // 1
	console.log(Math.sign(-5)); // -1
	console.log(Math.sign(0));  // 0
}

// 求立方根
{
	console.log(Math.cbrt(-1)); // -1
	console.log(Math.cbrt(8)); //2
}



