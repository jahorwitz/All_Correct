import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form.js";
import Modal from "../components/Modal/Modal.js";
import Services from "../components/Services/Services.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <Services />
      <Form />
      <Footer />
    </>
  );
}
