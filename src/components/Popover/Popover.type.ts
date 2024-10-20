interface PopoverProps {
  children: React.ReactNode;
  classNames?: string;
}

type PopoverHandlerProps = PopoverProps;

interface PopoverContentProps extends PopoverProps {
  placement?: Placement;
  offset?: number;
}

interface ProviderContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handlerRect: DOMRect | null;
  setHandlerRect: React.Dispatch<React.SetStateAction<DOMRect | null>>;
  contentRect: DOMRect | null;
  setContentRect: React.Dispatch<React.SetStateAction<DOMRect | null>>;
  popupRef: React.RefObject<HTMLDivElement>;
  handlerRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  togglePopup: () => void;
  onClose: () => void;
}

type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type {
  Placement,
  ProviderContextType,
  PopoverProps,
  PopoverHandlerProps,
  PopoverContentProps,
};
