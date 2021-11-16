import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://radiant-crag-33900.herokuapp.com'
})
