import Nav from "../components/Nav/Nav.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";

import GameCarousel from "../components/GameCarousel/GameCarousel.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <GameCarousel />
      <Services />
      <Active />
      <Reviews />
      <Footer />
    </>
  );
}
