import axios from 'axios';
import { useRef } from 'react';

const LastUpdate = () => {
    const dateRef = useRef(null)

    axios
        .get('https://www.cbr-xml-daily.ru/latest.js')
        .then((res) => {dateRef.current = res.data.date})

    return (
        <div>
            <p>Последнее обновление: {dateRef.current ? dateRef.current : '...'}</p>
        </div>
    );
};

export default LastUpdate;