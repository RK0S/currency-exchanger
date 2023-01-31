import cl from './Tip.module.css';
import { useRef } from 'react';
import { useCurrencies } from './../../API/CurrencyService';

const Tip = ({currency}) => {
    const valutes = useRef(null)
    useCurrencies(valutes)

    return (
        <div className={cl.tip}>
            {valutes.current 
                ? <h2>{valutes.current[currency]['Name']}</h2>
                : <h2>Загрузка...</h2>
            }
        </div>
    );
};

export default Tip;