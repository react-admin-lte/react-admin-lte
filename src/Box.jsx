import React from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

import BoxHeader from './BoxHeader';
import BoxTitle from './BoxTitle';
import BoxBody from './BoxBody';
import BoxFooter from './BoxFooter';

const propTypes = {
  style: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  solid: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

const defaultProps = {
  loading: false,
  solid: false,
};

const Box = ({
  className,
  children,
  style,
  solid,
  loading,
}) => {
  const classes = {
    box: true,
  };

  if (style) {
    classes[`box-${style}`] = true;
  }

  if (solid) {
    classes['box-solid'] = true;
  }

  const spinner = loading
    ? <div className="overlay"><FontAwesome name="refresh" spin /></div>
    : null;

  return (
    <div className={classNames(className, classes)}>
      {children}
      {spinner}
    </div>
  );
};

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

Box.Header = BoxHeader;
Box.Title = BoxTitle;
Box.Body = BoxBody;
Box.Footer = BoxFooter;

export default Box;
