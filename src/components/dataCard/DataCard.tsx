import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { useState } from "react";
import { deleteDataFunc } from "../../redux/dataSlice";
import { modalFunc } from "../../redux/modalSlice";
import { useNavigate } from "react-router-dom";
interface Props {
  data: any;
  keyword?: string;
}
const DataCard = ({ data }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openedit, setOpenedit] = useState(false);
  //console.log({ data });
  console.log(location);
  const updateFunc = () => {
    dispatch(modalFunc());

    setOpenedit(false);
    navigate(`/?update=${data.id}`);
  };

  return (
    <div className={styles.baseContainer}>
      <div className={styles.container}>
        <img className={styles.image} src={data.url} alt="image" />
        <div>{data.price}</div>
        <div onClick={() => setOpenedit(!openedit)} className={styles.edit}>
          X
        </div>
      </div>
      <div>
        {openedit && (
          <div className={styles.editcontainer}>
            <div onClick={updateFunc}>Edit</div>
            <div onClick={() => dispatch(deleteDataFunc(data?.id))}>delete</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataCard;
