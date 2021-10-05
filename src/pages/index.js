import Nav from "../components/Nav/Nav.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";
import GetInTouchForm from "../components/GetInTouchForm/GetInTouchForm.js";
import { GetInTouchProvider } from "../context/GetInTouchModalContext.js";

export default function Home() {
  return (
    <GetInTouchProvider>
      <Nav lang={true} />
      <Services />
      <Active />
      <Reviews />
      <GetInTouchForm />
      <Footer />
    </GetInTouchProvider>
  );
}
