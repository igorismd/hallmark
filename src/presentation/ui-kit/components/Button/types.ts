import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  theme?: 'circle';
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement> | undefined) => void;
  className?: string;
}
