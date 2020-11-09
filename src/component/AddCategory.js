import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handlenInputChange = (e) =>{
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const hanleSubmit = (e) => {
        e.preventDefault();
        // console.log('submit hecho');
        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue,...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ hanleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handlenInputChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories : PropTypes.func.isRequired
}
