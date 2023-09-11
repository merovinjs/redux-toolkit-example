import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useState } from "react";
import Modal from "../modal/Modal";
import Input from "../input/Input";
import Button from "../button/button";
import { createDataFunc } from "../../redux/dataSlice";
import { modalFunc } from "../../redux/modalSlice";
import DataCard from "../dataCard/DataCard";
const ProductCard = () => {
  const { value } = useSelector((state: any) => state.modal);
  const { data } = useSelector((state: any) => state.data);
  console.log(data);

  const [product, setProduct] = useState({ name: "", price: "", url: "" });

  const dispatch = useDispatch();
  const btnFunction = () => {
    dispatch(createDataFunc(product));
    dispatch(modalFunc());
  };
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

  const contentModel = (
    <>
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
      <Button onClick={btnFunction} btnText="seflam" />
    </>
  );

  return (
    <div>
      <div className={styles.cards}>
        {data?.map((data: any, index: number) => (
          <DataCard key={index} data={data} />
        ))}
      </div>
      {value && <Modal title="selsdaam" content={contentModel} />}
    </div>
  );
};

export default ProductCard;
