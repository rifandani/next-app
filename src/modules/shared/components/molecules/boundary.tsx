import { cn } from '#shared/utils/helper';
import React from 'react';

const Label = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'warning'
    | 'destructive';
}) => {
  return (
    <div
      className={cn('rounded-full px-1.5 shadow-[0_0_1px_3px_black]', {
        'bg-gray-800 text-gray-300': color === 'default',
        'bg-primary text-primary-foreground': color === 'primary',
        'bg-secondary text-secondary-foreground': color === 'secondary',
        'bg-accent text-accent-foreground': color === 'accent',
        'bg-warning text-warning-foreground': color === 'warning',
        'bg-destructive text-destructive-foreground': color === 'destructive',
      })}
    >
      {children}
    </div>
  );
};

export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
  className = '',
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: 'small' | 'default';
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'warning'
    | 'destructive';
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative rounded-lg border border-dashed',
        {
          'p-3 lg:p-5': size === 'small',
          'p-4 lg:p-9': size === 'default',
          'border-gray-700': color === 'default',
          'border-primary': color === 'primary',
          'border-secondary': color === 'secondary',
          'border-accent': color === 'accent',
          'border-warning': color === 'warning',
          'border-destructive': color === 'destructive',
        },
        className,
      )}
    >
      <div
        className={cn(
          'absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest',
          {
            'left-3 lg:left-5': size === 'small',
            'left-4 lg:left-9': size === 'default',
          },
        )}
      >
        {labels.map((label) => {
          return (
            <Label key={label} color={color}>
              {label}
            </Label>
          );
        })}
      </div>

      {children}
    </div>
  );
};
