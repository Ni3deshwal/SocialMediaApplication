import { legacy_createStore as createStore, applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk'
import {Reducers} from '../redux/reducer/Reducers'

function saveToLocalStorage(store){
    try {
        const serializedStore=JSON.stringify(store)
        window.localStorage.setItem('store',serializedStore)
    } catch (error) {
        console.log(error)
    }
}
function loadFromLocalStorage(){
    try {
        const serializedStore=window.localStorage.getItem('store');
        if(serializedStore===null) return undefined
        return JSON.parse(serializedStore)

    } catch (error) {
        console.log(error)
        return undefined
        
    }
}
const composeEnhancer=window.__redux_DEVTOOLS_COMPOSE__ || compose
const persistedstate=loadFromLocalStorage();
const store=createStore(Reducers,persistedstate,composeEnhancer(applyMiddleware(thunk)))

store.subscribe(()=>saveToLocalStorage(store.getState()))
export default store;