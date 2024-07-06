import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/provider'
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/theme-utils';
import { ColorModeScript } from "@chakra-ui/color-mode";
import { BrowserRouter } from "react-router-dom";

const styles ={
  global:(props)=>({
    body:{
      color:mode('blue.800','gray.400')(props),
      bg:mode('gray.100','blackAlpha.900')(props),
    }
  })
};

const config ={
  initialColorMode:"light",
  useSystemColorMode:true,
};

const colors ={
  gray:{
    light:"#616161",
    dark:"#1e1e1e",
  }
};

const theme = extendTheme({config,styles,colors});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
