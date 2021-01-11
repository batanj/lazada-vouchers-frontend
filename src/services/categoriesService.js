import http from './httpService';
import config from '../config.json';
import adminService from './adminService';

const get = async () => {
    return await http.get(`${config.apiEndpoint}/categories`);
}

const post = async category => {
    const adminKey = adminService.getKey();
    return await http.post(`${config.apiEndpoint}/categories`, category, { headers: { 'x-admin-key': adminKey } })
}

const categories = {
    get,
    post
}

export default categories;