import React from 'react';
import { Table } from 'react-bootstrap';

const propTypes = {
  children: React.PropTypes.node,
};

const DataTableTable = ({ children }) => (
  <Table bordered striped className="dataTable">
    {children}
  </Table>
);

DataTableTable.propTypes = propTypes;

export default DataTableTable;
