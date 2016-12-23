import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputInterface from './InputInterface';
import TaskList from './TaskList';

class Layout extends Component {
    render() {
        return ( 
        	<View>
	            <InputInterface/>
	            <TaskList/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);