import React, { Component } from 'react'

export class ApartmentInput extends Component {

    render() {
        const { apartment, onChange } = this.props;
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label >Apartment code<span className="text-danger ml-1">(*)</span></label>
                        <input type="text" className="apart form-control text-right"
                            //  {... apartment.apartmentCode !== null?'visible':''}
                            placeholder="Nhập mã căn hộ" onChange={onChange}
                            name="apartmentCode" defaultValue={apartment?.apartmentCode} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Area (m<sup>2</sup>)<span className="text-danger ml-1">(*)</span>
                        </label>
                        <input path="Area" type="text" onChange={onChange}
                            placeholder="Nhập diện tích" defaultValue={apartment?.area}
                            className="apart form-control text-right" name="area" />
                    </div>
                    <div className="apart fform-group col-md-6">
                        <label >Valuation<span className="text-danger ml-1">(*)</span></label>
                        <input path="price" type="text" onChange={onChange}
                            placeholder="Nhập giá trị căn hộ" defaultValue={apartment?.price}
                            className="apart form-control text-right" name="price" />
                    </div>
                    <div className="apart fform-group col-md-6">
                        <label >A mount of bedroom<span className="text-danger ml-1">(*)</span></label>
                        <input type="text"
                            placeholder="Nhập số phòng ngủ" onChange={onChange}
                            className="apart form-control text-right"
                            name="bedroomTotal" defaultValue={apartment?.bedroomTotal} />
                    </div>
                    <div className="apart form-group col-md-6">
                        <label >Balcony<span className="text-danger ml-1">(*)</span></label>
                        <input type="text" onChange={onChange}
                            placeholder="Nhập hướng ban công"
                            className="apart form-control text-right"
                            name="balcony" defaultValue={apartment?.balcony} />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Oriented door<span className="text-danger ml-1">(*)</span></label>
                        <input type="text" onChange={onChange}
                            placeholder="Chọn huơng cửa chính"
                            className="apart form-control text-right"
                            name="towardTheMainDoor" defaultValue={apartment?.towardTheMainDoor} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ApartmentInput
