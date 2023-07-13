import { useContext } from 'react';
import { ModalContext } from './ModalContext';

interface IUseTheme {
  isOpen: boolean,
  openModal: () => void,
  closeModal: () => void
}

export function useModal(): IUseTheme{
	const { isOpen, onOpen, onClose } = useContext(ModalContext);

	function openModal(){
    onOpen();
	}
  function closeModal(){
    onClose();
  }
	return {
    isOpen,
    openModal,
    closeModal
	};
}
