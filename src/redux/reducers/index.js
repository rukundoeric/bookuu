import { combineReducers } from 'redux';
import booksReducer from './books';

export default combineReducers({
  bookoo: booksReducer,
  books: {},
});