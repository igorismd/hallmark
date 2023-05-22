import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const BlInH3: FC<TypoProps> = ({ className, children }) => (
  <h3 className={`typo__blinh3 ${className ? className : ''}`}>{children}</h3>
);

export default BlInH3;
