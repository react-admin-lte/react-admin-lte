import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const ContentHeader: React.StatelessComponent<Props> = ({
  className,
  children,
}) => {
  const classes = {
    'content-header': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

ContentHeader.propTypes = propTypes;

export default ContentHeader;
