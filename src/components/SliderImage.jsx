import React, { Component } from 'react';
import './SliderImage.css';
import { Link } from 'react-router-dom';

export default class SliderImage extends Component {

    render() {
        
        var name = this.props.product.toUpperCase().replace('-', ' ');
        
        return (
            <div className="slider">
                <Link to={this.props.link}>
                    <img className="slider-image" src={this.props.name} alt={this.props.alt} />
                <img className="usp-sticker" src={this.props.usp} alt={this.props.alt} />
                </Link>
                <div className="CTA">
                    <h2>{name}</h2>
                    <button><i class="fas fa-shopping-cart"></i> €59:99</button> 
                </div>
            </div>
        )
    }
}