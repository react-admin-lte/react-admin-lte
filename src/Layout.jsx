import React from 'react';
import classNames from 'classnames';

const propTypes = {
  boxed: React.PropTypes.bool,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  skin: React.PropTypes.oneOf([
    'blue', 'black', 'purple', 'green', 'red', 'yellow', 'blue-light', 'black-light',
    'purple-light', 'green-light', 'red-light', 'yellow-light',
  ]).isRequired,
};

const defaultProps = {
  boxed: false,
};

const childContextTypes = {
  $adminlte_layout: React.PropTypes.shape({
    toggleMainSidebar: React.PropTypes.func,
  }),
};

class Layout extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('sidebar-mini', true);
    document.body.classList.toggle(`skin-${this.props.skin}`, true);

    if (this.props.boxed) {
      document.body.classList.toggle('layout-boxed', true);
    }
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle(`skin-${nextProps.skin}`, true);
    document.body.classList.toggle(`skin-${this.props.skin}`, true);
    document.body.classList.toggle('layout-boxed', this.props.boxed);
  }

  componentWillUnmount() {
    document.body.classList.toggle('sidebar-mini', false);
    document.body.classList.toggle(`skin-${this.props.skin}`, false);
    document.body.classList.toggle('layout-boxed', false);
    document.body.classList.toggle('sidebar-collapse', false);
  }

  getChildContext() {
    return {
      $adminlte_layout: {
        toggleMainSidebar: () => {
          document.body.classList.toggle('sidebar-collapse');
        },
        setMainSidebarCollapsed: (val) => {
          document.body.classList.toggle('sidebar-collapse', val);
        },
      },
    };
  }

  render() {
    const classes = {
      wrapper: true,
    };

    return (
      <div className={classNames(this.props.className, classes)}>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
Layout.childContextTypes = childContextTypes;

export default Layout;
