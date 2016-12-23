import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import addtask from './../Remote_functions/task_add'
import { UpdateTasks } from './../actions/taskActions'

class InputInterface extends Component {
	state = {
		text: '' 
	};
	onButtonPress(){
		if(this.state.text!==''){
	  		this.props.UpdateTasks(addtask(this.state.text,false,this.props.task.tasks));
	  		this.setState({
	  			text: '' 
	  		});
		}
	};
    render() {
        return ( 
        	<View>
	            <Text>Add new task: </Text>
	            <View>
	            	<TextInput
				        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}						
	            	/>
	            	<Button
                        onPress = {this.onButtonPress.bind(this)}
                        title = "Add task"
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
    	UpdateTasks: bindActionCreators(UpdateTasks,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputInterface);