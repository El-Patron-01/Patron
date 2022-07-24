import { initialState } from "../initialState";
import { IAction } from "../../types/interfaces";
import { v4 as uuidv4 } from 'uuid';

export const todoItemsReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            return {...state, todoItems: [...state.todoItems, {id: uuidv4(), title: action.payload}]}
        case 'DELETE_TODO_ITEM':
            return {...state, todoItems: state.todoItems.filter(item => item.id !== action.payload)}
        case 'FILTER_TODO_ITEMS':
            return {
                ...state, 
                todoItems: action.payload === '' ? 
                            state.todoItems : 
                            state.todoItems.filter(item => item.title.toLowerCase().includes(action.payload))}
        default: 
            return state;
        
    };
};