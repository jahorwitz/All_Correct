import { useCallback, useState } from "react";
import Nav from "../components/Nav/Nav.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";
import GetInTouchForm from "../components/GetInTouchForm/GetInTouchForm.js";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      <Nav lang={true} openModal={openModal} closeModal={closeModal} showModal={showModal} />
      <Services />
      <Active />
      <Reviews />
      <GetInTouchForm openModal={openModal} closeModal={closeModal} showModal={showModal} />
      <Footer />
    </>
  );
}
