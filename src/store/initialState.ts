import { IState } from "../types/interfaces";
import { v4 as uuidv4 } from 'uuid';

export const initialState: IState = {
    todoItems: [
        {
            id: uuidv4(), 
            title: 'Drink Coffee'
        }, 
        {
            id: uuidv4(), 
            title: 'Get a job'
        }
    ]
}