import React, { Component } from 'react'
import { connect } from 'react-redux';
import ApartmentInputComponent from '../../../components/ApartmentInput';
import { bindActionCreators } from 'redux'
import * as apartmentAction from '../../../action/apartmentAction';


export class CreateApartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentCode: "",
            area: "",
            price: "",
            bedroomTotal: "",
            balcony: "",
            towardTheMainDoor: ""
        }
    }
    onChange = (e) => {

        this.setState({
            // Mapping by name
            [e.target.name]: e.target.value
        });

    }

    handleSaveApartment = () => {

        //input data
        let apartmentInput = {
            apartmentCode: this.state.apartmentCode,
            area: this.state.area,
            price: this.state.price,
            bedroomTotal: this.state.bedroomTotal,
            balcony: this.state.balcony,
            towardTheMainDoor: this.state.towardTheMainDoor
        }

        const { apartmentAction } = this.props;
        const { addNewApartment } = apartmentAction;
        addNewApartment(apartmentInput);
    }

    render() {
        const apartment = this.props.state;

        return (

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                    <div className="card-body shadow">
                        <div className="card-header">
                            <h3>Apartment Add new</h3>
                        </div>
                        <form>
                            <ApartmentInputComponent apartment={apartment} onChange={this.onChange} />
                            <div className="d-flex justify-content-end">
                                {this.state.resetFlag ?
                                    <button id="btn-reset" type="button"
                                        className="btn btn-secondary ml-2" onClick={this.resetValue}>
                                        <i className="fas fa-eraser mr-2"></i>Đặt lại
										</button>
                                    : ''}
                                <button type="submit" className="btn btn-primary ml-2"
                                    onClick={this.handleSaveApartment} >
                                    <i className="fas fa-check mr-2"></i>Create
										</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        apartmentAction: bindActionCreators(apartmentAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateApartment)
