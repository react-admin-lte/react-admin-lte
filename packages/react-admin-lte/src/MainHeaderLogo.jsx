import React from 'react';
import classNames from 'classnames';
import MainHeaderMiniLogo from './MainHeaderMiniLogo';
import MainHeaderLargeLogo from './MainHeaderLargeLogo';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

const MainHeaderLogo = ({
  children,
  className,
  href,
  onClick,
}) => {
  const classes = {
    logo: true,
  };

  return (
    <a
      className={classNames(className, classes)}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

MainHeaderLogo.propTypes = propTypes;

MainHeaderLogo.Mini = MainHeaderMiniLogo;
MainHeaderLogo.Large = MainHeaderLargeLogo;

export default MainHeaderLogo;
