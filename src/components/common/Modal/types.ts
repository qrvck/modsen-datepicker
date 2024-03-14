import { ReactNode } from 'react';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

export type { IModalProps };
