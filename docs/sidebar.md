Sidebar
=======

`import { Sidebar } from 'reactjs-admin-lte';`

Here is an example of the [sidebar component][sidebar-component].

### Sub-components
 - [Sidebar](#sidebar)
   - [SidebarToggle](#sidebar-toggle)
   - [SidebarMenu](#sidebar-menu)
     - [SidebarMenuHeader](#sidebar-menu-header)
     - [SidebarMenuItem](#sidebar-menu-item)
   - [SidebarUserPanel](#sidebar-user-panel)

---

## Sidebar
`<Sidebar>` - The [sidebar component][sidebar-component]. Goes on the left-hand side of the screen.

#### Props
 - __children__ (node) - What you want to put in the sidebar.

## Sidebar Menu
`<Sidebar.Menu>` - Navigation list on the left side of the page. Renders children in a `<ul>`.

#### Props
 - __children__ (node) - What you want to put in the sidebar menu.

## Sidebar Menu Header
`<Sidebar.Menu.Header>` - A sidebar menu header. Good for dividing the sidebar into groups. Renders
text in a `<li>`.

#### Props
 - __title__ (string) - The header text.

## Sidebar Menu Item
`<Sidebar.Menu.Item>` - A sidebar link/button. Renders children (for example, an icon and a string) 
in a `<li>`.

#### Props
 - __active__ (bool) - Accents the menu item. Useful for showing the user where they are currently.

 - __children__ (node) - What you want to put in the sidebar menu item.

## Sidebar User Panel
`<Sidebar.UserPanel>` - User picture and info. This is similar to [`<Box.UserBlock>`](box.md).

#### Props
 - __image__ (node) - User image.

 - __info__ (node) - A place to put whatever other info you want.


[sidebar-component]: https://almsaeedstudio.com/themes/AdminLTE/documentation/index.html#component-sidebar
