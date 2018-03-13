import * as PropTypes from 'prop-types';
import * as React from 'react';
import FontAwesome = require('react-fontawesome');
import BoxToolButton from './BoxToolButton';

const contextTypes = {
  $adminlte_box: PropTypes.shape({
    collapsed: PropTypes.bool,
    onCollapseToggle: PropTypes.func,
  }),
};

const BoxCollapsedToggleButton: React.StatelessComponent<{}> = (undefined, context) => {
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
