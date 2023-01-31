import React from 'react';
import cl from './Options.module.css';

const Options = ({
    defaultCurrencies,
    currency,
    setCurrency,
    setActive,
    active,
    lastCurrency
}) => {
    const optionClasses = [cl.option];
    if (!active) {
        optionClasses.push(cl.active);
    }

    return (
        <ul className={cl.options__wrapper}>
            {defaultCurrencies.map((cur) => (
                <li
                    onClick={() => setCurrency(cur)}
                    key={cur}
                    className={
                        currency === cur ? optionClasses.join(' ') : cl.option
                    }
                >
                    {cur}
                </li>
            ))}
            <li
                onClick={() => setCurrency(lastCurrency)}
                key={lastCurrency}
                className={
                    currency === lastCurrency ? optionClasses.join(' ') : cl.option
                }
            >
                {lastCurrency}
            </li>
            <li
                className={
                    active ? [cl.option, cl.active].join(' ') : [cl.option]
                }
                onClick={() => setActive(!active)}
            >
                <svg height="18px" viewBox="0 0 50 50" width="59px" className={active ? cl.rotate : ''}>
                    <rect fill="none" height="11" width="21" />
                    <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                </svg>
            </li>
        </ul>
    );
};

export default Options;
