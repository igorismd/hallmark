import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const BlInH1: FC<TypoProps> = ({ className, children }) => (
  <h1 className={`typo__blinh1 ${className ? className : ''}`}>{children}</h1>
);

export default BlInH1;
