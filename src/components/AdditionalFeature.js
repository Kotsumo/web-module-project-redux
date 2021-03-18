import React from 'react';
import { connect } from 'react-redux';
import { AddFeature } from '../actions/carSalesActions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.AddFeature(props.feature.id)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {AddFeature})(AdditionalFeature);
