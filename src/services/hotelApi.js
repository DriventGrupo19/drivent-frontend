import api, { authorization } from './api';

export async function getHotels(token) {
  const response = await api.get('/hotels', authorization(token));
  return response.data;
}
