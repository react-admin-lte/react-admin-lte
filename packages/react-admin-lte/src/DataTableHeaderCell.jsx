import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  sorted: PropTypes.oneOf(['asc', 'desc']),
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  onClick: () => {},
};

const DataTableHeaderCell = ({
  children,
  onClick,
  sorted,
}) => {
  const classes = {
    sorting_asc: sorted === 'asc',
    sorting_desc: sorted === 'desc',
    sorting: !sorted,
  };

  return (
    <th className={classNames(classes)} onClick={onClick}>
      {children}
    </th>
  );
};

DataTableHeaderCell.propTypes = propTypes;
DataTableHeaderCell.defaultProps = defaultProps;

export default DataTableHeaderCell;
