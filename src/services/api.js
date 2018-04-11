import { create } from 'apisauce';

const api = create({
  baseURL: 'https://api.github.com',
});

api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});

export default api;
