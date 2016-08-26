import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const DataTableControls = ({ children }) => (
  <div className="dataTables_length">
    {children}
  </div>
);

DataTableControls.propTypes = propTypes;

export default DataTableControls;
