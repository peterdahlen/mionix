import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from "./components/Home"; 
import Navbar from './components/Navbar'; 
import Castor from "./components/Castor"; 
import Avior from "./components/Avior";
import DeskPad from "./components/DeskPad";
import LongPad from './components/LongPad';
import FooterShipping from './components/FooterShipping';
import Footer from "./components/Footer";

class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <ScrollToTop>
        <div>
          <Navbar />
          <Route path="/" component={Home} exact  />
          <Route path="/castor-:name" component={Castor} />
          <Route path="/avior-:name" component={Avior} />
          <Route path="/desk-pad-:name" component={DeskPad} />
          <Route path="/long-pad-:name" component={LongPad} />
          <Footer />
          <FooterShipping />
        </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;