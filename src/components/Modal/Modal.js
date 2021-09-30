import { useEffect, useRef, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Confirm from "./Confirm";
import ModalInfo from "./ModalInfo";
import { Background, ModalWrapper } from "./Modal.styles";

const Modal = ({ showModal, onClose }) => {
  const modalRef = useRef();
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
    <Background onClick={handleCloseClick} ref={modalRef}>
      <ModalWrapper role="Form Inquiry" aria-labelledby="Form Inquiry">
        <form onSubmit={handleSubmit}>
          {step === 1 && submitted ? (
            <Confirm onClose={handleCloseClick} />
          ) : (
            <ModalInfo
              onClose={handleCloseClick}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formFields={formFields}
              submitted={submitted}
            />
          )}
        </form>
      </ModalWrapper>
    </Background>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

export default Modal;
