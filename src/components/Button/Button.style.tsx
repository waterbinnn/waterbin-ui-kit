import { css, cva } from 'styled-system/css';
import { Colors } from './Button.type';

const colorFn = (bg: Colors) => {
  const isWhite = bg === 'white';
  return { bg, text: isWhite ? 'black' : 'white' };
};

const outlineColorFn = (border: Colors) => {
  return { borderColor: border, color: border };
};

const buttonStyle = cva({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    gap: '2',
    rounded: 'lg',
    bg: 'black',
    color: 'white',
    fontWeight: 500,
    cursor: 'pointer',
    userSelect: 'none',
    _disabled: {
      opacity: 0.5,
      pointerEvents: 'none',
    },
    _hover: {
      opacity: 0.88,
    },
  },
  variants: {
    variant: {
      filled: {
        bg: 'black',
      },
      outline: {
        bg: 'transperant',
        border: '1px solid',
        borderColor: 'stone.800',
        color: 'stone.800',
      },
      iconText: {
        border: '1px solid',
        borderColor: 'transparent',
      },
      icon: {
        minWidth: '36px',
        minHeight: '36px',
        border: '1px solid',
        borderColor: 'transparent',
      },
      link: {
        bg: 'transparent',
        color: 'black',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    rounded: {
      true: {
        rounded: 'full',
      },
    },
    size: {
      icon: { padding: '4px 4px' },
      sm: { padding: '6px 8px', fontSize: '12px' },
      md: { padding: '8px 12px', fontSize: '14px' },
      lg: { padding: '10px 16px', fontSize: '16px' },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    outlineColor: {
      white: outlineColorFn('white'),
      black: outlineColorFn('black'),
      red: outlineColorFn('red'),
      orange: outlineColorFn('orange'),
      yellow: outlineColorFn('yellow'),
      green: outlineColorFn('green'),
      mint: outlineColorFn('mint'),
      teal: outlineColorFn('teal'),
      cyan: outlineColorFn('cyan'),
      blue: outlineColorFn('blue'),
      indigo: outlineColorFn('indigo'),
      purple: outlineColorFn('purple'),
      pink: outlineColorFn('pink'),
      brown: outlineColorFn('brown'),
    },
    color: {
      white: colorFn('white'),
      black: colorFn('black'),
      red: colorFn('red'),
      orange: colorFn('orange'),
      yellow: colorFn('yellow'),
      green: colorFn('green'),
      mint: colorFn('mint'),
      teal: colorFn('teal'),
      cyan: colorFn('cyan'),
      blue: colorFn('blue'),
      indigo: colorFn('indigo'),
      purple: colorFn('purple'),
      pink: colorFn('pink'),
      brown: colorFn('brown'),
    },
    loading: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md',
  },
});

const spinner = css({
  animation: 'spin',
});

const iconTextStyle = css({
  fontStyle: 'normal',
});

export { buttonStyle, spinner, iconTextStyle };
