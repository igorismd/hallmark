import React, { FC } from 'react';
import { TypoProps } from '../types';
import '../styles.sass';

const BlInH2: FC<TypoProps> = ({ className, children }) => (
  <h2 className={`typo__blinh2 ${className ? className : ''}`}>{children}</h2>
);

export default BlInH2;
