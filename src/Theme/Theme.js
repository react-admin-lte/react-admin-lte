import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mutuallyExclusiveTrueProps } from 'airbnb-prop-types';
import warning from 'warning';
import uncontrollable from 'uncontrollable';

export class Theme extends Component {
  constructor(props) {
    super(props);
    this.handleChange= this.handleChange.bind(this);
  }

  getChildContext() {
    return {
      $adminlte_theme: {
        onChange: this.handleChange
      }
    }
  }

  handleChange(e) {
    this.props.onChange(!this.props.sidebarCollapsed, e);
  }

  render() {
    const {
      boxed,
      children,
      className: classNameProp,
      fixed,
      miniSidebar,
      onChange: _,
      sidebarCollapsed,
      skinColor,
      topNav,
      ...other
    } = this.props;

    warning(
      !(boxed === true && fixed == true),
      'The boxed and fixed properties should not be supplied at the same time.'
    );

    const className = classNames({
      fixed,
      'layout-boxed': boxed,
      'layout-top-nav': topNav,
      'sidebar-collapse': sidebarCollapsed,
      'sidebar-mini': miniSidebar,
      [`skin-${skinColor}`]: skinColor
    }, classNameProp);

    return (
      <div className={className} {...other}>
        <div className="wrapper">
          {children}
        </div>
      </div>
    );
  }
}

Theme.propTypes = {
  /**
   * Layout will only be stretched to 1250px.
   */
  boxed: mutuallyExclusiveTrueProps('boxed', 'fixed'),
  /**
   * The content of the layout.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * It `true`, collapsed the sidebar by default.
   */
  defaultSidebarCollapsed: PropTypes.bool,
  /**
   * Displays fixed header and sidebar.
   */
  fixed: mutuallyExclusiveTrueProps('boxed', 'fixed'),
  /**
   * When collapsed, sidebar will show icons only.
   */
  miniSidebar: PropTypes.bool,
  /**
   * Callback fired when the sidebar is toggled.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} collapsed The 'collapsed` state of the sidebar
   */
  onChange: PropTypes.func,
  /**
   * If `true`, collapses the sidebar. Setting this prop enables control of
   * the Layout.
   */
  sidebarCollapsed: PropTypes.bool,
  /**
   * The color of the skin.
   */
  skinColor: PropTypes.oneOf([
    'blue', 'black', 'purple', 'green', 'red', 'yellow', 'blue-light', 'black-light',
    'purple-light', 'green-light', 'red-light', 'yellow-light'
  ]),
  /**
   * Removes sidebar and puts navbar at top.
   */
  topNav: PropTypes.bool
};

Theme.childContextTypes = {
  $adminlte_theme: PropTypes.shape({
    onChange: PropTypes.func
  })
};

export default uncontrollable(Theme, {
  sidebarCollapsed: 'onChange'
});
