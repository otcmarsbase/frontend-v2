import {Modal} from "@chakra-ui/react";
import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "@/stores";

export const ModalComponent: FC = observer(() => {
  const {modalStore} = useStore();
  const {show, children, closeModal} = modalStore;
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={show} onClose={closeModal}>
        {children}
      </Modal>
    </>
  )
})
