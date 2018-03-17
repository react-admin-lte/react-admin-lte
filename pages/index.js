import React, { Fragment } from 'react';
import Layout from 'reactjs-admin-lte/Layout';
import Skin from 'reactjs-admin-lte/Skin';
import Wrapper from 'reactjs-admin-lte/Wrapper';
import MainHeader from 'reactjs-admin-lte/MainHeader';
import SidebarToggle from 'reactjs-admin-lte/SidebarToggle';
import Logo from 'reactjs-admin-lte/Logo';

const Home = () => {
  return (
    <Layout miniSidebar={true}>
      <Skin color="blue">
        <Wrapper>
          <MainHeader>
            <Logo
              large={<Fragment><b>Admin</b>LTE</Fragment>}
              mini={<Fragment><b>A</b>LT</Fragment>}
            />
            <div className="navbar navbar-static-top">
              <SidebarToggle />
            </div>
          </MainHeader>
        </Wrapper>
      </Skin>
    </Layout>
  );
};

export default Home;
