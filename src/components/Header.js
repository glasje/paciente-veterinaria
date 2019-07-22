import React from 'react';
import PropTypes from 'prop-types'
const Header =({titulo})=> 
    (
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);

Header.protoTypes={
    titulo : PropTypes.string.isRequired
    
}

export default Header;