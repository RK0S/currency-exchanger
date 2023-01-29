import axios from 'axios';
import Base from './Components/Base/Base';
import './styles/App.css'
import CurrencyService from './API/CurrencyService';

function App() {
    axios.get('https://www.cbr-xml-daily.ru/latest.js').then(res => console.log(res))
    
    const defaultCurrencies = ['RUB', 'USD', 'EUR', 'UAH']
    return (
        <div className='App'>
            <Base defaultCurrencies={defaultCurrencies} />
        </div>
    );
}

export default App;
