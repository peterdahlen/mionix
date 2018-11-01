import React, { Component } from 'react';
import CompleteYourSetup from './CompleteYourSetup';
import Colors from './Colors'; 
import './DeskPad.css'; 

class DeskPad extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          description: {}
        };
      }

    componentDidMount() {

        fetch('http://localhost:4000/api/descriptions/desk-pad')
            .then(response => response.json())
            .then(json => {
                console.log(json.descriptions[0]);
                this.setState({description: json.descriptions[0]})
            })
        }
    
    render() {

        var header = "img/desk-pad/" + this.props.match.params.name + "/lifestyle.jpg";

        var top = "img/desk-pad/" + this.props.match.params.name + "/top.jpg";
        var angle = "img/desk-pad/" + this.props.match.params.name + "/side.jpg";

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

                        <CompleteYourSetup products={[{ item: "castor", name: "Castor", price: "€69.99" }, 
                                                      { item: "wei", name: "Wei", price: "€189.99" }, 
                                                      { item: "long-pad", name: "LongPad", price: "€19.99" }]} 
                                           color={active} />

                    </div>
                </div>
        )
    }
}

export default DeskPad;