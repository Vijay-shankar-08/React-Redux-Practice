import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import userReducer from './reducers/userReducer'
import menuReducer from './reducers/menuReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { watcherSaga } from '../redux-saga/sagas/rootSaga'


const reducer = combineReducers({
    user: userReducer,
    menu: menuReducer,
})
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

const store = createStore(reducer,composeWithDevTools( applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSaga)

export default store