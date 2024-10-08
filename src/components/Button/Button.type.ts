import { ButtonHTMLAttributes } from 'react';

type Size = 'icon' | 'sm' | 'md' | 'lg';

type Colors =
  | 'white'
  | 'black'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'brown';

type Variant = 'filled' | 'outline' | 'iconText' | 'icon' | 'link';

type ButtonExtends = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ButtonExtends {
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
}

export type { Size, Colors, Variant, ButtonExtends, ButtonProps };
