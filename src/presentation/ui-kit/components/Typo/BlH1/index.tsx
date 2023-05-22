import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const BlH1: FC<TypoProps> = ({ className, children }) => (
  <h1 className={`typo__blh1 ${className ? className : ''}`}>{children}</h1>
);

export default BlH1;
