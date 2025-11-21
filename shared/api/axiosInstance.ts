import axios from 'axios';

export const placeholderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fakeStoreApi = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: { 'Content-Type': 'application/json' },
});
