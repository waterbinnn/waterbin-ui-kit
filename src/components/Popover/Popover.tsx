import { useEffect } from 'react';

import {
  placementStyle,
  popover,
  popoverContent,
  popoverHandler,
} from './Popover.style';
import {
  PopoverContentProps,
  PopoverHandlerProps,
  PopoverProps,
} from './Popover.type';
import { useOutsideClick } from '@/hooks';
import { usePopover } from '@/hooks';
import { PopoverProvider } from '@/context';

import { css } from 'styled-system/css';

const PopoverComponent = ({ children, classNames }: PopoverProps) => {
  const { popupRef, onClose } = usePopover();

  useOutsideClick(popupRef, onClose);

  return (
    <div className={`${popover}, ${classNames}`} ref={popupRef}>
      {children}
    </div>
  );
};

const PopoverHandler = ({ children, classNames }: PopoverHandlerProps) => {
  const { handlerRef, setHandlerRect, togglePopup } = usePopover();

  useEffect(() => {
    if (handlerRef.current) {
      const handlerRect = handlerRef.current.getBoundingClientRect();
      setHandlerRect(handlerRect);
    }
  }, [handlerRef, setHandlerRect]);

  return (
    <div
      className={`${popoverHandler} ${classNames}`}
      ref={handlerRef}
      onClick={togglePopup}
    >
      {children}
    </div>
  );
};

const PopoverContent = ({
  children,
  placement = 'bottom',
  offset = 4,
}: PopoverContentProps) => {
  const { isOpen, contentRef, handlerRect, contentRect, setContentRect } =
    usePopover();

  useEffect(() => {
    if (contentRef.current) {
      const getContentRect = contentRef.current.getBoundingClientRect();
      setContentRect(getContentRect);
    }
  }, [contentRef, setContentRect, isOpen]);

  const dynamicClass = css({
    visibility: isOpen ? 'visible' : 'hidden',
  });

  if (!handlerRect) return;

  const placementStyles = placementStyle(
    handlerRect,
    contentRect,
    placement,
    offset
  );

  return (
    <div
      style={placementStyles}
      ref={contentRef}
      className={`${popoverContent} ${dynamicClass}`}
    >
      {children}
    </div>
  );
};

const PopoverRoot = ({ children, classNames }: PopoverProps) => {
  return (
    <PopoverProvider>
      <PopoverComponent classNames={classNames}>{children}</PopoverComponent>
    </PopoverProvider>
  );
};

export { PopoverRoot as Popover, PopoverHandler, PopoverContent };
