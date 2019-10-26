import {
    GET_COMPANIES,
    GET_SERVICES
} from '../constants';
  
// import instance from '../axios';

import ServicesAPI from '../ServicesStub' //заглушка
  
export function getCompanies() {
    return {
      type: GET_COMPANIES,
      // payload: instance.get('/companies/'),
      payload: ServicesAPI.getCompanies() //обращаемся к заглушке, пока нет связи с беком
    };
}

export function getServices() {
  return {
    type: GET_SERVICES,
    // payload: instance.get('/services/'),
    payload: ServicesAPI.getServices() //обращаемся к заглушке, пока нет связи с беком
  };
}