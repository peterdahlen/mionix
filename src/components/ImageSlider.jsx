import React, { Component } from 'react';
import Slider from 'react-slick';
import SliderImage from './SliderImage';
import './ImageSlider.css';

export default class ImageSlider extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

    render() {
        var settings = {
            dots: true,
            height: 300,
            autoplay: true,
            autoplaySpeed: 10000
        };
        var usp = this.props.usp;
        var product = this.props.product;
        var images = this.props.items.map(function(image) {
            var src = "img/" + product + "/" + image.item + "/lifestyle.jpg";
            var link = "./" + product + "-" + image.item
            return <SliderImage name={src} alt={image.alt} usp={usp} link={link} product={product} key={product}/>
        });
        return (
            <div className="image-slider">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {images}
                </Slider>
                <div className="nav-buttons">
                    <img src="img/arrow-left.svg" onClick={this.previous} alt="nav-button-prev"></img>
                    <img src="img/arrow-right.svg" onClick={this.next} alt="nav-button-next"></img>
                </div>
            </div>
        )
    }
}
