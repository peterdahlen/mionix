import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import store from '../store';
import './Navbar.css'; 

class Navbar extends Component {

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
  
      return (

            <div className="navbar">

                <div className="menu-bars">
                    <Menu />
                </div>

                <div className="logo">
                    <Link to="/">
                        <img src="img/mionix-white.svg" className="mionix" alt="Mionix logo"></img>
                    </Link>
                </div>

                <div className="cart">
                    <i className="fas fa-shopping-cart" onClick={this.props.handleCartOpen}></i>
                </div>
   
            </div>
        )
    }
}

export default Navbar;