import React, { FC, useState } from "react";
import { useDispatch } from 'react-redux';

const AddItemForm:FC = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const addItem = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch({type: 'ADD_TODO_ITEM', payload: value})
        setValue('')
    }
    return (
        <div>
            <input type='text' onChange={changeHandler} value={value}/>
            <button onClick={addItem} >Add item</button>
        </div>
    )
}

export default AddItemForm;