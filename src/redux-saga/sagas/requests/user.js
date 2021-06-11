import axios from 'axios'

export function requestGetUser(){
    // console.log("url request triggerd")
    return axios.request({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/users'
    })
}