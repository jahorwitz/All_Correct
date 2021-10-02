import { useCallback, useState } from "react";
import GetInTouchModal from "../GetInTouchModal/GetInTouchModal";
import { Text, Container, Wrapper } from "./GetInTouchForm.styles";

const GetInTouchForm = ({ inherit, openModal, closeModal, showModal }) => {
  return (
    <Container inherit={inherit}>
      <Wrapper onClick={openModal}>
        <Text color="blue">Get in touch</Text>
        <Text>to start your project &#10230;</Text>
      </Wrapper>
      <GetInTouchModal onClose={closeModal} showModal={showModal} />
    </Container>
  );
};

export default GetInTouchForm;
