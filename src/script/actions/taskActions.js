import {
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_ERROR,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_ERROR,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_ERROR   
} from '../constants/task'

export function UpdateTasks (array) {
    return function (dispatch) {
        try{
            dispatch({
                type: UPDATE_TASK_SUCCESS,
                tasks: array.reverse()
            });
        }
        catch(e){
            dispatch({
                type: UPDATE_TASK_ERROR,
                error: e
            });
        }
    };
};
export function AddNewTask (array) {
    return function (dispatch) {
    	try{
			dispatch({
                type: ADD_TASK_SUCCESS,
                tasks: array.reverse()
            });
    	}
    	catch(e){
			dispatch({
                type: ADD_TASK_ERROR,
                error: e
            });
    	}
    };
};
export function deleteTask (array) {
    return function (dispatch) {
        try{
            dispatch({
                type: DELETE_TASK_SUCCESS,
                tasks: array.reverse()
            });
        }
        catch(e){
            dispatch({
                type: DELETE_TASK_ERROR,
                error: e
            });
        }
    };
};
export function editTask (array) {
    return function (dispatch) {
        try{
            dispatch({
                type: EDIT_TASK_SUCCESS,
                tasks: array.reverse()
            });
        }
        catch(e){
            dispatch({
                type: EDIT_TASK_ERROR,
                error: e
            });
        }
    };
};
