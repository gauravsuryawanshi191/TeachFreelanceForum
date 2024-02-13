import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('');
  };
  
  const create = (data) => {
    return httpClient.post('', data);
  };
  
  const get = (id) => {
    return httpClient.get(`${id}`);
  };
  const getBySkill = (skill) => {
    return httpClient.get(`${skill}`);
  };
  
  const update = (data) => {
    return httpClient.put('', data);
  };
  
  const remove = (id) => {
    return httpClient.delete(`/${id}`);
  };
  export default { getAll, create, get, update, remove,getBySkill };
  