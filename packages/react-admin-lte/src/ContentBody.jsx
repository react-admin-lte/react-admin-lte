import React from 'react';
import classNames from 'classnames';

const ContentBody = ({
  className,
  children,
}) => {
  const classes = {
    'content': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

export default ContentBody;
