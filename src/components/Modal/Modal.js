import { useEffect, useRef, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "../ErrorBoundary";
import Link from "next/link";
import {
  Background,
  Button,
  CheckboxWrapper,
  Info,
  ModalWrapper,
  Text,
  Title,
} from "./Modal.styles";
import Confirm from "./Confirm";

const Modal = ({ showModal, onClose }) => {
  const modalRef = useRef();
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);

  // modal related
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  // form fields
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        onClose();
      }
    },
    [showModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = (event) => {
    if (name && email && message) {
      event.preventDefault();
      nextStep();
      setSubmitted(true);
    }
  };

  const modalContent = showModal && (
    <Background ref={modalRef} onClick={handleCloseClick}>
      <ModalWrapper role="Form Inquiry" aria-labelledby="Form Inquiry">
        <form onSubmit={handleSubmit}>
          <Title>Get in Touch</Title>
          <ErrorBoundary>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
            />
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Project Description"
              minLength="2"
              maxLength="200"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email*"
              required
            />
            <label className="custom-file-upload">
              <input type="file" />
              Add files if needed
            </label>
            <CheckboxWrapper>
              <input
                type="checkbox"
                name="GDPR Agreement"
                value="GDPR Agreement"
                onChange={() => setChecked(!checked)}
              />
              {checked ? <Text>GDPR Agreement</Text> : <Text>GDPR Agreement</Text>}
            </CheckboxWrapper>
            <Info>
              Please note that this form is strictly for project inquiries only. To apply for a job,
              please visit our{" "}
              <Link
                href="https://allcorrectgames.com/for-freelancers/"
                target="_blank"
                noopener="true">
                <a>career page.</a>
              </Link>
            </Info>
            <Button onClick={handleSubmit}>Send the form –></Button>
          </ErrorBoundary>
        </form>
      </ModalWrapper>
    </Background>
  );

  if (step === 1 && submitted) {
    return <Confirm onClose={handleCloseClick} />;
  }

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

export default Modal;
