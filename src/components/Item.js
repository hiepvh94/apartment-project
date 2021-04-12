import React from 'react';


class Item extends React.Component {

    constructor(props) {
        super(props)
    }

    deleteItem = (e) => {
        let apartmentId = e.target.value;
        
    }

    render() {
        const item = this.props.item;
        let urlEdit = "http://localhost:8080/update/" + item.id
        let urlDetail = "http://localhost:8080/detail/" + item.id
        const deleteItem = () => {
            alert('delete')
        }
        return (
            <tr>
                <td><a href={urlEdit}>{item.apartmentCode}</a></td>
                <td><a href={urlDetail}>{item.area}</a></td>
                <td>{item.price}</td>
                <td>{item.bedroomTotal}</td>
                <td>{item.balcony}</td>
                <td>{item.towardTheMainDoor}</td>
                <td>
                    <button type="button" class="btn btn-danger mr-1" value={item.id} onClick={deleteItem}>Del</button>
                    <a type="button" class="btn btn-primary" value={item.id} href={urlEdit}>Update</a>
                </td>
            </tr>
        );
    }
}

export default Item;