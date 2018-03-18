import React, { Fragment } from 'react';
import MainHeader from 'reactjs-admin-lte/MainHeader';
import Theme from 'reactjs-admin-lte/Theme';
import Content from 'reactjs-admin-lte/Content';
import InfoBox from 'reactjs-admin-lte/InfoBox';
import InfoBoxProgressBar from 'reactjs-admin-lte/InfoBoxProgressBar';
import Box from 'reactjs-admin-lte/Box';
import BoxHeader from 'reactjs-admin-lte/BoxHeader';
import BoxTitle from 'reactjs-admin-lte/BoxTitle';
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
      <Content
        title="Dashboard"
        subtitle="Version 2.0"
        breadcrumb={(
          <Breadcrumb>
            <BreadcrumbItem>
              <FontAwesome name="dashboard" tag="i" /> Home
            </BreadcrumbItem>
            <BreadcrumbItem active>Dashboard</BreadcrumbItem>
          </Breadcrumb>
        )}
      >
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
        <Row>
          <Col md={12}>
            <Box>
              <BoxHeader border>
                <BoxTitle>Monthly Recap Report</BoxTitle>
              </BoxHeader>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Box style="success">
              <BoxHeader border>
                <BoxTitle>Visitors Report</BoxTitle>
              </BoxHeader>
            </Box>
          </Col>
          <Col md={4}>
            <InfoBox
              backgroundColor="yellow"
              backgroundPlacement="box"
              icon={<i className="ion ion-ios-pricetag-outline" />}
              text="INVENTORY"
              number="5,200"
            >
             <InfoBoxProgressBar
               now={50}
               description="50% Increase in 30 Days"
             />
            </InfoBox>
            <InfoBox
              backgroundColor="green"
              backgroundPlacement="box"
              icon={<i className="ion ion-ios-heart-outline" />}
              text="MENTIONS"
              number="92,050"
            >
              <InfoBoxProgressBar
                now={20}
                description="20% Increase in 30 Days"
              />
            </InfoBox>
            <InfoBox
              backgroundColor="red"
              backgroundPlacement="box"
              icon={<i className="ion ion-ios-cloud-download-outline" />}
              text="DOWNLOADS"
              number="114,381"
            >
              <InfoBoxProgressBar
                now={70}
                description="70% Increase in 30 Days"
              />
            </InfoBox>
            <InfoBox
              backgroundColor="aqua"
              backgroundPlacement="box"
              icon={<i className="ion ion-ios-chatbubble-outline" />}
              text="DIRECT MESSAGES"
              number="163,921"
            >
              <InfoBoxProgressBar
                now={40}
                description="40% Increase in 30 Days"
              />
            </InfoBox>
          </Col>
        </Row>
      </Content>
    </Theme>
  );
};

export default Home;
