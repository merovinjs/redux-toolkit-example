import { useDispatch, useSelector } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { RootState } from "../redux/store";

const Deneme = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.modal);
  return (
    <div>
      <div onClick={() => dispatch(modalFunc())}>Deneme</div>
      {value && <div>Modal</div>}
    </div>
  );
};

export default Deneme;
