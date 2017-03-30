import React from 'react';
import classNames from 'classnames';

const propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
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
