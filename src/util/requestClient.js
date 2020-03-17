import axios from 'axios';

const clientOptions = {};
if (process.env.API_BASE_URL) clientOptions.baseURL = process.env.API_BASE_URL;

const requestClient = axios.create(clientOptions);

export default requestClient;
