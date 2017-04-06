import React from 'react';
import {
    Col,
    Pagination,
    Row,
    Table,
} from 'react-bootstrap';
import DataTableHeaderCell from './DataTableHeaderCell';

const propTypes = {
  currentPage: React.PropTypes.number,
  pageSize: React.PropTypes.number.isRequired,
  totalItems: React.PropTypes.number.isRequired,
  onPageClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.node,
};

const defaultProps = {
  currentPage: 1,
  onPageClick: () => {},
};

const DataTable = ({
  pageSize,
  totalItems,
  currentPage,
  children,
  onPageClick,
}) => {
  const start = Math.min(((currentPage - 1) * pageSize) + 1, totalItems);
  const end = Math.min(totalItems, currentPage * pageSize);
  const totalPages = Math.max(0, Math.ceil(totalItems / pageSize));

  return (
    <div className="dataTables_wrapper dt-bootstrap">
      <Row>
        <Col sm={12}>
          <Table striped bordered className="dataTable">{children}</Table>
        </Col>
      </Row>
      <Row>
        <Col sm={5}>
          <div className="dataTables_info">
            Showing {start} to {end} of {totalItems} entries
          </div>
        </Col>
        <Col sm={7}>
          <div className="dataTables_paginate paging_simple_numbers">
            <Pagination
              prev="Previous"
              next="Next"
              ellipsis
              boundaryLinks
              maxButtons={5}
              items={totalPages}
              activePage={currentPage}
              onSelect={onPageClick}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

DataTable.propTypes = propTypes;
DataTable.defaultProps = defaultProps;

DataTable.HeaderCell = DataTableHeaderCell;

export default DataTable;
