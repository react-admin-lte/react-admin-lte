import React from 'react';
import classNames from 'classnames';

import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';

const Content = ({
  className,
  children,
}) => {
  const classes = {
    'content-wrapper': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

Content.Header = ContentHeader;
Content.Body = ContentBody;

export default Content;
