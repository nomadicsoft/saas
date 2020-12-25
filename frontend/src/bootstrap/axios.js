import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.Accept = "application/json";
axios.defaults.baseURL = '/' // process.env.VUE_APP_APP_URL;
window.axios = axios;

export default axios
