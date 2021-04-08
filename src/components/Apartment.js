import React, { Component } from 'react'

export class ApartmentComponent extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="card-header">
                                <h3>Apartment Updating</h3>
                            </div>
                            <form onSubmit={this.updateInformation} action="">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Apartment code<span className="text-danger ml-1">(*)</span></label>
                                        <input type="text" className="apart form-control"
                                            placeholder="Nhập mã căn hộ" ref="apartmentCode"
                                            onChange={this.changeResetStatusEvent}
                                            name="apartmentCode" defaultValue={data?.apartmentCode} />

                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Area (m<sup>2</sup>)<span className="text-danger ml-1">(*)</span>
                                        </label>
                                        <input path="Area" type="text" onChange={this.changeResetStatusEvent}
                                            placeholder="Nhập diện tích" defaultValue={this.state.data[1]}
                                            className="apart form-control text-right" ref="area" name="area" />

                                    </div>
                                    <div className="apart fform-group col-md-6">
                                        <label >Valuation<span className="text-danger ml-1">(*)</span></label>
                                        <input path="price" type="text" onChange={this.changeResetStatusEvent}
                                            placeholder="Nhập giá trị căn hộ"
                                            defaultValue={this.state.data[2]}
                                            className="apart form-control text-right" ref="price" name="price" />

                                    </div>
                                    <div className="apart fform-group col-md-6">
                                        <label >A mount of bedroom<span className="text-danger ml-1">(*)</span></label>
                                        <input type="text" onChange={this.changeResetStatusEvent}
                                            placeholder="Nhập số phòng ngủ"
                                            className="apart form-control text-right" ref="bedroomTotal"
                                            name="bedroomTotal" defaultValue={this.state.data[3]} />

                                    </div>
                                    <div className="apart form-group col-md-6">
                                        <label >Balcony<span className="text-danger ml-1">(*)</span></label>
                                        <input type="text" onChange={this.changeResetStatusEvent}
                                            placeholder="Nhập hướng ban công"
                                            className="apart form-control text-right" ref="balcony"
                                            name="balcony" defaultValue={this.state.data[4]} />

                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Oriented door<span className="text-danger ml-1">(*)</span></label>
                                        <input type="text" onChange={this.changeResetStatusEvent}
                                            placeholder="Chọn huơng cửa chính"
                                            className="apart form-control text-right" ref="towardTheMainDoor"
                                            name="towardTheMainDoor" defaultValue={this.state.data[5]} />

                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    {this.state.resetFlag ?
                                        <button id="btn-reset" type="button"
                                            className="btn btn-secondary ml-2" onClick={this.resetValue}>
                                            <i className="fas fa-eraser mr-2"></i>Đặt lại
										</button>
                                        : ''}
                                    <button type="submit" className="btn btn-primary ml-2" >
                                        <i className="fas fa-check mr-2"></i>Lưu
										</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ApartmentComponent
