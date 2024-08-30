// priority: 10

/**
 * 输入一个对象返回对象的类型
 * @param obj 输入一个对象
 * @returns string 参数类型
 */
global.checkType =(obj)=>{
	let res = Object.prototype.toString.call(obj)
	res = res.replace('[', '').replace(']', '').split(' ')[1]
	return res
}

/**
 * 输入一个对象打印对象所有方法,不包括原型链上的方法,和debug方法输出地方不同,一个输出在log，一个输出在debug.json
 * @param obj 输入一个对象
 */
global.showObjPro=(obj)=>{
	if (global.checkType(obj) == 'Object' || global.checkType(obj) == 'Array'){
		console.log('start')
		for (let key in obj){
			console.log(key)
		}
		console.log('done')
	}else if(global.checkType(obj) == 'JavaObject' || global.checkType(obj) == 'JavaMap'){
		console.log('start')
		for (let key in obj){
			console.log(key)
		}
		console.log('done')
	}else{
		throw '应当传入类或者数组到showObjPro中'
	}
}
/**
 * 输入一个对象，打印对象所有属性的值,不包括原型链上的属性,和debug方法输出地方不同
 * @param obj 输入一个对象
 */
global.showObjDetail=(obj)=>{
	let keys = Object.keys(obj)
	console.log('start')
	for (let key in keys){
		let tmpkey = keys[key]
		if(tmpkey == 'drops'){
			continue
		}
		if (typeof obj[tmpkey] != 'function'){
			try{
				if(tmpkey == 'fullNBT'){
					obj[tmpkey]['recipeBook'] = 'recipeBook太占地方了被替换成词句'
				}
				console.log(tmpkey + ': ' + typeof obj[tmpkey] + ' ' + obj[tmpkey])
			}catch(e){
				continue
			}
		}
	}
	console.log('end')
	
}