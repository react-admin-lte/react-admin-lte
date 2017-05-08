import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  sorted?: 'asc' | 'desc';
  onClick: React.MouseEventHandler<HTMLTableHeaderCellElement>;
};

const propTypes = {
  sorted: PropTypes.oneOf(['asc', 'desc']),
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  onClick: () => {},
};

const DataTableHeaderCell: React.StatelessComponent<Props> = ({
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
