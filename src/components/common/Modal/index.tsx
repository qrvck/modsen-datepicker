import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { Background, CloseButton, InnerBackground, Window } from './styled';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

class Modal extends Component<IModalProps> {
  appRoot = document.querySelector('body');

  render() {
    const { children, onClose } = this.props;
    const { appRoot } = this;

    if (appRoot) {
      return ReactDOM.createPortal(
        <Background>
          <InnerBackground onClick={onClose} />
          <Window>
            <CloseButton onClick={onClose}>X</CloseButton>
            {children}
          </Window>
        </Background>,
        appRoot
      );
    } else {
      return null;
    }
  }
}

export { Modal };
