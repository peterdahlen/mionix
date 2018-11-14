import React, { Component } from 'react';
import CompleteYourSetup from './CompleteYourSetup';
import Colors from './Colors'; 
import Awards from './Awards';
import './Avior.css'; 
import store from '../store';

class Avior extends Component {

    constructor(props) {
        super(props);
        this.state = {
          description: {},
          product: {}
        };
        this.addVariantToCart = this.addVariantToCart.bind(this);
      }

      handleOptionChange(event) {
        const target = event.target
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;
    
        const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)
    
        this.setState({
          selectedVariant: selectedVariant
        });
      }

      addVariantToCart(variantId, quantity) {
        console.log(this.props.match.params.name);
        const state = store.getState(); // state from redux store
        state.client.product.fetchAll().then((products) => {
            // Do something with the products
        products.forEach((product)=>{ 
            if (product.handle === "avior-" + this.props.match.params.name){ 
            
        const lineItemsToAdd = [{"variantId":product.variants[0].id, quantity: parseInt(quantity, 10)}]
        const checkoutId = state.checkout.id
        console.log(checkoutId);
        state.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
          store.dispatch({type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: res}});
        })
    }
});            

          });
      }

      componentDidMount() {

        fetch('http://localhost:4000/api/descriptions/avior')
            .then(response => response.json())
            .then(json => {
                this.setState({description: json.descriptions[0]})
            });  
            console.log('http://localhost:4000/api/products/avior-' + this.props.match.params.name);
            fetch('http://localhost:4000/api/products/avior-' + this.props.match.params.name)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({product: json[0]})
            });     
    }

    render() {

        var header = "img/avior/" + this.props.match.params.name + "/lifestyle.jpg";

        var top = "img/avior/" + this.props.match.params.name + "/top.jpg";
        var angle = "img/avior/" + this.props.match.params.name + "/angle.jpg";
        var side = "img/avior/" + this.props.match.params.name + "/side.jpg";

        var active = this.props.match.params.name; 

        return (
            <div>
                <img src={header} className="productHeader" alt="Castor"></img>
           
                    <div className="container"> 

                    <button className="buy-shopify" onClick={() => this.addVariantToCart(this.state.product.shopifyID, 1)}>Add to Cart</button>

                        <div className="pure-g">
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={top} className="productImage" alt="Castor top"></img>
                                <div data-text={this.state.description.caps01} className="productTextHeader">
                                    {this.state.description.caps01}
                                </div>
                                <div className="productText">
                                    <p>{this.state.description.text01}</p>
                                </div>
                            </div>
                            </div>
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={angle} className="productImage" alt="Castor angle"></img>
                                <div data-text={this.state.description.caps02} className="productTextHeader">
                                    {this.state.description.caps02}
                                </div>
                                <div className="productText">
                                    <p>{this.state.description.text02}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-md-1-2 pure-u-1 theProduct center">
                                <div className="margin">
                                <img src={side} className="productImage" alt="Castor side"></img>
                                    <div data-text={this.state.description.caps03} className="productTextHeader">
                                        {this.state.description.caps03}
                                    </div>
                                    <div className="productText">
                                        <p>{this.state.description.text03}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Awards />

                        <div className="OS-icons">
                            <i className="fab fa-windows"></i>
                            <i className="fab fa-apple"></i>
                        </div>
                        <div className="productText">
                            <ul>
                                <li>5000 native DPI optical sensor (PMW-3325)</li>
                                <li>4 fully programmable buttons</li>
                                <li>Hybrid Palm/Claw Grip</li>
                                <li>For left and right hand use</li>
                                <li>Tangle free cable</li>
                                <li>Weight 119g</li>
                            </ul>
                        </div>
                        
                        <div className="review">
                            <button>Review us on Amazon</button>
                        </div>

                        <Colors product="avior" active={active} colors={["frosting", "ice-cream", "french-fries", "shark-fin", "black"]}/>

                        <CompleteYourSetup products={[{ item: "desk-pad", name: "DeskPad", price: "€29.99" }, 
                                                      { item: "long-pad", name: "LongPad", price: "€19.99"}, 
                                                      { item: "wei", name: "Wei", price: "€189.99" }]} 
                                            color={active} />

                        <div className="software-firmware">                    
                                <div>
                                    <button className="CTA-button">Software</button>
                                    <p>Version: 1.4.0</p>
                                </div>                      
                                <div>
                                    <button className="CTA-button">Firmware</button>
                                    <p>Version: 16</p>
                                </div>                     
                        </div>

                    </div>
                </div>
        )
    }
}

export default Avior;