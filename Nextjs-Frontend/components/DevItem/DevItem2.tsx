import {
  Box,
  Image,
  Badge,
  Link,
  IconButton
} from "@chakra-ui/core";
import { SiGithub, SiLinkedin, SiInstagram, SiTwitter } from "react-icons/si";
import { MdLink } from "react-icons/md";

export default function DevForm({ dev }) {

  function devLevel (){
    if (dev.level === 'Trainee'){
      return(
      <Badge borderRadius="full" px="2" backgroundColor="green">
            {dev.level}
      </Badge>)
    }
    else if (dev.level === 'Júnior'){
      return(
      <Badge borderRadius="full" px="2" backgroundColor="blue">
            {dev.level}
      </Badge>)
    }
    else if (dev.level === 'Pleno'){
      return(
      <Badge borderRadius="full" px="2" backgroundColor="purple">
            {dev.level}
      </Badge>)
    }
    else if (dev.level === 'Sênior'){
      return(
      <Badge borderRadius="full" px="2" backgroundColor="yellow">
            {dev.level}
      </Badge>)
    }
    else if (dev.level === 'Master'){
      return(
      <Badge borderRadius="full" px="2" backgroundColor="red">
            {dev.level}
      </Badge>)
    }
    else{
      return(
        <Badge borderRadius="full" px="2" backgroundColor="red">
        New
      </Badge>
      )
    }
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" width={280}>
      <Image src={dev.avatar_url} alt={dev.name} width="100%" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2">
            {devLevel()}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {dev.name}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {dev.bio}
        </Box>

        <Box>
        {dev.techs.join(', ')}
        </Box>
        <div style={{ flex: 1, display: 'flex', marginTop: '20px', justifyContent: 'center', marginLeft: '5px' }} >
        <div className="justify" style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
        <Box
        marginRight={2}
        >
          <IconButton
          title="Github"
          variant="outline"
          aria-label="Send email"
          icon={SiGithub}
          onClick={() => window.open(`https://github.com/${dev.github_username}`, '_blank')}>
          </IconButton>
        </Box>
        </div>
        <div className="justify" style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
        <Box
        marginRight={2}
        >
          <IconButton
          title="Portfólio"
          variant="outline"
          aria-label="Send email"
          icon={MdLink}
          onClick={() => window.open(`${dev.portfolioURL}`, '_blank')}>
          </IconButton>
        </Box>
        </div>
        <div className="justify" style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
        <Box
        marginRight={2}
        >
          <IconButton
          title="LinkedIn"
          variant="outline"
          aria-label="Send email"
          icon={SiLinkedin}
          onClick={() => window.open(`${dev.linkedIn}`, '_blank')}>
          </IconButton>
        </Box>
        </div>

        <div className="justify" style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
        <Box
        marginRight={2}
        >
          <IconButton
          title="Instagram"
          variant="outline"
          aria-label="Send email"
          icon={SiInstagram}
          onClick={() => window.open(`${dev.instagram}`, '_blank')}>
          </IconButton>
        </Box>
        </div>
        <div className="justify" style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
        <Box
        marginRight={2}
        >
          <IconButton
          title="Twitter"
          variant="outline"
          aria-label="Send email"
          icon={SiTwitter}
          onClick={() => window.open(`${dev.twitter}`, '_blank')}>
          </IconButton>
        </Box>
        </div>
        </div>
      </Box>
    </Box>
    
  )
}