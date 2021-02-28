import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <div>
            <h3> {props.title}</h3>
            <hr/>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Default Prop Title'
}

export default Navbar;