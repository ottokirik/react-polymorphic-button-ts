import { ComponentProps, ElementType, ReactNode } from 'react';

import css from './Button.module.css';

type color = 'primary' | 'secondary';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string | ReactNode;
  color?: color;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export const Button = <E extends ElementType = typeof defaultElement>(props: ButtonProps<E>) => {
  const { children, as, color = 'primary', ...otherElementProps } = props;
  const TagName = as ?? defaultElement;

  const className = `${css.default} ${css[color]}`;

  return (
    <TagName className={className} {...otherElementProps}>
      {children}
    </TagName>
  );
};
