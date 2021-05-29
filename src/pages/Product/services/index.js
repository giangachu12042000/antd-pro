import axios from '../../../utils/axios';

export const createProduct = (data) => {
  return axios.post('user', data);
};

export const fetchAllProductService = () => {
  return axios.get('user');
};

export const getProductById = (id) => {
  return axios.get(`user/${id}`);
};

export const editProductService = (data) => {
  return axios.put(`user/${data.id}`, data);
};
