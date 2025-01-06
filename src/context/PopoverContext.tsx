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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [handlerRect, setHandlerRect] = useState<DOMRect | null>(null);
  const [contentRect, setContentRect] = useState<DOMRect | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);
  const handlerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
