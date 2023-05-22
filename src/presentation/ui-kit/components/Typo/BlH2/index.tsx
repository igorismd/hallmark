import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const BlH2: FC<TypoProps> = ({ className, children }) => (
  <h2 className={`typo__blh2 ${className ? className : ''}`}>{children}</h2>
);

export default BlH2;
