import {Box, Text, Flex,Link} from '@chakra-ui/react';
import { BsGithub} from "react-icons/bs";
import { useState } from 'react';

const Project = ({projectImg, projectName, projectUrl, projectType}) => {
const [hovered, setHovered] = useState(false);


  return (
      <Flex _hover={{boxShadow:'outline'}} onMouseOver={()=>setHovered(true)} onMouseOut={()=>setHovered(false)} h='200px' backgroundImage={projectImg}
      backgroundSize={'cover'} backgroundPosition={'center center'} justifyContent={'center'} flexDirection={'column'}>
       {hovered &&
        <Box color={'gray.600'} className='fade' >
          <Flex px={4}>
            <Text  fontWeight={'bold'}>{projectName}</Text>
            <Link  px={3} href={projectUrl}><BsGithub size={30} /></Link>
          </Flex>
         <Text px={4} >{projectType}</Text>
        </Box>} 
     
      </Flex>
  )
}

export default Project