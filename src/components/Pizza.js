import React from 'react'
import PropTypes from 'prop-types';

export default function Pizza( { name, ingredients, photoName }) {
  return (
<>
    <h2> {name} </h2>
    <p> {ingredients} </p>
    <img src={photoName} alt={name}></img>
</>
  );
}

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  photoName: PropTypes.string.isRequired
};
