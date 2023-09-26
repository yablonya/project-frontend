"use client";

import styles from "@/components/header/Header.module.css"
import {useState} from "react";
import Modal from "react-modal";
import RegistrationForm from "@/components/registration-form/RegistrationForm";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <header className={styles.container}>
      <h1>Header</h1>
      <button className={styles.registerButton} onClick={() => setModalIsOpen(true)}>
        Зареєструватись
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(74, 74, 74, 0.75)",
          },
          content: {
            width: "600px",
            height: "800px",
            margin: "auto",
            border: "none"
          }
        }}>
        <RegistrationForm closeModal={closeModal}/>
      </Modal>
    </header>
  )
}

export default Header;