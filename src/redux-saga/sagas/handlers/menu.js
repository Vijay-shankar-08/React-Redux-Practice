import  { call, put} from 'redux-saga/effects'
import { setItem, setItemError } from '../../actions/menuAction'
import { requestGetItem } from '../requests/menu'

export function* handleGetItem(action){
    console.log("handlerequest triggerd")
    try{
        const response = yield call(requestGetItem);
        const { data } = response;
        console.log(data)
        yield put(setItem(data));
    }catch(error){
        yield put(setItemError(error))
    }
}