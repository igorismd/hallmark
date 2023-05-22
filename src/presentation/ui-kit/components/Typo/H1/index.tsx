import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const H1: FC<TypoProps> = ({ className, children }) => (
  <h1 className={`typo__h1 ${className ? className : ''}`}>{children}</h1>
);

export default H1;
