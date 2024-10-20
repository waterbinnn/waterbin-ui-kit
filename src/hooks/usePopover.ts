import { PopoverContext } from '@/context';
import { useContext } from 'react';

export const usePopover = () => {
  const context = useContext(PopoverContext);
  return context;
};
