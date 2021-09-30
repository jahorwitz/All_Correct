import { useEffect, useRef, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { Background } from "./Modal.styles";
import Confirm from "./Confirm";
import { ModalInfo } from "./ModalInfo";

const Modal = ({ showModal, onClose, title }) => {
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

  const handleSubmit = () => {
    if (name && email && message) {
      nextStep();
    }
  };

  const modalContent = showModal && (
    <Background ref={modalRef} onClick={handleCloseClick}>
      <ModalInfo>{children}</ModalInfo>
    </Background>
  );

  switch (step) {
    case 1:
      return (
        <ModalInfo
          nextStep={nextStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={formFields}
          children={children}
        />
      );
    case 2:
      return <Confirm />;
  }

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

export default Modal;
