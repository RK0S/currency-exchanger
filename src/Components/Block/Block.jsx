import React from 'react';
import Input from '../Input/Input';
import Options from '../Options/Options';

const Block = ({currency, setCurrency, value, setValue}) => {
    const defaultCurrencies = ['RUB', 'USD', 'EUR', 'UAH']

    return (
        <div>
            <Options defaultCurrencies={defaultCurrencies} currency={currency} setCurrency={setCurrency} />
            <Input value={value} setValue={setValue} />
        </div>
    );
};

export default Block;