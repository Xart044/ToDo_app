import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import Layout from './components/Layout';

const store = configureStore();

/**
 * disabling warnings
 * @type {Boolean}
 */
console.disableYellowBox = true;

class todo_app extends Component {
  render() {
    return (
    	<Provider store={store}>
      		<Layout/>
      	</Provider>
    );
  }
}

AppRegistry.registerComponent('todo_app', () => todo_app);