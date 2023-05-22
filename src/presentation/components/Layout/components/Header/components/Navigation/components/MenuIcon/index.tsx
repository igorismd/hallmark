import React, { FC } from 'react';
import { MenuIconProps } from './types';
import './styles.sass';

const MenuIcon: FC<MenuIconProps> = ({ fill, onClick }) => (
  <svg
    width="32"
    height="9"
    viewBox="0 0 32 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className="menu-icon"
  >
    <rect y="0.5" width="32" height="2" fill={fill}/>
    <rect y="6.5" width="32" height="2" fill={fill}/>
  </svg>
);

export default MenuIcon;
