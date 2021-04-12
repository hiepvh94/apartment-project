import axios from 'axios';

//axios.defaults.baseURL='http://localhost:8080/';

//get list api
export const getList = () => {

  return axios.get('api/apartments');

}

//add new apartment
export const addNew = newApaprtment => {
  axios.post('api/apartment/create', newApaprtment).then(result => {

    return result;
  });
  
  //return axios.post('api/apartment/create', newApaprtment);
}