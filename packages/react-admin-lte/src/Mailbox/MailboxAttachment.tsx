import * as PropTypes from 'prop-types';
import * as React from 'react';
import FontAwesome = require('react-fontawesome');
import { Button } from 'react-bootstrap';

export interface Props {
  name?: React.ReactNode;
  size?: string;
  img?: React.ReactNode;
  icon?: string;
  onNameClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onDownloadClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const propTypes = {
  name: PropTypes.node,
  size: PropTypes.string,
  img: PropTypes.node,
  icon: PropTypes.string, // font awesome icon name
  onNameClick: PropTypes.func,
  onDownloadClick: PropTypes.func,
};

const handleClick = (cb?: React.MouseEventHandler<HTMLButtonElement>) => {
  return (event: React.MouseEvent<Button>) => {
    if (cb) {
      const target = event.target as HTMLButtonElement;
      cb({
        altKey: event.altKey,
        bubbles: event.bubbles,
        button: event.button,
        buttons: event.buttons,
        cancelable: event.cancelable,
        clientX: event.clientX,
        clientY: event.clientY,
        ctrlKey: event.ctrlKey,
        currentTarget: target,
        defaultPrevented: event.defaultPrevented,
        eventPhase: event.eventPhase,
        getModifierState: event.getModifierState,
        isDefaultPrevented: event.isDefaultPrevented,
        isPropagationStopped: event.isPropagationStopped,
        isTrusted: event.isTrusted,
        metaKey: event.metaKey,
        nativeEvent: event.nativeEvent,
        pageX: event.pageX,
        pageY: event.pageY,
        persist: event.persist,
        preventDefault: event.preventDefault,
        relatedTarget: event.relatedTarget,
        screenX: event.screenX,
        screenY: event.screenY,
        shiftKey: event.shiftKey,
        stopPropagation: event.stopPropagation,
        target: event.target,
        timeStamp: event.timeStamp,
        type: event.type,
      });
    }
  };
};

const MailboxAttachment: React.StatelessComponent<Props> = ({
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
          <Button
            onClick={handleClick(onDownloadClick)}
            className="btn-xs pull-right"
          >
            <FontAwesome name="cloud-download" />
          </Button>
        </span>
      </div>
    </li>
  );
};

MailboxAttachment.propTypes = propTypes;

export default MailboxAttachment;
