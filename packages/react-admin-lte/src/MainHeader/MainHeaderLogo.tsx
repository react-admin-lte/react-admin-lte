import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';
import MainHeaderMiniLogo from './MainHeaderMiniLogo';
import MainHeaderLargeLogo from './MainHeaderLargeLogo';

export interface Props {
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export interface MainHeaderLogoComponent extends React.StatelessComponent<Props> {
  Mini: typeof MainHeaderMiniLogo;
  Large: typeof MainHeaderLargeLogo;  
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

const MainHeaderLogo = (({
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
}) as MainHeaderLogoComponent;

MainHeaderLogo.propTypes = propTypes;

MainHeaderLogo.Mini = MainHeaderMiniLogo;
MainHeaderLogo.Large = MainHeaderLargeLogo;

export default MainHeaderLogo;
