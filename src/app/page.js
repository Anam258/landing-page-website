import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';


export default function Home() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Statistics />
      <Blog />
      <CallToAction />
      <Footer />
    </>
  );
}
