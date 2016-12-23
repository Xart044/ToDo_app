import {
    UPDATE_TASKS_SUCCESS,
    UPDATE_TASKS_ERROR   
} from '../constants/task'

export function UpdateTasks (array) {
    return function (dispatch) {
        try{
            dispatch({
                type: UPDATE_TASKS_SUCCESS,
                tasks: array.reverse()
            });
        }
        catch(e){
            dispatch({
                type: UPDATE_TASKS_ERROR,
                error: e
            });
        }
    };
};
