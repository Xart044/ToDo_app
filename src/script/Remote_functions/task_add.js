export default function(name,done,array){
	if(typeof array === 'string'){
		array = JSON.parse(array);
	}else{
		if(typeof array === 'object'){
			array = Array.from(array)
		}
	}
	array.push({
		id:(new Date()).getTime(),
		text:name,
		done:done
	});
	return JSON.stringify(array);
}