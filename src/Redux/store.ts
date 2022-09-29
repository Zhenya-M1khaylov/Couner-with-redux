import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from './counterReducer';
import {loadState, saveState} from '../Utils/localstorage-utils';


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type StateType = ReturnType<typeof rootReducer>