import React from 'react';
import { shallow } from 'enzyme';
import SidebarToggle from './SidebarToggle';

it('renders correctly', () => {
  expect(shallow((
    <SidebarToggle>
      <span className="sr-only">Toggle navigation</span>
    </SidebarToggle>
  ))).toMatchSnapshot();
});

it('toggles through context', () => {
  let received = false;

  const wrapper = shallow(
    <SidebarToggle />,
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

  wrapper.simulate('click');
  expect(received).toEqual(true);
});

it('wires up onClick instead of context', () => {
  let recievedContext = false;
  let receivedClick = false;

  const wrapper = shallow(
    <SidebarToggle
      onClick={() => { receivedClick = true; }}
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

  wrapper.simulate('click');
  expect(recievedContext).toEqual(false);
  expect(receivedClick).toEqual(true);
});
