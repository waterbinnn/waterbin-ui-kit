import { createContext, useCallback, useRef, useState } from 'react';
import { ProviderContextType } from '../components/Popover/Popover.type';

const PopoverContext = createContext<ProviderContextType>({
  isOpen: false,
  setIsOpen: () => {},
  handlerRect: null,
  setHandlerRect: () => {},
  contentRect: null,
  setContentRect: () => {},
  popupRef: { current: null },
  handlerRef: { current: null },
  contentRef: { current: null },
  togglePopup: () => {},
  onClose: () => {},
});

const PopoverProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); //popover open state
  const [handlerRect, setHandlerRect] = useState<DOMRect | null>(null); //contain handler rect size
  const [contentRect, setContentRect] = useState<DOMRect | null>(null); //contain content rect size

  const popupRef = useRef<HTMLDivElement>(null); //popover ref
  const handlerRef = useRef<HTMLDivElement>(null); //handler ref
  const contentRef = useRef<HTMLDivElement>(null); //contents ref

  const togglePopup = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <PopoverContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handlerRect,
        setHandlerRect,
        contentRect,
        setContentRect,
        popupRef,
        handlerRef,
        contentRef,
        togglePopup,
        onClose,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

export { PopoverProvider, PopoverContext };
