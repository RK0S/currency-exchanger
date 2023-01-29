import React from 'react';
import cl from './Options.module.css';

const Options = ({ defaultCurrencies, currentCurrency }) => {
    return (
        <ul className={cl.options__wrapper}>
            {defaultCurrencies.map((cur) => (
                <li 
                    key={cur} 
                    className={currentCurrency === cur ? [cl.option, cl.active].join(' ') : cl.option}
                >
                    {cur}
                </li>
            ))}
            <li className={cl.option}>
                <svg height="18px" viewBox="0 0 50 50" width="59px">
                    <rect fill="none" height="11" width="21" />
                    <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                </svg>
            </li>
        </ul>
    );
};

export default Options;
