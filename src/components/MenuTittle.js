import React from 'react';
import { Link } from 'react-router-dom';

class MenuTitle extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            data: 'S01'
        }
    }

    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/list">Apartment List</Link></li>
                    <li><Link to="/detail">Apartment Information</Link></li>
                    <li><Link to="/add">Adding information</Link></li>
                    <li><Link to="/detail">Apartment Information</Link></li>
                    <li><Link to="/detail">Apartment Information</Link></li>
                    <li><Link to="/detail">Apartment Information</Link></li>
                    <li><Link to="/detail">Apartment Information</Link></li>
                </ul>
            </div>
        )
    }
}

export default MenuTitle;