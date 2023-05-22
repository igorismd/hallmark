import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const BlP: FC<TypoProps> = ({ className, children }) => (
  <p className={`typo__blp ${className ? className : ''}`}>{children}</p>
);

export default BlP;
