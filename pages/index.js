import React, { Fragment } from 'react';
import MainHeader from 'reactjs-admin-lte/MainHeader';
import Theme from 'reactjs-admin-lte/Theme';
import Content from 'reactjs-admin-lte/Content';
import ContentHeader from 'reactjs-admin-lte/ContentHeader';
import ContentWrapper from 'reactjs-admin-lte/ContentWrapper';
import InfoBox from 'reactjs-admin-lte/InfoBox';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/lib/BreadcrumbItem';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FontAwesome from 'react-fontawesome';

const Home = () => {
  return (
    <Theme miniSidebar={true} skinColor="blue">
      <MainHeader
        largeLogo={<Fragment><b>Admin</b>LTE</Fragment>}
        miniLogo={<Fragment><b>A</b>LT</Fragment>}
      >
      </MainHeader>
      <ContentWrapper>
        <ContentHeader title="Dashboard" subtitle="Version 2.0">
          <Breadcrumb>
            <BreadcrumbItem>
              <FontAwesome name="dashboard" tag="i" /> Home
            </BreadcrumbItem>
            <BreadcrumbItem active>Dashboard</BreadcrumbItem>
          </Breadcrumb>
        </ContentHeader>
        <Content>
          <Row>
            <Col md={3} sm={6} xs={12}>
              <InfoBox
                backgroundColor="aqua"
                backgroundPlacement="icon"
                icon={<i className="ion ion-ios-gear-outline" />}
                text="CPU TRAFFIC"
                number={<Fragment>90<small>%</small></Fragment>}
              />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <InfoBox
                backgroundColor="red"
                backgroundPlacement="icon"
                icon={<FontAwesome name="google-plus" tag="i" />}
                text="LIKES"
                number={<Fragment>41,410</Fragment>}
              />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <InfoBox
                backgroundColor="green"
                backgroundPlacement="icon"
                icon={<i className="ion ion-ios-cart-outline" />}
                text="SALES"
                number="760"
              />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <InfoBox
                backgroundColor="yellow"
                backgroundPlacement="icon"
                icon={<i className="ion ion-ios-people-outline" />}
                text="NEW MEMBERS"
                number="2,000"
              />
            </Col>
          </Row>
        </Content>
      </ContentWrapper>
    </Theme>
  );
};

export default Home;
