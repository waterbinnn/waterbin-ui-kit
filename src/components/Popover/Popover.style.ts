import { css } from 'styled-system/css';
import { Placement } from './Popover.type';

const popover = css({
  position: 'relative',
  display: 'inline-flex',
  width: '100%',
});

const popoverHandler = css({
  display: 'inline-flex',
});

const popoverContent = css({
  position: 'absolute',
  minWidth: 'max-content',
  zIndex: 10,
});

const placementStyle = (
  handlerSize: DOMRect,
  contentSize: DOMRect | null,
  placement: Placement,
  offset: number
) => {
  if (!handlerSize || !contentSize) {
    return;
  }
  const setHorizontalPosition = (
    horizontalPosition: 'left' | 'right',
    align: 'start' | 'end' | 'center'
  ) => {
    const contentCenterPosition = (handlerSize.height - contentSize.height) / 2;

    const sideValues = {
      start: { top: '0px' },
      end: { bottom: '0px' },
      center: { top: `${contentCenterPosition}px` },
    };

    return {
      left:
        horizontalPosition === 'left'
          ? `-${contentSize.width + offset}px`
          : `${handlerSize.width + offset}px`,
      ...sideValues[align],
    };
  };

  const setVerticalPosition = (
    verticalPosition: 'top' | 'bottom',
    align: 'start' | 'end' | 'center'
  ) => {
    const contentCenterPosition = (handlerSize.width - contentSize.width) / 2;

    const verticalValues = {
      start: { left: '0px' },
      end: { right: '0px' },
      center: { left: `${contentCenterPosition}px` },
    };
    console.log(handlerSize.height);
    return {
      top:
        verticalPosition === 'top'
          ? `-${contentSize.height + offset}px`
          : `${handlerSize.height + offset}px`,
      ...verticalValues[align],
    };
  };

  const positionStyleList = {
    top: setVerticalPosition('top', 'center'),
    'top-start': setVerticalPosition('top', 'start'),
    'top-end': setVerticalPosition('top', 'end'),

    bottom: setVerticalPosition('bottom', 'center'),
    'bottom-start': setVerticalPosition('bottom', 'start'),
    'bottom-end': setVerticalPosition('bottom', 'end'),

    left: setHorizontalPosition('left', 'center'),
    'left-start': setHorizontalPosition('left', 'start'),
    'left-end': setHorizontalPosition('left', 'end'),

    right: setHorizontalPosition('right', 'center'),
    'right-start': setHorizontalPosition('right', 'start'),
    'right-end': setHorizontalPosition('right', 'end'),
  };

  return positionStyleList[placement];
};

export { popover, popoverContent, popoverHandler, placementStyle };
