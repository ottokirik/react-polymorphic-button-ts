import { ComponentProps, ElementType, ReactNode } from 'react';

import css from './Button.module.css';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string | ReactNode;
  primary?: boolean;
  secondary?: boolean;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export const Button = <E extends ElementType = typeof defaultElement>(props: ButtonProps<E>) => {
  const { children, as, ...otherElementProps } = props;
  const TagName = as ?? defaultElement;

  return (
    <TagName className={css.default} {...otherElementProps}>
      {children}
    </TagName>
  );
};
