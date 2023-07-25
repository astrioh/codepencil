import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '@/components/Elements/Spinner';

const variants = {
  primary:
    'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm focus-visible:outline-indigo-600 disabled:bg-indigo-400',
  inverse: 'bg-white border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white ',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={isLoading}
        className={clsx(
          'flex w-full justify-center items-center rounded-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
