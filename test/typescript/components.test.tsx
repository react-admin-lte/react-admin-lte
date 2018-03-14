import * as React from 'react';
import {
  Box,
  BoxBody,
  BoxFooter,
  BoxHeader,
  BoxTitle,
  BoxTools,
  Content,
  ContentHeader,
  ContentWrapper,
  InfoBox,
  InfoBoxProgressBar,
  Layout,
  Logo,
  MainFooter,
  Skin,
  Wrapper
} from '../../src';

const BoxTest = () => (
  <Box
    collapsed={true}
    loading={true}
    loadingIndicator={<div />}
    solid={true}
    style="default"
  >
    <div />
  </Box>
);

const BoxBodyTest = () => (
  <BoxBody
    noPadding={true}
  >
    <div />
  </BoxBody>
);

const BoxFooterTest = () => (
  <BoxFooter><div /></BoxFooter>
);

const BoxHeaderTest = () => (
  <BoxHeader border={true}><div /></BoxHeader>
);

const BoxTitleTest = () => (
  <BoxTitle component="h1"><div /></BoxTitle>
);

const BoxToolsTest = () => (
  <BoxTools><div /></BoxTools>
);

const ContentTest = () => (
  <Content
    component="div"
  >
    <div />
  </Content>
);

const ContentHeaderTest = () => (
  <ContentHeader
    component="div"
    subtitle="small fries"
    title="king size"
  >
    <div />
  </ContentHeader>
);

const ContentWrapperTest = () => (
  <ContentWrapper>
    <div />
  </ContentWrapper>
);

const InfoBoxTest = () => (
  <InfoBox
    backgroundColor="red"
    backgroundPlacement="box"
    icon={<div />}
    number={<div />}
    text={<div />}
  />
);

const InfoBoxProgressBarTest = () => (
  <InfoBoxProgressBar
    now={67}
    description="lot of progress"
  />
);

const LogoTest = () => (
  <Logo
    component="Link"
    large={<div>large</div>}
    mini={<div>mini</div>}
  />
);

const LayoutTest = () => (
  <Layout
    boxed={true}
    fixed={true}
    miniSidebar={true}
    sidebarCollapsed={true}
    topNav={true}
  >
    <div />
  </Layout>
);

const MainFooterTest = () => (
  <MainFooter component="div">
    <div />
  </MainFooter>
);

const SkinTest = () => (
  <Skin color="blue" />
);

const WrapperTest = () => (
  <Wrapper />
);
