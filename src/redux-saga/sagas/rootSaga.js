import {takeLatest} from 'redux-saga/effects'
import { handleGetUser } from './handlers/user'
import { GET_USER } from '../saga-user'


export function* watcherSaga() {
    // console.log("watcher triggerd")
    yield takeLatest(GET_USER,handleGetUser)
}