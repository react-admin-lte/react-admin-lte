import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainHeader = ({
  children,
  className: classNameProp,
  component: Component,
  largeLogo,
  logoComponent,
  logoHref,
  miniLogo,
  onSidebarCollapseClick,
  ...other
}, context) => {
  const className = classNames({
    'main-header': true
  }, classNameProp);

  let handleCollapseClick;

  if (onSidebarCollapseClick) {
    handleCollapseClick = onSidebarCollapseClick;
  } else if (context.$adminlte_theme) {
    handleCollapseClick = (e) => { context.$adminlte_theme.onChange(e) };
  }

  const logos = [
    <span key="mini" className="logo-mini">{miniLogo}</span>,
    <span key="large" className="logo-lg">{largeLogo}</span>
  ];

  const logo = typeof logoComponent === 'function'
    ? logoComponent({ className: 'logo', children: logos })
    : <a className="logo" href={logoHref}>{logos}</a>;

  return (
    <Component className={className} {...other}>
      {logo}
      <div className="navbar navbar-static-top">
        <a
          className="sidebar-toggle"
          onClick={handleCollapseClick}
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
          {children}
        </div>
      </div>
    </Component>
  );
};

MainHeader.propTypes = {
  /**
   * The contents of the main footer.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * The logo to display when sidebar is expanded.
   */
  largeLogo: PropTypes.node,
  /**
   * Override rendering of logo. If not supplied is `a` by default.
   */
  logoComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Supplied to logo `a` element if not overriden.
   */
  logoHref: PropTypes.string,
  /**
   * The logo to display when mini sidebar is collapsed.
   */
  miniLogo: PropTypes.node,
  /**
   * Callback fired when the sidebar collapse is clicked.
   */
  onSidebarCollapseClick: PropTypes.func
};

MainHeader.defaultProps = {
  component: 'header'
};

MainHeader.contextTypes = {
  $adminlte_theme: PropTypes.shape({
    onChange: PropTypes.func
  })
};

export default MainHeader;
