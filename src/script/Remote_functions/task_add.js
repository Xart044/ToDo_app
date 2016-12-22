export default function(name,done,array){
	array.push({
		id:(new Date()).getTime(),
		text:name,
		done:done
	});
	return array;
}