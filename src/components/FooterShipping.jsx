import React, { Component } from 'react';
import './FooterShipping.css'; 

class FooterShipping extends Component {
    render() {
 
      return (

            <div className="sticky">

                <div className="shipping">
                    <p>FREE shipping over €50.00* <span className="global">- Global shipping starts at €7.99</span>
                    <span className="chat"><i className="far fa-question-circle"></i></span>
                    </p>
                </div>
   
            </div>
        )
    }
}

export default FooterShipping;