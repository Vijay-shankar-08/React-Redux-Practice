import axios from 'axios'

export function requestGetItem(){
    
    return axios.request({
        method:'get',
        url:'http://localhost:8008/testing'
    })
}