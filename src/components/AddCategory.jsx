import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ (event) => setInputValue(event.target.value) }
            />
        </form>
    )
};