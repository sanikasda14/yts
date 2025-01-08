import Accred from "../Accred";
import Footer from "../Footer";
import Navbar from "../Navbar";
import UmrahHero from "./UmrahHero";
import AboutUmrah from "./AboutUmrah";
import ContactUmrah from "./ContactUmrah";
import TabUmrah from "./TabUmrah";

export default function Contact() {
  return (
    <>
      <Navbar />
      <UmrahHero />
      <AboutUmrah/>
      <TabUmrah/>
      <ContactUmrah/>
      <Accred/>
      <Footer />
    </>
  );
}
