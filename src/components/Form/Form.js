import { useCallback, useState } from "react";
import Link from "next/link";
import Modal from "../Modal/Modal";
import { Text, Container, ModalForm } from "./Form.styles";

const Form = ({ inherit }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!checked && nameInput === "" && emailInput === "" && messageInput === "") {
      alert("Please fill out your information, and try again");
    } else {
      <>
        <p>Thank you!</p>
        <p>Your request has been sent to our manager and we will reach back to you soon.</p>
        <p>Ok, got it!</p>
      </>;
    }
  };

  return (
    <>
      <Container inherit={inherit}>
        <button onClick={openModal}>
          <Text color="blue">Get in touch</Text>
          <Text>to start your project —></Text>
        </button>
      </Container>

      <div>
        <Modal onClose={closeModal} show={showModal} title="Get in touch">
          <ModalForm name="modal" onSubmit={handleClick}>
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={handleChange}
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
            />

            <input
              type="text"
              name="message"
              value={formFields.description}
              onChange={handleChange}
              placeholder="Project Description"
              minLength="2"
              maxLength="200"
              required
            />

            <input
              type="email"
              name="email"
              value={formFields.email}
              onChange={handleChange}
              placeholder="Email*"
              required
            />

            <input type="file">Add file if needed</input>
            {checked && (
              <input
                type="checkbox"
                name="checkbox"
                value="GDPR Agreement"
                checked
                onChange={() => setChecked(!checked)}
              />
            )}
            <p>
              Please note that this form is strictly for project inquiries only. To apply for a job,
              please visit our{" "}
              <Link
                href="https://allcorrectgames.com/for-freelancers/"
                target="_blank"
                noopener="true">
                <a>career page.</a>
              </Link>
            </p>
            <button onClick={handleClick} type="submit">
              Send the form –>{" "}
            </button>
          </ModalForm>
        </Modal>
      </div>
    </>
  );
};

export default Form;
