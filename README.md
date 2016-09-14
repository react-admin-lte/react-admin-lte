reactjs-admin-lte [![Travis][build-badge]][build] [![Codecov][codecov-badge]][codecov]
=================

Reactjs-Admin-LTE is a package that consists of [AdminLTE][adminlte] components built with [React][react].

__Tip__: We tried to stick to naming the components in this package after their CSS names on the
[AdminLTE page][adminlte]. If you want to know what something looks like or how it is put together,
simply inspect that page (<kbd>F12</kbd> or right click > inspect). You can <kbd>Ctrl</kbd>+<kbd>F</kbd> in the source view to look for component names, but remember to replace spaces with dashes.

For a more in-depth look at the individual components, see [the docs](docs/components.md).

## Features

 - Easy to __install__ via [npm][npm]
 - Easy to __use__ especially if you use [ES6][es6]
 - Easy to __read__ your code

## Installation

You can use [node package manager (npm)][npm] to install the package:

    $ cd path/to/project
    $ npm install reactjs-admin-lte

## Usage
__Note__: This example is using [ES6][es6] syntax.

Import the components you need:

    import { Box } from 'reactjs-admin-lte';

And use them:

    <Box>
      <Box.Header>
        <Box.Header.Title text="Hello, world!" />
      </Box.Header>
      <Box.Body>
        Thanks for choosing reactjs-admin-lte.
      </Box.Body>
    </Box>

## Contributing

If you run into any problems or errors, report them [here][gh-issues].

If you want to add something to the project, create a pull request [here][gh-pr].

[adminlte]: https://almsaeedstudio.com/preview
[react]: http://facebook.github.io/react/
[npm]: https://www.npmjs.com/
[es6]: http://es6-features.org/
[gh-issues]: https://github.com/jonmpqts/reactjs-admin-lte/issues
[gh-pr]: https://github.com/jonmpqts/reactjs-admin-lte/pulls

[build-badge]: https://travis-ci.org/jonmpqts/reactjs-admin-lte.svg?branch=master
[build]: https://travis-ci.org/jonmpqts/reactjs-admin-lte

[codecov-badge]: https://codecov.io/gh/jonmpqts/reactjs-admin-lte/branch/master/graph/badge.svg
[codecov]: https://codecov.io/gh/jonmpqts/reactjs-admin-lte
