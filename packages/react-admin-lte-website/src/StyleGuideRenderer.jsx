import React, { PropTypes } from 'react';
import {
  Content,
  Layout,
  MainHeader,
} from 'reactjs-admin-lte';
import reactLogo from './react.png';

const propTypes = {
  children: PropTypes.node,
  toc: PropTypes.node,
};

const StyleGuideRenderer = ({
  classes,
  children,
  toc,
}) =>
  <Layout skin="blue">
    <MainHeader>
      <MainHeader.Logo>
        <MainHeader.Logo.Large>
          <img src={reactLogo} height="30" /> <b>Admin</b>LTE
        </MainHeader.Logo.Large>
      </MainHeader.Logo>
      <MainHeader.Navbar>
        <MainHeader.SidebarToggle />
      </MainHeader.Navbar>
    </MainHeader>
    {toc}
    <Content>
      <Content.Body>
        {children}
      </Content.Body>
    </Content>
  </Layout>;

StyleGuideRenderer.propTypes = propTypes;

export default StyleGuideRenderer;

