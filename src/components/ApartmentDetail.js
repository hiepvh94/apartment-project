import React from 'react';
class ApartmentDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }


        componentDidMount() {
            if (localStorage.getItem('apartment') === null) {
                this.setState({ data: ["1", "North", "1", "1", "100", "West"] })
            } else { 
              const backupArr = JSON.parse(localStorage.getItem('apartment'));
              let url = window.location.pathname;

              let arr =url.split('/');
              let code='';
              for(let i=0;i<arr.length;i++){
                  code=arr[i];
              }

              backupArr.forEach(element =>{
                  if(code === element.apartmentCode){
                      let apart ={
                        apartmentCode: element.apartmentCode,
                        area: element.area,
                        price: element.price,
                        bedroomTotal: element.bedroomTotal,
                        balcony: element.balcony,
                        towardTheMainDoor: element.towardTheMainDoor
                      }
                      this.setState({
                          data: apart
                      });
                     // break;
                  }
              })
            }
        }

        render() {
            return (
                <div className="card shadow ">
                    <div className="card-header">
                        <h3>Apartment Detail</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label><b>Apartment Code:</b></label>
                                    </div>
                                    <div className="col-md-4">
                                        <label>{this.state.data.apartmentCode}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label><b>Area:</b></label>
                                    </div>
                                    <div className="col-md-4">
                                        <label>{this.state.data.area}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label><b>Valuation:</b></label>
                                    </div>
                                    <div className="col-md-4">
                                        <label>{this.state.data.price}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label><b>A mount of bedroom:</b></label>
                                    </div>
                                    <div className="col-md-4">
                                        <label>{this.state.data.bedroomTotal}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label><b>Balcony:</b></label>
                                    </div>
                                    <div className="col-md-4">
                                        <label>{this.state.data.balcony}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label><b>Oriented door:</b></label>
                                    </div>
                                    <div className="col-md-4">
                                        <label>{this.state.data.towardTheMainDoor}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    export default ApartmentDetail;