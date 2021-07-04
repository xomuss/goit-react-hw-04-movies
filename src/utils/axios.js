import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c2a3095b3c93af2cd3988a9dd6f9ca00',
  },
});

export default instance;
