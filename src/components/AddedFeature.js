import React from 'react';
import { connect } from "react-redux";

import { removeFeatureAction } from '../actions';

const AddedFeature = (props) => {

  const handleRemoveClick = (e) => {
    // update additional price +=  feature.price
    // update features list to include additional feature object that gets clicked on 
    e.preventDefault();
    //console.log('props', props);
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
  // state === redux store
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps, {
  removeFeatureAction
}
)(AddedFeature);
//export default AddedFeature;
