import { useCallback, useState } from "react";
import Modal from "../Modal/Modal";
import { Text, Container, Wrapper } from "./Form.styles";

const Form = ({ inherit }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <Container inherit={inherit}>
      <Wrapper onClick={openModal}>
        <Text color="blue">Get in touch</Text>
        <Text>to start your project &#10230;</Text>
      </Wrapper>

      <Modal onClose={closeModal} showModal={showModal} title="Get in touch" />
    </Container>
  );
};

export default Form;
