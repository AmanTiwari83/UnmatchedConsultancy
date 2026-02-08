import About from "@/components/About";
import ServiceCard from "@/components/common/ServiceCard";
import Contact from "@/components/Contact";
import FaqSection from "@/components/FAQ";
import Services from "@/components/Services";
import Start from "@/components/Start";
import Team from "@/components/Team";
// import { ContactIcon } from "@/components/ContactIcon";

export default function Home() {
  return (
    <>
      <Start/>
      <About/>
      <Services limit={6}/>
      <Team limit={6}/>
      <Contact/>
    </>
   
  );
}
