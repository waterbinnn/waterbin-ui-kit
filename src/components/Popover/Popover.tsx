import { usePopup } from '@/store';
import { useCallback, useEffect, useRef, useState } from 'react';

import {
  placementStyle,
  popover,
  popoverContent,
  popoverHandler,
} from './Popover.style';
import { Placement } from './Popover.type';
import { useOutsideClick } from '@/hooks';
import { css } from 'styled-system/css';

interface Props {
  children: React.ReactNode;
  classNames?: string;
}

const Popover = ({ children, classNames }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { onClose } = usePopup();

  useOutsideClick(popupRef, onClose);

  const handlePreventPropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handlePreventPropagation}
      className={`${popover}, ${classNames}`}
      ref={popupRef}
    >
      {children}
    </div>
  );
};

const PopoverHandler = ({ children }: Props) => {
  const { onOpen, onClose, setHandlerRect } = usePopup();
  const isOpen = usePopup((state) => state.isOpen);

  const handlerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (handlerRef.current) {
      const handlerRect = handlerRef.current.getBoundingClientRect();
      setHandlerRect(handlerRect);
    }
  }, [setHandlerRect]);

  const togglePopup = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onClose, onOpen]);

  return (
    <div className={popoverHandler} ref={handlerRef} onClick={togglePopup}>
      {children}
    </div>
  );
};

interface PopoverContent {
  children: React.ReactNode;
  placement: Placement;
}

const PopoverContent = ({ children, placement = 'bottom' }: PopoverContent) => {
  const isOpen = usePopup((state) => state.isOpen);
  const handlerRect = usePopup((state) => state.handlerRect);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentRect, setContentRect] = useState<DOMRect | null>(null);
  console.log(contentRect);

  useEffect(() => {
    if (contentRef.current) {
      const getContentRect = contentRef.current.getBoundingClientRect();
      setContentRect(getContentRect);
    }
  }, [isOpen]);

  if (!handlerRect) return;

  const dynamicClass = css({
    visibility: isOpen ? 'visible' : 'hidden',
  });

  const placementStyles = placementStyle(handlerRect, contentRect, placement);

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

export { Popover, PopoverContent, PopoverHandler };
