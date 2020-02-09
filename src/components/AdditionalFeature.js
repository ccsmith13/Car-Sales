import React from 'react';
import { connect } from "react-redux";
import { buyItemAction } from '../actions';

const AdditionalFeature = (props) => {

  const handleAddClick = (e) => {
    e.preventDefault();
    props.buyItemAction(props.feature.id - 1);

  }
  return (
    <li>
      <button onClick={handleAddClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps, {
  buyItemAction
}
)(AdditionalFeature);
