Main Header
===========

`import { MainHeader } from 'reactjs-admin-lte';`

The MainHeader component contains the logo and navbar at the top of the screen. See an example at
the [AdminLTE site][admin-lte].

### Sub-components
 - [MainHeader](#mainheader)
   - [MainHeaderLogo](#mainheaderlogo)

---

## MainHeader
`<MainHeader>` - The navbar at the top of the screen.

#### Props
- __children__ (node) - What you want to render on the navbar. This is also where the
  `MainHeader.Logo` goes.

## MainHeaderLogo
`<MainHeader.Logo`> - The logo on the navbar, above the sidebar.

#### Props
 - __href__ (string) - Link which will be attached to the logo.

 - __mini__ (node) - This will be used as the logo when the users screen size too small for the
   regular logo (`large` prop).

 - __large__ (node) - This is the normal logo, for regular screen sizes.


[admin-lte]: https://almsaeedstudio.com/themes/AdminLTE/index2.html
