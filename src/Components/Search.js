import React from 'react';
import Proptypes from 'prop-types';
import '../CSS/search.css';

const Query = ({ handleChange }) => (
  <form className="form">
    <input className="input-search" type="text" placeholder="Search" onChange={handleChange} />
  </form>
);

Query.propTypes = {
  handleChange: Proptypes.func.isRequired,
};

export default Query;
