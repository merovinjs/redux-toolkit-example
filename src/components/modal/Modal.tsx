import React, { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";
import Input from "../input/Input";
import Button from "../button/button";

interface Props {
  btnFunc: () => void;
  btnText: string;
  title: string;
  content: string;
}

const Modal = ({ title, content, btnFunc, btnText }: Props) => {
  const [product, setProduct] = useState({ name: "", price: "", url: "" });
  const dispatch = useDispatch();

  const onChanegeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value, files } = e.target;
    if (name === "url" && files && files[0]) {
      setProduct((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(files[0]),
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  console.log(product);
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>{title}</h1>
        <h2>{content}</h2>
        <button onClick={() => dispatch(modalFunc())}>X</button>
        <Input
          type="text"
          placeholder="ürün ekle"
          id="name"
          name="name"
          onChange={(e) => onChanegeInput(e, "name")}
        />
        <Input
          type="text"
          placeholder="FiyatSeç"
          id="price"
          name="price"
          onChange={(e) => onChanegeInput(e, "price")}
        />
        <Input
          type="file"
          placeholder="Resim seç"
          id="url"
          name="url"
          onChange={(e) => onChanegeInput(e, "url")}
        />
        <Button onClick={btnFunc} btnText={btnText} />
      </div>
    </div>
  );
};

export default Modal;
