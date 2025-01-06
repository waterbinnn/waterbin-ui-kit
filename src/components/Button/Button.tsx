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
      iconPosition = 'end',
      ...rest
    },
    ref
  ) => {
    const renderIcon = () => {
      if (variant === 'iconText' || variant === 'icon') {
        return <i className={iconTextStyle}>{icon}</i>;
      }
      return null;
    };

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

        {iconPosition === 'start' && renderIcon()}
        {variant !== 'icon' && <>{children}</>}
        {iconPosition === 'end' && renderIcon()}
      </button>
    );
  }
);

export default Button;
export type { ButtonProps };
