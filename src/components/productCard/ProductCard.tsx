import { useSelector } from "react-redux";
import Modal from "../modal/Modal";
const ProductCard = () => {
  const { value } = useSelector((state: any) => state.modal);

  const btnFunction = () => {};
  return (
    <div>
      {value && (
        <Modal
          title="selsdaam"
          content="selam"
          btnText="seflam"
          btnFunc={btnFunction}
        />
      )}
    </div>
  );
};

export default ProductCard;
