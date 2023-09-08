import React from "react";
import styles from "./styles.module.css";

interface Props {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ type, placeholder, id, name, onChange }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={onChange}
      className={styles.container}
    />
  );
};

export default Input;
