import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import MainSidebarMenuItem from './MainSidebarMenuItem';

const propTypes = {
  active: React.PropTypes.bool,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  iconName: React.PropTypes.string,
  title: React.PropTypes.string,
  treeId: React.PropTypes.any.isRequired,
};

const defaultProps = {
  active: false,
};

const contextTypes = {
  selectedTreeId: React.PropTypes.any,
  setSelectedTreeId: React.PropTypes.func.isRequired,
};

class MainSidebarMenuTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { selectedTreeId, setSelectedTreeId } = this.context;
    const { active, treeId } = this.props;

    if (!(selectedTreeId === treeId) && !active) {
      setSelectedTreeId(treeId);
    }
  }

  render() {
    const {
      children,
      className,
      iconName,
      title,
    } = this.props;

    const classes = {
      treeview: true,
    };

    const menuClasses = {
      'treeview-menu': true,
      'menu-open': this.props.active,
    };

    const menuStyle = this.props.active
      ? { display: 'block' }
      : null;

    return (
      <MainSidebarMenuItem
        active={this.props.active}
        className={classNames(className, classes)}
        iconName={iconName}
        role="button"
        title={title}
        onClick={this.handleClick}
      >
        <MainSidebarMenuItem.AddonList>
          <FontAwesome name="angle-left" className="pull-right" />
        </MainSidebarMenuItem.AddonList>
        <ul className={classNames(menuClasses)} style={menuStyle}>
          {children}
        </ul>
      </MainSidebarMenuItem>
    );
  }
}

MainSidebarMenuTree.propTypes = propTypes;
MainSidebarMenuTree.defaultProps = defaultProps;
MainSidebarMenuTree.contextTypes = contextTypes;

export default MainSidebarMenuTree;
