import React, { useState} from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/core";
import api from '../../services/api'
import DevForm from '../../components/DevForm/DevForm'

export default function RegisterModal(props){
  const [devs, setDevs] = useState([]);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)
    // console.log(response.data)
    setDevs([...devs, response.data]);
  }

  return(
    <>
    <Modal isOpen={props.isOpenRegister} onClose={props.onCloseRegister} isCentered size="350px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastre-se</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
            <DevForm onSubmit={handleAddDev} />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={props.onCloseRegister}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}