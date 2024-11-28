import Clients from "./components/Client";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { LandingPage } from "./components/landingpages/LandingPage";
import LandingPage2 from "./components/landingpages/LandingPage2";

export default function Home() {
  
  return (
    <div>
      <Header />
      
      <Hero/>
      <Clients />
      <Features/>
      <LandingPage/>
      <LandingPage2/>
    </div>
  );
}
