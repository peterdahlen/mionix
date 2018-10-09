import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import "../App.css"; 

class Home extends Component {
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

                    <ImageSlider product="castor" items={[
                                    { item: "frosting", alt: "Frosting"},
                                    { item: "french-fries", alt: "French Fries"},
                                    { item: "ice-cream", alt: "Ice Cream"}, 
                                    { item: "black", alt: "Black"},
                                    { item: "shark-fin", alt: "Shark-fin"}]}
                                usp="img/usp/usp-castor.svg"/>
                                
                    <ImageSlider product="desk-pad" items={[
                                    { item: "black", alt: "Black"},
                                    { item: "french-fries", alt: "French Fries"},
                                    { item: "frosting", alt: "Frosting"}, 
                                    { item: "ice-cream", alt: "Ice Cream"}, 
                                    { item: "shark-fin", alt: "Shark Fin"}]}
                            usp="img/usp/usp-deskpad.png"/>

                    <ImageSlider product="avior" items={[
                                    { item: "black", alt: "Black"},
                                    { item: "french-fries", alt: "French Fries"},
                                    { item: "frosting", alt: "Frosting"}, 
                                    { item: "ice-cream", alt: "Ice Cream"}, 
                                    { item: "shark-fin", alt: "Shark Fin"}]}
                            usp="img/usp/usp-avior.png"/>

                    <ImageSlider product="long-pad" items={[
                                    { item: "black", alt: "Black"},
                                    { item: "french-fries", alt: "French Fries"},
                                    { item: "frosting", alt: "Frosting"}, 
                                    { item: "ice-cream", alt: "Ice Cream"}]}
                            usp="img/usp/usp-long-pad.png"/>

                </div>
                        
            </div>
        )
    }
}

export default Home; 