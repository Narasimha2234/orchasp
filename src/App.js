
import {  useState } from 'react';
import './App.css';
import ThemeProviderComp from './components/ThemeProviderComp';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/Header';
import SideNav from './components/sidenav/SideNav';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/services/Service';
import Investors from './components/investors/Investors';
import IndustriesComp from './components/industries/Industries';
import KnowledgeHubComp from './components/knowledgeHub/KnowledgeHubComp';
import AI_AND_DS from './components/blogs/AI_AND_DS';
import IOT_COMP from './components/blogs/IOT_COMP';
import Media from './components/media/Media';
import Careers from './components/careers/Careers';

import Disclaimers from './components/disclaimer/Disclaimers';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy';
import TermsOfUse from './components/termsofuse/TermsOfUSe';
import LetsSpeak from './components/letsspeak/LetsSpeak';
import PatnerWithUs from './components/patnerwithus/PatnerWithUs';
import ThankYouPage from './components/thankyou/ThankYouPage';


function App() {
  const [show,setShow]=useState(false)

   const handleshow=()=>{ 
      setShow(!show)
   }
  return (
    <ThemeProviderComp>
    {/* <CssBaseline/> */}
    <BrowserRouter>
   
     <Box className="App">
    <Header handleShow={handleshow}/>
    <Box className="content">
        <SideNav handleShow={handleshow} show={show}></SideNav>       
       <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/industries' element={<IndustriesComp/>}/>
        <Route path='/investors' element={<Investors/>}/>
        <Route path='/knowledge' element={<KnowledgeHubComp/>}/>
        <Route path='/blog/1' element={<AI_AND_DS/>}/>
        <Route path='/blog/2' element={<IOT_COMP/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/patner_with_us' element={<PatnerWithUs/>}/>
        <Route path='/disclaimer' element={<Disclaimers/>} />
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/termsofuse' element={<TermsOfUse/>}/>
        <Route path='/letsSpeack' element={<LetsSpeak/>}/>
        <Route path='/contactus' element={<LetsSpeak/>}/>
        <Route path='/success' element={<ThankYouPage/>}/>
        
       </Routes>
    </Box>
   <Box >
   <Footer/>
   </Box>
    </Box>
    </BrowserRouter>
   </ThemeProviderComp>
  );
}

export default App;
