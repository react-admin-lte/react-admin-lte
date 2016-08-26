import React from 'react';
import { Row, Col } from 'react-bootstrap';

import DataTableTable from './DataTableTable';
import DataTableControls from './DataTableControls';

const propTypes = {
  controls: React.PropTypes.node,
  table: React.PropTypes.node,
  infoText: React.PropTypes.node,
  pagination: React.PropTypes.node,
};

const DataTable = ({ controls, table, infoText, pagination }) => (
  <div className="dataTables_wrapper form-inline dt-bootstrap">
    <Row>
      {controls}
    </Row>
    <Row>
      <Col sm={12}>
        {table}
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <div className="dataTables_info">
          {infoText}
        </div>
      </Col>
      <Col sm={7}>
        <div className="dataTables_paginate">
          {pagination}
        </div>
      </Col>
    </Row>
  </div>
);

DataTable.propTypes = propTypes;

DataTable.Table = DataTableTable;
DataTable.Controls = DataTableControls;

export default DataTable;
