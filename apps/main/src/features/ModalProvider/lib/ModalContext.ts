import {createContext} from 'react';

interface IModalContextProps {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
}

export const ModalContext = createContext<IModalContextProps>({
  isOpen: false,
  onOpen: () => {
  },
  onClose: () => {
  }
});
