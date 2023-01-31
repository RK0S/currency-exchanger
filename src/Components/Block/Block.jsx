import React from 'react';
import Input from '../Input/Input';
import Options from '../Options/Options';
import Currencies from './../Currencies/Currencies';

const Block = ({
    currency,
    setCurrency,
    value,
    setValue,
    setActive,
    active,
    lastCurrency,
    setLastCurrency
}) => {
    const defaultCurrencies = ['RUB', 'USD', 'EUR'];

    return (
        <div>
            <Options
                defaultCurrencies={defaultCurrencies}
                currency={currency}
                setCurrency={setCurrency}
                setActive={setActive}
                active={active}
                lastCurrency={lastCurrency}
            />
            <Input value={value} setValue={setValue} />
            <Currencies
                setActive={setActive}
                active={active}
                setCurrency={setCurrency}
                setLastCurrency={setLastCurrency}
            />
        </div>
    );
};

export default Block;
