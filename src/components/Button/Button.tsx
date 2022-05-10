import * as React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
}

const Button = ({ children, className = '', variant = 'default', ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'font-sans text-md py-2 px-4 border-none rounded-lg  transition-all outline-none  duration-75',
        variant === 'default' &&
          'bg-gradient-to-b from-gray-400/30 to-gray-600/30 dark:from-gray-700/30 dark:to-gray-800/20 dark:focus:outline-blue-200/50 focus:outline-blue-200',
        variant === 'primary' &&
          'bg-gradient-to-b from-blue-500 to-blue-600 focus:outline-blue-200 text-white dark:text-neutral-200',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
