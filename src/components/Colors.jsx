import React, { Component } from 'react';
import './Colors.css'; 

class Colors extends Component {
    render() {
 
        var product = this.props.product; 
        var active = this.props.active; 
        var colors = this.props.colors.map(function(colors) {
            var link = "/" + product + "-" + colors;
                if (active === colors) {
                    colors = colors + " active ";
                }
            var className = colors + " color-select ";
            return <a href={link} className={className}> </a>
        });
        
        return (

            <div>

                <div className="header">
                    <div data-text="AVAILABLE COLORS" className="productSubHeader">
                        AVAILABLE COLORS
                    </div>
                </div>
                
                <div className="color-selector">
                    {colors}
                </div>
                
            </div>
        )
    }
}

export default Colors;