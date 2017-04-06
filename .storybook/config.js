import { configure } from '@kadira/storybook';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/skin-blue.css';

const req = require.context('../packages/react-admin-lte/src', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
