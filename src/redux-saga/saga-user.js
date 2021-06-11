

export const GET_USER = 'GET_USER'
const SET_USER = 'SET_USER'
const SET_ERROR = 'SET_ERROR'

console.log('getusertriggerd')
export const getUser = () => ({
    type: GET_USER
    
})


export const setUser = (user) => ({
    type:SET_USER,
    user
})

export const setError = (error) => ({
    type:SET_ERROR,
    payload: error
})



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
