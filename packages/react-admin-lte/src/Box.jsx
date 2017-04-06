import React from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

import BoxHeader from './BoxHeader';
import BoxTitle from './BoxTitle';
import BoxTools from './BoxTools';
import BoxCollapsedToggleButton from './BoxCollapsedToggleButton';
import BoxRemoveButton from './BoxRemoveButton';
import BoxBody from './BoxBody';
import BoxFooter from './BoxFooter';

const propTypes = {
  collapsed: React.PropTypes.bool,
  style: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  solid: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  onCollapseToggle: React.PropTypes.func,
};

const defaultProps = {
  collapsed: false,
  loading: false,
  solid: false,
};

const childContextTypes = {
  $adminlte_box: React.PropTypes.shape({
    collapsed: React.PropTypes.bool,
    onCollapseToggle: React.PropTypes.func,
    onRemove: React.PropTypes.func,
  }),
};

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed,
      removed: false,
    };
  }

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

    const spinner = loading
      ? <div className="overlay"><FontAwesome name="refresh" spin /></div>
      : null;

    return (
      <div className={classNames(className, classes)}>
        {children}
        {spinner}
      </div>
    );
  }
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
Box.childContextTypes = childContextTypes;

Box.Header = BoxHeader;
Box.Title = BoxTitle;
Box.Tools = BoxTools;
Box.CollapsedToggleButton = BoxCollapsedToggleButton;
Box.RemoveButton = BoxRemoveButton;
Box.Body = BoxBody;
Box.Footer = BoxFooter;

export default Box;
