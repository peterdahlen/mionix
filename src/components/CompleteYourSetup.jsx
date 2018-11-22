import React, { Component } from 'react';
import './CompleteYourSetup.css'; 

class CompleteYourSetup extends Component {

    render() {
        
        var active = this.props.color; 
    
        var product = this.props.products.map(function(product) {
            var link = product.item + "-" + active;
            var image = "img/" + product.item + "/" + active + "/top.jpg";
            var name = product.name;
            var price = product.price
                if (link === "long-pad-shark-fin") {
                    link = "long-pad-black"
                }
                if (image === "img/long-pad/shark-fin/top.jpg") {
                    image = "img/long-pad/black/top.jpg"
                }
            return (

            <div key={link} className="pure-u-md-1-3 pure-u-1">
                <div className="loadout-content">
                    <a href={link}><img src={image} alt={name}></img></a>
                    <div data-text={name} className="productSubHeader">
                        {name}
                    </div>
                    <div>
                        <button className="CTA-button"><i className="fas fa-shopping-cart"></i> {price}</button>
                    </div>
                </div>
            </div>
            
            )
        });
        
        return (

            <div>

                <div className="header">
                    <div data-text="COMPLETE YOUR SETUP" className="productTextHeader">
                        COMPLETE YOUR SETUP
                    </div>
                </div>

                <div className="pure-g loadout">
                  
                    {product}
               
                </div>
                
            </div>
            
        )
    }
}

export default CompleteYourSetup;