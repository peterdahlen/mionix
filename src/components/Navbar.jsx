import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

class Navbar extends Component {
    render() {
 
      return (

            <div className="navbar">

                <div className="menu-bars">
                    <i className="fas fa-bars"></i>
                </div>

                <div className="logo">
                    <Link to="/">
                        <img src="img/mionix-white.svg" className="mionix" alt="Minonix logo"></img>
                    </Link>
                </div>

                <div className="cart">
                    <i className="fas fa-shopping-cart"></i>
                </div>
   
            </div>
        )
    }
}

export default Navbar;