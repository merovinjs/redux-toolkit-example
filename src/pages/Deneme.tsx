import { useDispatch, useSelector } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import Modal from "../components/modal/Modal";

const Deneme = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: any) => state.modal);
  return (
    <>
      <div onClick={() => dispatch(modalFunc())}>Deneme</div>;
      {value && <Modal title="aaaa" content="aaa" btnText="seflam" />}
    </>
  );
};

export default Deneme;
