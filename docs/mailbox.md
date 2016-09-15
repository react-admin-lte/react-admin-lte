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

#### Props
 - __children__ (node) - Mailbox attachments, see [`<Mailbox.Attachments.Item>`](#mailboxattachment).

## MailboxAttachment
`<Mailbox.Attachments.Item>` - An attachment preview box wrapped in a `<li>`. The attachment preview
 has the following heirarchy: `img` > `icon` > default icon (font awesome `file-o`). That is, if 
`img` is passed in it will get used instead of the default icon, _and_ instead of `icon` if it is 
passed in.  If only `icon` is passed in it will be used instead of the default. The default is used
 if neither `img` nor `icon` is passed in.

#### Props
 - __name__ (node) - The name of the attachment.

 - __size__ (string) - The size of the attachment.

 - __img__ (node) - A preview of the attachment. This will override the `icon` prop.

 - __icon__ (string) - A font-awesome icon name without the leading `fa-`. For example, for the
   `fa-rocket` icon you would just pass in `rocket`.

 - __onNameClick__ (func) - Callback function that gets attached to the attachment name text in the
   attachment box.

 - __onDownloadClick__ (func) - Callback function that gets attached to the download button in the
   attachment box.

## MailboxControls
`<Mailbox.Controls>` - A bar to put controls for the mailbox on. Button groups, pagination, etc.

#### Props
 - __children__ (node) - What you want to render in the control bar.

 - __className__ (string) - Any additional classnames you would like to add.

## MailboxMessages
`<Mailbox.Messages>` - A responsive table to list messages in. Functions as a wrapper for a table
that is the inbox/messages list, as seen in the [mailbox example page][mailbox] (inspect source).

#### Props
 - __children__ (node) - What you want to render in the messages div.

## MailboxReadInfo
`<Mailbox.ReadInfo>` - Sort of like a header for the message view. This is a place to put the
subject line, recipients, time stamp, etc.

#### Props
 - __children__ (node) - What you want to render in the info section.

## MailboxReadMessage
`<Mailbox.ReadMessage>` - The body of the message. This is where the message text goes.

#### Props
 - __children__ (node) - What you want to render as the message.


[mailbox]: https://almsaeedstudio.com/themes/AdminLTE/pages/mailbox/mailbox.html
