import React from 'react';
import classNames from 'classnames';

const propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

const ContentHeader = ({
  className,
  title,
  description,
  children,
}) => {
  const classes = {
    'content-header': true,
  };

  return (
    <div className={classNames(className, classes)}>
      <h1>{title}</h1>
      {description ? <small>{description}</small> : null}
      {children}
    </div>
  );
};

ContentHeader.propTypes = propTypes;

export default ContentHeader;
