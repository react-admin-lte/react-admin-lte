import * as PropTypes from 'prop-types';
import * as React from 'react';
import FontAwesome = require('react-fontawesome');
import BoxToolButton from './BoxToolButton';

const contextTypes = {
  $adminlte_box: PropTypes.shape({
    onRemove: PropTypes.func,
  }),
};

const BoxRemoveButton: React.StatelessComponent<{}> = (undefined, context) => {
  return (
    <BoxToolButton onClick={context.$adminlte_box.onRemove}>
      <FontAwesome name="times" />
    </BoxToolButton>
  )
};

BoxRemoveButton.contextTypes = contextTypes;

export default BoxRemoveButton;
