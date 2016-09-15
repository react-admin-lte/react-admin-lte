Box
===

`import { Box } from 'reactjs-admin-lte';`

The [box component][box-component] is pretty straightforward: it's a box; you put stuff in it. To 
keep things a bit more organized and pretty, it is recommended to use `BoxHeader`s, `BoxBody`s, 
and/or `BoxFooter`s in a `Box`, and then render any children you want inside of those more 
specific containers.

### Sub-components
 - [Box](#box)
   - [Box.Body](#boxbody)
   - [Box.Footer](#boxfooter)
   - [Box.Header](#boxheader)
     - [Box.Header.Title](#boxtitle)
     - [Box.Header.Tools](#boxtools)
     - [Box.Header.UserBlock](#boxuserblock)

---

## Box
`<Box>` - Basic container component.

#### Props
  - __style__ (string) - Changes the color of the box. One of `default`, `primary`, `success`, 
  `warning`, or `danger`. Defaults to `default`.

  - __type__ (string) - Changes the look of the box. One of `widget` or `solid`.

  - __loading__ (bool) - If true, the box will show a spinner instead of its children. Defaults to false.

  - __children__ (node) - What you want to put in the Box.

  - __className__ (string) - Additional classes you would like to add.

## BoxBody
`<Box.Body>` - Body of the container.

#### Props
 - __padding__ (bool) - Padding for the content of the body. Defaults to true.

 - __children__ (node) - What you want to render in the BoxBody.

 - __className__ (string) - Additional classes you would like to add.

## BoxFooter
`<Box.Footer>` - Footer of the container.

#### Props
 - __children__ (node) - What you want to render in the BoxFooter.

 - __className__ (string) - Additional classes you would like to add.

## BoxHeader
`<Box.Header>` - Header of the container.

#### Props
 - __border__ (bool) - If false, does not draw thin border between header and body. Defaults to true.

 - __children__ (node) - What you want to render in the BoxHeader.

 - __className__ (string) - Additional classes you would like to add.

## BoxTitle
`<Box.Header.Title>` - Title of the box.

#### Props
 - __text__ (string) - The title text.

 - __className__ (string) - Additional classes you would like to add.

## BoxTools
`<Box.Header.Tools>` - Controls for the box, typically buttons and/or button groups, located in the 
box header on the right-hand side by default.

#### Props
 - __children__ (node) - What you want to render in BoxTools.

 - __className__ (string) - Additional classes you would like to add.

## BoxUserBlock
`<Box.Header.UserBlock>` - User picture, name, and info. Goes in the same place a title would, by
default.

#### Props
 - __image__ (node) - User image.

 - __username__ (string) - Username text.

 - __description__ (string) - Subtext that appears under username.

 - __href__ (string) - Link for anchor tag surrounding username.

 - __className__ (string) - Additional classes you would like to add.


[box-component]: https://almsaeedstudio.com/themes/AdminLTE/documentation/index.html#component-box
