import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const ContentHeader = ({
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
