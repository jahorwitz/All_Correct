import { useCallback, useState } from "react";

const UseModal = () => {
  const [showModal, setShowModal] = useState(false);

  // const openModal = useCallback(() => setShowModal(true), []);
  // const closeModal = useCallback(() => setShowModal(false), []);
  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);

  // return { showModal, openModal, closeModal };
  return { showModal, toggleModal };
};

export default UseModal;
