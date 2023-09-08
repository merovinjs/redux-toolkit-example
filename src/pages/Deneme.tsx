import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Deneme = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: any) => state.modal);
  return (
    <div>
      <div onClick={() => dispatch(modalFunc())}>Deneme</div>;
      {value && <div>Modal</div>}
    </div>
  );
};

export default Deneme;
