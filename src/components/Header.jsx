import {Flex, Link, useColorMode, Icon, Button,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Show, Hide 
} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons'

const Header = () => {
   const {toggleColorMode} = useColorMode();
  return (

    <Flex h='320px' minW='450px' backgroundImage={'url(/background.png)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
     <Flex justifyContent ={"space-between"} alignItems={'end'} w={'full'} my='auto' px={10} mx={0}>
      <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={"3em"}  onClick={toggleColorMode}>Shuying</Link>
    <Show above='md'> 
      <Flex justifyContent ={"space-around"} gap={{base:6, md:12}}>
       <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={{base:"1.2em", md:"1.8em"}} href='/' className='zoom'>About</Link>
       <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={{base:"1.2em", md:"1.8em"}} href='/portfolio' className='zoom'>Portfolio</Link>
       <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={{base:"1.2em", md:"1.8em"}} href='/contact' className='zoom'>Contact</Link>
       <Link style={{ textDecoration: 'none' }} color={'whiteAlpha.900'} fontSize={{base:"1.2em", md:"1.8em"}} href='/resume' className='zoom'>Resume</Link>
      </Flex >
</Show> 
<Show below='md'>
  <Menu>
   <MenuButton
    color={'white'}
    _hover={{ bg: 'transparent'}}
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
   
  <MenuList>
    <MenuItem as='a' href='/'>About</MenuItem>
    <MenuItem as='a' href='/portfolio'>Portfolio</MenuItem>
    <MenuItem as='a' href='/contact'>Contact</MenuItem>
    <MenuItem as='a' href='/resume'>Resume</MenuItem>
  </MenuList>
  </Menu>
</Show>


     </Flex>
    </Flex>
  )
}

export default Header