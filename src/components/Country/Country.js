import React from 'react';
import './Country.css'

const Country = (props) => {
  // console.log(props.country.area)
  const {name, flags, area, population} = props.country;
  return (
    <div className='container'>
      <h3>Country Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <h5>Area: {area}</h5>
      <h4>Population: {population}</h4>
    </div>
  );
};

export default Country;
