import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import './styles/App.css';
import Block from './Components/Block/Block';
import LastUpdate from './Components/LastUpdate/LastUpdate';

function App() {
    const [leftCurrency, setLeftCurrency] = useState('RUB');
    const [rightCurrency, setRightCurrency] = useState('USD');
    const [leftValue, setLeftValue] = useState(0);
    const [rightValue, setRightValue] = useState(1);

    const ratesRef = useRef(null)

    useEffect(() => {
        axios
            .get('https://www.cbr-xml-daily.ru/latest.js')
            .then((res) => Object.entries(res.data.rates))
            .then((res) => {
                ratesRef.current = Object.fromEntries([...res, ['RUB', 1]])
                changeRightValue(1)
            });
    }, []);

    function rounding(num) {
        const count = (num.toString().includes('.') ? (num.toString().split('.').pop().length) : (0))
        if (count > 3) {
            return Number(num.toFixed(3));
        }
        return num;
    }

    function changeLeftValue(value) {
        const price = value / ratesRef.current[leftCurrency];
        const result = price * ratesRef.current[rightCurrency];
        setLeftValue(rounding(value));
        setRightValue(rounding(result));
    }

    function changeRightValue(value) {
        const result = (ratesRef.current[leftCurrency] / ratesRef.current[rightCurrency]) * value;
        setLeftValue(rounding(result));
        setRightValue(rounding(value));
    }

    useEffect(() => {
        if (ratesRef.current) {
            changeLeftValue(leftValue)
        }
    }, [leftCurrency])

    useEffect(() => {
        if (ratesRef.current) {
            changeRightValue(rightValue)
        }
    }, [rightCurrency])


    return (
        <div className="App">
            <div className="base">
                <Block
                    currency={leftCurrency}
                    setCurrency={setLeftCurrency}
                    value={leftValue}
                    setValue={changeLeftValue}
                />
                <Block
                    currency={rightCurrency}
                    setCurrency={setRightCurrency}
                    value={rightValue}
                    setValue={changeRightValue}
                />
            </div>
            <LastUpdate />
        </div>
    );
}

export default App;
