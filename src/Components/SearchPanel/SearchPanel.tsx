import React, { FC, useState } from "react";
import { useDispatch } from 'react-redux';

const SearchPanel:FC = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const searchItem = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'FILTER_TODO_ITEMS', 
            payload: e.target.value.toLowerCase()
        })
    }
    return (
        <div>
            <input 
                type='text' 
                onChange={searchItem}
                placeholder='Search item here...' 
            />
        </div>
    );
};

export default SearchPanel;