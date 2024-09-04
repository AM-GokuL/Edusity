import React,{useState }from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Hero/Hero";
import Program from './Components/Program/Program';
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from  "./Components/Campus/Campus";
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
const App = () => {
  const [playstate,setplayState]=useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
         <Title subTitle='Our PROGRAM' title ='What we Offer'/>
         <Program />
         <About  setplayState={setplayState} />
         <Title subTitle='Gallery' title ='Campus Phtos'/>
         <Campus />
         <Title subTitle='TESTIMONIALS' title ='What a student says'/>
         <Testimonials />
         <Title subTitle='Contact Us' title ='Get in Touch'/>
         <Contact />
         <Footer />
      </div>
      <VideoPlayer playstate={playstate} setplayState={setplayState}/>
    </div>
  )
}

export default App