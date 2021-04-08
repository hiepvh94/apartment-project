//import logo from './logo.svg';
import './App.css';
import Header from './screens/header/Header';
import Body from './screens/body/Body.js';
import Footer from './screens/footer/Footer.js';
import React from 'react';


//Parent component
class Container extends React.Component {

  render() {
    return (
      <div className="Container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Container;
