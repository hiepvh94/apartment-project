import React from 'react';
import Item from './Item';
import _ from 'lodash'

class ResultSearch extends React.Component {

    constructor(props) {
        super(props);

    }

    renderRecordDataItem = () => {
        let list = this.props.listItem;

        if (list && !_.isEmpty(list)) {
            return list.map((item) =>
                <Item item={item} />
            );
        }
        return null
    }

    render() {
        return (
            <table className="table table-bordered mt-4 table-responsive"
                id="dataTable">
                <thead className="text-center">
                    <tr>
                        <th>Apartment Code</th>
                        <th>Area</th>
                        <th>Valuation</th>
                        <th>A mount of bedroom</th>
                        <th>Balcony</th>
                        <th>Oriented outdoor</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRecordDataItem()}
                </tbody>
            </table>
        )
    }
}


export default ResultSearch;