import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const BlInP: FC<TypoProps> = ({ className, children }) => (
  <p className={`typo__blinp ${className ? className : ''}`}>{children}</p>
);

export default BlInP;
