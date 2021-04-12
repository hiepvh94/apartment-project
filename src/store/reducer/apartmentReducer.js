import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    listApartment: []
}


const apartmentReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'getAllApartments': { 
            state.listApartment = action.apartments;
            return state;
        }

        case 'findApartmentByCode': {
            break;
        }
        case 'addNewApartment': {

            return { ...state };
        }
        case 'addSuccess': {
        
            state.listApartment = [];
            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_RIGHT
              });
            return {
                //...state,
                state
                //initialState: data.concat(state)
            }
        }
        case 'addFailed': {
            state.flag = action.payload;
            
            return {
               state
            };
        }
        case 'deleteNewApartment': {
            break;
        }
        default: {
            return state;
        }
    }
}


export default apartmentReducer;