import {Flex , Box, Link} from '@chakra-ui/react';
import { BsGithub,BsInstagram,BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  return (
    <Flex mx={'auto'} w={'30%'}justifyContent ={"center"} p={'12'}>
      <Link _hover={{color: "gray.400"}} px={3} href='https://github.com/Saraz-Git' className='zoom'><BsGithub size={30} /></Link>
      <Link _hover={{color: "gray.400"}} px={3} href='https://instagram.com' className='zoom'><BsInstagram size={30}/></Link>
      <Link _hover={{color: "gray.400"}} px={3} href='https://stackoverflow.blog/' className='zoom'><BsStackOverflow size={30}/></Link>
    </Flex>
  )
}

export default Footer