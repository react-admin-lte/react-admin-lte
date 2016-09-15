import React from 'react';

const propTypes = {
  href: React.PropTypes.string,
  mini: React.PropTypes.node,
  large: React.PropTypes.node,
};

const MainHeaderLogo = ({ large, mini, href }) => (
  <a href={href} className="logo">
    <span className="logo-mini">
      {mini}
    </span>
    <span className="logo-lg">
      {large}
    </span>
  </a>
);

MainHeaderLogo.propTypes = propTypes;

export default MainHeaderLogo;
