const axios = require('axios').default;
const { API_URL, API_TOKEN } = require('./env');

const api = axios.create({
    baseURL: API_URL,
    headers: { 
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json, text/plain"
    }
})

module.exports = api;
