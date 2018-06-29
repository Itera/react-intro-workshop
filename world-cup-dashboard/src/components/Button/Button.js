import React from 'react';
import PropTypes from 'prop-types'
import './Button.css';

const Button = (props) => (
  <button className="button" onClick={props.onClick}>
    {props.name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
