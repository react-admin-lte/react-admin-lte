import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Button, 'box-tool');

export interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
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

const BoxToolButton: React.StatelessComponent<Props> = ({
  children,
  className,
  onClick,
}) =>
  <Button
    bsStyle="box-tool"
    className={className}
    onClick={handleClick(onClick)}
  >
    {children}
  </Button>;

BoxToolButton.propTypes = propTypes;

export default BoxToolButton;
