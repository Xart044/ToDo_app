import React, { Component } from 'react';
import { View, Text, Modal, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editTask } from './../actions/taskActions'

class ModalEdit extends Component {
    state = {
      text: ''
    };
    SaveModal(){
      const newTasks = this.props.task.tasks.map((el, ind) => {
        if(el.id === this.props.obj.id){
          el.text = this.state.text;
        }
        return el;
      });
      this.props.editTask(newTasks);
      this.props.editHandler(false);
      this.setState({
        text: '' 
      });
    }
    CloseModal(){
      this.props.editHandler(false);
      this.setState({
        text: '' 
      });
    }
    render() {
        return ( 
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.props.visible}
            onRequestClose={() => {this.props.editHandler(false);}}
            >
           <View style={{marginTop: 22}}>
            <View style={{'flexDirection':'column','justifyContent':'space-between'}}>
              <View>
                <Text>Edit your task: </Text>     
                <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text ? this.state.text : this.props.obj.text}           
                />          
              </View>
              <View style={{'flexDirection':'row','justifyContent':'space-between'}}>
                <Button
                  onPress = {this.CloseModal.bind(this)}
                  title = "Close"
                  color = "#44B498"
                />
                <Button
                  onPress = {this.SaveModal.bind(this)}
                  title = "Save and Close"
                  color = "#44B498"
                />
              </View>
            </View>
           </View>
          </Modal>  
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
      editTask: bindActionCreators(editTask,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
