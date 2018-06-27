import React from 'react';
import PropTypes from 'prop-types';

export default function HelloWorld(props) {
    return <h1>Hello!</h1>;
}

HelloWorld.propTypes = {
    name: PropTypes.string.isRequired,
};