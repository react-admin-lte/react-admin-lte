import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import BoxToolButton from './BoxToolButton';

const contextTypes = {
  $adminlte_box: PropTypes.shape({
    onRemove: PropTypes.func,
  }),
};

const BoxRemoveButton = (undefined, context) => {
  return (
    <BoxToolButton onClick={context.$adminlte_box.onRemove}>
      <FontAwesome name="times" />
    </BoxToolButton>
  )
};

BoxRemoveButton.contextTypes = contextTypes;

export default BoxRemoveButton;
