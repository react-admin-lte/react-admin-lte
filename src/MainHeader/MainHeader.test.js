import React, {Fragment} from 'react';
import { shallow } from 'enzyme';
import MainHeader from './MainHeader';

it('renders default', () => {
  expect(shallow(<MainHeader />))
    .toMatchSnapshot();
});

it('renders children', () => {
  expect(shallow(<MainHeader><div /></MainHeader>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<MainHeader component="div" />))
    .toMatchSnapshot();
});

it('renders mini logo', () => {
  expect(shallow(<MainHeader miniLogo={<Fragment><b>A</b>LT</Fragment>} />))
    .toMatchSnapshot();
});

it('renders large logo', () => {
  expect(shallow((
    <MainHeader largeLogo={<Fragment><b>Admin</b>LTE</Fragment>} />
  ))).toMatchSnapshot();
});

it('renders logo href', () => {
  expect(shallow((
    <MainHeader logoHref="/" />
  ))).toMatchSnapshot();
});

it('renders custom logo', () => {
  expect(shallow((
    <MainHeader
      logoComponent={({ className, children }) => {
        return (
          <div className={className}>
            {children}
          </div>
        );
      }}
    />
  ))).toMatchSnapshot();
});

it('toggle sidebar through context', () => {
  let received = false;

  const wrapper = shallow(
    <MainHeader />,
    {
      context: {
        $adminlte_theme: {
          onChange: () => {
            received = true;
          }
        }
      }
    }
  );

  wrapper.find('.sidebar-toggle').simulate('click');
  expect(received).toEqual(true);
});

it('wires up onSidebarCollapseClick instead of context', () => {
  let receivedContext = false;
  let receivedClick = false;

  const wrapper = shallow(
    <MainHeader
      onSidebarCollapseClick={() => { receivedClick = true; }}
    />,
    {
      context: {
        $adminlte_theme: {
          onChange: () => {
            receivedContext = true;
          }
        }
      }
    }
  );

  wrapper.find('.sidebar-toggle').simulate('click');
  expect(receivedContext).toEqual(false);
  expect(receivedClick).toEqual(true);
});
