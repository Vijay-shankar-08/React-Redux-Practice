export const GET_ITEM = 'GET_ITEM'
export const SET_ITEM = 'SET_ITEM'
export const SET_ITEM_ERROR = 'SET_ITEM_ERROR'


export const getItem = () => ({
    type: GET_ITEM
    
})


export const setItem = (item) => ({
    type:SET_ITEM,
    item
})

export const setItemError = (error) => ({
    type:SET_ITEM_ERROR,
    payload: error
})