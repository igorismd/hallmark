import React, { FC, useState } from 'react';
import { InputProps } from './types';
import './styles.sass';

const Input: FC<InputProps> = ({ label, onChange, className }) => {
  const [mixedClassName, setMixedClassName] = useState<string>(`input ${className}`);

  const onFocus = () => {
    setMixedClassName(`input ${className} input_focused`);
  };

  const onBlur = () => {
    setMixedClassName(`input ${className} input_blur`);

    window.setTimeout(() => {
      setMixedClassName(`input ${className}`);
    }, 500);
  };

  return (
    <label className={mixedClassName}>
      <div>{label}</div>
      <input
        className="input__input"
        type="text"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </label>
  );
};

export default Input;
