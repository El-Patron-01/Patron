import {configureStore} from '@reduxjs/toolkit';
import { todoItemsReducer } from './reducers/reducer';

const store = configureStore({
    reducer: todoItemsReducer,
});

export default store;