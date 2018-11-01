import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import "../App.css"; 

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          products: []
        };
      }

    componentDidMount() {

        fetch('http://localhost:4000/api/products')
            .then(response => response.json())
            .then(json => {
                var items = json.map(function(prod) {
                    var colors = prod.colors.map(function(color) {
                        return {item: color.color, alt: color.alt};  
                    });
                    return (<ImageSlider key={prod._id} product={prod._id} items={colors}
                    usp={"img/usp/usp-" + prod._id + ".png"} />);
                    });
                this.setState({products: items})
            })
        }
      
    render() {
        return (
            <div className="App">

                <div className="jumbotron">
                    <img src="img/wei/black/lifestyle.jpg" alt="Jumbotron"></img>
                    <div className="jumbotron-text">
                        <p>We are Mionix, we are swedish<br></br>
                        your desk is about to get fresh!</p>
                    </div>
                </div>

                <div className="container">

                    {this.state.products}

                </div>
                        
            </div>
        )
    }
}

export default Home; 