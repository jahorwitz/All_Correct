import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <Form />
      <Footer />
    </>
  );
}
