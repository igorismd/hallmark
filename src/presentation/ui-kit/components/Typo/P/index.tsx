import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const P: FC<TypoProps> = ({ className, children }) => (
  <p className={`typo__p ${className ? className : ''}`}>{children}</p>
);

export default P;
