import React, { Component } from 'react';
import Colors from './Colors'; 
import './LongPad.css'; 

class LongPad extends Component {
    render() {

        var header = "img/long-pad/" + this.props.match.params.name + "/lifestyle.jpg";

        var top = "img/long-pad/" + this.props.match.params.name + "/top.jpg";
        var angle = "img/long-pad/" + this.props.match.params.name + "/side.jpg";

        var castorImg = "img/castor/" + this.props.match.params.name + "/top.jpg";
        var castorLink = "castor-" + this.props.match.params.name; 
        var wei = "img/wei/" + this.props.match.params.name + "/top.jpg";
        var aviorImg = "img/avior/" + this.props.match.params.name + "/top.jpg";
        var aviorLink = "avior-" + this.props.match.params.name; 

        var active = this.props.match.params.name; 

        return (

            <div>
               
                <img src={header} className="productHeader" alt="Desk pad"></img>

                    <div className="container"> 

                        <div className="pure-g">
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={top} className="productImage" alt="Desk pad top"></img>
                                <div data-text="ONE PAD TWO FUNCTIONS" className="productTextHeader">
                                    ONE PAD TWO FUNCTIONS
                                </div>
                                <div className="productText">
                                    <p>Combining comfort with a supreme tracking surface, the Long Pad doubles as a wrist rest or mouse pad..</p>
                                </div>
                            </div>
                            </div>
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={angle} className="productImage" alt="Desk pad angle"></img>
                                <div data-text="CHOOSE YOUR FLAVOR" className="productTextHeader">
                                    CHOOSE YOUR FLAVOR
                                </div>
                                <div className="productText">
                                    <p>Comes in four delicious flavors: French Fries, Ice Cream, Frosting and Black with our bold patterns.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                       
                        <div className="productText">
                            <ul>
                                <li>Wrist rest and mouse pad</li>
                                <li>Flexible and soft</li>
                                <li>10mm foam base</li>
                                <li>Great tracking performance</li>
                                <li>Size: 440 x 100 x 10 mm</li>
                            </ul>
                        </div>
                        
                        <div className="review">
                            <button>Review us on Amazon</button>
                        </div>

                        <Colors product="long-pad" active={active} colors={["frosting", "ice-cream", "french-fries", "black"]}/>

                        <div className="header">
                            <div data-text="COMPLETE YOUR SETUP" className="productTextHeader">
                                COMPLETE YOUR SETUP
                            </div>
                        </div>

                        <div className="pure-g loadout">
                            <div className="pure-u-md-1-3 pure-u-1">
                                <div className="loadout-content">
                                    <a href={castorLink}>
                                    <img src={castorImg} alt="Castor"></img></a>
                                    <div data-text="Castor" className="productSubHeader">
                                        Castor
                                    </div>
                                    <div>
                                        <button className="CTA-button"><i className="fas fa-shopping-cart"></i> €29:99</button>
                                    </div>
                                </div>
                            </div>
                            <div className="pure-u-md-1-3 pure-u-1">
                                <div className="loadout-content">
                                    <a href={aviorLink}>
                                    <img src={aviorImg} alt="Longpad"></img></a>
                                    <div data-text="Avior" className="productSubHeader">
                                        Avior
                                    </div>
                                    <div>
                                        <button className="CTA-button"><i className="fas fa-shopping-cart"></i> €19:99</button>
                                    </div>
                                </div>
                            </div>
                            <div className="pure-u-md-1-3 pure-u-1">
                                <div className="loadout-content">
                                    <img src={wei} alt="Wei"></img>
                                    <div data-text="Wei" className="productSubHeader">
                                        Wei
                                    </div>
                                    <div>
                                        <button className="CTA-button"><i className="fas fa-shopping-cart"></i> €189:99</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        )
    }
}

export default LongPad;