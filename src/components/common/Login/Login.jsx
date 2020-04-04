import React, { useState } from "react";
import { Button } from "./LoginStyles";
import Modal from "../Modal/Modal";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Button>
        <a onClick={handleModalOpen}>Login</a>
      </Button>
      <Modal isOpen={modalOpen} onClose={handleModalClose} />
    </>
  );
};
console.log("put login button in navbar with modal hook")
export default Login;
