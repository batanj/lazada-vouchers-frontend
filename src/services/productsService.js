import http from './httpService';
import config from '../config.json';
import adminService from './adminService';

const get = async (limit) => {
    return await http.get(`${config.apiEndpoint}/products?limit=${limit}`);
};

const getByCategory = async category => {
    return await http.get(`${config.apiEndpoint}/products/categoryId/${category._id}`);
};

const getSingle = async id => {
    return await http.get(`${config.apiEndpoint}/products/id/${id}`);
}

const post = async product => {
    const adminKey = adminService.getKey();
    return await http.post(`${config.apiEndpoint}/products`, product, { headers: { 'x-admin-key': adminKey } })
};

const products = {
    get,
    getByCategory,
    getSingle,
    post
};

export default products;