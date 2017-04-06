import React from 'react';
import FontAwesome from 'react-fontawesome';
import BoxToolButton from './BoxToolButton';

const contextTypes = {
  $adminlte_box: React.PropTypes.shape({
    collapsed: React.PropTypes.bool,
    onCollapseToggle: React.PropTypes.func,
  }),
};

const BoxCollapsedToggleButton = (undefined, context) => {
  const name = (context.$adminlte_box.collapsed)
    ? 'plus'
    : 'minus';

  return (
    <BoxToolButton onClick={context.$adminlte_box.onCollapseToggle}>
      <FontAwesome name={name} />
    </BoxToolButton>
  );
};

BoxCollapsedToggleButton.contextTypes = contextTypes;

export default BoxCollapsedToggleButton;
