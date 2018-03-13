import * as React from 'react';
import {
  InfoBox,
  InfoBoxProgressBar,
  Layout,
  Skin,
  Wrapper
} from '../../src';

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

const SkinTest = () => (
  <Skin color="blue" />
);

const WrapperTest = () => (
  <Wrapper />
);
