import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea, 
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { validateName, validateEmail } from '../utils/helpers.js';

const ContactPage = () => {
 const [show, setShow] = useState(false);
 
 const [errorMessage, setErrorMessage] = useState('Input is invalid');

  const handleInputChange= (e)=>{

  if(!e.target.value){
    setErrorMessage(`${e.target.name} is required`);
    setShow(true);
  }else if(e.target.name === 'name' && validateName(e.target.value)=== false){
   setShow(true);
   setErrorMessage('Name is invalid')
  }else if(e.target.name === 'email' && validateEmail(e.target.value)=== false){
   setShow(true)
   setErrorMessage('Email is invalid')
  }else{
    setShow(false);
  }
};

const handleSendMail= ()=>{
  const link = "mailto:sara00915@gmail.com"
      window.location.href = link;
}


  return (<>
  <Box px={'90px'} py={'10'}>
<Box fontSize={'1.5em'} fontWeight={'semibold'} pb={'4'}>Contact</Box>
<VStack w={{base:'100%', xl:'50%'}}spacing={2}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        
                      </InputLeftElement>
                      <Input bg={useColorModeValue('white', 'gray.700')} type="text" name="name" placeholder="Your Name" onBlur={handleInputChange}/>
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                       
                      </InputLeftElement>
                      <Input bg={useColorModeValue('white', 'gray.700')} type="email" name="email" placeholder="Your Email" onBlur={handleInputChange} />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      bg={useColorModeValue('white', 'gray.700')}
                      onBlur={handleInputChange}
                    />
                  </FormControl>
                  {show && <Text color='tomato'>{errorMessage}</Text>}

                  <Button
                  mt={'4'}
                    colorScheme="blue"
                    bg={useColorModeValue('orange.700', 'orange.900')}
                    color="white"
                    _hover={{
                      bg: 'orange.800',
                    }}
                    width="150px"
                    onClick={handleSendMail}>
                    Send Message
                  </Button>
                </VStack>

  </Box>
    </>
  )
}

export default ContactPage