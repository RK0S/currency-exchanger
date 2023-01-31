import { useRef } from 'react';
import { useDate } from '../../API/CurrencyService';

import cl from './LasUpdate.module.css'

const LastUpdate = () => {
    const dateRef = useRef(null)
    useDate(dateRef)

    return (
        <div>
            <p className={cl.lastUpdate}>Последнее обновление: {dateRef.current ? dateRef.current : '...'}</p>
        </div>
    );
};

export default LastUpdate;