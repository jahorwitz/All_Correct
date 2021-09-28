import { useCallback, useState } from "react";
import Link from "next/link";
import Modal from "../Modal/Modal";
import { Text, Container, ModalForm } from "./Form.styles";

const Form = ({ inherit }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [checked, setChecked] = useState(false);

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
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
            />

            <input
              type="text"
              name="description"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Project Description"
              minLength="2"
              maxLength="200"
              required
            />

            <input
              type="email"
              name="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
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
