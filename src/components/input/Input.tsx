import React from "react";
import styles from "./styles.module.css";

interface Props {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  value?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ type, placeholder, id, name, value, onChange }: Props) => {
  return (
    <input
      value={value}
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
