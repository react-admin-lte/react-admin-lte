import React, { Fragment } from 'react';
import MainHeader from 'reactjs-admin-lte/MainHeader';
import SidebarToggle from 'reactjs-admin-lte/SidebarToggle';
import Logo from 'reactjs-admin-lte/Logo';
import Theme from 'reactjs-admin-lte/Theme';

const Home = () => {
  return (
    <Theme miniSidebar={true} skinColor="blue">
      <MainHeader>
        <Logo
          large={<Fragment><b>Admin</b>LTE</Fragment>}
          mini={<Fragment><b>A</b>LT</Fragment>}
        />
        <div className="navbar navbar-static-top">
          <SidebarToggle />
        </div>
      </MainHeader>
    </Theme>
  );
};

export default Home;
