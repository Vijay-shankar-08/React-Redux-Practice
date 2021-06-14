import {takeEvery} from 'redux-saga/effects'
import { handleGetUser } from './handlers/user'
import { handleGetItem } from './handlers/menu'
import { GET_USER } from '../actions/userAction'
import { GET_ITEM } from '../actions/menuAction'


export function* watcherSaga() {
    // console.log("watcher triggerd")
    yield takeEvery(GET_ITEM,handleGetItem)
    yield takeEvery(GET_USER,handleGetUser)
}