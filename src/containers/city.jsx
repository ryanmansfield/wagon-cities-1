import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectCity from '../actions/index';

const City = (props) => {
  return (
    <li
      classname="list-group-item"
      onClick= {() => props.selectCity(props.city)}
    >{props.city.name}</li>
  );
};

function mapDispatchToProps(dispact) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
