import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import MainHeaderMiniLogo from './MainHeaderMiniLogo';
import MainHeaderLargeLogo from './MainHeaderLargeLogo';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
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
