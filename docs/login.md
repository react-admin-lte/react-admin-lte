Login
=====

`import { LoginPage } from 'reactjs-admin-lte';`

### Sub-components
 - [LoginPage](#loginpage)
   - [LoginBody](#loginbody)
   - [LoginLogo](#loginlogo)

---

## LoginPage
`<LoginPage>` - A login page. See the AdminLTE [login component example][login-example] for more.

#### Props
 - __children__ (node) - Children you want to render in the login box. Likely a `LoginLogo` above a
 `LoginBody`.

## LoginBody
`<LoginPage.Body>` - A box in the center of the screen. This is where username/password input, login
button, etc. would go.

#### Props
 - __children__ (node) - What you want to render in the login body. 

 - __className__ (string) - Additional classes you would like to add.

## LoginLogo
`<LoginPage.Logo>` - Wraps children inside a div with class `login-logo`.

#### Props
 - __children__ (node) - What you want to render as the logo.

 - __className__ (string) - Additional classes you would like to add.


[login-example]: https://almsaeedstudio.com/themes/AdminLTE/pages/examples/login.html
