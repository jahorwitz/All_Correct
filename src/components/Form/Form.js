import { Text, Container } from "./Form.styles";

const Form = ({ inherit }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Container inherit={inherit}>
        <Text color="blue">Get in touch</Text>
        <Text>to start your project —></Text>
      </Container>

      <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          Hello from the modal!
        </Modal>
      </div>
    </>
  );
};

export default Form;
