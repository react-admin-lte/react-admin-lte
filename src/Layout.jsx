import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  skin: React.PropTypes.oneOf([
    'blue', 'black', 'purple', 'green', 'red', 'yellow', 'blue-light', 'black-light',
    'purple-light', 'green-light', 'red-light', 'yellow-light',
  ]).isRequired,
  type: React.PropTypes.oneOf(['boxed', 'sidebar-collapsed', 'top-nav', 'fixed']),
};

const defaultProps = {
  type: 'fixed',
};

const Layout = ({ skin, type, children }) => {
  const classes = {
    'sidebar-mini': true,
  };

  classes[`skin-${skin}`] = true;

  if (type === 'sidebar-collapsed') {
    classes[type] = true;
  } else {
    classes[`layout-${type}`] = true;
  }

  return (
    <div className={classNames(classes)}>
      <div className="wrapper">{children}</div>
    </div>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
