import * as React from 'react';
import {
  Badge,
  Box,
  BoxBody,
  BoxFooter,
  BoxHeader,
  BoxToolButton,
  Content,
  ContentHeader,
  ContentWrapper,
  InfoBox,
  InfoBoxProgressBar,
  Label,
  Layout,
  LoginBox,
  LoginBoxBody,
  LoginLogo,
  LoginMessage,
  LoginPage,
  Logo,
  MainFooter,
  MainHeader,
  RegistrationBox,
  RegistrationBoxBody,
  RegistrationLogo,
  RegistrationMessage,
  RegistrationPage,
  SidebarToggle,
  Skin,
  Wrapper
} from '../../src';

const BadgeTest = () => (
  <Badge backgroundColor="red">67</Badge>
);

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

const BoxHeaderTest = () => [
  <BoxHeader />,
  <BoxHeader title={({ className }) => {
    return <h2 className={className}>I'm a box!</h2>
  }} />,
  <BoxHeader title={<div />} />,
  <BoxHeader border={true}><div /></BoxHeader>
];

const BoxToolButtonTest = () => (
  <BoxToolButton
    component="button"
    href="/asdf"
    type="submit"
  >
    <div />
  </BoxToolButton>
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

const LabelTest = () => (
  <Label backgroundColor="red">67</Label>
);

const LoginBoxTest = () => (
  <LoginBox><div /></LoginBox>
);

const LoginBoxBodyTest = () => (
  <LoginBoxBody><div /></LoginBoxBody>
);

const LoginLogoTest = () => (
  <LoginLogo><div /></LoginLogo>
);

const LoginMessageTest = () => (
  <LoginMessage component="div">Sign in</LoginMessage>
);

const LoginPageTest = () => (
  <LoginPage><div /></LoginPage>
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

const MainHeaderTest = () => (
  <MainHeader component="div">
    <div />
  </MainHeader>
);

const RegistrationBoxTest = () => (
  <RegistrationBox><div /></RegistrationBox>
);

const RegistrationBoxBodyTest = () => (
  <RegistrationBoxBody><div /></RegistrationBoxBody>
);

const RegistrationLogoTest = () => (
  <RegistrationLogo><div /></RegistrationLogo>
);

const RegistrationMessageTest = () => (
  <RegistrationMessage component="div">Sign in</RegistrationMessage>
);

const RegistrationPageTest = () => (
  <RegistrationPage><div /></RegistrationPage>
);

const SidebarToggleTest = () => (
  <SidebarToggle
    component="button"
    onClick={() => {}}
  >
    <span className="sr-only">Toggle navigation</span>
  </SidebarToggle>
);

const SkinTest = () => (
  <Skin color="blue" />
);

const WrapperTest = () => (
  <Wrapper />
);
