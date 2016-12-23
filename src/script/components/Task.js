import React, { Component } from 'react';
import { TextInput, Text, View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateTasks } from './../actions/taskActions';

class Task extends Component {
	onDeleteEvent(){
		let arrayAfterChange = JSON.parse(this.props.task.taskArr);
		console.log(arrayAfterChange.length);
		arrayAfterChange = arrayAfterChange.filter((element)=>{
			console.log(element.id,this.props.keyVal)
			return element.id !== this.props.keyVal;
		})
		console.log(arrayAfterChange.length);
		this.props.UpdateTasks(JSON.stringify(arrayAfterChange));
	}
	onEditEvent(){
		this.props.modalObjHandler({text:this.props.text,id:this.props.keyVal});
		this.props.editHandler(true);
		console.log('pressed');
	}
	changeStatusHandler(){
		let arrayAfterChange = JSON.parse(this.props.task.tasksArr);
		arrayAfterChange.map((el, ind)=>{
			if(el.id ===this.props.keyVal){
				el.done = !el.done;
			}
			return el;
		})
		this.props.UpdateTasks(JSON.stringify(arrayAfterChange));
	}
	render() {
		return (
			<View
				style={{flexDirection: 'row', justifyContent:'space-between',alignItems:'center','marginTop': 5,'marginBottom': 5}}
				onPress = {()=>{console.log('touched')}}
			>
				<View style={{flex: 4}}>
					<TouchableHighlight  
						onPress = {this.changeStatusHandler.bind(this)}
					>
						<Text style={{'textDecorationLine':this.props.decoration, 'fontSize': 20,'paddingRight': 10,'paddingLeft': 10}}>{this.props.text}</Text>
					</TouchableHighlight>
				</View>
				<View style={{'flex': 1}}>
					<Button
						onPress = {this.onDeleteEvent.bind(this)}
						style={{'width':30}}
		                title = "Delete"
		                color = "#44B498"
		    		/>
		    		<Button
						onPress = {this.onEditEvent.bind(this)}
						style={{'width':30}}
		                title = "Edit"
		                color = "#44B498"
		    		/>
				</View>
			</View>
		);
	}
}
function mapStateToProps(state) {
    return {
        task: state.task
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	UpdateTasks: bindActionCreators(UpdateTasks,dispatch),
    	UpdateTasks: bindActionCreators(UpdateTasks,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);