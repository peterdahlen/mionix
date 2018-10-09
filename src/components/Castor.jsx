import React, { Component } from 'react';
import Colors from './Colors'; 
import Awards from './Awards';
import './Castor.css'; 

class Castor extends Component {

    render() {

        var header = "img/castor/" + this.props.match.params.name + "/lifestyle.jpg";

        var top = "img/castor/" + this.props.match.params.name + "/top.jpg";
        var angle = "img/castor/" + this.props.match.params.name + "/angle.jpg";
        var side = "img/castor/" + this.props.match.params.name + "/side.jpg";

        var deskpadImg = "img/desk-pad/" + this.props.match.params.name + "/top.jpg";
        var deskpadLink = "desk-pad-" + this.props.match.params.name;
        var wei = "img/wei/" + this.props.match.params.name + "/top.jpg";
        var longpadImg = "img/long-pad/" + this.props.match.params.name + "/top.jpg";
        var longpadLink = "long-pad-" + this.props.match.params.name;

        if (this.props.match.params.name === 'shark-fin') {
            longpadImg = "img/long-pad/black/top.jpg"
        }

        if (this.props.match.params.name === 'shark-fin') {
            longpadLink = "long-pad-black"
        }

        var active = this.props.match.params.name; 

        return (
            <div>
                <img src={header} className="productHeader" alt="Castor"></img>
           
                    <div className="container"> 

                        <div className="pure-g">
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={top} className="productImage" alt="Castor top"></img>
                                <div data-text="THE CASTOR" className="productTextHeader">
                                    THE CASTOR
                                </div>
                                <div className="productText">
                                    <p>Making your desk look fresh is easy with the Mionix Castor. It's probably the best optical gaming mouse ever crafted.</p>
                                </div>
                            </div>
                            </div>
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={angle} className="productImage" alt="Castor angle"></img>
                                <div data-text="THE SHAPE" className="productTextHeader">
                                    THE SHAPE
                                </div>
                                <div className="productText">
                                    <p>The ergonomic design for right handers with textured thumb grip and flawless ring and pinky finger grooves keeps your grip tight and always on target.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-md-1-2 pure-u-1 theProduct center">
                                <div className="margin">
                                <img src={side} className="productImage" alt="Castor side"></img>
                                    <div data-text="THE AWARDS" className="productTextHeader">
                                        THE AWARDS
                                    </div>
                                    <div className="productText">
                                        <p>With over 400 awards under its belt, the Castor keeps you one step ahead of the competition and looking fresh.</p>
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
                                <li>5000 native DPI optical sensor (PMW-3310)</li>
                                <li>Hybrid Palm/Claw Grip</li>
                                <li>Adjustable DPI-settings in 50-steps</li>
                                <li>6 fully programmable buttons</li>
                                <li>Customizable LEDs</li>
                                <li>128 kB built-in memory</li>
                                <li>Soft touch coated surface</li>
                                <li>Truly ergonomic design</li>
                                <li>Weight 141.5g</li>
                            </ul>
                        </div>
                        
                        <div className="review">
                            <button>Review us on Amazon</button>
                        </div>

                        <Colors product="castor" active={active} colors={["frosting", "ice-cream", "french-fries", "shark-fin", "black"]}/>

                        <div className="header">
                            <div data-text="COMPLETE YOUR SETUP" className="productTextHeader">
                                COMPLETE YOUR SETUP
                            </div>
                        </div>

                        <div className="pure-g loadout">
                            <div className="pure-u-md-1-3 pure-u-1">
                                <div className="loadout-content">
                                    <a href={deskpadLink}><img src={deskpadImg} alt="DeskPad"></img></a>
                                    <div data-text="DeskPad" className="productSubHeader">
                                        DeskPad
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

export default Castor;