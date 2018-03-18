import * as React from 'react';
import {
  Badge,
  Box,
  BoxBody,
  BoxFooter,
  BoxHeader,
  BoxTitle,
  BoxToolButton,
  Content,
  ContentHeader,
  ContentWrapper,
  InfoBox,
  InfoBoxProgressBar,
  Label,
  LoginBox,
  LoginBoxBody,
  LoginLogo,
  LoginMessage,
  LoginPage,
  MainFooter,
  MainHeader,
  Overlay,
  RegistrationBox,
  RegistrationBoxBody,
  RegistrationLogo,
  RegistrationMessage,
  RegistrationPage,
  Theme
} from '../../src';

const BadgeTest = () => (
  <Badge backgroundColor="red">67</Badge>
);

const BoxTest = () => (
  <Box
    collapsed={true}
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
  <BoxHeader tools={({ className }) => {
    return <div className={className}><div>I'm a tool!</div></div>
  }} />,
  <BoxHeader tools={<div>I'm a tool</div>} />,
  <BoxHeader border={true}><div /></BoxHeader>
];

const BoxTitleTest = () => (
  <BoxTitle component="h1"><div /></BoxTitle>
);

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

const MainFooterTest = () => (
  <MainFooter component="div">
    <div />
  </MainFooter>
);

const MainHeaderTest = () => (
  <MainHeader
    component="div"
    largeLogo="big boy"
    logoComponent="Link"
    logoHref="/"
    miniLogo="wittle boy"
    onSidebarCollapseClick={() => {}}
  >
    <div />
  </MainHeader>
);

const OverlayTest = () => (
  <Overlay dark={true}><div>spinner</div></Overlay>
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

const ThemeTest = () => (
  <Theme
    boxed={true}
    fixed={true}
    miniSidebar={true}
    sidebarCollapsed={true}
    skinColor="blue"
    topNav={true}
  >
    <div />
  </Theme>
);
