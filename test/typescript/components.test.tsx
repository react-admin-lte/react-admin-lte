import * as React from 'react';
import {
  Layout,
  Skin,
  Wrapper
} from '../../src';

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
