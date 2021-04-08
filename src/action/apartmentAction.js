//list all apartment
// export const listAllApartment =()=>{
//     return{
//         type:'listAllApartment'
//     }
// }


export const getAllApartments = (apartments) => ({
        type: 'getAllApartments',
        apartments
    
});

// export const getAllApartments = () => {
//     return (dispatch) => {
//         return axios.get('apartments').then(result => {
//             // const apartments = [];

//             // result.data.forEach(item => {
//             //     apartments.push(item);
//             // });

//             dispatch(_getAllApartments(result));
//         });
//     };
// };

//find apartment by code
export const findApartmentByCode =(code)=>{
    return{
        type:'findApartmentByCode',
        payload: code
    }
}

//add new apartment 
export const addNewApartment =(newApartment)=>{
    return{
        type:'addNewApartment',
        payload: {
            newApartment, 
        }
    }
}

//add new apartment successful
export const addSuccess =(successMessage)=>{
    return{
        type:'addSuccess',
        payload: {
            successMessage,
        }
    }
}

//add new apartment failure
export const addFailed =(successError)=>{
    return{
        type:'addFailed',
        payload: {
            successError,
        }
    }
}

//delete a apartment
export const deleteNewApartment =(code)=>{
    return{
        type:'deleteNewApartment',
        payload: code
    }
}



