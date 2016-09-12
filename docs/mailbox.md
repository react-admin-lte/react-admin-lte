Mailbox
=======

`import { Mailbox } from 'reactjs-admin-lte';`

The [mailbox component][mailbox]. The `<Mailbox>` component cannot be directly rendered, it is
simply used to reference other Mailbox components (e.g. `<Mailbox.Messages>`).

### Sub-components
 - Mailbox
   - [MailboxAttachments](#mailboxattachments)
     - [MailboxAttachment](#mailboxattachment)
   - [MailboxControls](#mailboxcontrols)
   - [MailboxMessages](#mailboxmessages)
   - [MailboxReadInfo](#mailboxreadinfo)
   - [MailboxReadMessage](#mailboxreadmessage)

---

## MailboxAttachments
`<Mailbox.Attachments>` - This component wraps children in a styled `<ul>`.

### Props
 - __children__ (node) - Mailbox attachments, see [`<Mailbox.Attachments.Item>`](#mailboxattachment).

## MailboxAttachment
`<Mailbox.Attachments.Item>` - An attachment preview box wrapped in a `<li>`. The attachment preview
 has the following heirarchy: `img` > `icon` > default icon (font awesome `file-o`). That is, if 
`img` is passed in it will get used instead of the default icon, _and_ instead of `icon` if it is 
passed in.  If only `icon` is passed in it will be used instead of the default. The default is used if neither `img` nor `icon` is passed in.

### Props
 - __name__ (node) - The name of the attachment.

 - __size__ (string) - The size of the attachment.

 - __img__ (node) - A preview of the attachment. This will override the `icon` prop.

 - __icon__ (string) - A font-awesome icon name without the leading `fa-`. For example, for the
   `fa-rocket` icon you would just pass in `rocket`.

 - __onNameClick__ (func) - Callback function that gets attached to the attachment name text in the
   attachment box.

 - __onDownloadClick__ (func) - Callback function that gets attached to the download button in the
   attachment box.


[mailbox]: https://almsaeedstudio.com/themes/AdminLTE/pages/mailbox/mailbox.html
