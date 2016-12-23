import React, { Component } from 'react';
import { View } from 'react-native';

import InputInterface from './../containers/InputInterface';
import TaskList from './../containers/TaskList';

export default class Layout extends Component {
    render() {
        return ( 
        	<View>
	            <InputInterface/>
	            <TaskList/>
            </View>
        );
    }
}