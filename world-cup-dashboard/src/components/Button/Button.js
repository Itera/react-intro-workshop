import React from 'react';
import PropTypes from 'prop-types'
import './Button.css';

const Button = ({onClick, name}) => (
  <button className="button" onClick={onClick}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
