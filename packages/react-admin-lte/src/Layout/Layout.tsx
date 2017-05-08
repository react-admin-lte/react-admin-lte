import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  boxed?: boolean;
  className?: string;
  skin: 'blue' | 'black' | 'purple' | 'green' | 'red' | 'yellow' | 'blue-light'
    | 'black-light' | 'purple-light' | 'green-light' | 'red-light' | 'yellow-light';
};

export interface State {
  document: Document;
};

const propTypes = {
  boxed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  skin: PropTypes.oneOf([
    'blue', 'black', 'purple', 'green', 'red', 'yellow', 'blue-light', 'black-light',
    'purple-light', 'green-light', 'red-light', 'yellow-light',
  ]).isRequired,
};

const defaultProps = {
  boxed: false,
};

const childContextTypes = {
  $adminlte_layout: PropTypes.shape({
    toggleMainSidebar: PropTypes.func,
  }),
};

const contextTypes = {
  document: PropTypes.object,
};

class Layout extends React.Component<Props, State> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      document: context.document ? context.document : document,
    };
  }

  static propTypes = propTypes;
  static defaultProps = defaultProps;
  static childContextTypes = childContextTypes;
  static contextTypes = contextTypes;

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

export default Layout;
