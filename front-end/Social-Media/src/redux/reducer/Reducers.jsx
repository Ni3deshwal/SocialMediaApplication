import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
export const Reducers=combineReducers({AuthReducer,PostReducer})