import { combineReducers } from "redux";
import posts from './posts';
import profile from './profile';
import preview from './preview';

export default combineReducers({
  posts,
  profile,
  preview,
});
