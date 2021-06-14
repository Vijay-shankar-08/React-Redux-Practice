export const GET_USER = 'GET_USER'
export const SET_USER = 'SET_USER'
export const SET_ERROR = 'SET_ERROR'


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