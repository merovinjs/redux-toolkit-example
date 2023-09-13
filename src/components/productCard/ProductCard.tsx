import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import Input from "../input/Input";

import { createDataFunc, updateDataFunc } from "../../redux/dataSlice";
import { modalFunc } from "../../redux/modalSlice";
import DataCard from "../dataCard/DataCard";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button/Button";
const ProductCard = () => {
  const { value } = useSelector((state: any) => state.modal);
  const { data, keyword } = useSelector((state: any) => state.data);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(data);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    url: "",
  });

  const dispatch = useDispatch();
  const btnFunction = () => {
    dispatch(createDataFunc({ ...product, id: data.length + 1 }));
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
  let loc = location.search.split("=")[1];
  useEffect(() => {
    if (loc) {
      setProduct(data.find((data: any) => data.id == loc));
    }
  }, [loc]);

  const btnUpdateFunc = () => {
    dispatch(updateDataFunc({ ...product, id: loc }));
    dispatch(modalFunc());
    navigate("/");
  };

  console.log(loc);
  const contentModel = (
    <>
      <Input
        value={product.name}
        type="text"
        placeholder="ürün ekle"
        id="name"
        name="name"
        onChange={(e) => onChanegeInput(e, "name")}
      />
      <Input
        value={product.price}
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
      <Button
        onClick={loc ? btnUpdateFunc : btnFunction}
        btnText={loc ? "Edit" : "Add"}
      />
    </>
  );
  const filteredItems = data.filter((item: any) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <div className={styles.cards}>
        {filteredItems?.map((data: any, index: number) => (
          <DataCard key={index} data={data} />
        ))}
      </div>
      {value && <Modal title={loc ? "Edit" : "Add"} content={contentModel} />}
    </div>
  );
};

export default ProductCard;
