import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { MainSidebar } from 'reactjs-admin-lte';

const propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
};

const renderItems = items =>
  items.map(({
    heading,
    name,
    slug,
    content,
   }, index) => (
    <MainSidebar.Menu.Item
      href={`#${slug}`}
      iconName="circle-o"
      key={index}
    >
      {name}
    </MainSidebar.Menu.Item>
  ));

const ComponentsListRenderer = ({
  children,
  items,
}) =>
  <MainSidebar.Menu>
    {renderItems(items)}
  </MainSidebar.Menu>;

ComponentsListRenderer.propTypes = propTypes;

export default ComponentsListRenderer;

