import {
    GET_COMPANIES
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