import {
    GET_COMPANIES
} from '../constants';
  
import instance from '../axios-docs';
  
export function getCompanies() {
    return {
      type: GET_COMPANIES,
      payload: instance.get('/companies/'),
    };
}