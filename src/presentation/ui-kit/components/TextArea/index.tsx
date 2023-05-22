import React, { FC, useState } from 'react';
import { TextAreaProps } from './types';
import './styles.sass';

const TextArea: FC<TextAreaProps> = ({ label, onChange, className }) => {
  const [mixedClassName, setMixedClassName] = useState<string>(`textarea ${className}`);

  const onFocus = () => {
    setMixedClassName(`textarea ${className} textarea_focused`);
  };

  const onBlur = () => {
    setMixedClassName(`textarea ${className} textarea_blur`);

    window.setTimeout(() => {
      setMixedClassName(`textarea ${className}`);
    }, 500);
  };

  return (
    <label className={mixedClassName}>
      <div>{label}</div>
      <textarea
        className="textarea__input"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </label>
  );
};

export default TextArea;
