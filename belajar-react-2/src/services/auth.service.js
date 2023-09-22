import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const Login = (data, callback) => {
  axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err.response.data);
    });
};

export const getUser = (token) => {
  const decoded = jwt_decode(token);
  return decoded;
};
