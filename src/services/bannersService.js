import http from './httpService';
import config from '../config.json';
import adminService from './adminService';

const get = async location => {
    return await http.get(`${config.apiEndpoint}/banners/location/${location}`);
}

const post = async banner => {
    const adminKey = adminService.getKey();
    return await http.post(`${config.apiEndpoint}/banners`, banner, { headers: { 'x-admin-key': adminKey } })
}

const banners = {
    get,
    post
}

export default banners;