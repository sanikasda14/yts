import Accred from "../Accred";
import Footer from "../Footer";
import Navbar from "../Navbar";
import RamadanHero from "./RamadanHero";
import AboutRamadan from "./AboutRamadan";
import ContactRamadan from "./ContactRamadan";
import TabRamadan from "./TabRamadan";

export default function Contact() {
  return (
    <>
      <Navbar />
      <RamadanHero />
      <AboutRamadan/>
      <TabRamadan/>
      <ContactRamadan/>
      <Accred/>
      <Footer />
    </>
  );
}
