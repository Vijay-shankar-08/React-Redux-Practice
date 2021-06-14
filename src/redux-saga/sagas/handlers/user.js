import  { call, put} from 'redux-saga/effects'
import { setUser, setError } from '../../actions/userAction'
import { requestGetUser } from '../requests/user'

export function* handleGetUser(action){
    console.log("handlerequest triggerd")
    try{
        const response = yield call(requestGetUser);
        const { data } = response;
        // console.log(data)
        yield put(setUser(data));
    }catch(error){
        yield put(setError(error))
    }
}