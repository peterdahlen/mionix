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
import { connect } from 'react-redux';
import Cart from './components/shopify/Cart';
import store from './store';

class App extends Component {

  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }
  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
    state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}});
    });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id
    state.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}});
    });
  }
  handleCartClose() {
    store.dispatch({type: 'CLOSE_CART'});
  }
  handleCartOpen() {
    store.dispatch({type: 'OPEN_CART'});
  }
 
  render() {
    const state = store.getState(); // state from redux store 
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <Navbar handleCartOpen={this.handleCartOpen} />
            <Route path="/" render={() => (<Home cookies={this.props.cookies}/>)} exact  />
            <Route path="/castor-:name" component={Castor} />
            <Route path="/avior-:name" component={Avior} />
            <Route path="/desk-pad-:name" component={DeskPad} />
            <Route path="/long-pad-:name" component={LongPad} />
            <Cart
              checkout={state.checkout}
              isCartOpen={state.isCartOpen}
              handleCartClose={this.handleCartClose}
              updateQuantityInCart={this.updateQuantityInCart}
              removeLineItemInCart={this.removeLineItemInCart} />
            <Footer />
            <FooterShipping />
          </div>
        </ScrollToTop>
        
      </BrowserRouter>
    );
  }
}

export default connect((state) => state)(App);