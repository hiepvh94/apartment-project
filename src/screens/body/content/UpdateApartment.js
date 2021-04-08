import React, { Component } from 'react'
import ApartmentInput from '../../../components/ApartmentInput'

export class UpdateApartment extends Component {
    constructor(props) {
        super(props)
        //init default state 
        this.state = {
            data: {
                apartmentCode: "1",
                area: "1",
                price: "1",
                bedroomTotal: "1",
                balcony: "a",
                towardTheMainDoor: "a"
            }
        }
    }


    componentWillMount() {
        const apartments = JSON.parse(localStorage.getItem('apartment'))
        let url = window.location.pathname;

        let arr = url.split('/');
        let code = '';
        for (let i = 0; i < arr.length; i++) {
            code = arr[i];
        }

        apartments.forEach(element => {
            if (code === element.apartmentCode) {
                this.setState({
                    data: element
                });
               // break;
            }
        });
    }

    onChange = (e) => {
        this.setState({
            // Mapping by name
            [e.target.name]: e.target.value
        });
    }

    handleUpdateApartment = (e) => {
        let backupArr = JSON.parse(localStorage.getItem('apartment'));
        let code = e.target.apartmentCode;
        backupArr.forEach(element => {
            if (code === element.apartmentCode) {
                this.setState({
                    // Mapping by name
                    [e.target.name]: e.target.value
                });
                element.area = this.state.data.area;
                element.price = this.state.data.price;
                element.bedroomTotal = this.state.data.bedroomTotal;
                element.balcony = this.state.data.balcony;
                element.towardTheMainDoor = this.state.data.towardTheMainDoor;

            }
        });
        
        //Save in local storage
        localStorage.setItem('apartment', JSON.stringify(backupArr));
    }

    render() {
        const apartment = this.state.data
        //another syntax
        //const {data} = this.state;

        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                    <div className="card-body shadow">
                        <div className="card-header">
                            <h3>Apartment Updating</h3>
                        </div>
                        <form action="">
                            <ApartmentInput apartment={apartment} onChange={this.onChange} />
                            <div className="d-flex justify-content-end">
                                {this.state.resetFlag ?
                                    <button id="btn-reset" type="button"
                                        className="btn btn-secondary ml-2" onClick={this.resetValue}>
                                        <i className="fas fa-eraser mr-2"></i>Đặt lại
										</button>
                                    : ''}
                                <button type="submit" className="btn btn-primary ml-2"
                                    onClick={this.handleUpdateApartment} >
                                    <i className="fas fa-check mr-2"></i>Update
										</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateApartment
