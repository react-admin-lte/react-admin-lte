Sidebar
=======

`import { Sidebar } from 'reactjs-admin-lte';`

Here is an example of the [sidebar component][sidebar-component].

### Sub-components
 - [MainSidebar](#sidebar)
   - [MainSidebarToggle](#sidebar-toggle)
   - [MainSidebarMenu](#sidebar-menu)
     - [MainSidebarMenuHeader](#sidebar-menu-header)
     - [MainSidebarMenuItem](#sidebar-menu-item)
   - [MainSidebarUserPanel](#sidebar-user-panel)

---

## MainSidebar
`<MaineSidebar>` - The [main sidebar component][sidebar-component]. Goes on the left-hand side of the screen.

#### Props
 - __children__ (node) - What you want to put in the sidebar.

## MainSidebar Menu
`<MainSidebar.Menu>` - Navigation list on the left side of the page. Renders children in a `<ul>`.

#### Props
 - __children__ (node) - What you want to put in the sidebar menu.

## MainSidebar Menu Header
`<MainSidebar.Menu.Header>` - A sidebar menu header. Good for dividing the sidebar into groups. Renders
text in a `<li>`.

#### Props
 - __title__ (string) - The header text.

## MainSidebar Menu Item
`<MainSidebar.Menu.Item>` - A sidebar link/button. Renders children (for example, an icon and a string) 
in a `<li>`.

#### Props
 - __active__ (bool) - Accents the menu item. Useful for showing the user where they are currently.

 - __children__ (node) - What you want to put in the sidebar menu item.

## MainSidebar User Panel
`<MainSidebar.UserPanel>` - User picture and info. This is similar to [`<Box.UserBlock>`](box.md).

#### Props
 - __image__ (node) - User image.

 - __info__ (node) - A place to put whatever other info you want.


[sidebar-component]: https://almsaeedstudio.com/themes/AdminLTE/documentation/index.html#component-sidebar
