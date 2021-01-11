import config from '../config.json';
import http from './httpService';

const authenticate = async adminKey => {
    return await http.post(`${config.apiEndpoint}/admin`, '', { headers: { 'x-admin-key': adminKey } });
}

const saveKey = adminKey => {
    return localStorage.setItem('adminKey', adminKey);
}

const getKey = () => {
    return localStorage.getItem('adminKey');
}

const admin = {
    authenticate,
    saveKey,
    getKey
}

export default admin;