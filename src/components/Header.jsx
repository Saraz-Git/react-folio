import {Flex, Link, useColorMode} from '@chakra-ui/react';

const Header = () => {
   const {toggleColorMode} = useColorMode();
  return (

    <Flex h='320px' backgroundImage={'url(/background.png)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
     <Flex justifyContent ={"space-between"} alignItems={'end'} w={'full'} my='auto' px={10} mx={0}>
      <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={"3em"}  onClick={toggleColorMode}>Shuying</Link>
      <Flex justifyContent ={"space-around"} gap={{base:6, md:12}}>
       <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={{base:"1.2em", md:"2em"}} href='/' className='zoom'>About</Link>
       <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={{base:"1.2em", md:"2em"}} href='/portfolio' className='zoom'>Portfolio</Link>
       <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={{base:"1.2em", md:"2em"}} href='/contact' className='zoom'>Contact</Link>
       <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={{base:"1.2em", md:"2em"}} href='/resume' className='zoom'>Resume</Link>
      </Flex >
     </Flex>
    </Flex>
  )
}

export default Header