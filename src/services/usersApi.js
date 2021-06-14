import axios from 'axios';
import {usersURL} from '../constants/URLs';

export default axios.create({
  baseURL: usersURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
