import { toast } from 'react-toastify';


const initialState = {
    listApartment: [],

}


const apartmentReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'getAllApartments': {
            state.listApartment = action;
            return state;
        }

        case 'findApartmentByCode': {
            break;
        }
        case 'addNewApartment': {

            return { ...state };
        }
        case 'addSuccess': {
            const { successMessage } = action.payload;
            return {
                //...state,
                message: successMessage
                //initialState: data.concat(state)
            }
        }
        case 'addFailed': {
            const { successError } = action.payload;
            return {
                error: successError
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