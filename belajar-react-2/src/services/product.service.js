import axios from 'axios';

export const getProducts = (cb) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      cb(res.data);
    })
    .catch((err) => {
      cb(err);
    });
};

export const getDetailProduct = (id, cb) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      cb(res.data);
    })
    .catch((err) => {
      cb(err);
    });
};
