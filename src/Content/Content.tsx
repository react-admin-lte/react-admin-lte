import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';

export interface Props {
  className?: string;
};

const propTypes = {
  className: PropTypes.string
};

export interface ContentComponent extends React.StatelessComponent<Props> {
  Header: typeof ContentHeader;
  Body: typeof ContentBody;
};

const Content = (({
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
}) as ContentComponent;

Content.propTypes = propTypes;

Content.Header = ContentHeader;
Content.Body = ContentBody;

export default Content;
