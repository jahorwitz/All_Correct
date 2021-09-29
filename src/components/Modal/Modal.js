import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import ReactDOM from "react-dom";
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  ModalForm,
} from "./Modal.styles";

const Modal = ({ showModal, onClose, title }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
    to: {
      opacity: showModal ? 1 : 0,
      transform: showModal ? "translate3d(0, 0, 0)" : "translate3d(0, -20px, 0)",
    },
  });
  const [isBrowser, setIsBrowser] = useState(false);

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

  const [checked, setChecked] = useState(false);

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

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (!checked && nameInput === "" && emailInput === "" && messageInput === "") {
  //     alert("Please fill out your information, and try again");
  //   } else {
  //     <>
  //       <p>Thank you!</p>
  //       <p>Your request has been sent to our manager and we will reach back to you soon.</p>
  //       <p>Ok, got it!</p>
  //     </>;
  //   }
  // };

  const modalContent = showModal ? (
    <Background ref={modalRef} onClick={handleCloseClick}>
      <StyledModal>
        <animated.div style={animation}>
          <p>
            <Link href="#" onClick={handleCloseClick}>
              <a>x</a>
            </Link>
          </p>
          {title && <h1>{title}</h1>}
          <ModalForm>
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

            <input
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
            <button type="submit">Send the form –></button>
          </ModalForm>
        </animated.div>
      </StyledModal>
    </Background>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

export default Modal;
