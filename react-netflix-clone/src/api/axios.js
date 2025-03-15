import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '889ef59af1cb2261c7822c8f27728052',
    language: 'ko-kr',
  },
});

export default instance;
