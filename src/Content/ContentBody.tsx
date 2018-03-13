import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
};

const propTypes = {
  className: PropTypes.string
};

const ContentBody: React.StatelessComponent<Props> = ({
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

ContentBody.propTypes = propTypes;

export default ContentBody;
