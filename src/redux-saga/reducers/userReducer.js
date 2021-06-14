import {
    SET_USER,
    SET_ERROR
} from '../actions/userAction'

const INITIAL_STATE = {
    user:[],
    error: ''
}

export default (state= INITIAL_STATE,action) => {
    switch(action.type){
        case SET_USER:
            const { user } = action
            return {
                ...state,
                user:user,
                error:''
            };
        case SET_ERROR:
            
            return {
                ...state,
                user:[],
                error:action.payload
            };
        default:
            return state;
            
    }
}
