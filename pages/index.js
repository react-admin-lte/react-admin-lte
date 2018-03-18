import React, { Fragment } from 'react';
import MainHeader from 'reactjs-admin-lte/MainHeader';
import Theme from 'reactjs-admin-lte/Theme';

const Home = () => {
  return (
    <Theme miniSidebar={true} skinColor="blue">
      <MainHeader
        largeLogo={<Fragment><b>Admin</b>LTE</Fragment>}
        miniLogo={<Fragment><b>A</b>LT</Fragment>}
      >
      </MainHeader>
    </Theme>
  );
};

export default Home;
