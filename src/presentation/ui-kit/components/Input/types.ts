import { ChangeEvent, ReactNode } from 'react';

export interface InputProps {
  label: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
