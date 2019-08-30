{
	let arr = Array.of(1, 2, 3);
	console.log(arr) // [1, 2, 3]

	let empty = Array.of();
	console.log(empty); // [] 一个空数组
}

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

{
	let arr = Array.from([1, 2, 3], function(item){return item+2})
	console.log(arr)
}

// fill
{
	console.log([1, 'a', undefined].fill(7));  // [7, 7, 7]
	// fill 参数 第二个参数和第三个参数可以指定填充的起始位置和结束位置
	console.log([1, 'a', undefined, 'bbb'].fill(7, 1, 3)); //[1, 7, 7, "bbb"]
}


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

// ？？？
{
	console.log([1, 2, 3, 4].copyWithin(0, 3, 4))
}

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
