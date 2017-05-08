import PropTypes from 'prop-types';
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
  collapsed: PropTypes.bool,
  style: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  solid: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  onCollapseToggle: PropTypes.func,
};

const defaultProps = {
  collapsed: false,
  loading: false,
  solid: false,
};

const childContextTypes = {
  $adminlte_box: PropTypes.shape({
    collapsed: PropTypes.bool,
    onCollapseToggle: PropTypes.func,
    onRemove: PropTypes.func,
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
