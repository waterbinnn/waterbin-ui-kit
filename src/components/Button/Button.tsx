import React from 'react';
import { css, cva } from 'styled-system/css';
import { ReactComponent as Loading } from '@/assets/icons/loading.svg';
import { ReactComponent as LoadingDark } from '@/assets/icons/loading_dark.svg';
import { Colors, Size, Variant } from './Button.type';

const button = cva({
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
    fontFamily: 'pretendard',
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
      iconText: {},
      icon: {
        minWidth: '36px',
        minHeight: '36px',
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
      black: { borderColor: 'black', color: 'black' },
      red: { borderColor: 'red', color: 'red' },
      orange: { borderColor: 'orange', color: 'orange' },
      yellow: { borderColor: 'yellow', color: 'yellow' },
      green: { borderColor: 'green', color: 'green' },
      mint: { borderColor: 'mint', color: 'mint' },
      teal: { borderColor: 'teal', color: 'teal' },
      cyan: { borderColor: 'cyan', color: 'cyan' },
      blue: { borderColor: 'blue', color: 'blue' },
      indigo: { borderColor: 'indigo', color: 'indigo' },
      purple: { borderColor: 'purple', color: 'purple' },
      pink: { borderColor: 'pink', color: 'pink' },
      brown: { borderColor: 'brown', color: 'brown' },
    },
    color: {
      black: { bg: 'black', color: 'white' },
      red: { bg: 'red', color: 'white' },
      orange: { bg: 'orange', color: 'white' },
      yellow: { bg: 'yellow', color: 'white' },
      green: { bg: 'green', color: 'white' },
      mint: { bg: 'mint', color: 'white' },
      teal: { bg: 'teal', color: 'white' },
      cyan: { bg: 'cyan', color: 'white' },
      blue: { bg: 'blue', color: 'white' },
      indigo: { bg: 'indigo', color: 'white' },
      purple: { bg: 'purple', color: 'white' },
      pink: { bg: 'pink', color: 'white' },
      brown: { bg: 'brown', color: 'white' },
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

type ButtonCVAProps = NonNullable<Parameters<typeof button>[0]>;

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
  color?: Colors;
  outlineColor?: Colors;
  size?: Size;
  rounded?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'filled',
      children,
      size,
      rounded = false,
      fullWidth = false,
      outlineColor,
      color,
      icon,
      loading = false,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={`${button({
          variant,
          size,
          loading,
          color,
          outlineColor,
          fullWidth,
          rounded,
        })} ${className}`}
        ref={ref}
        {...rest}
      >
        {loading &&
          (variant === 'outline' || variant === 'link' ? (
            <LoadingDark className={spinner} />
          ) : (
            <Loading className={spinner} />
          ))}

        {(variant === 'iconText' || variant === 'icon') && !loading && (
          <i className={iconTextStyle}>{icon}</i>
        )}

        {children}
      </button>
    );
  }
);

export default Button;
export type { ButtonCVAProps, ButtonProps };
