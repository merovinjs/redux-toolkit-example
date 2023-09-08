import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";
import Input from "../input/Input";

interface Props {
  btnFunc: () => void;
  btnText: string;
  title: string;
  content: string;
}

const Modal = ({ title, content, btnFunc, btnText }: Props) => {
  const disPatch = useDispatch();
  const onChanegeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>{title}</h1>
        <h2>{content}</h2>
        <button onClick={() => disPatch(modalFunc())}>X</button>
        <Input
          type="text"
          placeholder=""
          id="id"
          name="name"
          onChange={onChanegeInput}
        />
        <Input
          type="text"
          placeholder="Placeholder"
          id="id"
          name="name"
          onChange={onChanegeInput}
        />
      </div>
    </div>
  );
};

export default Modal;
