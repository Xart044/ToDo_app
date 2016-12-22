import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Task from './../components/Task';
import ModalEdit from './../containers/ModalEdit';

class TaskList extends Component {
    state = {
        modalVisible: false,
        modalObj: {text:''}
    };
    editHandler(state){
        this.setState({
            modalVisible: state
        });
    }
    modalObjHandler(obj){
        this.setState({
            modalObj: obj
        });        
    }
    render() {
        let TasksLayout;
        if(this.props.task.tasks.length === 0){
            TasksLayout = <Text style={{'textAlign': 'center','fontSize': 32,'padding':20}}>Please, add some tasks</Text>
        }
        else{              
            TasksLayout =
                <View>
                    <Text>You have: {this.props.task.tasks.length} tasks</Text>
                     <ScrollView 
                        style={{'marginBottom': 20}}
                    >
                        {
                            this.props.task.tasks.reverse().map((el)=>{
                                return <Task
                                            key={el.id}
                                            keyVal = {el.id}
                                            text = {el.text} 
                                            decoration = {el.done ? 'line-through' : 'none'} 
                                            editHandler = {this.editHandler.bind(this)}
                                            modalObjHandler = {this.modalObjHandler.bind(this)}
                                        />
                            })
                        }
                    </ScrollView>
                </View>
        }
        return ( 
        	<View>
                {TasksLayout}
                <ModalEdit
                    visible = {this.state.modalVisible}
                    editHandler = {this.editHandler.bind(this)}
                    obj = {this.state.modalObj}
                />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
