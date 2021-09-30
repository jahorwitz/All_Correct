import { Text, Container } from "./Confirm.styles";
import { Button } from "./Modal.styles";

const Confirm = ({ onClose }) => {
  return (
    <Container>
      <Text>Thank you!</Text>
      <Text>Your request has been sent to our manager and we will reach back to you soon.</Text>
      <Button onClick={onClose} color="blue" type="button">
        Ok, got it!
      </Button>
    </Container>
  );
};

export default Confirm;
