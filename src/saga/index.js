import { getAllApartments, addSuccess, addFailed } from '../action/apartmentAction'
import { fork, take, call, put, takeEvery } from "redux-saga/effects";
import { addNew, getList } from '../axios/axios'


function* watchFetchListAparmentAction() {
    while (true) {
        yield take('getAllApartments');
        const response = yield call(getList);   
        
        // const  list = response.data; 
        // response.data.map((item, index) => {
        //     console.log(item)
        // }
        // );
        //     // console.log(element)
        //  })
        //var element = data.map((item, index) =>
        //    console.log(list)
        //  );
        // response.data.forEach(item => {
        //         listApartment.push(item);
        // });const listApartment = [];
        

        const { status, data } = response;
        if (status == '200') {  
            yield put(getAllApartments(data))
        } else {
            console.log('error')
        }
    }

}

function* addApartment({ payload }) {

    
    const newApartment = payload.newApartment;
    const response = yield call(addNew, newApartment);
    const { status, data } = response;

    if (status === '200') {
        const successMessage = "success";   
        yield put(addSuccess(successMessage))
    } else {
        const failedMessage = "failed";
        yield put(failedMessage)
    }
}

function* rootSaga() {
    yield fork(watchFetchListAparmentAction)
    yield takeEvery("addNewApartment", addApartment)
}
export default rootSaga;