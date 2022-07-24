import React, { FC, useState } from "react";
import { useDispatch } from 'react-redux';
import { ITodoListItemProps } from "../../types/interfaces";
import './TodoListItem.css'

const TodoListItem:FC<ITodoListItemProps> = ({id, title}) => {
    const [important, setImportant] = useState(false);
    const [done, setDone] = useState(false);
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch({type: 'DELETE_TODO_ITEM', payload: id})
    }
    const changeImportantStatus = () => {
        setImportant(!important)
    }
    const changeDoneStatus = () => {
        setDone(!done)
        console.log('important:', important, 'done:', done, classNames)
    }
    let classNames = '';
    if (important) {
        classNames += 'important'
    } if (done) {
        classNames += ' done'
    }
    return (
        <span>
            <span className={classNames}>{title}</span>
            <button onClick={changeImportantStatus} >Imp</button>
            <button onClick={changeDoneStatus} >Done</button>
            <button onClick={deleteItem}>Del</button>
        </span>
    );
};

export default TodoListItem;