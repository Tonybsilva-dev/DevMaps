import React, { useState, useEffect } from "react";
import {
  Flex,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Text
} from "@chakra-ui/core";
import api from '../services/api'
import { FaArrowRight, FaSearch } from 'react-icons/fa'
import DevItem from '../components/DevItem/DevItem2';
import Input from "../components/Input";
import RegisterModal from '../components/Modal/Register'

export default function Home() {
  //Abrir Modal Register
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [devs, setDevs] = useState([]);
  // Carregar Devs
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  function DevList() {
    if (devs.length <= 0){
      return(
        <Image 
        marginTop={150}
        src="https://i.imgur.com/OjHBBEJ.png" 
        alt="404"/>
      )
    }
    else{
      return(
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', listStyle: 'none' }} >
        {devs.map(dev => (
          <DevItem key={dev._id} dev={dev} />
        ))}
      </ul>
      )
    }
  }


  return (
    <Grid
      backgroundColor="#133B5C"
      as="main"
      height="100vh"
      templateColumns=" 400px 1fr"
      templateRows="1fr"
      templateAreas="
    'form logo'
    'form logo'
    'form logo'
    "
      justifyContent="center"
      alignItems="center"

    >
      <Flex
        gridArea="logo"
        flexDir="column"
        alignItems="center"
        overflowY="auto"
        padding={8}
        height="100vh"
      >
        {DevList()}
      </Flex>
      <Flex
        justifyContent="center"
        gridArea="form"
        height="100%"
        flexDir="column"
        alignItems="stretch"
        backgroundColor="gray.700"
        padding={16}
        marginTop={0}
      >
        {/* <Image
            src='/logo.png'
            alt='logo'
            width="100%"
            alignSelf='center'
            marginBottom={5}
          /> */}
          <Input
          textAlign="center" placeholder="Pesquisar por tecnologias"/>
        <Button
            type="submit"
            rightIcon={FaSearch}
            marginTop={2}
            backgroundColor="#133B5C"
            _hover={{ backgroundColor: "#87cefa" }}
            borderRadius="sm"
            height="50px"
            width="100%"
            
          >
            Pesquisar
        </Button>

        <Flex alignItems="center" marginTop={6} >
            <Text fontSize="sm" color="white">
              Ou então
          </Text>

            <Button
              height="50px"
              flex="1"
              backgroundColor="#2D4059"
              _hover={{ backgroundColor: "#87cefa" }}
              marginLeft={6}
              borderRadius="sm"
              rightIcon={FaArrowRight}
              marginTop={2}
              onClick={onOpen}
            >
              Cadastre-se
          </Button>          
          </Flex>
      </Flex>
      <RegisterModal isOpenRegister={isOpen} onCloseRegister={onClose} />
    </Grid>
  );
}
