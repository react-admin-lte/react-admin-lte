import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
    Col,
    Pagination,
    Row,
    Table,
    SelectCallback,
} from 'react-bootstrap';
import DataTableHeaderCell from './DataTableHeaderCell';

export interface Props {
  currentPage?: number;
  pageSize: number;
  totalItems: number;
  onPageClick: SelectCallback;
};

export interface DataTableComponent extends React.StatelessComponent<Props> {
  HeaderCell: typeof DataTableHeaderCell;
};

const propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  currentPage: 1,
  onPageClick: () => {},
};

const DataTable = (({
  pageSize,
  totalItems,
  currentPage,
  children,
  onPageClick,
}) => {
  const start = !currentPage
    ? 0
    : Math.min(((currentPage - 1) * pageSize) + 1, totalItems);
  const end = !currentPage
    ? 0
    : Math.min(totalItems, currentPage * pageSize);
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
}) as DataTableComponent;

DataTable.propTypes = propTypes;
DataTable.defaultProps = defaultProps;

DataTable.HeaderCell = DataTableHeaderCell;

export default DataTable;
