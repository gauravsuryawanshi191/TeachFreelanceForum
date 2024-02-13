import httpClient from '../http-common';
const getAll = () => {
  return httpClient.get('');
};

const create = (data) => {
  return httpClient.post('/auth', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};


const addUser = (data) => {
  return httpClient.post('/add', data);
};

export default { getAll, create, get, update, remove,addUser };


  