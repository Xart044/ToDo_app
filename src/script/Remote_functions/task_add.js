/**
 * function for adding task into task array
 * @param  {{string}}     	text     text of the task
 * @param  {{boolean}}    	done     task status
 * @param  {{array}}   		array    task array
 * @return {{json}}         		 json that inputs into UpdateTasks
 */
export default function(text,done,array){
	if(typeof array === 'string'){
		array = JSON.parse(array);
	}else{
		if(typeof array === 'object'){
			array = Array.from(array)
		}
	}
	array.push({
		id:(new Date()).getTime(),
		text:text,
		done:done
	});
	return JSON.stringify(array);
}