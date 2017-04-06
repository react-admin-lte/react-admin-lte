import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

const propTypes = {
  name: React.PropTypes.node,
  size: React.PropTypes.string,
  img: React.PropTypes.node,
  icon: React.PropTypes.string, // font awesome icon name
  onNameClick: React.PropTypes.func,
  onDownloadClick: React.PropTypes.func,
};

const MailboxAttachment = ({
  name,
  size,
  img,
  icon,
  onNameClick,
  onDownloadClick,
}) => {
  let span;
  let preview;
  if (img) {
    span = "mailbox-attachment-icon has-img";
    preview = img;
  } else if (icon) {
    span = "mailbox-attachment-icon";
    preview = <FontAwesome name={icon} />;
  } else {
    span = "mailbox-attachment-icon";
    preview = <FontAwesome name="file-o" />;
  }

  return (
    <li>
      <span className={span}>
        {preview}
      </span>
      <div className="mailbox-attachment-info">
        <a onClick={onNameClick} className="mailbox-attachment-name">
          {name}
        </a>
        <span className="mailbox-attachment-size">
          {size}
          <Button onClick={onDownloadClick} className="btn-xs pull-right">
            <FontAwesome name="cloud-download" />
          </Button>
        </span>
      </div>
    </li>
  );
};

MailboxAttachment.propTypes = propTypes;

export default MailboxAttachment;
