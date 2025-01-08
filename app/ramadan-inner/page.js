import Accred from "../Accred";
import Footer from "../Footer";
import Navbar from "../Navbar";
import RamadanHeroInner from "./RamadanHeroInner";
import RamadanDetails from "./RamadanDetails";
import RamadanDetailsTab from "./RamadanDetailsTab";
export default function Contact() {
  return (
    <>
      <Navbar />
      <RamadanHeroInner />
      <RamadanDetails/>
      <RamadanDetailsTab/>
     
      <Accred/>
      <Footer />
    </>
  );
}
