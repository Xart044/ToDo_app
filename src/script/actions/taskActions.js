import {
    UPDATE_TASKS_SUCCESS,
    UPDATE_TASKS_ERROR   
} from '../constants/task'

import { AsyncStorage } from 'react-native';

export function UpdateTasks (array) {
    return function (dispatch) {
        try{
            AsyncStorage.setItem('todo_app',array)
            .then(()=>{
                dispatch({
                    type: UPDATE_TASKS_SUCCESS,
                    tasks: array,
                    tasksArr: JSON.parse(array)
                });
            })
        }
        catch(e){
            dispatch({
                type: UPDATE_TASKS_ERROR,
                error: e
            });
        }
    };
};
