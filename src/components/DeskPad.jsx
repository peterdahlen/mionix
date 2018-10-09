import React, { Component } from 'react';
import Colors from './Colors'; 
import './DeskPad.css'; 

class DeskPad extends Component {
    
    render() {

        var header = "img/desk-pad/" + this.props.match.params.name + "/lifestyle.jpg";

        var top = "img/desk-pad/" + this.props.match.params.name + "/top.jpg";
        var angle = "img/desk-pad/" + this.props.match.params.name + "/side.jpg";

        var castorImg = "img/castor/" + this.props.match.params.name + "/top.jpg";
        var castorLink = "castor-" + this.props.match.params.name; 
        var wei = "img/wei/" + this.props.match.params.name + "/top.jpg";
        var longpadImg = "img/long-pad/" + this.props.match.params.name + "/top.jpg";
        var longpadLink = "long-pad-" + this.props.match.params.name; 

        if (this.props.match.params.name === 'shark-fin') {
            longpadLink = "long-pad-black"
        };

        if (this.props.match.params.name === 'shark-fin') {
            longpadImg = "img/long-pad/black/top.jpg"
        };

        var active = this.props.match.params.name; 

        return (
            <div>
               
                <img src={header} className="productHeader" alt="Desk pad"></img>

                    <div className="container"> 

                        <div className="pure-g">
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={top} className="productImage" alt="Desk pad top"></img>
                                <div data-text="POPS YOUR DESK" className="productTextHeader">
                                    POPS YOUR DESK
                                </div>
                                <div className="productText">
                                    <p>By far the dopest desk pads on the market! Completely transforms your entire desk and makes it pop.</p>
                                </div>
                            </div>
                            </div>
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={angle} className="productImage" alt="Desk pad angle"></img>
                                <div data-text="SUPREME TRACKING" className="productTextHeader">
                                    SUPREME TRACKING
                                </div>
                                <div className="productText">
                                    <p>Not only comfy when resting your arms but also delivers an outstanding tracking experience.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                       
                        <div className="productText">
                            <ul>
                                <li>Soft and comfortable</li>
                                <li>Overlocked edge</li>
                                <li>3 mm thick non-slip rubber base</li>
                                <li>Water repellent</li>
                                <li>Great tracking performance</li>
                                <li>Size: 900 x 440 x 3 mm</li>
                            </ul>
                        </div>
                        
                        <div className="review">
                            <button>Review us on Amazon</button>
                        </div>

                        <Colors product="desk-pad" active={active} colors={["frosting", "ice-cream", "french-fries", "shark-fin", "black"]}/>

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
                                    <a href={longpadLink}>
                                    <img src={longpadImg} alt="Longpad"></img></a>
                                    <div data-text="Long-Pad" className="productSubHeader">
                                        Long-Pad
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

export default DeskPad;