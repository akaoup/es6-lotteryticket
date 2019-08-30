## let 和 const

var



## 解构赋值

什么是解构赋值



#####数组解构赋值

#####对象解构赋值

#####函数参数解构赋值

#####字符串解构赋值

#####布尔值解构赋值

#####数值解构赋值



## 正则扩展

**正则新增特性：**

##### 构造函数的变化

##### 正则方法的扩展

##### u修饰符

##### y修饰符

##### s修饰符



## 字符串扩展

**字符串新增特性：**

##### unicode表示法

##### 遍历接口

```javascript
{
	let str1 = 'pig';
	// console.log(str1.length)
	for (let letter of str1){
		console.log('es6', letter)
	}
}
```

##### 模板字符串

```javascript
{
	let name = "connie";
	let str = `i am ${name}`;
	console.log(str)
}

```

##### 判断字符的首尾及内容是否包含**

```javascript
{
	let str = 'string';
	console.log('includes', str.includes("c"));  //false
	console.log('startWith', str.startsWith('str'));  //true
	console.log('endWith', str.endsWith('g'));  //true
	console.log(str.repeat(2)); // stringstring
}
```



##### 字符补白

```javascript
// 补白 适用于日期或数字场景补白
{
	console.log('1'.padStart(2, '0'))
	console.log('1'.padEnd(2, '0'))
}
```

##### raw对\转译

```javascript
// raw对\转译
{
	console.log(String.raw`hi\n${1+3}`);
	console.log(`hi\n${1+3}`)
}
```



## 数值扩展

##### 判断数字是不是整数

```javascript
// 判断一个数是不是整数,参数必须是一个数值
{
	console.log(Number.isInteger(15)); // true
	console.log(Number.isInteger(25.0)); //true
	console.log(Number.isInteger(25.1)); // false
	console.log(Number.isInteger('25')); // false
}
```

##### 判断数字范围

```javascript
// 判断一个数是不是在-2的53次方和2的53次方之间，除了两个端点本身
{
	console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
	console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
	// 是否在上面两个常量之间
	console.log(Number.isSafeInteger(10));  // true
}
```

#####返回带小数数字的整数部分

```javascript
// 判断带小数数字的整数部分，并返回
// es5里Math.floor Math. 向上向下取整
{
	console.log(Math.trunc(4.1)) // 4
	console.log(Math.trunc(4.9)) // 4
}
```

#####判断整数，负数，0

```javascript
// 判断一个数是正数，负数还是0
{
	console.log(Math.sign('aaa')); //NaN
	console.log(Math.sign('50')); // 1 会把字符转成Number类型
	console.log(Math.sign(5));  // 1
	console.log(Math.sign(-5)); // -1
	console.log(Math.sign(0));  // 0
}
```

#####求立方根

```javascript
// 求立方根
{
	console.log(Math.cbrt(-1)); // -1
	console.log(Math.cbrt(8)); //2
}
```



## 数组扩展

##### 伪数组转数组 Array.from 

**用法一**

```javascript
// 把伪数组或集合转成真正的数组
{
	// 假使拿到一个p集合
	let p = document.querySelectorAll('p');
	// p.map() 会报错，因为map是数组方法不能用它遍历
	// 所以得把这个集合转成真正的数组：
	let pArr = Array.from(p);
	pArr.map(function (item) {
		console.log(item.textContent)
	})
}
```

**用法二**

Array.from()还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理

```javascript
{
	let arr = Array.from([1, 2, 3], function(item){return item+2})
	console.log(arr)
}
```



##### 转换数组 Array.of 

```javascript
{
	let arr = Array.of(1, 2, 3);
	console.log(arr) // [1, 2, 3]

	let empty = Array.of();
	console.log(empty); // [] 一个空数组
}
```



##### 填充数组 fill 

fill()使用给定值，填充一个数组。数组中已有的元素，会被全部抹去再填充。fill()还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

```javascript
{
	console.log([1, 'a', undefined].fill(7));  // [7, 7, 7]
	// fill 参数 第二个参数和第三个参数可以指定填充的起始位置和结束位置
	console.log([1, 'a', undefined, 'bbb'].fill(7, 1, 3)); //[1, 7, 7, "bbb"]
}
```



##### 遍历 entries | keys | values 

ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

```javascript
{
	for(let index of ['1', 'c', 'kkk'].keys()){
		console.log(index)  // 0 1 2
	}

	for(let value of ['1', 'c', 'kkk'].values()){
		console.log(value)  // 1 c kkk
	}

	for(let [index, value] of ['1', 'c', 'kkk'].entries()){
		console.log(index, value)  
		// 0 "1"   
		// 1 "c"  
		// 2 "kkk"
	}
}
```



##### 查找 find | findIndex | includes

数组实例的find()用于找出第一个符合条件的数组元素。它的参数是一个回调函数，所有数组元素依次遍历该回调函数，直到找出第一个返回值为true的元素，然后返回该元素，否则返回undefined。

includes()方法查找数组包不包含这个元素，包含返回true，否则返回false，这三个两个方法都可以发现NaN，弥补了IndexOf()的不足。

```javascript
{
	console.log([1,2,3,4].find(function(item){
		return item > 3  // 4
	}))

	console.log([1,2,3,4].findIndex(function(item, index, arr){
		return item > 3  // 3
	}))
}

{
	console.log([1, 3, 5, NaN].includes(NaN)) // true
}
```



## 函数扩展

##### 参数默认值

```javascript
{
	// 参数默认值
	function test(x, y = 'world'){
		console.log(x, y )
	}
	test('hello') //hello world
	test('hello', 'vue') //hello vue
}
```

参数默认值所处的作用域，不是全局作用域，而是函数作用域。

```javascript
{
	let x = 'test'
	function test(x, y=x){
		console.log(x, y) 
	}
	test() // undefined undefined 调用的时候没有参数，所以x没有值，y也没有值
	test('test2') 
  // test2 test2 
  // 参数y的默认值等于x，由于处在函数作用域，所以x等于参数x，而不是全局变量x。
}
```



##### rest参数

用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```javascript
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
```



##### 扩展运算符 ...

##### 箭头函数

箭头函数有几个使用注意点。

- 函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象。
- 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
- 不可以使用arguments对象，该对象在函数体内不存在。

```javascript
{
	let fn = v => v+2
	//let fn = funtion(v){return v+2}
	console.log(fn(2))  // 4
}
```



##### this 绑定

##### 尾调用 提升性能

```javascript
{
	function fn(x){
		console.log(x)
	}
	function test(x){
		return fn(x)
	}
	test(3)  // 3
}
```



## 对象扩展

##### 简洁表示法

```javascript
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
```



##### 属性表达式

```javascript
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
```



##### 扩展运算符



#####比较 Object.is()

Object.is()用来比较两个值是否严格相等。它与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

```javascript
{
	console.log(Object.is('abc', 'abc')) // true
	console.log(Object.is([], [])) // false 数组是引用类型 地址不一致 
}
```

##### 浅拷贝 Object.assign()

它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象。只要有一个参数不是对象，就会抛出TypeError错误。如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

```javascript
{
	console.log(Object.assign({a:'a'},{b:'b'}))  // {a:'a', b:'b'}
}
```

##### 遍历 Object.entries

```javascript
{
	let obj = {o:123, k:456}
	for(let [key, value] of Object.entries(obj)){
		console.log(key, value)
	}
}
```



## Symbol数据类型

ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它通过Symbol函数生成。

```javascript
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
```

用法：

```javascript
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
}
```

普通遍历拿不到值，怎么办？

