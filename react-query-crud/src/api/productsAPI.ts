import axios from 'axios';
import { Product } from '../interfaces/product.interface';

const productsApi = axios.create({
  baseURL: 'http://localhost:3001/products',
});

export const getProducts = async () => {
  const res = await productsApi.get('/');
  return res.data;
};

export const createProduct = async (product: Product) =>
  await productsApi.post('/', product);

export const deleteProduct = async (id: number) =>
  await productsApi.delete(`/${id}`);

export const updateProduct = async (product: Product) =>
  await productsApi.put(`/${product.id}`, product);
