import {
    SET_ITEM,
    SET_ITEM_ERROR
} from '../actions/menuAction'

const INITIAL_STATE = {
    item:[],
    item_error: ''
}

export default (state= INITIAL_STATE,action) => {
    switch(action.type){
        case SET_ITEM:
            const { item } = action
            return {
                ...state,
                item:item,
                item_error:''
            };
        case SET_ITEM_ERROR:
            
            return {
                ...state,
                item:[],
                item_error:action.payload
            };
        default:
            return state;
            
    }
}