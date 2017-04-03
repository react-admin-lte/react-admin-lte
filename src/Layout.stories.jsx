import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import FontAwesome from 'react-fontawesome';
import alexanderPierce from 'admin-lte/dist/img/user2-160x160.jpg';
import {
  Layout,
  MainHeader,
  MainSidebar,
  Content,
  Box,
  MainFooter,
} from '.';

const menuClickAction = action('menu click');
const userClickAction = action('user panel click');

storiesOf('Layout', module)
  .add('default (fixed)', () => (
    <Layout skin="blue">
      <MainHeader>
        <MainHeader.Logo>
          <MainHeader.Logo.Large><b>Admin</b>LTE</MainHeader.Logo.Large>
          <MainHeader.Logo.Mini><b>A</b>LT</MainHeader.Logo.Mini>
        </MainHeader.Logo>
        <MainHeader.Navbar>
          <MainHeader.SidebarToggle />
        </MainHeader.Navbar>
      </MainHeader>
      <MainSidebar>
        <MainSidebar.UserPanel>
          <MainSidebar.UserPanel.Image src={alexanderPierce} />
          <MainSidebar.UserPanel.Info>
            <p>Alexander Pierce</p>
            <a href="#" onClick={e => { e.preventDefault(); userClickAction(e); }}>
              <FontAwesome
                className="text-success"
                tag="i"
                name="circle"
              />
              Online
            </a>
          </MainSidebar.UserPanel.Info>
        </MainSidebar.UserPanel>
        <MainSidebar.Menu>
          <MainSidebar.Menu.Header>MAIN NAVIGATION</MainSidebar.Menu.Header>
          <MainSidebar.Menu.Tree
            active
            iconName="dashboard"
            title="Dashboard"
            treeId="dashboard"
          >
            <MainSidebar.Menu.Item
              href="index.html"
              title="Dashboard v1"
              iconName="circle-o"
            />
            <MainSidebar.Menu.Item
              active
              href="index.html"
              title="Dashboard v2"
              iconName="circle-o"
            />
          </MainSidebar.Menu.Tree>
          <MainSidebar.Menu.Tree
            iconName="files-o"
            title="Layout Options"
            treeId="layout"
          >
            <MainSidebar.Menu.Item
              href=""
              title="Top Navigation"
              iconName="circle-o"
            />
            <MainSidebar.Menu.Item
              href=""
              title="Boxed"
              iconName="circle-o"
            />
            <MainSidebar.Menu.Item
              href=""
              title="Fixed"
              iconName="circle-o"
            />
            <MainSidebar.Menu.Item
              href=""
              title="Collapsed Sidebar"
              iconName="circle-o"
            />
          </MainSidebar.Menu.Tree>
          <MainSidebar.Menu.Item
            href="/widgets"
            iconName="th"
            onClick={e => { e.preventDefault(); menuClickAction(e); }}
            title="Widgets"
          >
            <MainSidebar.Menu.Item.AddonList>
              <MainSidebar.Menu.Item.Addon background="green">
                new
              </MainSidebar.Menu.Item.Addon>
            </MainSidebar.Menu.Item.AddonList>
          </MainSidebar.Menu.Item>
        </MainSidebar.Menu>
      </MainSidebar>
      <Content>
        <Content.Header>
          <h1>Fixed Layout <small>Blank example to the fixed layout</small></h1>
        </Content.Header>
        <Content.Body>
          <Box>
            <Box.Header border>
              <Box.Title>Title</Box.Title>
            </Box.Header>
            <Box.Body>Start creating your amazing application!</Box.Body>
            <Box.Footer>Footer</Box.Footer>
          </Box>
        </Content.Body>
      </Content>
      <MainFooter>
        <div className="pull-right"><b>Version</b> 2.3.11</div>
        <strong>Copyright © 2017.</strong> All rights reserved.
      </MainFooter>
    </Layout>
  ))
  .add('boxed', () => (
    <Layout boxed skin="blue">
      <MainHeader>
        <MainHeader.Logo>
          <MainHeader.Logo.Large><b>Admin</b>LTE</MainHeader.Logo.Large>
          <MainHeader.Logo.Mini><b>A</b>LT</MainHeader.Logo.Mini>
        </MainHeader.Logo>
        <MainHeader.Navbar>
          <MainHeader.SidebarToggle />
        </MainHeader.Navbar>
      </MainHeader>
      <MainSidebar>
        <MainSidebar.UserPanel>
          <MainSidebar.UserPanel.Image src={alexanderPierce} />
          <MainSidebar.UserPanel.Info>
            <p>Alexander Pierce</p>
            <a href="#" onClick={e => { e.preventDefault(); userClickAction(e); }}>
              <FontAwesome
                className="text-success"
                tag="i"
                name="circle"
              />
              Online
            </a>
          </MainSidebar.UserPanel.Info>
        </MainSidebar.UserPanel>
        <MainSidebar.Menu>
          <MainSidebar.Menu.Header>MAIN NAVIGATION</MainSidebar.Menu.Header>
          <MainSidebar.Menu.Item
            href="/widgets"
            iconName="th"
            onClick={e => { e.preventDefault(); menuClickAction(e); }}
            title="Widgets"
          >
            <MainSidebar.Menu.Item.AddonList>
              <MainSidebar.Menu.Item.Addon background="green">
                new
              </MainSidebar.Menu.Item.Addon>
            </MainSidebar.Menu.Item.AddonList>
          </MainSidebar.Menu.Item>
        </MainSidebar.Menu>
      </MainSidebar>
      <Content>
        <Content.Header>
          <h1>Fixed Layout <small>Blank example to the fixed layout</small></h1>
        </Content.Header>
        <Content.Body>
          <Box>
            <Box.Header>
              <Box.Title>Title</Box.Title>
            </Box.Header>
            <Box.Body>Start creating your amazing application!</Box.Body>
            <Box.Footer>Footer</Box.Footer>
          </Box>
        </Content.Body>
      </Content>
      <MainFooter>
        <div className="pull-right"><b>Version</b> 2.3.11</div>
        <strong>Copyright © 2017.</strong> All rights reserved.
      </MainFooter>
    </Layout>
  ))
  .add('collapsed sidebar', () => (
    <Layout boxed skin="blue">
      <MainHeader>
        <MainHeader.Logo>
          <MainHeader.Logo.Large><b>Admin</b>LTE</MainHeader.Logo.Large>
          <MainHeader.Logo.Mini><b>A</b>LT</MainHeader.Logo.Mini>
        </MainHeader.Logo>
        <MainHeader.Navbar>
          <MainHeader.SidebarToggle />
        </MainHeader.Navbar>
      </MainHeader>
      <MainSidebar collapsed>
        <MainSidebar.UserPanel>
          <MainSidebar.UserPanel.Image src={alexanderPierce} />
          <MainSidebar.UserPanel.Info>
            <p>Alexander Pierce</p>
            <a href="#" onClick={e => { e.preventDefault(); userClickAction(e); }}>
              <FontAwesome
                className="text-success"
                tag="i"
                name="circle"
              />
              Online
            </a>
          </MainSidebar.UserPanel.Info>
        </MainSidebar.UserPanel>
        <MainSidebar.Menu>
          <MainSidebar.Menu.Header>MAIN NAVIGATION</MainSidebar.Menu.Header>
          <MainSidebar.Menu.Item
            href="/widgets"
            iconName="th"
            onClick={e => { e.preventDefault(); menuClickAction(e); }}
            title="Widgets"
          >
            <MainSidebar.Menu.Item.AddonList>
              <MainSidebar.Menu.Item.Addon background="green">
                new
              </MainSidebar.Menu.Item.Addon>
            </MainSidebar.Menu.Item.AddonList>
          </MainSidebar.Menu.Item>
        </MainSidebar.Menu>
      </MainSidebar>
      <Content>
        <Content.Header>
          <h1>Fixed Layout <small>Blank example to the fixed layout</small></h1>
        </Content.Header>
        <Content.Body>
          <Box>
            <Box.Header>
              <Box.Title>Title</Box.Title>
            </Box.Header>
            <Box.Body>Start creating your amazing application!</Box.Body>
            <Box.Footer>Footer</Box.Footer>
          </Box>
        </Content.Body>
      </Content>
      <MainFooter>
        <div className="pull-right"><b>Version</b> 2.3.11</div>
        <strong>Copyright © 2017.</strong> All rights reserved.
      </MainFooter>
    </Layout>
  ));
