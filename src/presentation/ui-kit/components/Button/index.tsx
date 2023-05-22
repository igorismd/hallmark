import React, { FC } from 'react';
import { ButtonProps } from './types';
import './styles.sass';

const Button: FC<ButtonProps> = ({ href, target, theme, onClick, className, children }) => {
  let mixedClassName = 'button';

  if (theme) {
    mixedClassName += ` button_${theme}`;
  }

  if (className) {
    mixedClassName += ` ${className}`;
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={mixedClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={mixedClassName} onClick={onClick}>{children}</button>
  );
};

export default Button;
