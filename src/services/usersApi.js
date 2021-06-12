import axios from 'axios';

export default axios.create({
  baseURL: 'https://607d4f98184368001769d631.mockapi.io/users',
  headers: {
    'Content-Type': 'application/json',
  },
});
