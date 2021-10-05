import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";
import Pricing from "../components/Pricing/Pricing.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <Pricing />
      <Footer />
    </>
  );
}
