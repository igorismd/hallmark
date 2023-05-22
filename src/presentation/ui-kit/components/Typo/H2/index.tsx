import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const H2: FC<TypoProps> = ({ className, children }) => (
  <h2 className={`typo__h2 ${className ? className : ''}`}>{children}</h2>
);

export default H2;
