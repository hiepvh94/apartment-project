import React from 'react';
import ApartmentDetail from '../../components/ApartmentDetail';
// import NewApartment from './content/NewApartment';
import HeadLine from './content/Headline';
import Menu from './menu/Menu';
import { BrowserRouter, Route } from "react-router-dom";
import CreateApartment from './content/CreateApartment';
import UpdateApartment from './content/UpdateApartment';
import ListApartment from './content/ListApartment';

class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    
    render() {
        return (
            <BrowserRouter>
                <section>
                    <nav>
                        <Menu />
                    </nav>
                    <article>
                        {/* <Route path="/" component={ListApartment} /> */}
                        <Route path="/list" component={ListApartment} />
                        <Route path="/detail/:id" component={ApartmentDetail} />
                        <Route path="/update/:id" component={UpdateApartment} />
                        <Route path="/add" component={CreateApartment} />
                    </article>
                </section>
            </BrowserRouter>
        );
    }
}
export default Body;