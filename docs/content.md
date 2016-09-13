Content
=======

`import { Content } from 'reactjs-admin-lte';`

The Content component is the wrapper for the page header and content. Goes underneath the [main header](#main-header.md) and to the right of
 the [sidebar](#sidebar.md).

### Sub-components
 - [Content](#content)
   - [Content.Header](#contentheader)
   - [Content.Body](#contentbody)

---

## Content
`<Content>` - Wrapper for the page header and content.

#### Props
 - __children__ (node) - What you want to wrap in the content wrapper.

 - __className__ (string) - Additional classname(s) you would like to add.

## ContentHeader
`<Content.Header>` - Header title of the page content. See the [AdminLTE page][admin-lte] for an
example ("Dashboard Version 2.0" is the content header title).

#### Props
 - __title__ (string) [required] - Header text. "Dashboard" in the above example (follow the link).

 - __description__ (string) - Smaller sub-header text. Goes to the right of the header text.
   "Version 2.0" in the above example (follow the link).

 - __children__ (node) - Anything else you want to render in the header.

 - __className__ (string) - Additional classname(s) you would like to add.

## ContentBody
`<Content.Body>` - The wrapper for the main content of the page.

#### Props
 - __className__ (string) - Additional classname(s) you would like to add.

 - __children__ (node) - What you want to render on the page.


 [admin-lte]: https://almsaeedstudio.com/themes/AdminLTE/index2.html
