import axios from 'axios';

export default class CurrencyService {
    static async getRates() {
        const response = await axios.get('https://www.cbr-xml-daily.ru/latest.js')
        return response
    }
    // static async getRates() {
    //     try {
    //         await axios
    //         .get('https://www.cbr-xml-daily.ru/latest.js')
    //         .then((res) => res.data)
    //         .then(data => {
    //             console.log(data);
    //             return data
    //         });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // static async getRates() {
    //     const response = await axios.get('https://www.cbr-xml-daily.ru/latest.js').then(res => res)
    //     return response
    // }
}
