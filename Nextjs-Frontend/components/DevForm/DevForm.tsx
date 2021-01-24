import React, { useState, useEffect } from 'react';
import {
  Button,
  Flex,
  Text,
  InputGroup,
  useToast,
  Select
} from "@chakra-ui/core";
import { SiGithub } from "react-icons/si";
import { FaArrowRight } from 'react-icons/fa'
import Divider from "../Divider";
import Input from "../Input";


export default function DevForm({ onSubmit }) {

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [level, setLevel] = useState('')
  const [portfolioURL, setPortfolioURL] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // Pegar localização atual
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: any) => {
        //console.log(position)
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);




  // Enviar dados ao BD
  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      github_username,
      level,
      techs,
      portfolioURL,
      linkedIn,
      instagram,
      twitter,
      latitude,
      longitude
    });
    setPortfolioURL('')
    setGithubUsername('');
    setTechs('');
    setLinkedIn('')
    setInstagram('')
    setTwitter('')
  }
  const toast = useToast();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name="github_username"
          id="github_username"
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)} placeholder="Github UserName" autoComplete="off" />
        
        <InputGroup>
          <Input
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            marginTop={2}
            placeholder="Techs"
            autoComplete="off"
          />
        </InputGroup>
        <Select 
        name="professionalLevel"
        id="professionalLevel"
        marginTop={2}
        backgroundColor="#2D4059"
        color="gray.500"
        height="50px"
        placeholder="Nível"
        onChange={e => setLevel(e.target.value)}
        >
          <option value="Trainee">DEV Trainee</option>
          <option value="Júnior">DEV Júnior</option>
          <option value="Pleno">DEV Pleno</option>
          <option value="Sênior">DEV Sênior</option>
          <option value="Master">DEV Master</option>
        </Select>
        <Input
          name="portfolioURL"
          id="portfolioURL"
          value={portfolioURL}
          marginTop={2}
          onChange={e => setPortfolioURL(e.target.value)} placeholder="URL Portfolio" autoComplete="off" />

        <Input
          name="linkedIn"
          id="linkedIn"
          value={linkedIn}
          marginTop={2}
          onChange={e => setLinkedIn(e.target.value)} placeholder="URL LinkedIn" autoComplete="off" />

        <Input
          name="instagram"
          id="instagram"
          value={instagram}
          marginTop={2}
          onChange={e => setInstagram(e.target.value)} placeholder="URL Instagram" autoComplete="off" />


        <Input
          name="twitter"
          id="twitter"
          value={twitter}
          marginTop={2}
          onChange={e => setTwitter(e.target.value)} placeholder="URL Twitter" autoComplete="off" />

        <Button
          type="submit"
          rightIcon={FaArrowRight}
          marginTop={6}
          backgroundColor="#133B5C"
          _hover={{ backgroundColor: "#87cefa" }}
          borderRadius="sm"
          height="50px"
          width="100%"
          onClick={() =>
            toast({
              title: "Feito!",
              description: "Cadastrado com sucesso!",
              status: "success",
              position: "top-right",
              duration: 1500,
              isClosable: true,
            })
          }
        >
          Ingressar
        </Button>
        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm" color="white">
            Acesse meu
          </Text>

          <Button
            height="50px"
            flex="1"
            backgroundColor="#2D4059"
            _hover={{ backgroundColor: "#87cefa" }}
            marginLeft={6}
            borderRadius="sm"
            rightIcon={SiGithub}
          >
            Github
          </Button>
        </Flex>
      </form>
    </>
  )
}