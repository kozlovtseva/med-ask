import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://some-domain.ru',
    headers: { 'Content-Type': 'application/json'}
});


export default instance;