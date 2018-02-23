import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';
import FontAwesome = require('react-fontawesome');

import BoxHeader from './BoxHeader';
import BoxTitle from './BoxTitle';
import BoxTools from './BoxTools';
import BoxCollapsedToggleButton from './BoxCollapsedToggleButton';
import BoxRemoveButton from './BoxRemoveButton';
import BoxBody from './BoxBody';
import BoxFooter from './BoxFooter';

export interface Props {
  collapsed?: boolean;
  style?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'widget';
  solid?: boolean;
  loading?: boolean;
  spinner?: 'circle-o-notch' | 'cog' | 'gear' | 'refresh' | 'spinner';
  className?: string;
};

export interface State {
  collapsed: boolean;
  removed: boolean;
};

const propTypes = {
  collapsed: PropTypes.bool,
  style: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'widget']),
  solid: PropTypes.bool,
  loading: PropTypes.bool,
  spinner: PropTypes.oneOf(['circle-o-notch', 'cog', 'gear', 'refresh', 'spinner']),
  className: PropTypes.string,
  children: PropTypes.node,
  onCollapseToggle: PropTypes.func,
};

const defaultProps = {
  collapsed: false,
  loading: false,
  spinner: 'refresh',
  solid: false,
};

const childContextTypes = {
  $adminlte_box: PropTypes.shape({
    collapsed: PropTypes.bool,
    onCollapseToggle: PropTypes.func,
    onRemove: PropTypes.func,
  }),
};

class Box extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed,
      removed: false,
    };
  }

  static propTypes = propTypes;
  static defaultProps = defaultProps;
  static childContextTypes = childContextTypes;

  static Header: typeof BoxHeader;
  static Title: typeof BoxTitle;
  static Tools: typeof BoxTools;
  static CollapsedToggleButton: typeof BoxCollapsedToggleButton;
  static RemoveButton: typeof BoxRemoveButton;
  static Body: typeof BoxBody;
  static Footer: typeof BoxFooter;

  getChildContext() {
    return {
      $adminlte_box: {
        collapsed: this.state.collapsed,
        onCollapseToggle: () => {
          this.setState({
            collapsed: !this.state.collapsed,
          });
        },
        onRemove: () => {
          this.setState({
            removed: true,
          });
        },
      },
    };
  }

  render() {
    if (this.state.removed) {
      return null;
    }

    const {
      className,
      children,
      style,
      solid,
      loading,
      spinner,
    } = this.props;

    const classes = {
      box: true,
    };

    if (this.state.collapsed) {
      classes['collapsed-box'] = true;
    }

    if (style) {
      classes[`box-${style}`] = true;
    }

    if (solid) {
      classes['box-solid'] = true;
    }

    const overlay = loading
      ? <div className="overlay"><FontAwesome name={`${spinner}`} spin /></div>
      : null;

    return (
      <div className={classNames(className, classes)}>
        {children}
        {overlay}
      </div>
    );
  }
};

Box.Header = BoxHeader;
Box.Title = BoxTitle;
Box.Tools = BoxTools;
Box.CollapsedToggleButton = BoxCollapsedToggleButton;
Box.RemoveButton = BoxRemoveButton;
Box.Body = BoxBody;
Box.Footer = BoxFooter;

export default Box;
