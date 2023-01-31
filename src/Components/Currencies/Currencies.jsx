import { useRef } from 'react';

import cl from './Currencies.module.css';
import { useCurrencies } from './../../API/CurrencyService';

const Currencies = ({ setActive, active, setCurrency, setLastCurrency }) => {

    const currenciesRef = useRef(null);
    useCurrencies(currenciesRef);

    const classes = [cl.currencies__wrapper];
    if (active) {
        classes.push(cl.active);
    }

    function changeCurrency(e) {
        const name = e.target.dataset.charcode
        setActive(false);
        setCurrency(name);
        if (name !== 'RUB' && name !== 'USD' && name !== 'EUR') {
            setLastCurrency(name)
        }
    }

    return (
        <div 
            className={classes.join(' ')}
            onClick={() => setActive(false)}
        >
            <ul 
                className={cl.currencies__list}
                onClick={e => e.stopPropagation()}
            >
                {currenciesRef.current ? (
                    Object.entries(currenciesRef.current).map(
                        (cur) => (
                            <li
                                data-charcode={cur[0]}
                                className={cl.name}
                                key={cur[0]}
                                onClick={(e) => changeCurrency(e)}
                            >
                                <span className={cl.charcode}>{cur[0]}</span> {cur[1]['Name']}
                            </li>
                        )
                    )
                ) : (
                    <h1>Загрузка...</h1>
                )}
            </ul>
        </div>
    );
};

export default Currencies;
