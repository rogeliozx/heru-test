import axios from 'axios';

const clientAxios = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/',
});

export default clientAxios;
