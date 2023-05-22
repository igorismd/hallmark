import { ChangeEvent, ReactNode } from 'react';

export interface TextAreaProps {
  label: ReactNode;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}
