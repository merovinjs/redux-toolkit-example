import React from "react";
import styles from "./styles.module.css";

interface Props {
  btnFunc: () => void;
  btnText: string;
  title: string;
  content: string;
}

const Modal = ({ title, content, btnFunc, btnText }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>{title}</h1>
        <h2>{content}</h2>
      </div>
    </div>
  );
};

export default Modal;
