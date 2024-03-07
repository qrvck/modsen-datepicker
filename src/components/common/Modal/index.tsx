import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { Background, Window } from './styled';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

class Modal extends Component<IModalProps> {
  appRoot = document.querySelector('#root');

  render() {
    const { children, onClose } = this.props;
    const { appRoot } = this;

    if (appRoot) {
      return ReactDOM.createPortal(
        <Background>
          <button onClick={() => onClose()}>x</button>
          <Window>{children}</Window>
        </Background>,
        appRoot
      );
    } else {
      return null;
    }
  }
}

export { Modal };
