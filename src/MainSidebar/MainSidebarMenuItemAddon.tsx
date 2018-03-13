import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';
import Label from '../Label';

export interface Props {
  background: 'light-blue' | 'red' | 'green' | 'yellow';
  className?: string;
};

let propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

if (Label.propTypes) {
  propTypes['background'] = Label.propTypes.background;
}

const MainSidebarMenuItemAddon: React.StatelessComponent<Props> = ({
  background,
  children,
  className,
}) => {
  const classes = {
    'pull-right': true,
  };

  return (
    <Label
      background={background}
      className={classNames(className, classes)}
    >{children}</Label>
  );
};

MainSidebarMenuItemAddon.propTypes = propTypes;

export default MainSidebarMenuItemAddon;
