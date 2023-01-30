import React from 'react';

import cl from './Input.module.css';

const Input = ({value, setValue}) => {

    return (
        <input 
            type="number" 
            value={value} 
            className={cl.input}
            onChange={e => setValue(e.target.value)}
        />
    );
};

export default Input;