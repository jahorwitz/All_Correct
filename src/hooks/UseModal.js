import { useCallback, useState } from "react";

const UseModal = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);

  return { showModal, toggleModal };
};

export default UseModal;
