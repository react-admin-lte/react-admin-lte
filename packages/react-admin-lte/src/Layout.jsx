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

const contextTypes = {
  document: React.PropTypes.object,
};

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      document: context.document ? context.document : document,
    };
  }

  componentDidMount() {
    this.state.document.body.classList.toggle('sidebar-mini', true);
    this.state.document.body.classList.toggle(`skin-${this.props.skin}`, true);

    if (this.props.boxed) {
      this.state.document.body.classList.toggle('layout-boxed', true);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.skin !== nextProps.skin) {
      this.state.document.body.classList.toggle(`skin-${nextProps.skin}`, true);
      this.state.document.body.classList.toggle(`skin-${this.props.skin}`, false);
    }

    this.state.document.body.classList.toggle('layout-boxed', nextProps.boxed);
  }

  componentWillUnmount() {
    this.state.document.body.classList.toggle('sidebar-mini', false);
    this.state.document.body.classList.toggle(`skin-${this.props.skin}`, false);
    this.state.document.body.classList.toggle('layout-boxed', false);
    this.state.document.body.classList.toggle('sidebar-collapse', false);
  }

  getChildContext() {
    return {
      $adminlte_layout: {
        toggleMainSidebar: () => {
          this.state.document.body.classList.toggle('sidebar-collapse');
        },
        setMainSidebarCollapsed: (val) => {
          this.state.document.body.classList.toggle('sidebar-collapse', val);
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
Layout.contextTypes = contextTypes;

export default Layout;
