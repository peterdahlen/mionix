import React, { Component } from 'react';
import CompleteYourSetup from './CompleteYourSetup';
import Colors from './Colors'; 
import Awards from './Awards';
import './Castor.css'; 

class Castor extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          description: {}
        };
      }

    componentDidMount() {

        fetch('http://localhost:4000/api/descriptions/castor')
            .then(response => response.json())
            .then(json => {
                console.log(json.descriptions[0]);
                this.setState({description: json.descriptions[0]})
            })
        }

    render() {

        var header = "img/castor/" + this.props.match.params.name + "/lifestyle.jpg";

        var top = "img/castor/" + this.props.match.params.name + "/top.jpg";
        var angle = "img/castor/" + this.props.match.params.name + "/angle.jpg";
        var side = "img/castor/" + this.props.match.params.name + "/side.jpg";

        var active = this.props.match.params.name; 

        return (
            <div>
            
                <img src={header} className="productHeader" alt="Castor"></img>

                <div className="buyButton">
                    <button>Buy</button>
                </div>
           
                    <div className="container"> 

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

                        <CompleteYourSetup products={[{ item: "desk-pad", name: "DeskPad", price: "€29.99" }, 
                                                      { item: "wei", name: "Wei", price: "€189.99" }, 
                                                      { item: "long-pad", name: "LongPad", price: "19.99" }]} 
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

export default Castor;