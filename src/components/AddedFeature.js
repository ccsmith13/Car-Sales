import React from 'react';
import { connect } from "react-redux";
import { removeFeatureAction } from '../actions';

const AddedFeature = (props) => {

  const handleRemoveClick = (e) => {
    e.preventDefault();
    props.removeFeatureAction(props.feature.id - 1);
  }

  return (
    <li>
      <button onClick={handleRemoveClick} className="button">X</button>
      {props.feature.name}
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
  removeFeatureAction
}
)(AddedFeature);
