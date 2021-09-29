import { Text, Container } from "./Confirm.styles";

const Confirm = ({ onClose, title }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Text>Your request has been sent to our manager and we will reach back to you soon.</Text>
      <Text onClick={onClose} color="blue">
        Ok, got it!
      </Text>
    </Container>
  );
};

export default Confirm;
