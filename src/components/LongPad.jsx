import React, { Component } from 'react';
import CompleteYourSetup from "./CompleteYourSetup"; 
import Colors from './Colors'; 
import './LongPad.css'; 

class LongPad extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          description: {}
        };
      }

    componentDidMount() {

        fetch('http://localhost:4000/api/descriptions/long-pad')
            .then(response => response.json())
            .then(json => {
                console.log(json.descriptions[0]);
                this.setState({description: json.descriptions[0]})
            })
        }

    render() {

        var header = "img/long-pad/" + this.props.match.params.name + "/lifestyle.jpg";

        var top = "img/long-pad/" + this.props.match.params.name + "/top.jpg";
        var angle = "img/long-pad/" + this.props.match.params.name + "/side.jpg";

        var active = this.props.match.params.name; 

        return (

            <div>
               
                <img src={header} className="productHeader" alt="Desk pad"></img>

                    <div className="container"> 

                        <div className="pure-g">
                            <div className="pure-u-md-1-2 pure-u-1 theProduct">
                            <div className="margin">
                                <img src={top} className="productImage" alt="Desk pad top"></img>
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
                                <img src={angle} className="productImage" alt="Desk pad angle"></img>
                                <div data-text={this.state.description.caps02} className="productTextHeader">
                                    {this.state.description.caps02}
                                </div>
                                <div className="productText">
                                    <p>{this.state.description.text02}</p>
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

                        <CompleteYourSetup products={[{ item: "castor", name: "Castor", price: "€69.99" }, 
                                                      { item: "wei", name: "Wei", price: "€189.99" }, 
                                                      { item: "avior", name: "Avior", price: "€49.99" }]} 
                                           color={active} />

                    </div>
                </div>

        )
    }
}

export default LongPad;