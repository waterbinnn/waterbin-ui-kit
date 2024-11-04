import { forwardRef } from 'react';
import { ReactComponent as Loading } from '@/assets/icons/loading.svg';
import { ReactComponent as LoadingDark } from '@/assets/icons/loading_dark.svg';
import { ButtonProps } from './Button.type';
import { buttonStyle, iconTextStyle, spinner } from './Button.style';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'filled',
      children,
      size = 'md',
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
        className={`${buttonStyle({
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
export type { ButtonProps };
