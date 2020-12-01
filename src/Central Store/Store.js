import {createStore, combineReducers} from 'redux'

import Todo from '../Reducer/todos'

const rootReducer = combineReducers({
    Todo,
});

const store = createStore(rootReducer);

export default store;