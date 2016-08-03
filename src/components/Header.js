import React, { Component } from 'react';

import logo from '../img/logo.png';

class Header extends Component {
    render() {
        return (
            <div id="logo">
              <a href="/">
                <img src={logo} />
              </a>
            </div>
        )
    }
}

export default Header;
