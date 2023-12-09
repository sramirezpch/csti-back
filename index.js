require('dotenv').config();
const express = require('express');
const cors = require('cors');
const api = require('./utils/api');

const app = express();

app.use(cors());

app.get('/getActualBalance', async (req, res) => {
    try {
        const { data: { status, data: { balanceCommerce }}}  = await api.get('/getActualBalance');
        res.json({ status, balanceCommerce });
    }catch(error){
        console.error(error);
        res.json({ message: 'Check server logs'})
    }
    
})

app.get('/getProviders', async (req, res) => {
    try {
        const { data: { data: { companies }} } = await api.get('/getProviders');
        res.json({ companies: companies });
    } catch (error) {
        console.log(error);
    }
})
app.listen(3000);