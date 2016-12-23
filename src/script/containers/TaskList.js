import React, { Component } from 'react';
import { View, Text, ScrollView, AsyncStorage, Alert} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Task from './../components/Task';
import ModalEdit from './../containers/ModalEdit';
import { UpdateTasks } from './../actions/taskActions';

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
    componentWillMount() {
        AsyncStorage.getItem('todo_app')
        .then((value)=>{
            this.props.UpdateTasks(value);
        })
        .catch(e=>console.log(e)) 
        // AsyncStorage.removeItem('todo_app')      
    }
    // componentDidMount() {
    //     console.log(this.props.task.tasks);
    //     if(typeof this.props.task.tasks === 'string'){
    //         this.setState({
    //             tasks: JSON.parse(this.props.task.tasks)
    //         });
    //     } 
    //     else{
    //         this.setState({
    //             tasks: this.props.task.tasks
    //         });            
    //     }
    //     this.forceUpdate();      
    // }
    render() {
        let arr = this.props.task.tasksArr;
        console.log(this.props.task.tasksArr, typeof this.props.task.tasksArr);
        if(typeof this.props.task.tasksArr === 'string'){
            arr = JSON.parse(this.props.task.tasksArr);
        }
        let TasksLayout;
        if(arr.length === 0){
            TasksLayout = <Text style={{'textAlign': 'center','fontSize': 32,'padding':20}}>Please, add some tasks</Text>
        }
        else{              
            TasksLayout =
                <View>
                    <Text>You have: {arr.length} tasks</Text>
                     <ScrollView 
                        style={{'marginBottom': 20}}
                    >
                        {
                            arr.map((el,ind)=>{
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
        UpdateTasks: bindActionCreators(UpdateTasks,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
