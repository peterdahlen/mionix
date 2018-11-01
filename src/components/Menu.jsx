import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Menu.css';

export default props => {
  return (
    <Menu width={ '325px' } noOverlay >
        <p className="menu-header">MICE</p>
        <a className="menu-item" href="/castor-ice-cream">
            Castor Ice Cream
        </a>
        <a className="menu-item" href="/castor-frosting">
            Castor Frosting
        </a>
        <a className="menu-item" href="/castor-french-fries">
            Castor French Fries
        </a>
        <a className="menu-item" href="/castor-shark-fin">
            Castor Shark Fin
        </a>
        <a className="menu-item last" href="/castor-black">
            Castor Black
        </a>
        <a className="menu-item" href="/avior-ice-cream">
            Avior Ice Cream
        </a>
        <a className="menu-item" href="/avior-frosting">
            Avior Frosting
        </a>
        <a className="menu-item" href="/avior-french-fries">
            Avior French Fries
        </a>
        <a className="menu-item" href="/avior-shark-fin">
            Avior Shark Fin
        </a>
        <a className="menu-item last" href="/avior-black">
            Avior Black
        </a>
        <p className="menu-header">PADS</p>
        <a className="menu-item" href="/desk-pad-ice-cream">
            Desk Pad Ice Cream
        </a>
        <a className="menu-item" href="/desk-pad-frosting">
            Desk Pad Frosting
        </a>
        <a className="menu-item" href="/desk-pad-french-fries">
            Desk Pad French Fries
        </a>
        <a className="menu-item" href="/desk-pad-shark-fin">
            Desk Pad Shark Fin
        </a>
        <a className="menu-item last" href="/desk-pad-black">
            Desk Pad Black
        </a>
        <a className="menu-item" href="/long-pad-ice-cream">
            Long Pad Ice Cream
        </a>
        <a className="menu-item" href="/long-pad-frosting">
            Long Pad Frosting
        </a>
        <a className="menu-item" href="/long-pad-french-fries">
            Long Pad French Fries
        </a>
        <a className="menu-item" href="/long-pad-black">
            Long Pad Black
        </a>
    </Menu>
  );
};