import { useEffect, useRef, useState } from 'react';

import './styles/App.css';
import Block from './Components/Block/Block';
import LastUpdate from './Components/LastUpdate/LastUpdate';
import { useRates } from './API/CurrencyService';
import { rounding } from './functions/rounding';
import Transfer from './Components/Transfer/Transfer';

function App() {
    const [leftCurrency, setLeftCurrency] = useState('RUB');
    const [rightCurrency, setRightCurrency] = useState('USD');
    const [leftLastCurrency, setLeftLastCurrency] = useState('UAH');
    const [rightLastCurrency, setRightLastCurrency] = useState('UAH');
    const [leftValue, setLeftValue] = useState(0);
    const [rightValue, setRightValue] = useState(1);

    const [leftActive, setLeftActive] = useState(false);
    const [rightActive, setRightActive] = useState(false);

    const ratesRef = useRef(null)

    useRates(ratesRef, changeRightValue)

    const changeLeftValue = (value) => {
        const price = value / (ratesRef.current[rightCurrency].Value / ratesRef.current[rightCurrency].Nominal);
        const result = price * (ratesRef.current[leftCurrency].Value / ratesRef.current[leftCurrency].Nominal);
        setLeftValue(Math.abs(value));
        setRightValue(rounding(result));
    }

    function changeRightValue(value) {
        const result = ((ratesRef.current[rightCurrency].Value / ratesRef.current[rightCurrency].Nominal) / (ratesRef.current[leftCurrency].Value / ratesRef.current[leftCurrency].Nominal)) * value;
        setLeftValue(rounding(result));
        setRightValue(Math.abs(value));
    }

    useEffect(() => {
        if (ratesRef.current) {
            changeLeftValue(leftValue)
        }
    }, [leftCurrency])

    useEffect(() => {
        if (ratesRef.current) {
            changeLeftValue(leftValue)
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
                    setActive={setLeftActive}
                    active={leftActive}
                    lastCurrency={leftLastCurrency}
                    setLastCurrency={setLeftLastCurrency}
                />
                <Transfer 
                    rightCurrency={rightCurrency}
                    setRightCurrency={setRightCurrency}
                    leftCurrency={leftCurrency}
                    setLeftCurrency={setLeftCurrency}
                    leftValue={leftValue}
                    changeLeftValue={changeLeftValue}
                    rightValue={rightValue}
                    changeRightValue={changeRightValue}
                    leftLastCurrency={leftLastCurrency}
                    setLeftLastCurrency={setLeftLastCurrency} 
                    rightLastCurrency={rightLastCurrency}
                    setRightLastCurrency={setRightLastCurrency} 
                />
                <Block
                    currency={rightCurrency}
                    setCurrency={setRightCurrency}
                    value={rightValue}
                    setValue={changeRightValue}
                    setActive={setRightActive}
                    active={rightActive}
                    lastCurrency={rightLastCurrency}
                    setLastCurrency={setRightLastCurrency}
                />
            </div>
            <LastUpdate />
        </div>
    );
}

export default App;
