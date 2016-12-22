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

const initialState = {
    tasks: [],
    error: ''
};

export default function (state = initialState, action) {
    switch (action.type){
        case ADD_TASK_SUCCESS:
            return {...state, tasks: action.tasks, error: ''};
            break;
        case ADD_TASK_ERROR:
            return {...state, error: action.error};
            break;
        case DELETE_TASK_SUCCESS:
            return {...state, tasks: action.tasks, error: ''};
            break;
        case DELETE_TASK_ERROR:
            return {...state, error: action.error};
            break;
        case EDIT_TASK_SUCCESS :
            return {...state, tasks: action.tasks, error: ''};
            break; 
        case EDIT_TASK_ERROR :
            return {...state, error: action.error};
            break;       
        default:
            return state;
    }
}