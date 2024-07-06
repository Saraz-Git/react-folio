import {Container} from '@chakra-ui/react';
// import {Route, Routes} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage';

function App() {
  
  return (
    <Container p={0} minW='full'>
      <Header/>
     <Outlet/>
      <Footer/>
    </Container>
  )
}

export default App
