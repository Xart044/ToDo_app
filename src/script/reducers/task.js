import {
    UPDATE_TASKS_SUCCESS,
    UPDATE_TASKS_ERROR 
} from '../constants/task'

const initialState = {
    tasks: [],
    error: ''
};

export default function (state = initialState, action) {
    switch (action.type){
        case UPDATE_TASKS_SUCCESS:
            return {...state, tasks: action.tasks, error: ''};
            break;
        case UPDATE_TASKS_ERROR:
            return {...state, error: action.error};
            break;      
        default:
            return state;
    }
}