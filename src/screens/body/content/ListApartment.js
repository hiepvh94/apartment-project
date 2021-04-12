import React from 'react';
import { connect } from 'react-redux';
import ResultSearch from '../../../components/ResultSearch';
import Search from '../../../components/Search';
import { bindActionCreators } from 'redux'
import * as apartmentAction from '../../../action/apartmentAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListApartment extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { listAll } = this.props;
        const { getAllApartments } = listAll;
        getAllApartments();
    }

    render() {
        let apartmentList = this.props.apartments.listApartment;
        toast.success("List of apartment loading ... !", {
            position: toast.POSITION.TOP_RIGHT
        });

        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card shadow">
                    <div className="card-header">
                        <h4>List of Apartment Management</h4>
                    </div>
                    <div className="form-search m-4">
                        <Search />
                    </div>

                    <div className="card-body p-3">
                        <form action="" method="get" accept-charset="utf-8">
                            <ResultSearch listItem={apartmentList} />
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apartments: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listAll: bindActionCreators(apartmentAction, dispatch)
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ListApartment)

