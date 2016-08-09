import React from 'react';
import classNames from 'classnames';

const propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};

const ContentHeader = ({
  className,
  title,
  description,
}) => {
  const classes = {
    'content-header': true,
  };

  return (
    <div className={classNames(className, classes)}>
      <h1>{title}</h1>
      {description ? <small>{description}</small> : null}
    </div>
  );
};

ContentHeader.propTypes = propTypes;

export default ContentHeader;
