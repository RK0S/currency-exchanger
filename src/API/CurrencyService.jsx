import axios from 'axios';
import { useEffect } from 'react';

export const useRates = (ratesRef, changeRightValue) => {
    useEffect(() => {
        axios
            .get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res) => Object.entries(res.data.Valute))
            .then((res) => {
                ratesRef.current = Object.fromEntries([
                    ...res,
                    [
                        'RUB',
                        {
                            ID: 'RUB',
                            Nominal: 1,
                            Name: 'Российский рубль',
                            Value: 1,
                            charCode: 'RUB',
                        },
                    ],
                ]);
                changeRightValue(1);
            });
    }, []);
};

export const useDate = (dateRef) => {
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then((res) => {
        dateRef.current = res.data.Date.substr(0, 10);
    });
};

export const useCurrencies = (currenciesRef) => {
    axios
        .get('https://www.cbr-xml-daily.ru/daily_json.js')
        .then((res) => Object.entries(res.data.Valute))
        .then((res) => {
            currenciesRef.current = Object.fromEntries([
                ...res,
                ['GBP', { Name: 'Фунт стерлингов' }],
                ['XDR', { Name: 'СДР' }],
                ['RUB', { Name: 'Российский рубль' }],
                ['AMD', { Name: 'Армянский драм' }],
                ['HUF', { Name: 'Венгерский форинт' }],
                ['HKD', { Name: 'Гонконгский доллар' }],
                ['VND', { Name: 'Вьетнамский донг' }],
                ['EGP', { Name: 'Египетский фунт' }],
                ['INR', { Name: 'Индийская рупия' }],
                ['IDR', { Name: 'Индонезийская рупия' }],
                ['KZT', { Name: 'Казахстанский тенге' }],
                ['KGS', { Name: 'Киргизский сом' }],
                ['MDL', { Name: 'Молдавский лей' }],
                ['NOK', { Name: 'Норвежская крона' }],
                ['TJS', { Name: 'Таджикский сомони' }],
                ['THB', { Name: 'Таиландский бат' }],
                ['TRY', { Name: 'Турецкая лира' }],
                ['UZS', { Name: 'Узбекский сум' }],
                ['UAH', { Name: 'Украинская гривна' }],
                ['CZK', { Name: 'Чешская крона' }],
                ['SEK', { Name: 'Шведская крона' }],
                ['RSD', { Name: 'Сербский динар' }],
                ['ZAR', { Name: 'Южноафриканский рэнд' }],
                ['JPY', { Name: 'Японский иен' }],
            ]);
        });
};
