import React, { FC } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { useSelector } from 'react-redux';
import { IState } from "../../types/interfaces";


const TodoList:FC = () => {
    const todoItems = useSelector((state:IState) => state.todoItems)

    return (
        <ul>
            {todoItems.map(el => <li key={el.id}><TodoListItem id={el.id} title={el.title}/></li>)}
        </ul>
    );
};

export default TodoList;