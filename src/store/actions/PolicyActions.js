import {
    GET_POLICY
} from '../constants';
  
// import instance from '../axios';

import DataAPI from '../DataStub' //заглушка
  
export function getPolicy(number) {
    return {
      type: GET_POLICY,
    //   payload: instance.get('/policies/', { number })
      payload: DataAPI.getPolicy(number) //обращаемся к заглушке, пока нет связи с беком
    };
}