import React from 'react';
import FontAwesome from 'react-fontawesome';
import BoxToolButton from './BoxToolButton';

const contextTypes = {
  $adminlte_box: React.PropTypes.shape({
    onRemove: React.PropTypes.func,
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
