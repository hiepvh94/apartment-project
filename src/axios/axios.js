import axios from 'axios';

//axios.defaults.baseURL='http://localhost:8080/';

//get list api
export const getList = () => {
  
  return   axios.get('api/apartments');
  // axios.get('api/apartments').then(result => {
  //   return result;
  //   // result.data.forEach(item => {
  //   //   listApartment.push(item);
  //   // });
}

//add new apartment
export const addNew = newApaprtment => {
  axios.post('api/apartment/create', newApaprtment).then(result => {
    // return JSON.parse(result);
    return result;
  });

}